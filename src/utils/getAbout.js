import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
async function getAbout() {
  try {
    const _doc = await getDoc(
      doc(db, "Admins", "anirudhapradhan403@gmail.com")
    );
    if (!_doc.exists()) throw new Error("Cannot find the details");
    return {
      error: null,
      success: true,
      data: _doc.data(),
    };
  } catch (error) {
    return {
      error: error.message,
      success: false,
      data: null,
    };
  }
}
export default getAbout;
