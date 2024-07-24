import { MdVerified } from "react-icons/md";
import Contacts from "./Contacts";
import { useEffect } from "react";
import getAbout from "../utils/getAbout";
import { useState } from "react";
import ProfileLoader from "./Loaders/ProfileLoader";
const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getAbout()
      .then((data) => {
        setLoading(false);
        if (data.success) setUser(data.data);
        else setError(data.error);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);
  if (loading) {
    return <ProfileLoader/>;
  }
  if (error) {
    return <div className="p-5 text-center text-red-500">{error}</div>;
  }
  return (
    <div className="p-5 flex flex-col gap-4 md:gap-10">
      <div className="flex gap-2 flex-col md:flex-row font-name">
        <img
          src={user?.photoURL}
          alt=""
          className="h-40 w-40 rounded-full outline outline-2 outline-lime-200"
        />
        <div className="flex flex-col justify-around">
          <div className="flex gap-1 items-center">
            <h1 className="text-2xl md:text-4xl text-gray-400 font-bold font-name">
              {user?.name}
            </h1>
            <MdVerified className="text-blue-500" size={30} />
          </div>
          <p className="text-sm md:text-lg">{user?.email}</p>
          <span className="text-sm md:text-lg">{user?.bio}</span>
          <p className="text-sm md:text-lg">
            Web Developer | React | Node.js | Firebase | Mongo DB | Express.js
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-between">
        <Contacts />

        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center grow sm:grow-0 justify-center">
          <a href={user?.portfolio} className="flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Resume</span>
          </a>
        </button>
      </div>
      <p className="font-name">{user?.about}</p>
    </div>
  );
};

export default Profile;
