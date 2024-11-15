import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import videoSrc from '../../public/assets/videos/hero video.mov'

const Hero = () => {
  // const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  // const handleVideoSrcSet = () => {
  //   if(window.innerWidth < 760) {
  //     setVideoSrc(smallHeroVideo)
  //   } else {
  //     setVideoSrc(heroVideo)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', handleVideoSrcSet);

  //   return () => {
  //     window.removeEventListener('reisze', handleVideoSrcSet)
  //   }
  // }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative background">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">ZEECODE SOLUTIONS</p>
        <div className="md:w-10/12 w-9/12">
          <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#" className="btn">Know More</a>
      </div>
        </div>
      </div>

      
    </section>
  )
}

export default Hero