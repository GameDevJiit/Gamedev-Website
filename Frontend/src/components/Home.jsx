import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useState } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showNoRecruits, setShowNoRecruits] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  //Join Us
  const handleJoinUS = () => {
    //will do server thing and if recruits are on then redirect
    setShowNoRecruits(true);
    setIsAnimatingOut(false);

    // Start exit animation after 2.5 seconds
    setTimeout(() => {
      setIsAnimatingOut(true);
    }, 2500);

    // Hide the message after animation completes
    setTimeout(() => {
      setShowNoRecruits(false);
      setIsAnimatingOut(false);
    }, 3000);
  }

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
      <div className="relative h-dvh w-screen overflow-x-hidden">
        {loading && (
            <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
              {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
              <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
              </div>
            </div>
        )}

        <div
            id="video-frame"
            className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
          <div>
            <video
                src="videos/hero-1.mp4"
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
            />
          </div>

          <h1
              className="special-font hero-heading absolute bottom-5 right-5 z-50 text-blue-75"
              dangerouslySetInnerHTML={{ __html: "TE<b>A</b>M ONSITE" }}
          />

          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">
                unle<b>a</b>sh
              </h1>

              <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                Enter the Realm of Creation <br /> Where Code Becomes Play, and Ideas Become Worlds
              </p>

              <Button
                  id="Join Us"
                  title="Join Us"
                  leftIcon={<TiLocationArrow />}
                  containerClass="bg-yellow-300 flex-center gap-1"
                  handleClick={handleJoinUS}
              />
            </div>
          </div>
        </div>

        <h1
            className="special-font hero-heading absolute bottom-5 right-5 text-black"
            dangerouslySetInnerHTML={{ __html: "TE<b>A</b>M ONSITE" }}
        />

        {/* No Recruits Message */}
        {showNoRecruits && (
            <div
                className={`fixed inset-x-0 bottom-5 z-[200] flex w-screen items-center justify-center overflow-x-hidden
    transition-all duration-500 ease-in-out transform
    ${
                    isAnimatingOut
                        ? 'translate-y-20 scale-95 opacity-0'
                        : 'translate-y-0 scale-100 opacity-100'
                }`}
            >
              <div
                  className={`h-auto w-11/12 sm:w-4/5 md:w-2/5 lg:w-1/4 xl:w-1/5 rounded-full bg-red-500 py-4 text-center font-bold text-white
      transition-all duration-500 ease-in-out transform
      ${
                      isAnimatingOut
                          ? 'scale-90 opacity-0'
                          : 'scale-100 opacity-90'
                  }`}
              >
                No recruits are open right now
              </div>
            </div>

        )}
      </div>
  );
};

export default Home;