import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
async function getProjects() {
  try {
    const querySnapshot = await getDocs(collection(db, "Admins","anirudhapradhan403@gmail.com","projects"));
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

export default getProjects;