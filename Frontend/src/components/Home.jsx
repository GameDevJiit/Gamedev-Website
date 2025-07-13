import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [showNoRecruits, setShowNoRecruits] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
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

  useGSAP(
      () => {
        if (hasClicked) {
          gsap.set("#next-video", { visibility: "visible" });
          gsap.to("#next-video", {
            transformOrigin: "center center",
            scale: 1,
            width: "100%",
            height: "100%",
            duration: 1,
            ease: "power1.inOut",
            onStart: () => nextVdRef.current.play(),
          });
          gsap.from("#current-video", {
            transformOrigin: "center center",
            scale: 0,
            duration: 1.5,
            ease: "power1.inOut",
          });
        }
      },
      {
        dependencies: [currentIndex],
        revertOnUpdate: true,
      }
  );

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

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const getDynamicText = (index, isDark = false) => {
    const headings = [
      "TE<b>A</b>M ONSITE",
      "THE G<b>A</b>ME WITHIN",
      "CRE<b>A</b>TIVE DEPTH",
      "<b>G</b>LORY MODE"
    ];

    const baseClasses = "special-font hero-heading absolute bottom-5 right-5";
    const colorClasses = isDark ? "text-black" : "z-50 text-blue-75";

    return (
        <h1
            key={index}
            className={`${baseClasses} ${colorClasses}`}
            dangerouslySetInnerHTML={{ __html: headings[index - 1] }}
        />
    );
  };

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
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
              <VideoPreview>
                <div
                    onClick={handleMiniVdClick}
                    className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                >
                  <video
                      ref={nextVdRef}
                      src={getVideoSrc((currentIndex % totalVideos) + 1)}
                      loop
                      muted
                      id="current-video"
                      className="size-64 origin-center scale-150 object-cover object-center"
                      onLoadedData={handleVideoLoad}
                  />
                </div>
              </VideoPreview>
            </div>

            <video
                ref={nextVdRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                id="next-video"
                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                onLoadedData={handleVideoLoad}
            />
            <video
                src={getVideoSrc(
                    currentIndex === totalVideos - 1 ? 1 : currentIndex
                )}
                autoPlay
                loop
                muted
                className="absolute left-0 top-0 size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
            />
          </div>

          {getDynamicText(currentIndex,false)}

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
        {getDynamicText(currentIndex,true)}

        {/* No Recruits Message */}
        {showNoRecruits && (
            <div className={`fixed inset-x-0 bottom-5 z-[200] flex w-screen items-center justify-center overflow-x-hidden
             transition-all duration-500 ease-in-out transform
             ${isAnimatingOut
                ? 'translate-y-20 scale-95 opacity-0'
                : 'translate-y-0 scale-100 opacity-100'
            }`}
            >
              <div className={`h-auto w-1/5 rounded-full bg-red-500 py-4 text-center font-bold text-white 
                transition-all duration-500 ease-in-out transform
                ${isAnimatingOut
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