import img1 from "../assets/home_img_1.webp";
import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";

import { Link } from "react-router-dom";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import {
  FaBolt,
  FaCheckCircle,
  FaCogs,
  FaHandshake,
  FaUserShield,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaHeartbeat,
  FaShoppingCart,
  FaUniversity,
  FaTruck,
  FaCar,
  FaFilm,
  FaGraduationCap,
  FaSatelliteDish,
  FaRocket,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import ServiceCard from "../components/ServiceCard";

// Modern geometric & organic SVG props for hero background
const HeroProps = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
    {/* Soft blue circle */}
    <svg
      className="absolute left-[-60px] top-[-60px] w-72 h-72 opacity-30 blur-2xl animate-float"
      viewBox="0 0 288 288"
      fill="none"
    >
      <circle cx="144" cy="144" r="144" fill="#00eaff" fillOpacity="0.8" />
    </svg>
    {/* Pink organic blob */}
    <svg
      className="absolute right-[-80px] top-[100px] w-80 h-80 opacity-25 blur-xl animate-float-reverse"
      viewBox="0 0 320 320"
      fill="none"
    >
      <path
        d="M160 0C220 20 320 60 300 160C280 260 180 320 100 300C20 280 0 180 40 100C80 20 100 -20 160 0Z"
        fill="#ff5ecf"
        fillOpacity="0.8"
      />
    </svg>
    {/* Abstract polygon */}
    <svg
      className="absolute left-1/2 top-[50%] -translate-x-1/2 w-100 h-50 opacity-30 animate-spin-slow"
      viewBox="0 0 256 128"
      fill="none"
    >
      <polygon
        points="128,10 250,120 30,100 220,40 40,30"
        fill="#696969"
        fillOpacity="0.25"
      />
    </svg>
    {/* Dotted grid */}
    <svg
      className="absolute right-8 bottom-8 w-32 h-32 opacity-20 animate-float"
      viewBox="0 0 100 100"
      fill="none"
    >
      <g>
        {Array.from({ length: 100 }).map((_, i) => (
          <circle
            key={i}
            cx={10 * (i % 10)}
            cy={10 * Math.floor(i / 10)}
            r="1.5"
            fill="#060606"
          />
        ))}
      </g>
    </svg>
  </div>
);

