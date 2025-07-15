import { db } from "../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveOrderToFirestore(order) {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...order,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving order:", error);
    throw error;
  }
}
