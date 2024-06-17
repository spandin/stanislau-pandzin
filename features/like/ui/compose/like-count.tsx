"use client"

import useSWR from "swr"
import { Spinner } from "@nextui-org/react"
import { motion } from "framer-motion"

import { getAllLikes } from "../../api"

export function LikeCount() {
  const { data: likes, isLoading } = useSWR("likes", getAllLikes)

  return (
    <div className="flex flex-col justify-center items-center gap-2 text-xl font-semibold font-mono z-30">
      {isLoading ? (
        <Spinner color="danger" />
      ) : (
        <motion.div
          key="likes-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {likes} Likes
        </motion.div>
      )}
    </div>
  )
}
