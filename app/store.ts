import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface LikeState {
  email: string | null
  isLike: boolean
  isLoading: boolean

  setEmail: (email: string) => void
  setIsLike: (isLike: boolean) => void
  setIsLoading: (isLoading: boolean) => void
}

export const useLikeStore = create<LikeState>()(
  devtools(
    persist(
      (set) => ({
        email: null,
        isLike: false,
        isLoading: false,

        setEmail: (email) => set({ email }),
        setIsLike: (isLike) => set({ isLike }),
        setIsLoading: (isLoading) => set({ isLoading }),
      }),
      {
        name: "like-store",
      },
    ),
  ),
)
