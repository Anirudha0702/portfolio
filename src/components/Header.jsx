import { FaXTwitter } from "react-icons/fa6";
import Divider from "./Divider";
export default function Header (){
  return (
    <header className="h-12  hidden items-center gap-4 sm:flex px-2">
        <Divider className='flex-grow bg-gray-500'/>
        <p className="text-gray-500 text-xs">anirudhapradhan403@gmail.com</p>
        <a href="https://twitter.com/Anirudh68131423"><FaXTwitter className=" text-gray-500"/></a>
    </header>
  )
}
