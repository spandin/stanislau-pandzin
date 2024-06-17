import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

interface StoreState {
  name: string
  isLike: boolean

  setName: (name: string) => void
  setIsLike: (isLike: boolean) => void
}

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        name: "Guest",
        isLike: false,

        setName: (name) => set({ name }),
        setIsLike: (isLike) => set({ isLike }),
      }),
      {
        name: "store",
      },
    ),
  ),
)
