"use client"

import { Suspense, useEffect, useState } from "react"
import { Button, useDisclosure } from "@nextui-org/react"
import { Heart } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"

import EmailModal from "./email-modal"

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

const LikeCount = dynamic(() => import("./like-count"), { ssr: false })

export function LikeButton() {
  const [count, setCount] = useState(0)
  const email = useLikeStore((state) => state.email)
  const isLike = useLikeStore((state) => state.isLike)
  const setIsLike = useLikeStore((state) => state.setIsLike)

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
        setCount((prev) => prev + 1)
      }

      if (userAlreadyLiked) {
        await updateDoc(likeDocRef, {
          likes: increment(-1),
          emails: arrayRemove({ email }),
        })

        setIsLike(false)
        setCount((prev) => prev - 1)
      }
    }
  }

  useEffect(() => {
    const getLikesCount = async () => {
      const likeDocRef = doc(db, "likes", "likeData")
      const docRef = await getDoc(likeDocRef)

      setCount(docRef?.data()?.likes)
    }

    return () => {
      getLikesCount()
    }
  }, [setCount])

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

      <div className="flex flex-row justify-center items-center gap-2 font-mono">
        <AnimatePresence mode="wait">
          <motion.span
            key="heart-count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl"
          >
            <Suspense fallback={<span>{count}</span>}>
              <LikeCount />
            </Suspense>
          </motion.span>
        </AnimatePresence>

        <span className="text-xl">Likes</span>
      </div>

      <EmailModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
