import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";

import MemProfile from "./MemProfile.jsx";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          // Trigger member animations when scroll progress > 0.5
          if (self.progress > 0.5 && !isExpanded) {
            setIsExpanded(true);
          } else if (self.progress <= 0.5 && isExpanded) {
            setIsExpanded(false);
          }
        }
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  // Sample team data
  const teamMembers = [
    { id: 1, name: "Shantanu", title: "HEAD", image: 7 },
    { id: 2, name: "Devyansh", title: "VICE HEAD", image: 8 },
    { id: 3, name: "Riya", title: "CREATIVE HEAD", image: 3 },
    { id: 4, name: "Chitransh", title: "TREASURER", image: 4 },
    { id: 5, name: "Aayaan", title: "MANAGEMENT HEAD", image: 5 },
    { id: 6, name: "Sonakshi", title: "MARKETING HEAD", image: 6 },
    { id: 7, name: "Sneha", title: "DIGITAL HEAD", image: 2 },
    { id: 8, name: "Siddhant", title: "DIGITAL HEAD", image: 1 },
    { id: 9, name: "Priyansh", title: "TECHNICAL HEAD", image: 9 },
    { id: 10, name: "Mayank", title: "SECRETARY", image: 11 },
    { id: 11, name: "Dipanshu", title: "MANAGEMENT HEAD", image: 12 },
    { id: 12, name: "Manjunath", title: "CINEMATOGRAPHY HEAD", image: 10 },
    { id: 13, name: "Dev", title: "CINEMATOGRAPHY HEAD", image: 13 }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08
      }
    }
  };

  return (
      <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
          <p className="font-general font-bold text-[20px] uppercase ">
            Welcome to Game Dev JIIT
          </p>

          <AnimatedTitle
              title="More than <b>a</b> team.<br />We build what we believe."
              containerClass="mt-5 !text-black text-center"
          />

          <div className="about-subtext">
            <p>Spawned at JIIT,<br/>Ready to mod the future.</p>
            <p className="text-gray-500">
              We bring together builders and players, coders and creatives—
              to shape games that go beyond the screen.
            </p>
          </div>
        </div>

        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <div className="h-dvh w-screen" id="clip">
              <div className="mask-clip-path about-image">
                {/* Background video */}
                <video
                    className="absolute left-0 top-0 z-[-10] h-full w-full object-cover"
                    src={"videos/MBGVideo.mp4"}
                    autoPlay
                    loop
                    muted
                />


                {/* Animated background elements */}
                <div className="absolute inset-0 bg-black/20">
                  <motion.div
                      className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 20, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                  />
                  <motion.div
                      className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                        x: [0, -30, 0],
                        y: [0, 15, 0]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                  />
                  <motion.div
                      className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.4, 0.7, 0.4],
                        x: [0, 25, 0],
                        y: [0, -20, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                  />
                </div>

                {/* Team Members Grid */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center p-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isExpanded ? "visible" : "hidden"}
                >
                  <div className="w-full p-0">
                    <AnimatePresence>
                      <div className="flex w-full justify-center">
                        <div className="w-full max-w-6xl px-4">
                          <AnimatePresence className="w-full">
                            {/* First row - Single centered item */}
                            <div className="mb-4 flex justify-center">
                              <div className="w-full max-w-xs">
                                <MemProfile
                                    name={teamMembers[0].name}
                                    title={teamMembers[0].title}
                                    imgIdx={teamMembers[0].image}
                                    key={teamMembers[0].id}
                                    className="h-32"
                                />
                              </div>
                            </div>

                            {/* Grid Section */}
                            <div className="grid grid-cols-6 gap-y-10 gap-x-12 w-full">
                              {teamMembers.slice(1).map((member, index) => (
                                  <div key={member.id} className="w-full">
                                    <MemProfile
                                        name={member.name}
                                        title={member.title}
                                        imgIdx={member.image}
                                        key={index}
                                        className="h-32"
                                    />
                                  </div>
                              ))}
                            </div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;