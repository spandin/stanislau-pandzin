import { db, doc, getDoc } from "@/shared/config/firebase"

export const revalidate = 60

export default async function LikeCount() {
  const likeDocRef = doc(db, "likes", "likeData")
  const likeDoc = await getDoc(likeDocRef)
  const count = likeDoc.exists() ? likeDoc.data().likes : 0

  return <span className="text-xl">{count}</span>
}
