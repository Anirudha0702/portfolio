import { useEffect ,useState} from "react";
import getEducations from "../utils/getEducations";
import {FaUserGraduate} from "react-icons/fa";
import EducationLoader from "./Loaders/EducationLoader";
const Education = () => {
    const [educations, setEducations] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getEducations().then((response) => {
          if (response.success) {
            setEducations(response.data);
          }
          setLoading(false);
        });
      }, []);
      if (loading) {
        return <EducationLoader/>
      }
  return (
    <div className=" m-2 p-4">
        <div className="mb-2 flex justify-between px-2 items-center">
          <h2 className="text-3xl font-name text-gray-400">Education</h2>
        </div>
        <div className="bg-transparent">
         {
            educations.map((education, index) => {
              return (
                <div
                  key={index}
                  className="border border-gray-500 mb-2 shadow-lg rounded-lg flex  h-fit items-start gap-2 p-2 bg-gray-500 bg-opacity-20"
                >
                 <div className="h-40 w-36  flex items-start justify-center p-2 pt-4">
                 <FaUserGraduate   size={60}/>
                 </div>
                 <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-serif font-semibold">{education?.title}</h3>
                    <span className="border border-gray-700 w-fit p-1 rounded-2xl px-2">{education?.date}</span>
                    <p>{education?.content}</p>
                 </div>
                </div>
              );
            })
         }
        </div>
      </div>
  )
}

export default Education