const Home = () => {
  const [animate, setAnimate] = useState(false);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contactno: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_first_name: form.first_name,
          from_last_name: form.last_name,
          from_contactno: form.contactno,
          to_name: "Pratham Gupta",
          from_email: form.email,
          to_email: "guptapratham661@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            first_name: "",
            last_name: "",
            email: "",
            contactno: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className="w-full overflow-hidden flex flex-col mt-20 relative font-playfair bg-white">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center min-h-[70vh] ">
        <HeroProps />
        <div
          className={`relative z-10 flex flex-col items-center text-black justify-center mt-24 px-4 transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-center w-full max-w-4xl mx-auto text-4xl sm:text-7xl font-bold font-playfair leading-tight drop-shadow-lg">
            Accelerate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              AI
            </span>{" "}
            with
            <TypeAnimation
              sequence={[
                " Precision Annotation",
                2000,
                " Precision Full-Stack Development",
                3000,
                " Precision AI Solutions",
                4000,
                " Precision Smart Tech",
                5000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-6 text-center text-slate-500 text-lg sm:text-2xl max-w-2xl drop-shadow font-playfair">
            Image, Video & Geospatial Annotation Services powered by experts and
            smart tech.
          </p>
          <Link to="/contact" className="mt-8">
            <button className="cursor-pointer px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 font-playfair rounded-lg text-white text-lg font-semibold shadow-lg hover:scale-105 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Themed Services Section */}
      <div className="mt-12 mx-auto w-[95%] max-w-7xl relative group">
        {/* Decorative blurred gradient blobs */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl z-0" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl z-0" />

        <section className="relative flex flex-col md:flex-row items-center shadow-2xl rounded-2xl overflow-hidden bg-white/95 backdrop-blur-lg border border-gray-100">
          {/* Visual/Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-pink-50 py-12 px-6 md:px-0">
            <div className="rounded-2xl bg-white/80 shadow-lg p-4 md:p-8 flex items-center justify-center">
              <img
                src={img1}
                alt="MillenniumAi Services"
                className="w-72 h-72 sm:w-96 sm:h-96 object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-gray-800">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text drop-shadow">
              Empowering Innovation with AI & Full-Stack Development
            </h2>
            <ul className="mb-6 text-slate-600 text-base sm:text-lg space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>
                  <span className="font-semibold text-cyan-600">
                    AI-Powered Data Annotation:
                  </span>
                  &nbsp;Expert labeling for images, video, geospatial, and text
                  data.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-pink-400"></span>
                <span>
                  <span className="font-semibold text-pink-600">
                    Full-Stack Development:
                  </span>
                  &nbsp;Modern web, mobile, and gaming apps built for
                  performance and scale.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-purple-400"></span>
                <span>
                  <span className="font-semibold text-purple-600">
                    End-to-End Solutions:
                  </span>
                  &nbsp;From ideation to deployment, we handle every step with
                  precision.
                </span>
              </li>
            </ul>
            <p className="mb-6 text-slate-600 text-base sm:text-lg">
              Our dual strength in artificial intelligence and software
              development enables us to deliver smart, scalable, and secure
              solutions. With a proven track record across industries, we are
              the preferred partner for organizations looking to accelerate
              digital transformation with speed and precision.
            </p>
            <Link to="/services" className="w-fit">
              <button className="px-7 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2">
                Explore Our Services
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section className="my-20 flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-playfair mb-12 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          Our Services
        </h2>

        <div className="w-[95%] max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Web Development Card */}
          <div className="group [perspective:1000px]">
            <div className="relative h-full min-h-[370px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 bg-white/90 border border-gray-200 rounded-xl p-6 shadow-2xl transition-transform duration-700 [backface-visibility:hidden]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                      Web Development
                    </h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    We craft stunning, responsive websites that deliver
                    measurable results. Our custom platforms are:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>Scalable Architecture</span>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      <span>Performance Optimized</span>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>Security Enhanced</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Back Side: App Development */}
              <div className="absolute inset-0 bg-cyan-50 border border-cyan-200 rounded-xl p-6 shadow-2xl flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                  App Development
                </h3>
                <p className="text-gray-700 mb-4">
                  We build robust, scalable, and user-friendly mobile and web
                  apps tailored to your business needs.
                </p>
                <ul className="text-cyan-700 text-left list-disc list-inside">
                  <li>iOS & Android Apps</li>
                  <li>Cross-Platform Solutions</li>
                  <li>API & Cloud Integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Gaming App Development Card */}
          <div className="group [perspective:1000px]">
            <div className="relative h-full min-h-[370px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 bg-white/90 border border-gray-200 rounded-xl p-6 shadow-2xl transition-transform duration-700 [backface-visibility:hidden]">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                      Game App Development
                    </h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    Native and cross-platform mobile applications that provide
                    exceptional user experiences. Features include:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      <span>2d 3d Game Designs</span>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Offline Capability</span>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      <span>Push Notifications</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Back Side: Digital Marketing */}
              <div className="absolute inset-0 bg-pink-50 border border-pink-200 rounded-xl p-6 shadow-2xl flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                  Digital Marketing
                </h3>
                <p className="text-gray-700 mb-4">
                  Our digital marketing team crafts data-driven strategies to
                  boost your online presence, generate leads, and increase
                  conversions. From SEO to paid ads, we cover it all.
                </p>
                <ul className="text-pink-700 text-left list-disc list-inside">
                  <li>SEO & Content Marketing</li>
                  <li>Social Media Management</li>
                  <li>PPC & Paid Campaigns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Solutions Card */}
          <div className="group [perspective:1000px]">
            <div className="relative h-full min-h-[370px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 bg-white/90 border border-gray-200 rounded-xl p-6 shadow-2xl transition-transform duration-700 [backface-visibility:hidden]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      AI Solutions
                    </h3>
                  </div>
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors font-playfair">
                    Cutting-edge AI services that power next-generation
                    applications. Our offerings include:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>Data Annotation</span>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Model Training</span>
                    </li>
                    <li className="flex cursor-pointer items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>AI Integration</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 bg-cyan-50 border border-purple-200 rounded-xl p-6 shadow-2xl flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h4 className="text-2xl font-bold text-purple-400 mb-2">
                  AI Expertise
                </h4>
                <ul className="text-purple-700 my-2 text-left list-disc list-inside">
                  <li>NLP</li>
                  <li>Data Processing</li>
                  <li>Generative AI</li>
                  <li>Content Moderation</li>
                  <li>Document Processing</li>
                  <li>Automatic Speech Recognition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MillenniumAi Section */}
      <section className="my-20 mx-auto w-[95%] max-w-7xl">
        <div className="relative rounded-2xl bg-gradient-to-br from-white via-cyan-50 to-pink-50 border border-cyan-100 shadow-2xl p-10 md:p-16 overflow-hidden group transition-all duration-500 hover:scale-[1.015] hover:shadow-cyan-500/20">
          {/* Decorative blurred gradient blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl z-0" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl z-0" />
          <h2 className="text-center text-3xl sm:text-4xl font-bold font-playfair mb-12 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text relative z-10 drop-shadow">
            Why Choose <span className="text-cyan-500">MillenniumAi?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white/90 border border-cyan-100 rounded-xl p-6 shadow-lg hover:shadow-cyan-200/60 transition group">
              <FaCheckCircle className="text-4xl text-cyan-500 mb-3 drop-shadow" />
              <h4 className="font-bold text-lg mb-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                Unmatched Quality
              </h4>
              <p className="text-gray-600 text-center mb-2">
                Rigorous multi-level quality checks and experienced QA teams
                ensure 99–100% data accuracy and bug-free software deployments.
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-cyan-50 text-cyan-600 font-semibold">
                99–100% Accuracy
              </span>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center bg-white/90 border border-pink-100 rounded-xl p-6 shadow-lg hover:shadow-pink-200/60 transition group">
              <FaBolt className="text-4xl text-pink-500 mb-3 drop-shadow" />
              <h4 className="font-bold text-lg mb-2 bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text">
                Fast Turnaround
              </h4>
              <p className="text-gray-600 text-center mb-2">
                Rapid delivery for large data projects or full-stack apps, with
                the ability to scale our team within 24–48 hours.
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-600 font-semibold">
                24–48h Scaling
              </span>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center bg-white/90 border border-cyan-100 rounded-xl p-6 shadow-lg hover:shadow-cyan-200/60 transition group">
              <FaCogs className="text-4xl text-cyan-500 mb-3 drop-shadow" />
              <h4 className="font-bold text-lg mb-2 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                Complete Customization
              </h4>
              <p className="text-gray-600 text-center mb-2">
                Every solution is tailored to your vision, industry standards,
                and future goals—no two businesses are the same.
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-cyan-50 text-cyan-600 font-semibold">
                Tailored Solutions
              </span>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center bg-white/90 border border-pink-100 rounded-xl p-6 shadow-lg hover:shadow-pink-200/60 transition group">
              <FaHandshake className="text-4xl text-pink-500 mb-3 drop-shadow" />
              <h4 className="font-bold text-lg mb-2 bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text">
                Client-Centric & Cost-Effective
              </h4>
              <p className="text-gray-600 text-center mb-2">
                Ongoing support, process optimization, and some of the lowest
                project costs globally—without sacrificing quality.
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-600 font-semibold">
                Best Value
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About MillenniumAi */}
      <section className="w-[95%] max-w-8xl mx-auto my-20">
        <div className="group relative bg-white/90 border border-gray-200 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-pink-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-center bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mt-4 mb-6 drop-shadow py-3">
              Shaping the Future with Intelligence, Innovation, and Integrity
            </h2>
            <p className="text-lg mt-15 text-gray-700 text-center max-w-3xl mx-auto font-playfair">
              At <span className="font-bold text-cyan-700">MILLENNIUMAI</span>,
              we are more than just a technology service provider — we are a
              strategic partner in your digital evolution. Founded in 2025 and
              headquartered in Ghaziabad, India, MILLENNIUMAI was established
              with a clear vision: to deliver world-class technology and
              data-driven services that are both cost-effective and
              quality-assured.
            </p>

            <p className="text-lg mt-15 mb-10 text-gray-700 text-center max-w-3xl mx-auto font-playfair">
              In an era defined by artificial intelligence, automation, and
              rapid digital transformation, our goal is simple — to help
              businesses harness the power of data and software innovation to
              achieve operational excellence, scale faster, and grow smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are & Expertise */}
      <section className="w-[95%] max-w-8xl mx-auto my-20">
        <div className="relative group flex flex-col md:flex-row gap-10 rounded-2xl shadow-2xl border border-cyan-100 bg-white/90 backdrop-blur-lg p-8 md:p-16 overflow-hidden transition-all duration-500 hover:scale-[1.015] hover:shadow-cyan-500/20">
          {/* Glow border on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/40 group-hover:shadow-[0_0_40px_10px_rgba(34,211,238,0.15)] transition-all duration-500"></div>
          {/* Left: Who We Are */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-2 drop-shadow">
              Who We Are
            </h3>
            <p className="text-gray-700">
              We are a dynamic team of 50–80 professionals — a unique blend of
              developers, data scientists, project managers, and domain experts.
              Each team member is committed to excellence, working
              collaboratively to deliver custom solutions for businesses ranging
              from early-stage startups to large enterprises.
            </p>
            <p className="text-gray-700">
              From data annotation for AI/ML models to enterprise-grade web and
              app development, we offer end-to-end digital solutions designed to
              fit seamlessly into our clients’ workflows and goals.
            </p>
            <div>
              <h4 className="font-semibold mb-2 text-cyan-400">
                Our deep domain expertise covers:
              </h4>
              <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-1">
                <li className="transition-colors duration-300 hover:text-cyan-400">
                  Natural Language Processing
                </li>
                <li className="transition-colors duration-300 hover:text-pink-400">
                  Computer Vision
                </li>
                <li className="transition-colors duration-300 hover:text-cyan-400">
                  Medical Data Annotation
                </li>
                <li className="transition-colors duration-300 hover:text-pink-400">
                  E-commerce Product Tagging
                </li>
                <li className="transition-colors duration-300 hover:text-cyan-400">
                  Geospatial and 3D Annotation
                </li>
                <li className="transition-colors duration-300 hover:text-pink-400">
                  Mobile & Web App Development
                </li>
                <li className="transition-colors duration-300 hover:text-cyan-400">
                  Game and Software Development
                </li>
                <li className="transition-colors duration-300 hover:text-pink-400">
                  Custom APIs & SaaS Products
                </li>
              </ul>
            </div>
            <p className="text-slate-500 mt-4 italic">
              Every project we undertake is approached with precision, agility,
              and a relentless commitment to delivering on time — without
              compromising on quality.
            </p>
          </div>

          {/* Right: What Sets Us Apart */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-2 drop-shadow">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex cursor-pointer items-start gap-2 hover:text-cyan-400 transition-colors duration-300">
                <span>✅</span>
                <span>
                  <span className="font-semibold">
                    Unmatched Quality Control:
                  </span>{" "}
                  With rigorous multi-level quality checks and experienced QA
                  teams, we guarantee 99–100% data accuracy and bug-free
                  software deployments.
                </span>
              </li>
              <li className="flex cursor-pointer items-start gap-2 hover:text-pink-400 transition-colors duration-300">
                <span>✅</span>
                <span>
                  <span className="font-semibold">
                    Cost-Effective Delivery:
                  </span>{" "}
                  We proudly offer some of the lowest project costs globally
                  without sacrificing quality or timelines — making us the ideal
                  partner for scale-ups and enterprise needs.
                </span>
              </li>
              <li className="flex cursor-pointer items-start gap-2 hover:text-cyan-400 transition-colors duration-300">
                <span>✅</span>
                <span>
                  <span className="font-semibold">Fast Turnaround Time:</span>{" "}
                  Whether it’s a large-volume data labeling project or a
                  full-fledged mobile application, we deliver fast — with the
                  capability to scale our team within 24–48 hours.
                </span>
              </li>
              <li className="flex cursor-pointer items-start gap-2 hover:text-pink-400 transition-colors duration-300">
                <span>✅</span>
                <span>
                  <span className="font-semibold">Complete Customization:</span>{" "}
                  No two businesses are the same. We tailor our services to
                  align perfectly with your vision, industry standards, and
                  future goals.
                </span>
              </li>
              <li className="flex cursor-pointer items-start gap-2 hover:text-cyan-400 transition-colors duration-300">
                <span>✅</span>
                <span>
                  <span className="font-semibold">
                    Client-Centric Approach:
                  </span>{" "}
                  We believe in building long-term relationships. Our support
                  doesn’t end with delivery — we provide ongoing guidance,
                  technical support, and process optimization.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="w-[95%] max-w-8xl mx-auto my-16">
        <div className="relative rounded-2xl shadow-2xl border border-pink-100 bg-white/90 backdrop-blur-lg p-8 md:p-16 overflow-hidden group transition-all duration-500 hover:scale-[1.015] hover:shadow-pink-500/20">
          <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-400/40 group-hover:shadow-[0_0_40px_10px_rgba(236,72,153,0.15)] transition-all duration-500"></div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-16 text-center drop-shadow">
            Industries We Serve
          </h3>
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700 font-medium text-lg justify-items-center">
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-cyan-400 hover:scale-105">
              <FaHeartbeat className="text-3xl mb-1" />
              Healthcare & Life Sciences
            </li>
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-pink-400 hover:scale-105">
              <FaShoppingCart className="text-3xl mb-1" />
              Retail & E-Commerce
            </li>
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-cyan-400 hover:scale-105">
              <FaUniversity className="text-3xl mb-1" />
              Finance & Banking
            </li>
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-pink-400 hover:scale-105">
              <FaTruck className="text-3xl mb-1" />
              Logistics & Transportation
            </li>
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-cyan-400 hover:scale-105">
              <FaCar className="text-3xl mb-1" />
              Automotive AI
            </li>
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-pink-400 hover:scale-105">
              <FaFilm className="text-3xl mb-1" />
              Media & Entertainment
            </li>
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-cyan-400 hover:scale-105">
              <FaGraduationCap className="text-3xl mb-1" />
              EdTech & eLearning
            </li>
            <li className="flex cursor-pointer flex-col items-center gap-2 transition-colors duration-300 hover:text-pink-400 hover:scale-105">
              <FaSatelliteDish className="text-3xl mb-1" />
              Agriculture & Satellite Imaging
            </li>
          </ul>
          <p className="text-slate-400 mt-8 text-center italic">
            Our versatile experience allows us to adapt quickly to new
            industries and deliver relevant, impactful solutions.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-[95%] max-w-5xl mx-auto my-12">
        <div className=" group relative bg-gradient-to-br from-cyan-50 via-white to-pink-50 border border-cyan-100 rounded-xl p-6 hover:shadow-2xl transition-all duration-300">
          <div className="relative z-10 text-center flex flex-col items-center gap-5">
            <HiSparkles className="text-5xl text-cyan-400 mb-2 animate-bounce text-center " />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text mb-2 text-center">
              Let’s Build the Future Together
            </h3>
            <p className="text-gray-700 max-w-2xl text-center mb-2 text-lg">
              At <span className="font-bold text-cyan-700">MILLENNIUMAI</span>,
              we don’t just deliver projects — we create value, build
              partnerships, and drive transformation. Whether you’re building an
              AI product that requires precise annotated datasets or need a
              robust digital solution to elevate your business — we are here to
              support you every step of the way.
            </p>
            <p className="text-gray-700 max-w-2xl text-center text-lg">
              <span className="font-semibold">
                Partner with us to unlock your next stage of growth.
              </span>
            </p>
            <Link to="/contact">
              <button className="mt-4 px-8 py-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2 mb-5">
                <FaRocket className="text-xl" />
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-16 mx-auto w-[95%] max-w-8xl">
        <h2 className="text-center text-3xl sm:text-4xl font-bold font-playfair mb-12 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
          Get In Touch
        </h2>

        <div className="group relative flex flex-col md:flex-row gap-10 bg-white/90 border border-gray-200 w-full rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col gap-6 w-full md:w-1/2 relative z-10">
            <div className="w-full h-[20rem] rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8384334011416!2d77.47539417520481!3d28.69447928126543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf22d73537953%3A0xd71a5a10c873f830!2sBalaji%20Enclave%20%2CGovind%20Puram%20Ghaziabad-201013!5e0!3m2!1sen!2sin!4v1749466936086!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Google Map Location"
              />
            </div>

            <div className="group relative bg-white/90 rounded-xl p-8 border border-gray-200">
              <div className="relative z-10">
                <h3 className="font-playfair text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                  Contact Information
                </h3>
                <p className="text-gray-500 mb-8">Let's Get Connected</p>

                <div className="space-y-6">
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-4 text-gray-700 group/item hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center shadow-lg group-hover/item:from-cyan-500/30 group-hover/item:to-pink-500/30 transition-all">
                      <HiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+91 931 941 0265</p>
                      <p className="font-medium">+91 705 317 1752</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@millenniumai.in"
                    className="flex items-center gap-4 text-gray-700 group/item hover:text-pink-400 transition-colors"
                  >
                    <div className="w-12 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center shadow-lg group-hover/item:from-pink-500/30 group-hover/item:to-purple-500/30 transition-all">
                      <HiMail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col w-full">
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium break-all">
                        info@millenniumai.in
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-gray-700 group/item hover:text-purple-400 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center shadow-lg group-hover/item:from-purple-500/30 group-hover/item:to-cyan-500/30 transition-all">
                      <HiLocationMarker className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="font-medium">
                        UGF-02 Krishna Enclave Govindpuram,
                      </p>
                      <p className="font-medium">Ghaziabad, UP 201002</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 bg-transparent rounded-xl relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Contact Us
            </h2>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-400 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />

              <input
                type="text"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleChange}
                name="last_name"
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-400 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                name="email"
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-400 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                value={form.contactno}
                onChange={handleChange}
                name="contactno"
                required
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-400 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
              />

              <textarea
                placeholder="Message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                name="message"
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-400 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                className="px-8 py-3 text-white bg-gradient-to-r from-cyan-400 to-pink-400 cursor-pointer rounded-full font-semibold hover:bg-cyan-500/90 hover:to-pink-500/90 transition-colors shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
