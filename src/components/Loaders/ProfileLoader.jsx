const ProfileLoader = () => {
  return (
    <div className="p-5 flex flex-col gap-4 md:gap-10 animate-pulse">
      <div className="flex gap-2 flex-col md:flex-row font-name ">
        <div className="h-40 w-40 rounded-full outline bg-gray-800"></div>
        <div className="flex flex-col justify-around gap-2">
          <div className="flex gap-1 items-center">
            <h1 className="text-2xl md:text-4xl text-gray-400 font-bold font-name w-60 h-4 rounded-md bg-gray-900"></h1>
          </div>
          <p className="text-sm md:text-lg w-40 h-4 rounded-md  bg-gray-800"></p>
          <span className="ext-sm md:text-lg w-40 h-4 rounded-md  bg-gray-800"></span>
          <p className="ext-sm md:text-lg w-40 h-4 rounded-md  bg-gray-800"></p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-between">
        <div className="flex gap-4 items-center">
          <button
            className={`flex gap-2  items-center py-2 px-4 rounded-xl   h-8 w-20 bg-gray-800 }`}
          ></button>

          <a
            href="https://twitter.com/Anirudh68131423"
            className={`rounded-full  p-2 w-8 h-8 bg-gray-800`}
          ></a>
          <a
            href="https://www.linkedin.com/in/anirudha-pradhan-346388240/"
            className={`rounded-full w-8 p-2 h-8 bg-gray-800`}
          ></a>
          <a
            href="https://github.com/Anirudha0702"
            className={`rounded-full  p-2 w-8 h-8 bg-gray-800`}
          ></a>
        </div>

        <button className="w-20 h-8 bg-gray-800 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center grow sm:grow-0 justify-center"></button>
      </div>
      <div className="font-name flex flex-col gap-2">
        <div className="h-4 w-full bg-gray-900"></div>
        <div className="h-4 w-full bg-gray-900"></div>
        <div className="h-4 w-full bg-gray-900"></div>
        <div className="h-4 w-full bg-gray-900"></div>
      </div>
    </div>
  );
};

export default ProfileLoader;
