import React, {useRef, useState} from 'react'
import Constants from "../constants.js";
import constants from "../constants.js";

export const Home = () => {

    const [currentIdx, setCurrentIdx] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const nextVideoRef = useRef(null);

    const handleMiniVideoClick = () => {
        setHasClicked(true);
        setCurrentIdx((prev)=>prev%Constants.Total_Videos+1);
    }
    const handleVideoLoad = ()=>{
        setLoadedVideos((prev)=>prev+1);
    }
    const getVideoSrc = (idx)=> `videos/hero-${idx}.mp4`;
    const nextIdx = currentIdx%Constants.Total_Videos + 1;

    const getVideoSyncedText = (idx)=> {
        const text = ["THE GAME WITHIN","CREATIVE DEPTH","COMPETITIVE CORE","IRL SYNERGY"];
        const content = [ <h1 className="absolute bottom-20 right-110 z-40 text-blue-75 scale-900 anton-regular">THE <b>G</b>AME WITHIN</h1>,
            <h1 className="absolute bottom-20 right-110 z-40 text-blue-75 scale-900 anton-regular">CREATIVE <b>D</b>EPTH</h1>,
            <h1 className="absolute bottom-20 right-110 z-40 text-blue-75 scale-900 anton-regular">COMPETITIVE <b>C</b>ORE</h1>,
            <h1 className="absolute bottom-20 right-110 z-40 text-blue-75 scale-900 anton-regular">IRL <b>S</b>YNERGY</h1>]
        return content[idx-1];
    }

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    {/* Mini video preview - responsive sizing */}
                    <div className="mask-clip-path absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50
                    w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64
                    cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all
                        duration-500 ease-in hover:opacity-100 hover:scale-100'>
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(nextIdx)}
                                loop
                                controls={false}
                                muted
                                id="current-video"
                                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64
                                origin-center scale-150 object-center object-cover"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>

                    {/* Next video - responsive sizing */}
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIdx)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center absolute z-20 object-center object-cover
                        w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64
                        invisible"
                        controls={false}
                    />

                    {/* Main background video - always full size */}
                    <video
                        src={getVideoSrc((currentIdx === constants.Total_Videos-1) ? 1 : currentIdx)}
                        loop
                        muted
                        autoPlay
                        className="absolute left-0 top-0 object-center object-cover w-full h-full"
                        onLoadedData={handleVideoLoad}
                        controls={false}
                    />
                </div>

                {getVideoSyncedText(currentIdx)}

                {/* Responsive text */}
                <div className="z-40 absolute top-0 left-0 p-2 sm:p-4 md:p-6
                text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
                text-amber-700">
                    Hello
                </div>
            </div>
        </div>
    )
}
