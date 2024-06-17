"use client"

import useSWR from "swr"
import { Spinner } from "@nextui-org/react"

import { getAllLikes } from "../api"

export default function LikeCount() {
  const { data: likes, isLoading } = useSWR("likes", getAllLikes)

  return (
    <div className="flex flex-col justify-center items-center gap-2 text-xl font-semibold font-mono z-30">
      {isLoading ? <Spinner color="danger" /> : <span>{likes} Likes</span>}
    </div>
  )
}
