import { useEffect } from "react";
import { useState } from "react";
import { GoLink } from "react-icons/go";
import getProjects from "../utils/getProjects";
import { FaGithub } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  function showProjectDialog(project) {
    setSelectedProject(project);
    setOpenDialog(true);
  }
  useEffect(() => {
    getProjects().then((response) => {
      if (response.success) {
        setProjects(response.data);
      }
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">Loading</div>
      </div>
    );
  }
  return (
    <>
      <div
        className={`fixed z-10 inset-0 overflow-y-auto ${
          openDialog ? "fixed" : "hidden"
        } `}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div className="absolute bg-white h-10 w-10  right-4 top-4 rounded-full shadow-xl">
            <ImCancelCircle
              onClick={() => setOpenDialog(false)}
              className="h-8 w-8  cursor-pointer  z-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-green-600"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {selectedProject?.title}
                </h3>
                <div className="space-x-2">
                  {selectedProject?.techStack.split(",").map((tech, index) => {
                    console.log(tech);
                    return (
                      <span
                        className="border border-gray-300 rounded-full px-4 text-sm text-gray-700 py-0.5"
                        key={index}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    {selectedProject?.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <a
                  type="button"
                  href={selectedProject?.live}
                  className="inline-flex justify-center items-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  <GoLink className="mr-2" />
                  Live
                </a>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <a
                  type="button"
                  href={selectedProject?.github}
                  className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  <FaGithub className="mr-2" />
                  Github
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" m-2 p-4">
        <div className="mb-2 flex justify-between px-2 items-center">
          <h2 className="text-3xl font-name text-gray-400">Projects</h2>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-2">
          {projects.map((project, index) => {
            return (
              <div
                className={` outline-2 outline-lime-200 outline-offset-2 h-40 relative cursor-pointer border-2 border-lime-200 rounded-lg `}
                key={index}
                onClick={() => showProjectDialog(project)}
              >
                <img
                  src={project?.image}
                  alt={project?.title}
                  className="absolute w-full h-full object-cover rounded-lg"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
