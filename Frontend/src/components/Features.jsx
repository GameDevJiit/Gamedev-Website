import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
      <div
          ref={itemRef}
          className={className}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: transformStyle }}
      >
        {children}
      </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
      <div className="relative size-full">
        <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
        />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
                <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
            )}
          </div>

          {isComingSoon && (
              <div
                  ref={hoverButtonRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
              >
                {/* Radial gradient hover effect */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                      opacity: hoverOpacity,
                      background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                    }}
                />
                <TiLocationArrow className="relative z-20" />
                <p className="relative z-20">coming soon</p>
              </div>
          )}
        </div>
      </div>
  );
};

const Features = () => {
  const [showMoreWork, setShowMoreWork] = useState(false);

  return (
      <section id="features" className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
          <div className="px-5 py-32">
            <p className="font-circular-web text-lg text-blue-50">
              Crafting Worlds, Not Just Games
            </p>
            <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
              Dive into a space where ideas evolve into fully playable realities
              where code, design, art, and narrative converge to build immersive worlds, not just games.
            </p>
          </div>

          <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCard
                src="videos/feature-1.mp4"
                title={
                  <>
                    g<b>a</b>me development
                  </>
                }
                description="Building games isn't just fun—it's structure, systems, and soul. This is where every click counts, and every bug has a story."
                isComingSoon = {false}
            />
          </BentoTilt>

          <div className="m-0 grid h-[120vh] w-full grid-cols-2 grid-rows-3 gap-7">
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                  src="videos/feature-2.mp4"
                  title={
                    <>
                      3D mo<b>d</b>elling
                    </>
                  }
                  description="It's how ideas take shape—vertex by vertex. From low-poly props to cinematic renders, 3D modelling transforms imagination into tangible digital art."
                  isComingSoon = {false}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
              <BentoCard
                  src="videos/feature-3.mp4"
                  title={
                    <>
                      Digital Design
                    </>
                  }
                  description="From posters to promo reels, we craft the visuals that tell our story. It's where branding meets creativity—and every pixel has a purpose."
                  isComingSoon = {false}
              />
            </BentoTilt>

            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
              <BentoCard
                  src="videos/feature-4.mp4"
                  title={
                    <>
                      Esports <b>A</b>rena
                    </>
                  }
                  description="Where Skill Meets Strategy — The Ultimate Esports Battleground Begins Here"
                  isComingSoon = {false}
              />
            </BentoTilt>
          </div>

          {showMoreWork && (
              <div className="grid w-full grid-cols-2 grid-auto-rows-fr gap-7 mt-7 opacity-0 animate-fade-in-up"
                   style={{
                       animation: 'fadeInUp 0.6s ease-out forwards',
                       animationDelay: '0.1s'
                   }}>
                  <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 min-h-72">
                      <BentoCard
                          src="videos/Showcase/Kevin's_Kingdom.mp4"
                          title={
                              <>
                                  Kevin Kingdom
                              </>
                          }
                          isComingSoon = {false}
                      />
                  </BentoTilt>
                  <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 min-h-72">
                      <BentoCard
                          src="videos/Showcase/Crypt_Raisers.mp4"
                          title={
                              <>
                                  Crypt R<b>A</b>iders
                              </>
                          }
                          isComingSoon = {false}
                      />
                  </BentoTilt>
                  <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 min-h-72">
                      <BentoCard
                          src="videos/Showcase/render1.mp4"
                          isComingSoon = {false}
                      />
                  </BentoTilt>
                  <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 min-h-72">
                      <BentoCard
                          src="videos/Showcase/render2.mp4"
                          isComingSoon = {false}
                      />
                  </BentoTilt>
                  <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 min-h-72">
                      <BentoCard
                          src="videos/Showcase/render3.mp4"
                          isComingSoon = {false}
                      />
                  </BentoTilt>

                  <BentoTilt className="bento-tilt_2">
                      <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                          <h1 className="bento-title special-font max-w-64 text-black">
                              M<b>o</b>re to e<b>x</b>plore
                          </h1>

                          <TiLocationArrow className="m-5 scale-[5] self-end" />
                      </div>
                  </BentoTilt>
              </div>
          )}

          <div className="flex justify-center mt-7 mb-7">
            <div
                onClick={() => setShowMoreWork(!showMoreWork)}
                className="relative flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-violet-300 px-8 py-4 text-sm uppercase text-black hover:bg-violet-400 transition-colors"
            >
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20 font-semibold">
                {showMoreWork ? "Show Less" : "Our Work"}
              </p>
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </section>
  );
};

export default Features;