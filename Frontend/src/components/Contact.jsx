import { useState } from "react";

// Mock AnimatedTitle component - replace with your actual component
const AnimatedTitle = ({ title, className }) => (
    <h1 className={className} dangerouslySetInnerHTML={{ __html: title }} />
);

// Mock Button component - replace with your actual component
const Button = ({ title, containerClass, onClick }) => (
    <button
        className={`relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 text-sm uppercase text-white hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 ${containerClass}`}
        onClick={onClick}
    >
      <span className="relative z-20 font-semibold">{title}</span>
    </button>
);

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
      <img src={src} className="w-full h-full object-cover" />
    </div>
);

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div id="contact" className="w-screen px-10 py-20 relative overflow-hidden" style={{ zIndex: 1 }}>
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-24 text-white overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10 min-h-[600px]" style={{ zIndex: 1 }}>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20 animate-pulse" style={{ zIndex: -1 }} />

          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-sm" style={{ zIndex: -1 }} />

          <div className="absolute left-0 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96" style={{ zIndex: 2 }}>
            <ImageClipBox
                src="/img/contact-1.webp"
                clipClass="contact-clip-path-1 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <ImageClipBox
                src="/img/contact-2.webp"
                clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60 opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="absolute top-0 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80" style={{ zIndex: 2 }}>
            <ImageClipBox
                src="/img/swordman-partial.webp"
                clipClass="absolute md:scale-125 opacity-80"
            />
            <ImageClipBox
                src="/img/swordman.webp"
                clipClass="sword-man-clip-path md:scale-125 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="relative flex flex-col items-center text-center" style={{ zIndex: 3 }}>
            <div className="mb-10 relative">
              <p className="font-general text-xs uppercase tracking-[0.3em] text-purple-300 font-semibold">
                Join the Guild
              </p>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
            </div>

            <AnimatedTitle
                title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
                className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9] text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-clip-text"
            />

            <div className="mb-8 mt-10 p-6 rounded-xl bg-gray-900/50 border border-purple-500/20 backdrop-blur-sm">
              <p className="mb-4 text-sm text-purple-300 font-semibold uppercase tracking-wider">
                Ready to Join Forces?
              </p>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white hover:text-purple-300 transition-colors duration-300">
                multimedia.development.jiit@gmail.com
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white hover:text-cyan-300 transition-colors duration-300">
                  shantanugupta.cy80@gmail.com
                </p>
              </div>
            </div>

            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ zIndex: 4 }}
            >
              <a href="mailto:shantanugupta.cy80@gmail.com">
                <Button
                    title="Contact Guild Master"
                    containerClass="mt-4 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                />
              </a>
              {isHovered && (
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-30 animate-pulse" style={{ zIndex: -1 }} />
              )}
            </div>

            {/* Additional gaming-themed elements */}
            <div className="mt-8 flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Guild Status: Active</span>
              </div>
              <div className="w-px h-4 bg-gray-600" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Recruiting: Closed</span>
              </div>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Contact;