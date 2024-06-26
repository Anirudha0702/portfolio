import PropTypes from 'prop-types'
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Contacts = ({bg="bg-lime-200",bgHover="bg-lime-300",text="text-black",btnBg="bg-gray-800",btnBgHover="bg-gray-900"}) => {
  return (
    <div className="flex gap-4 items-center">
      <a href="mailto:anirudhapradhan403@gmail.com" >
        <button className={`flex gap-2 ${bg} items-center py-2 px-4 rounded-xl ${text} hover:${bgHover}`}>
          <MdOutlineEmail size={25} /> <span>Contact</span>
        </button>
      </a>
      <a href="https://twitter.com/Anirudh68131423" className={`rounded-full ${btnBg} p-2 hover:${btnBgHover}`}>
        <FaXTwitter className="text-gray-300" size={25} />
      </a>
      <a href="https://www.linkedin.com/in/anirudha-pradhan-346388240/" className={`rounded-full ${btnBg} p-2 hover:${btnBgHover}`}>
        <FaLinkedin className="text-gray-300" size={25} />
      </a>
      <a href="https://github.com/Anirudha0702" className={`rounded-full ${btnBg} p-2 hover:${btnBgHover}`}>
        <FaGithub className="text-gray-300" size={25} />
      </a>
    </div>
  );
};

Contacts.propTypes = {
  bg: PropTypes.string,
  bgHover: PropTypes.string,
  text: PropTypes.string,
  btnBg: PropTypes.string,
  btnBgHover: PropTypes.string
}
export default Contacts;
