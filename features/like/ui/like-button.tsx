"use client"

import { Button, useDisclosure } from "@nextui-org/react"
import { Heart } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import useSWR from "swr"

import EmailModal from "./email-modal"
import LikeCount from "./like-count"

import {
  arrayRemove,
  arrayUnion,
  db,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "@/shared/config/firebase"
import { useLikeStore } from "@/app/store"

export function LikeButton() {
  const email = useLikeStore((state) => state.email)
  const isLike = useLikeStore((state) => state.isLike)
  const setIsLike = useLikeStore((state) => state.setIsLike)

  const { mutate } = useSWR("likes")
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  const handleLike = async () => {
    if (!email) {
      onOpen()
    }

    const likeDocRef = doc(db, "likes", "likeData")
    const likeDoc = await getDoc(likeDocRef)

    if (likeDoc.exists()) {
      const data = likeDoc.data()
      const userAlreadyLiked = data.emails.some(
        (entry: { email: string }) => entry.email === email,
      )

      if (!userAlreadyLiked && !!email) {
        await updateDoc(likeDocRef, {
          likes: increment(1),
          emails: arrayUnion({ email }),
        })

        setIsLike(true)
        mutate((prev: number) => prev + 1)
      }

      if (userAlreadyLiked) {
        await updateDoc(likeDocRef, {
          likes: increment(-1),
          emails: arrayRemove({ email }),
        })

        setIsLike(false)
        mutate((prev: number) => prev - 1)
      }
    }
  }

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 font-semibold z-30">
      <AnimatePresence mode="wait">
        {isLike ? (
          <motion.div
            key="heart-filled"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -180 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              className="rounded-full"
              isIconOnly
              color="danger"
              aria-label="Like"
              onClick={handleLike}
            >
              <Heart fill={"white"} color="white" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="heart-solid"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              className="rounded-full"
              isIconOnly
              color="danger"
              aria-label="Like"
              onClick={handleLike}
            >
              <Heart fill={"transparent"} color="white" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <LikeCount />

      <EmailModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
