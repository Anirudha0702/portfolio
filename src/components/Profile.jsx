import Developer from "../assets/me.jpeg";
import { MdVerified } from "react-icons/md";
import Contacts from "./Contacts";
import { about } from "../utils/data";
const Profile = () => {
  return (
    <div className="p-5 flex flex-col gap-2 md:gap-10">
      <div className="flex gap-2 flex-col md:flex-row font-name">
        <img
          src={Developer}
          alt=""
          className="h-40 w-40 rounded-full outline outline-2 outline-yellow-300"
        />
        <div className="flex flex-col justify-around">
          <div className="flex gap-1 items-center">
            <h1 className="text-2xl md:text-4xl text-gray-400 font-bold font-name">
              Anirudha Pradhan
            </h1>
            <MdVerified className="text-blue-500" size={30} />
          </div>
          <p className="text-sm md:text-lg">anirudhapradhan403@gmail.com</p>
          <span className="text-sm md:text-lg">
            Brings ideas to life with code! ✨
          </span>
          <p className="text-sm md:text-lg">
            Web Developer | React | Node.js | Firebase | Mongo DB | Express.js
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-between">
        <Contacts />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center grow sm:grow-0 justify-center">
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Resume</span>
        </button>
      </div>
      <p className="font-name">{about.content}</p>
    </div>
  );
};

export default Profile;
