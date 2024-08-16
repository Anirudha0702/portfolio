import Contacts from "./Contacts"

const Footer = () => {
  return (
    <footer className="mx-4 mb-2 p-2 sm:mx-8 bg-lime-300 flex flex-col items-center justify-center rounded-3xl h-80 gap-6">
        <h1 className="text-3xl text-gray-900 font-name font-bold">Hire Me</h1>
        <p className="max-w-lg text-gray-900 text-center">Full Stack Developer (MERN) with a passion for building robust web applications. Skilled in MongoDB, Express.js, React, and Node.js. Ready to bring your ideas to life. Let&apos;s create something amazing together.</p>
        <Contacts bg="bg-gray-900" bgHover="bg-gray-900" text="text-gray-300" btnBg="bg-gray-900" btnBgHover="bg-gray-900"/>
    </footer>
  )
}

export default Footer