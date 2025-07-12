import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedTitle from "./AnimatedTitle";

//Images
import siddant from "../assets/Members/1.png"
import sneha from "../assets/Members/2.png"
import riya from "../assets/Members/3.png"
import Chitransh from "../assets/Members/4.png"
import Ayaan from "../assets/Members/5.png"
import Sonakshi from "../assets/Members/6.png"
import shantanu from "../assets/Members/7.png"
import Deyansh from "../assets/Members/8.png"
import Priyansh from "../assets/Members/9.png"
import Manjunath from "../assets/Members/10.png"
import Mayank from "../assets/Members/11.png"
import Dipanshu from "../assets/Members/16.png"

//BG
import BG from "../assets/MemberBG.png"


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
    { id: 1, name: "Shantanu Gupta", title: "HEAD", image: shantanu },
    { id: 2, name: "Deyyansh Roy", title: "VICE HEAD", image: Deyansh },
    { id: 3, name: "Riya Chachra", title: "CREATIVE HEAD", image: riya },
    { id: 4, name: "Chitransh Saxena", title: "TREASURER", image: Chitransh },
    { id: 5, name: "Aayaan", title: "MANAGEMENT HEAD", image: Ayaan },
    { id: 6, name: "Sonakshi Singh", title: "MARKETING HEAD", image: Sonakshi },
    { id: 7, name: "Sneha Srijaya", title: "DIGITAL HEAD", image: sneha },
    { id: 8, name: "Siddhant Jain", title: "DIGITAL HEAD", image: siddant },
    { id: 9, name: "Priyansh", title: "TECHNICAL HEAD", image: Priyansh },
    { id: 10, name: "Mayank Varshney", title: "SECRETARY", image: Mayank },
    { id: 11, name: "Dipanshu Sharma", title: "MANAGEMENT HEAD", image: Dipanshu },
    { id: 12, name: "Manjunath", title: "CINEMATOGRAPHY HEAD", image: Manjunath },
    { id: 13, name: "Dev", title: "CINEMATOGRAPHY HEAD", image: "/img/team/dev.jpg" }
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-8, 8, -8],
      rotate: [-1, 1, -1],
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2
      }
    },
    static: {
      y: 0,
      rotate: 0
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    }
  };

  return (
      <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
          <p className="font-general text-sm uppercase md:text-[10px]">
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
            {/* Background with gradient */}
            <div
                className="absolute left-0 top-0 size-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BG})` }}
            >
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
                  className="absolute inset-0 flex items-center justify-center p-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isExpanded ? "visible" : "hidden"}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
                  <AnimatePresence>
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="team-card bg-white/15 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 shadow-lg cursor-pointer"
                            variants={cardVariants}
                            animate={isExpanded ? ["visible", "float"] : "hidden"}
                            whileHover="hover"
                            custom={index}
                        >
                          <motion.div variants={floatingVariants}>
                            <motion.div variants={hoverVariants}>
                              {/* Avatar */}
                              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-0.5">
                                <div className="w-full h-full rounded-full overflow-hidden bg-white/10">
                                  <img
                                      src={member.image}
                                      alt={member.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=80&background=6366f1&color=fff&bold=true`;
                                      }}
                                  />
                                </div>
                              </div>

                              {/* Name */}
                              <h3 className="text-white font-bold text-base mb-2 tracking-wide">
                                {member.name}
                              </h3>

                              {/* Title */}
                              <p className="text-blue-200 text-sm font-medium">
                                {member.title}
                              </p>

                              {/* Decorative line */}
                              <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;