import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
async function getExpriences() {
  try {
    const querySnapshot = await getDocs(
      collection(db, "Admins", "anirudhapradhan403@gmail.com", "expriences")
    );
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push(doc.data());
    });
    return {
      error: null,
      success: true,
      data: projects,
    };
  } catch (error) {
    return {
      error: error.message,
      success: false,
      data: null,
    };
  }
}

export default getExpriences;
