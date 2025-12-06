import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import EducationLoader from "./Loaders/EducationLoader";
import getExpriences from "../utils/getExprience";
const Exprience = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getExpriences().then((response) => {
      if (response.success) {
        setEducations(response.data);
      }
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <EducationLoader />;
  }
  return (
    <div className=" m-2 p-4">
      <div className="mb-2 flex justify-between px-2 items-center">
        <h2 className="text-3xl font-name text-gray-400">Exprience</h2>
      </div>
      <div className="bg-transparent">
        {educations.map((exprience, index) => {
          return (
            <div
              key={index}
              className="border border-gray-500 mb-2 shadow-lg rounded-lg flex  h-fit items-start gap-2 p-2 bg-gray-500 bg-opacity-20"
            >
              <div className="h-40 w-36  flex items-start justify-center p-2 pt-4">
                <MdWork size={60} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-serif font-semibold">
                  {exprience?.title}
                </h3>
                <span className="border border-gray-700 w-fit p-1 rounded-2xl px-2">
                  {exprience?.date}
                </span>
                <p>{exprience?.content}</p>

                <ul className="list-disc list-inside mt-1 space-y-1 max-h-32 overflow-y-auto pr-2">
                  {exprience?.points?.map((point, i) => (
                    <li key={i}>
                      <span className="font-semibold">{point.title}: </span>
                      <span>{point.info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exprience;
