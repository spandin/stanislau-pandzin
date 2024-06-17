"use client"

import useSWR from "swr"
import { useRef } from "react"
import { Button, useDisclosure } from "@nextui-org/react"
import { Heart } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import confetti from "canvas-confetti"

import { LikeCount } from "./compose/like-count"
import { UserModal } from "./compose/user-modal"

import {
  arrayRemove,
  arrayUnion,
  db,
  doc,
  getDoc,
  increment,
  updateDoc,
} from "@/shared/config/firebase"
import { useStore } from "@/app/store"

export function LikeButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const name = useStore((state) => state.name)
  const isLike = useStore((state) => state.isLike)
  const setIsLike = useStore((state) => state.setIsLike)

  const { mutate } = useSWR("likes")
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

  const handleConfetti = () => {
    if (buttonRef.current) {
      const { left, top, width, height } =
        buttonRef.current.getBoundingClientRect()
      const x = left + width / 2
      const y = top + height / 2

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
      })
    }
  }

  const handleLike = async () => {
    if (name === "Guest") {
      onOpen()
    }

    const likeDocRef = doc(db, "likes", "likeData")
    const likeDoc = await getDoc(likeDocRef)

    if (likeDoc.exists()) {
      const data = likeDoc.data()
      const userAlreadyLiked = data.users.some(
        (entry: { name: string }) => entry.name === name,
      )

      if (!userAlreadyLiked && !!name && name !== "Guest") {
        await updateDoc(likeDocRef, {
          likes: increment(1),
          users: arrayUnion({ name }),
        })

        setIsLike(true)
        mutate((prev: number) => prev + 1)
        handleConfetti()
      }

      if (userAlreadyLiked) {
        await updateDoc(likeDocRef, {
          likes: increment(-1),
          users: arrayRemove({ name }),
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
            key="likes-filled"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              className="rounded-full "
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
            key="likes-solid"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -180 }}
            transition={{ duration: 0.4 }}
          >
            <Button
              ref={buttonRef}
              className="rounded-full"
              isIconOnly
              disableRipple
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

      <UserModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
