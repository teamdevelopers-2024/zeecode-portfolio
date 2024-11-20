import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section
      id="about"
      className="common-padding rgb(16 16 16 / var(--tw-bg-opacity))"
    >
      <div className="screen-max-width">
        <h1
          id="heading"
          className="section-heading text-center"
        >
          Behind the Brand
        </h1>

        <div className="flex flex-col items-center space-y-16">
          {/* Introduction Section */}
          <div className="w-full max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed mt-20">
              We are a dynamic team of five passionate software engineers and a
              visionary business strategist who came together in March 2024 to
              bring our shared dream to life—building an innovative IT firm that
              drives digital transformation. United by our expertise and a
              commitment to excellence, we set out to create a company that
              blends cutting-edge technology with impactful solutions tailored
              to meet the unique needs of our clients. Our core services include{" "}
              <span className="font-semibold">
                app development, web development, digital marketing, and web
                designing
              </span>
              , but our ambitions extend far beyond these domains. As a
              forward-thinking team, we are continuously exploring new streams
              and innovative ideas to expand our expertise and deliver
              exceptional value. Our journey is fueled by creativity,
              collaboration, and a drive to empower businesses with technology
              that inspires growth and success. Together, we’re shaping a future
              where digital possibilities are limitless. Join us as we continue
              to innovate, adapt, and grow in this ever-evolving digital
              landscape.
            </p>
          </div>

          {/* Mission and Vision Section */}
          <div className="flex flex-col lg:flex-row justify-center items-start gap-12 w-full max-w-6xl">
            {/* Mission */}
            <div className="flex-1 bg-gray-900 shadow-md p-6 rounded-md">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">
                Mission
              </h2>
              <p className="text-[#99AABB] leading-relaxed">
                To empower businesses with innovative and tailored technology
                solutions that drive growth, enhance efficiency, and foster
                digital transformation. We are dedicated to delivering
                excellence through collaboration, creativity, and a
                customer-centric approach, ensuring every project exceeds
                expectations and creates lasting impact.
              </p>
            </div>

            {/* Vision */}
            <div className="flex-1 bg-gray-900 shadow-md p-6 rounded-md">
              <h2 className="text-2xl font-semibold text-gray-400 mb-4">
                Vision
              </h2>
              <p className="text-[#99AABB] leading-relaxed">
                To revolutionize the digital landscape by delivering innovative,
                scalable, and impactful technology solutions. We envision a
                future where businesses thrive through seamless integration of
                technology, unlocking their full potential and creating
                meaningful connections in a rapidly evolving digital world.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Model;
