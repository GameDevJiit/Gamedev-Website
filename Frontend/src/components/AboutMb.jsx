

const About = () => {
    // Sample team data
    const teamMembers = [
        { id: 1, name: "Shantanu", title: "HEAD" },
        { id: 2, name: "Devyansh", title: "VICE HEAD" },
        { id: 3, name: "Riya", title: "CREATIVE HEAD" },
        { id: 4, name: "Chitransh", title: "TREASURER" },
        { id: 5, name: "Aayaan", title: "MANAGEMENT HEAD" },
        { id: 6, name: "Sonakshi", title: "MARKETING HEAD" },
        { id: 7, name: "Sneha", title: "DIGITAL HEAD" },
        { id: 8, name: "Siddhant", title: "DIGITAL HEAD" },
        { id: 9, name: "Priyansh", title: "TECHNICAL HEAD" },
        { id: 10, name: "Mayank", title: "SECRETARY" },
        { id: 11, name: "Dipanshu", title: "MANAGEMENT HEAD" },
        { id: 12, name: "Manjunath", title: "CINEMATOGRAPHY HEAD" },
        { id: 13, name: "Dev", title: "CINEMATOGRAPHY HEAD" }
    ];

    return (
        <div id="about" className="min-h-screen w-full bg-gray-900">
            {/* Header Section */}
            <div className="relative px-4 py-12 flex flex-col items-center gap-6">
                <p className="text-xs uppercase text-gray-400 tracking-wider">
                    Welcome to Game Dev JIIT
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-white text-center leading-tight">
                    More than <span className="text-blue-400">a</span> team.<br />
                    We build what we believe.
                </h1>
                {/* Team Section */}
                <div className="w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl opacity-60" />
                        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl opacity-40" />
                        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl opacity-70" />
                    </div>

                    {/* Team Members */}
                    <div className="relative z-10 w-full max-w-sm mx-auto px-4 py-8">
                        {/* First row - Single centered item (HEAD) */}
                        <div className="mb-6 flex justify-center">
                            <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-black/60 transition-colors duration-300">
                                <h3 className="text-lg font-semibold text-white">{teamMembers[0].name}</h3>
                                <p className="text-sm text-gray-300">{teamMembers[0].title}</p>
                            </div>
                        </div>

                        {/* Remaining members in 2x2 grid pattern */}
                        <div className="space-y-4">
                            {Array.from({ length: Math.ceil(teamMembers.slice(1).length / 2) }).map((_, rowIndex) => (
                                <div key={rowIndex} className="grid grid-cols-2 gap-3">
                                    {teamMembers.slice(1).slice(rowIndex * 2, rowIndex * 2 + 2).map((member) => (
                                        <div
                                            key={member.id}
                                            className="text-center bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-black/50 transition-colors duration-300 hover:scale-105 transition-transform"
                                        >
                                            <h3 className="text-base font-medium text-white">{member.name}</h3>
                                            <p className="text-xs text-gray-300">{member.title}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="text-center space-y-4">
                    <p className="text-lg text-white font-medium">
                        Spawned at JIIT,<br/>
                        Ready to mod the future.
                    </p>
                    <p className="text-sm text-gray-400 max-w-xs">
                        We bring together builders and players, coders and creatives—
                        to shape games that go beyond the screen.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default About;