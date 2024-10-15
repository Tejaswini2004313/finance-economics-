import React from "react";
import { Carousel } from "flowbite-react";
import logo2 from "../assets/logo.png";

const Home = () => {
  const handleQuizClick = () => {
    window.location.href = "https://kahoot.com/";
  };

  return (
    <div className="bg-bgcolor" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-12 md:my-8 py-6 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/3 mx-auto">
              <img
                src={logo2}
                alt=""
                className="w-40 h-40 md:w-64 md:h-64 mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mx-auto">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-whitesmoke leading-snug">
                Welcome to <span className="text-blue">FiSOC</span>
              </h1>
              <p className="text-whitesmoke text-sm md:text-base mb-4">
                Finance and Economics Club
              </p>
            </div>
          </div>

          <div className="my-12 md:my-8 py-6 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/3 mx-auto">
              <img
                src={logo2}
                alt=""
                className="w-40 h-40 md:w-64 md:h-64 mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mx-auto">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-whitesmoke leading-snug">
                <span className="text-blue">Objectives</span>
              </h1>
              <p className="text-whitesmoke text-sm md:text-base mb-4 md:mb-8">
                ● To learn about money as a life skill.
                <br />● To explore career and internship opportunities in the
                field of finance.
                <br />● To understand how decentralized finance is changing the
                financial landscape.
                <br />● To provide a platform for finance enthusiasts to build a
                community.
                <br />● To spread awareness about personal finance and
                budgeting.
              </p>
            </div>
          </div>

          <div className="my-12 md:my-8 py-6 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/3 mx-auto">
              <img
                src={logo2}
                alt=""
                className="w-40 h-40 md:w-64 md:h-64 mx-auto"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left mx-auto">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-whitesmoke leading-snug">
                Ready to test your{" "}
                <span className="text-blue">
                  Finance and Economics knowledge?
                </span>
              </h1>
              <p className="text-whitesmoke text-sm md:text-base mb-4 md:mb-8">
                Finance and Economics Club
              </p>
              <button
                onClick={handleQuizClick}
                className="mt-4 px-6 md:px-8 py-3 bg-[#88e1ff] text-white font-semibold rounded-lg shadow-lg hover:bg-[#25799b] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Take the Quiz
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
