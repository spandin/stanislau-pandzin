import { initializeApp } from "firebase/app"
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  increment,
  getDoc,
  initializeFirestore,
  persistentLocalCache,
} from "firebase/firestore"

const firebaseConfig: { [key: string]: string } = {
  apiKey: "AIzaSyDnYLcd-dAFa9WMF6uNW_S1cn1OAsIlQQk",
  authDomain: "stanislau-pandzin.firebaseapp.com",
  projectId: "stanislau-pandzin",
  storageBucket: "stanislau-pandzin.appspot.com",
  messagingSenderId: "526822200071",
  appId: "1:526822200071:web:ab6f961d171b99532b2ba2",
}

const app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({}),
})

export { db, doc, updateDoc, arrayUnion, arrayRemove, increment, getDoc }
