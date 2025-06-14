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

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id = "vedio-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 size-64
                    cursor-pointer overflow-hidden rounded-lg  ">
                        <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all
                        duration-500 ease-in hover:opacity-100 hover:scale-100
                        '>
                            <video
                                ref={nextVideoRef}
                                src ={getVideoSrc(nextIdx)}
                                loop
                                controls={false}
                                muted
                                id = "current-video"
                                className="size-64 origin-center scale-150 object-center object-cover"
                                onLoadedData={handleVideoLoad}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIdx)}
                        loop
                        muted
                        id = "next-video"
                        className="absolute-center absolute z-20 object-center object-cover size-64 invisible"
                        controls={false}
                    />
                    <video
                        src={getVideoSrc((currentIdx === constants.Total_Videos-1)?1:currentIdx)}
                        loop
                        muted
                        autoPlay
                        className="absolute left-0 top-0 object-center object-cover size-full"
                        onLoadedData={handleVideoLoad}
                        controls={false}
                    />
                </div>
                <h1 className="font-family-zentry hero-heading absolute bottom-5 right-5 z-40 text-blue-75
                ">G<b>A</b>MING</h1>
            </div>
        </div>
    )
}
