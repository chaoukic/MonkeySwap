import React from "react";
import monkeySwapLogo from "../../assets/img/sad2.png";
// eslint-disable-next-line
const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white bg-cover min-w-screen">
      <div className="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0">
        <div className="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">
          <h1 className="relative z-20 text-5xl font-extrabold leading-none text-yellow-300 xl:text-6xl sm:text-center lg:text-left">
            Designed for the investors
            <br className="md:hidden lg:block" />{" "}
            <span className="text-gray-800">from the centralized world</span>
          </h1>
          <p className="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">
            MonkeySwap is designed to give a simplify user experience to most
            investors that are new to the Decentralized Finance. We provide more
            advanced user experience and inducating our users to understand how
            DeFi works.
          </p>
          <div className="relative flex mt-4">
            <a
              href="#_"
              className="flex items-center self-start  justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-yellow-300 border border-transparent rounded-full shadow hover:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:shadow-outline-purple md:py-4 md:text-lg xl:text-xl md:px-10"
            >
              Exchange
            </a>
            <a
              href="#_"
              className="relative flex items-center self-start justify-center py-3 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm  md:pr-10 hover:text-yellow-700 focus:outline-none md:py-4 md:text-lg xl:text-xl"
            >
              <span className="text-yellow-700">How It Works</span>
            </a>
          </div>
        </div>
        <div className="relative w-full px-5 rounded-lg cursor-pointer md:w-2/3 lg:w-1/2 group xl:px-0">
          <div className="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
            <svg
              className="w-full h-full ml-4 text-purple-100"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="relative overflow-hidden rounded-lg  cursor-pointer group">
            <div className="absolute flex items-center justify-center w-full h-full"></div>
            <img
              alt="MonkeySwapLogo"
              src={monkeySwapLogo}
              className="z-10 object-cover w-3/4 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
