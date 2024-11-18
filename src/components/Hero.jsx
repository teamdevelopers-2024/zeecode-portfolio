import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import videoSrc from "../../public/assets/videos/hero video.mov"; // Assuming you have a video file here

const Hero = () => {
  // const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  // const handleVideoSrcSet = () => {
  //   if (window.innerWidth < 760) {
  //     setVideoSrc(smallHeroVideo)
  //   } else {
  //     setVideoSrc(heroVideo)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', handleVideoSrcSet);
  //   handleVideoSrcSet(); // Make sure we set the video source on initial load

  //   return () => {
  //     window.removeEventListener('resize', handleVideoSrcSet);
  //   }
  // }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height h-screen relative flex flex-col justify-center items-center overflow-hidden">
      {/* Video as background */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* "Know More" Button */}
      <div className="absolute bottom-10 w-full text-center">
        <div id="cta" className="opacity-0 translate-y-20">
          <a href="#" className="btn px-6 py-3 bg-primary text-white rounded-full">
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
