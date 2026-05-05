// components/Background/BackgroundVideo.tsx
"use client";
import { div } from "framer-motion/client";
import { memo } from "react";


const BackgroundVideo = memo(
    () => {
        return (
            <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
                <video
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={(e) => e.currentTarget.style.opacity = "1"}
                    className=" w-full h-full object-cover "
                >
                    <source src="/bg_video/video-bg.mp4" type="video/mp4" />
                </video>

            </div>

        );
    }
)


export default BackgroundVideo;