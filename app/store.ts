import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface LikeState {
  name: string | null
  isLike: boolean

  setName: (name: string) => void
  setIsLike: (isLike: boolean) => void
}

export const useLikeStore = create<LikeState>()(
  devtools(
    persist(
      (set) => ({
        name: null,
        isLike: false,

        setName: (name) => set({ name }),
        setIsLike: (isLike) => set({ isLike }),
      }),
      {
        name: "like-store",
      },
    ),
  ),
)
