import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section id="contact" className="common-padding bg-black">
      <div className="screen-max-width">
        {/* Title Section */}
        <div className="flex flex-col items-center text-white">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-2xl">We'd love to</span> Get in Touch
          </h2>
        </div>

        {/* Contact Section with Two Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:max-w-5xl mx-auto p-6 bg-black rounded-lg shadow-xl">
          {/* Contact Form Section on the Right */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center">
              <p className="hiw-text g_fadeIn text-lg text-gray-300 mb-6">
                We'd love to hear from you! Please fill out the form below, and
                we'll get back to you as soon as possible.
              </p>

              {/* Contact Form */}
              <form className="w-full max-w-lg mt-6">
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="name"
                    className="text-gray-300 font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input-field py-3 px-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="email"
                    className="text-gray-300 font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input-field py-3 px-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="message"
                    className="text-gray-300 font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="input-field py-3 px-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Write your message"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="submit-button py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
            <div
              title="Get in Touch with Us"
              text="Have a project in mind or need expert guidance? At Code&Click, we’re here to help you navigate your digital journey. Reach out today to discuss how our innovative solutions can transform your ideas into impactful results. Let’s collaborate and make your vision a reality!"
            />
            <div className="flex justify-center mt-[100px] space-x-4 text-sm flex-wrap">
              <a
                href=""
                className="flex items-center space-x-2 px-3 py-2 border border-pink-400 rounded-full bg-transparent transition-all hover:bg-pink-500/10 hover:drop-shadow-[0_0_8px_rgba(255,20,147,0.7)] hover:text-pink-400 mb-4" // Added mb-4 for bottom margin
              >
                <FaInstagram className="text-2xl md:text-3xl drop-shadow-[0_0_4px_rgba(255,20,147,0.6)]" />
                <span className="text-pink-400 text-base md:text-lg">
                  Instagram
                </span>
              </a>

              <a
                href=""
                className="flex items-center space-x-2 px-3 py-2 border border-blue-400 rounded-full bg-transparent transition-all hover:bg-blue-500/10 hover:drop-shadow-[0_0_8px_rgba(59,89,152,0.7)] hover:text-blue-400 mb-4" // Added mb-4 for bottom margin
              >
                <FaFacebookF className="text-2xl md:text-3xl drop-shadow-[0_0_4px_rgba(59,89,152,0.6)]" />
                <span className="text-blue-400 text-base md:text-lg">
                  Facebook
                </span>
              </a>

              <a
                href=""
                className="flex items-center space-x-2 px-3 py-2 border border-green-400 rounded-full bg-transparent transition-all hover:bg-green-500/10 hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.7)] hover:text-green-400 mb-4" // Added mb-4 for bottom margin
              >
                <FaWhatsapp className="text-2xl md:text-3xl drop-shadow-[0_0_4px_rgba(37,211,102,0.6)]" />
                <span className="text-green-400 text-base md:text-lg">
                  WhatsApp
                </span>
              </a>

              <a
                href=""
                className="flex items-center space-x-2 px-3 py-2 border border-blue-500 rounded-full bg-transparent transition-all hover:bg-blue-500/10 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.7)] hover:text-blue-500 mb-4" // Added mb-4 for bottom margin
              >
                <FaLinkedinIn className="text-2xl md:text-3xl drop-shadow-[0_0_4px_rgba(0,119,181,0.6)]" />
                <span className="text-blue-500 text-base md:text-lg">
                  LinkedIn
                </span>
              </a>
            </div>
      </div>
    </section>
  );
};

export default HowItWorks;
