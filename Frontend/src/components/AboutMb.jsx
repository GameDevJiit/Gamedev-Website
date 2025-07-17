import { Gamepad2, Zap, Code, Trophy, Target, Cpu, Shield, Star, Sword, Crown } from "lucide-react";
import { useState, useEffect } from "react";

const Card = ({ children, className = "", style = {} }) => (
    <div className={`rounded-lg ${className}`} style={style}>
        {children}
    </div>
);

const About = () => {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 300);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Gaming-themed guild structure
    const guildMaster = {
        id: 1,
        name: "Shantanu",
        role: "GUILD MASTER",
        level: "∞",
        icon: Crown,
        specialty: "Leadership & Strategy",
        rank: "LEGENDARY"
    };

    const guildMembers = [
        { id: 2, name: "Devyansh", role: "VICE COMMANDER", icon: Shield, level: "99", specialty: "VICE HEAD", rank: "VETERAN" },
        { id: 3, name: "Riya", role: "CREATIVE ARCHITECT", icon: Star, level: "95", specialty: "CREATIVE HEAD", rank: "VETERAN" },
        { id: 4, name: "Chitransh", role: "RESOURCE MASTER", icon: Target, level: "90", specialty: "TREASURER", rank: "EXPERIENCED" },
        { id: 5, name: "Aayaan", role: "OPERATIONS LEAD", icon: Cpu, level: "88", specialty: "MANAGEMENT HEAD", rank: "EXPERIENCED" },
        { id: 6, name: "Sonakshi", role: "OUTREACH SPECIALIST", icon: Zap, level: "86", specialty: "MARKETING HEAD", rank: "SKILLED" },
        { id: 7, name: "Sneha", role: "DIGITAL STRATEGIST", icon: Code, level: "85", specialty: "DIGITAL HEAD", rank: "EXPERIENCED" },
        { id: 8, name: "Siddhant", role: "DIGITAL ENGINEER", icon: Code, level: "85", specialty: "DIGITAL HEAD", rank: "EXPERIENCED" },
        { id: 9, name: "Priyansh", role: "TECH COMMANDER", icon: Gamepad2, level: "92", specialty: "TECHNICAL HEAD", rank: "VETERAN" },
        { id: 10, name: "Mayank", role: "GUILD SCRIBE", icon: Trophy, level: "82", specialty: "SECRETARY", rank: "SKILLED" },
        { id: 11, name: "Dipanshu", role: "TACTICAL LEAD", icon: Sword, level: "87", specialty: "MANAGEMENT HEAD", rank: "EXPERIENCED" },
        { id: 12, name: "Manjunath", role: "VISUAL STORYTELLER", icon: Star, level: "89", specialty: "CINEMATOGRAPHY HEAD", rank: "EXPERIENCED" },
        { id: 13, name: "Dev", role: "MOTION ARTIST", icon: Star, level: "89", specialty: "CINEMATOGRAPHY HEAD", rank: "SKILLED" }
    ];


    const getRankColor = (rank) => {
        switch (rank) {
            case "LEGENDARY": return "#ff8c00";
            case "VETERAN": return "#a855f7";
            case "EXPERIENCED": return "#3b82f6";
            case "SKILLED": return "#10b981";
            default: return "#6b7280";
        }
    };

    const getRankGlow = (rank) => {
        switch (rank) {
            case "LEGENDARY": return "0 0 30px rgba(255, 140, 0, 0.4), 0 0 60px rgba(255, 20, 147, 0.2)";
            case "VETERAN": return "0 0 20px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.1)";
            case "EXPERIENCED": return "0 0 40px rgba(59, 130, 246, 0.2)";
            case "SKILLED": return "0 10px 30px -10px rgba(59, 130, 246, 0.3)";
            default: return "0 4px 20px -2px rgba(15, 23, 42, 0.8)";
        }
    };

    const floatAnimation = {
        animation: "float 3s ease-in-out infinite"
    };

    const glitchAnimation = glitchActive ? {
        animation: "glitch 0.3s ease-in-out"
    } : {};

    return (
        <div
            id="about"
            className="min-h-screen w-full relative overflow-hidden"
            style={{
                background: 'hsl(240, 10%, 3.9%)',
                position: 'relative'
            }}
        >
            {/* Inline keyframes */}
            <style>
                {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glitch {
            0%, 100% { transform: translateX(0); }
            10% { transform: translateX(-2px); }
            20% { transform: translateX(2px); }
            30% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            50% { transform: translateX(-1px); }
            60% { transform: translateX(1px); }
          }
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes scale-in {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }
          @keyframes cyber-scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes level-up {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes neon-flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
            75% { opacity: 0.9; }
          }
        `}
            </style>

            {/* Cyberpunk Background Effects */}
            <div className="absolute inset-0">
                {/* Floating orbs */}
                <div
                    className="absolute w-32 h-32 rounded-full blur-3xl"
                    style={{
                        top: '80px',
                        left: '40px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        ...floatAnimation
                    }}
                />
                <div
                    className="absolute w-48 h-48 rounded-full blur-3xl"
                    style={{
                        bottom: '80px',
                        right: '80px',
                        background: 'rgba(168, 85, 247, 0.1)',
                        ...floatAnimation,
                        animationDelay: '1s'
                    }}
                />
                <div
                    className="absolute w-24 h-24 rounded-full blur-2xl"
                    style={{
                        top: '50%',
                        left: '25%',
                        background: 'rgba(236, 72, 153, 0.1)',
                        ...floatAnimation,
                        animationDelay: '2s'
                    }}
                />
                <div
                    className="absolute w-36 h-36 rounded-full blur-3xl"
                    style={{
                        bottom: '33%',
                        left: '66%',
                        background: 'rgba(6, 182, 212, 0.1)',
                        ...floatAnimation,
                        animationDelay: '0.5s'
                    }}
                />

                {/* Matrix-style grid lines */}
                <div
                    className="absolute inset-0"
                    style={{
                        opacity: 0.05,
                        backgroundSize: '50px 50px',
                        backgroundImage: 'linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)'
                    }}
                />

                {/* Scanning line effect */}
                <div
                    className="absolute top-0 left-0 w-full h-0.5 opacity-60"
                    style={{
                        background: 'linear-gradient(90deg, transparent, rgb(6, 182, 212), transparent)',
                        animation: 'cyber-scan 2s ease-in-out infinite'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                {/* Header Section */}
                <div
                    className="text-center mb-16"
                    style={{
                        animation: 'fade-in 0.6s ease-out'
                    }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Gamepad2
                            className="w-6 h-6"
                            style={{
                                color: 'rgb(6, 182, 212)',
                                animation: 'neon-flicker 1.5s ease-in-out infinite'
                            }}
                        />
                        <p
                            className="text-xs uppercase tracking-widest font-mono"
                            style={{
                                color: 'hsl(240, 4%, 46%)',
                                letterSpacing: '0.3em'
                            }}
                        >
                            &gt; INITIALIZING GAME_DEV_JIIT.EXE
                        </p>
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{
                                background: 'rgb(16, 185, 129)',
                                animation: 'pulse 2s infinite'
                            }}
                        />
                    </div>

                    <h1
                        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{
                            color: 'hsl(0, 0%, 98%)',
                            ...glitchAnimation
                        }}
                    >
                        <span className="font-mono" style={{ color: 'rgb(6, 182, 212)' }}>&gt;</span> More than{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'glow-pulse 2s ease-in-out infinite'
                            }}
                        >
              a guild
            </span>
                        <br />
                        <span
                            className="text-2xl md:text-4xl lg:text-5xl"
                            style={{ color: 'hsl(240, 5%, 64.9%)' }}
                        >
              We code the impossible.
            </span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 text-sm font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                        <span>[STATUS: ONLINE]</span>
                        <span>[PLAYERS: {guildMembers.length + 1}]</span>
                        <span>[MODE: CREATIVE]</span>
                    </div>
                </div>

                {/* Guild Master Section */}
                <div
                    className="mb-16 flex justify-center"
                    style={{
                        animation: 'scale-in 0.4s ease-out'
                    }}
                >
                    <Card
                        className="border-2 hover:scale-105 transition-all duration-500 group p-8 backdrop-blur-sm relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(145deg, hsl(240, 10%, 8%), hsl(240, 8%, 12%))',
                            border: '2px solid rgba(255, 140, 0, 0.5)',
                            boxShadow: getRankGlow("LEGENDARY"),
                            borderRadius: '8px'
                        }}
                    >
                        {/* Legendary aura effect */}
                        <div
                            className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                            style={{
                                background: 'linear-gradient(45deg, rgb(236, 72, 153), rgb(6, 182, 212), rgb(16, 185, 129))'
                            }}
                        />
                        <div
                            className="absolute -top-1 -left-1 w-full h-full border-2 rounded-lg"
                            style={{
                                border: '2px solid rgba(255, 140, 0, 0.2)',
                                animation: 'pulse 2s infinite'
                            }}
                        />

                        <div className="text-center relative z-10">
                            <div className="relative mb-6">
                                <div
                                    className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-3xl font-bold relative group-hover:animate-pulse"
                                    style={{
                                        background: 'linear-gradient(45deg, rgb(236, 72, 153), rgb(6, 182, 212), rgb(16, 185, 129))',
                                        color: 'hsl(240, 10%, 3.9%)'
                                    }}
                                >
                                    <Crown className="w-12 h-12" />
                                    <div
                                        className="absolute -top-2 -right-2 text-xs font-bold px-2 py-1 rounded-full"
                                        style={{
                                            background: 'rgb(255, 140, 0)',
                                            color: 'hsl(240, 10%, 3.9%)'
                                        }}
                                    >
                                        LVL {guildMaster.level}
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span
                      className="text-xs font-bold px-3 py-1 rounded-full border"
                      style={{
                          background: 'hsl(240, 8%, 12%)',
                          border: '1px solid rgba(255, 140, 0, 0.5)',
                          color: getRankColor("LEGENDARY")
                      }}
                  >
                    {guildMaster.rank}
                  </span>
                                </div>
                            </div>

                            <h3
                                className="text-3xl font-bold mb-2 group-hover:text-orange-400 transition-colors"
                                style={{ color: 'hsl(0, 0%, 98%)' }}
                            >
                                {guildMaster.name}
                            </h3>
                            <p
                                className="font-mono text-lg tracking-wide uppercase mb-2"
                                style={{ color: 'rgb(255, 140, 0)' }}
                            >
                                {guildMaster.role}
                            </p>
                            <p
                                className="text-sm"
                                style={{ color: 'hsl(240, 5%, 64.9%)' }}
                            >
                                {guildMaster.specialty}
                            </p>
                        </div>
                    </Card>
                </div>

                {/* Guild Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {guildMembers.map((member, index) => {
                        const IconComponent = member.icon;
                        return (
                            <Card
                                key={member.id}
                                className="hover:scale-105 transition-all duration-300 group p-6 backdrop-blur-sm relative overflow-hidden"
                                style={{
                                    background: 'rgba(15, 23, 42, 0.8)',
                                    border: '1px solid hsl(240, 6%, 18%)',
                                    boxShadow: getRankGlow(member.rank),
                                    borderRadius: '8px',
                                    animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
                                }}
                            >
                                {/* Rank glow effect */}
                                <div
                                    className="absolute top-0 left-0 w-full h-0.5 group-hover:via-purple-500 transition-all"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)'
                                    }}
                                />

                                <div className="text-center relative z-10">
                                    <div className="relative mb-4">
                                        <div
                                            className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-lg font-semibold border group-hover:border-purple-400 transition-all relative"
                                            style={{
                                                background: 'hsl(240, 8%, 12%)',
                                                color: 'hsl(0, 0%, 98%)',
                                                border: '1px solid hsl(240, 6%, 18%)'
                                            }}
                                        >
                                            <IconComponent className="w-8 h-8" />
                                            <div
                                                className="absolute -top-1 -right-1 text-xs font-bold px-1.5 py-0.5 rounded-full"
                                                style={{
                                                    background: 'rgb(168, 85, 247)',
                                                    color: 'hsl(240, 10%, 3.9%)'
                                                }}
                                            >
                                                {member.level}
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full border"
                          style={{
                              background: 'hsl(240, 8%, 12%)',
                              border: '1px solid hsl(240, 6%, 18%)',
                              color: getRankColor(member.rank)
                          }}
                      >
                        {member.rank}
                      </span>
                                        </div>
                                    </div>

                                    <h3
                                        className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors"
                                        style={{ color: 'hsl(0, 0%, 98%)' }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-sm font-mono uppercase tracking-wide mb-1"
                                        style={{ color: 'hsl(240, 5%, 64.9%)' }}
                                    >
                                        {member.role}
                                    </p>
                                    <p
                                        className="text-xs"
                                        style={{ color: 'hsl(240, 4%, 46%)' }}
                                    >
                                        {member.specialty}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom Section */}
                <div
                    className="text-center space-y-8"
                    style={{
                        animation: 'fade-in-up 0.8s ease-out 0.5s both'
                    }}
                >
                    <div className="max-w-4xl mx-auto">
                        <h2
                            className="text-2xl md:text-4xl font-bold mb-6"
                            style={{ color: 'hsl(0, 0%, 98%)' }}
                        >
                            <span className="font-mono" style={{ color: 'rgb(6, 182, 212)' }}>&gt;</span> Spawned at{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background: 'linear-gradient(135deg, rgb(59, 130, 246), rgb(168, 85, 247))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                JIIT
              </span>
                            <br />
                            <span style={{ color: 'rgb(16, 185, 129)' }}>Ready to hack reality.</span>
                        </h2>
                        <p
                            className="text-lg leading-relaxed max-w-3xl mx-auto mb-8"
                            style={{ color: 'hsl(240, 5%, 64.9%)' }}
                        >
                            We're not just developers—we're digital architects, pixel artists, and reality modders.
                            Our mission: create games that break boundaries and experiences that redefine possible.
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
                            <div
                                className="rounded-lg p-4 border"
                                style={{
                                    background: 'rgba(15, 23, 42, 0.5)',
                                    border: '1px solid hsl(240, 6%, 18%)'
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: 'rgb(59, 130, 246)' }}>
                                    {guildMembers.length + 1}
                                </div>
                                <div className="text-sm font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                                    GUILD_SIZE
                                </div>
                            </div>
                            <div
                                className="rounded-lg p-4 border"
                                style={{
                                    background: 'rgba(15, 23, 42, 0.5)',
                                    border: '1px solid hsl(240, 6%, 18%)'
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: 'rgb(168, 85, 247)' }}>∞</div>
                                <div className="text-sm font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                                    CREATIVITY
                                </div>
                            </div>
                            <div
                                className="rounded-lg p-4 border"
                                style={{
                                    background: 'rgba(15, 23, 42, 0.5)',
                                    border: '1px solid hsl(240, 6%, 18%)'
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: 'rgb(16, 185, 129)' }}>100%</div>
                                <div className="text-sm font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                                    PASSION
                                </div>
                            </div>
                            <div
                                className="rounded-lg p-4 border"
                                style={{
                                    background: 'rgba(15, 23, 42, 0.5)',
                                    border: '1px solid hsl(240, 6%, 18%)'
                                }}
                            >
                                <div className="text-2xl font-bold" style={{ color: 'rgb(6, 182, 212)' }}>24/7</div>
                                <div className="text-sm font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                                    ONLINE
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gaming Terminal Style Footer */}
                    <div
                        className="border rounded-lg p-6 max-w-2xl mx-auto font-mono"
                        style={{
                            background: 'rgba(15, 23, 42, 0.3)',
                            border: '1px solid hsl(240, 6%, 18%)'
                        }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{
                                    background: 'rgb(16, 185, 129)',
                                    animation: 'pulse 2s infinite'
                                }}
                            />
                            <span className="text-sm" style={{ color: 'rgb(16, 185, 129)' }}>
                gamedev@jiit:~$
              </span>
                        </div>
                        <div className="text-sm" style={{ color: 'hsl(240, 5%, 64.9%)' }}>
                            <span style={{ color: 'rgb(6, 182, 212)' }}>echo</span> "Building the future, one pixel at a time."
                        </div>
                    </div>

                    {/* Decorative Power Indicators */}
                    <div className="flex justify-center space-x-6 pt-8">
                        <div className="flex flex-col items-center">
                            <div
                                className="w-3 h-3 rounded-full mb-1"
                                style={{
                                    background: 'rgb(59, 130, 246)',
                                    animation: 'pulse 2s infinite'
                                }}
                            />
                            <span className="text-xs font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                CREATIVE
              </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="w-3 h-3 rounded-full mb-1"
                                style={{
                                    background: 'rgb(168, 85, 247)',
                                    animation: 'pulse 2s infinite',
                                    animationDelay: '0.5s'
                                }}
                            />
                            <span className="text-xs font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                TECHNICAL
              </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div
                                className="w-3 h-3 rounded-full mb-1"
                                style={{
                                    background: 'rgb(236, 72, 153)',
                                    animation: 'pulse 2s infinite',
                                    animationDelay: '1s'
                                }}
                            />
                            <span className="text-xs font-mono" style={{ color: 'hsl(240, 4%, 46%)' }}>
                INNOVATIVE
              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;