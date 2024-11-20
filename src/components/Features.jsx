import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { benefits } from "../constants";
import gsap from "gsap";
import Arrow from "../../public/assets/images/services/Arrow";
import ClipPath from "../../public/assets/images/services/ClipPath";
import GradientLight from "../../public/assets/images/services/Benefits";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section id="services" className=" bg-zinc">
      <div className="">
        <div className="mb-12 ml-10 w-auto">
          <h1 id="features_title" className="section-heading">
          What We Deliver
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="pl-24"></div>

          <div className="flex-center flex-col sm:px-10">
            <div className="pl-5 pr-5 md:p-0 lg:p-0 relative h-auto w-full flex items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-15">
                {benefits.map((item) => (
                  <div
                    className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                    style={{
                      backgroundImage: `url(${item.backgroundUrl})`,
                    }}
                    key={item.id}
                  >
                    <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                      <h5 className="h5 mb-5">{item.title}</h5>
                      <p className="body-2 mb-6 text-n-3">{item.text}</p>
                      <div className="flex items-center mt-auto">
                        <img
                          src={item.iconUrl}
                          width={48}
                          height={48}
                          alt={item.title}
                        />
                        <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                          Get service
                        </p>
                        <Arrow />
                      </div>
                    </div>

                    {item.light && <GradientLight />}

                    <div
                      className="absolute inset-0.5 bg-n-8"
                      style={{ clipPath: "url(#benefits)" }}
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-text-container"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
