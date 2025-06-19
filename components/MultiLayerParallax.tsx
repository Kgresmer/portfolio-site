"use client"
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";


const MultiLayerParallax = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div ref={ref} className="w-full h-screen overflow-hidden relative grid place-items-center mb-18">
            <motion.div style={{y: textY}} className="flex justify-center relative my-12 z-10">
                <div className="max-w-[89vw] flex flex-col flex-wrap items-center justify-center gap-6">
                    <TextGenerateEffect
                        className="text-center text-[22px] md:text-7xl lg:text-5xl text-white"
                        words="Kevin Gresmer"
                    />
                    <img src="/profile.webp" alt={'Kevin Gresmer profile image'}
                         className="border-blue-800 border-4 border-double rounded-full object-center max-w-xs"/>
                </div>
            </motion.div>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/image-full.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/image-bottom.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    )
}

export default MultiLayerParallax;