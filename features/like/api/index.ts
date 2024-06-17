import { db, doc, getDoc } from "@/shared/config/firebase"

export const getAllLikes = async () => {
  const likeDocRef = doc(db, "likes", "likeData")
  const likeDoc = await getDoc(likeDocRef)

  const data = likeDoc.exists() ? likeDoc.data().likes : 0

  return data
}
