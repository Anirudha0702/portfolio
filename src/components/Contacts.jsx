import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Contacts = () => {
  return (
    <div className="flex gap-4 items-center">
        <button className="flex gap-2 bg-yellow-200 items-center py-2 px-4 rounded-xl text-black">
            <MdOutlineEmail size={25}/>            <span>Contact</span>
        </button>
        <a href="#" className="rounded-full bg-gray-800 p-2"><FaXTwitter  className='text-gray-300'size={25}/></a>
        <a href="#" className="rounded-full bg-gray-800 p-2"><FaLinkedin  className='text-gray-300'size={25}/></a>
        <a href="#" className="rounded-full bg-gray-800 p-2"><FaGithub  className='text-gray-300'size={25}/></a>
    </div>
  )
}

export default Contacts