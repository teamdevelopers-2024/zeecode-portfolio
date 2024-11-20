import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

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
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab w-[50px] h-[50px] fa-linkedin text-white text-3xl hover:text-indigo-500 transition" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-white text-3xl hover:text-indigo-500 transition" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook text-white text-3xl hover:text-indigo-500 transition" />
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
