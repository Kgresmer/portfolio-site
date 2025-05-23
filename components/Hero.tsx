import {Spotlight} from "@/components/ui/Spotlight";
import {cn} from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight className="-top-40 -left-40 md:left-12 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-12 left-70 h-[80vh] w-[50vw] md:left-80" fill="purple"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
            </div>

            <div className="flex h-screen w-full items-center justify-center dark:bg-black-100 absolute top-0 left-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,blue_1px,transparent_1px),linear-gradient(to_bottom,purple_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-black"/>
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with Next.js
                    </h2>
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
                        words="Transforming Concepts into Seamless Experiences"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi I&apos;m Kevin Gresmer, a Full Stack Web Developer based in Minneapolis, MN.
                    </p>

                    <a href="#about">
                        <MagicButton title="About" icon={<FaLocationArrow />} position="right"/>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Hero;