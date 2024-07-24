import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
async function getEducations() {
  try {
    const querySnapshot = await getDocs(collection(db, "Admins","anirudhapradhan403@gmail.com","education"));
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

export default getEducations;