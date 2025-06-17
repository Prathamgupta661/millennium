import { Link } from "react-router-dom";
import img1 from "../assets/about.webp";
import {
  FaUsers,
  FaRocket,
  FaBrain,
  FaLightbulb,
  FaCheckCircle,
  FaBolt,
  FaCogs,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 mt-32 flex flex-col items-center justify-center gap-4 p-10">
        <p>Accelerate Your AI</p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Where{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              AI Meets Full Stack Development
            </span>
          </span>{" "}
        </h1>
        <p className="text-center text-lg text-white w-full md:w-[40%] ">
          Transforming Industries through cutting - edge AI technology and
          unparalleled expertise in diverse application.
        </p>
        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <div className="relative z-10 flex flex-col gap-4 px-10 md:flex-row md:gap-10 mt-20">
        <div className="flex flex-col justify-center gap-4 md:w-[50%] ">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Shaping the Future with Intelligence, Innovation, and Integrity
          </h2>
          <p className="text-md text-white mt-2 md:w-[80%] leading-relaxed">
            At MILLENNIUMAI we are more than just a technology service provider
            — we are a strategic partner in your digital evolution. Founded in
            2025 and headquartered in Ghaziabad, India, MILLENNIUMAI was
            established with a clear vision: to deliver world-class technology
            and data-driven services that are both cost-effective and
            quality-assured.
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <img src={img1} alt="img" className="rounded-2xl h-[80%] " />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-10 md:flex-row md:gap-10">
        <div className="flex flex-col gap-5 justify-center md:w-[50%]">
          <p>Innovation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Journey through Time and Technology{" "}
          </h2>
        </div>
        <div className="flex w-full flex-col items-start mt-25 mr-15  md:w-[50%]">
          <div className="group flex gap-x-6">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-white"></div>
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-800">
                <svg
                  width="1.5em"
                  height="1.5em"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 17H15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="-translate-y-1.5 pb-8 text-white">
              <p className="font-sans text-base font-bold text-white antialiased dark:text-white">
                Milestone Achievements
              </p>
              <small className="mt-3 font-sans text-sm text-white antialiased">
                Celebeerateing Our journey through time and technology, from our
                inception in 2025 to becoming a leading AI
              </small>
            </div>
          </div>
          <div data-value=":r15:" className="group flex gap-x-6">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200"></div>
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800">
                <svg
                  width="1.5em"
                  height="1.5em"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="-translate-y-1.5 pb-8 text-white">
              <p className="font-sans text-base font-bold text-white antialiased dark:text-white">
                Key Developements
              </p>
              <small className="mt-2 font-sans text-sm text-white antialiased">
                Highlighting pivotal moments in our history, from groundbreaking
                AI innovations to strategic partnerships
              </small>
            </div>
          </div>
          <div data-value=":r16:" className="group flex gap-x-6">
            <div className="relative">
              <div class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-200"></div>
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800">
                <svg
                  width="1.5em"
                  height="1.5em"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="-translate-y-1.5 pb-8 text-white data-[orientation=horizontal]:py-4">
              <p className="font-sans text-base font-bold text-white antialiased dark:text-white">
                Future Vision
              </p>
              <small className="mt-2 font-sans text-sm text-white antialiased">
                Looking forward to the next chapter of AI evolution and our role
                in it.
              </small>
            </div>
          </div>
          <div data-value=":r16:" className="group flex gap-x-6">
            <div className="relative">
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-200 text-slate-800">
                <svg
                  width="1.5em"
                  height="1.5em"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="-translate-y-1.5 pb-8 text-white data-[orientation=horizontal]:py-4">
              <p className="font-sans text-base font-bold text-white antialiased dark:text-white">
                Join Us
              </p>
              <small className="mt-2 font-sans text-sm text-white antialiased">
                Join Us to build a great future with .
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 bg-white text-black rounded-2xl shadow-xl p-10 my-16 mx-auto max-w-6xl">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
            Discover the transformative power of{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              AI
            </span>{" "}
            in various industries and applications.
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col gap-6">
          <p className="text-base md:text-lg mb-2">
            Our innovative solutions leverage cutting-edge technology to enhance
            efficiency and accuracy. Join us in revolutionizing the way
            businesses operate with AI.
          </p>
          <div className="flex gap-10">
            <div>
              <div className="text-4xl font-bold text-cyan-600">75%</div>
              <div className="text-xs mt-1 text-gray-700">
                Increase productivity with our advanced AI solutions.
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500">50%</div>
              <div className="text-xs mt-1 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
