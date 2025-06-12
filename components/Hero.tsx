import {Spotlight} from "@/components/ui/Spotlight";
import {cn} from "@/lib/utils";
import {TextGenerateEffect} from "./ui/TextGenerateEffect";

const Hero = () => {
    return (
        <div className="pb-0 pt-16">
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
                <div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-black"/>
            </div>

            <div className="flex justify-center relative my-12 z-10">
                <div className="max-w-[89vw] flex flex-row flex-wrap items-center justify-center gap-12">
                    <div className="flex flex-col">
                        <TextGenerateEffect
                            className="text-center text-[22px] md:text-2xl lg:text-3xl text-white"
                            words="Kevin Gresmer"
                        />
                        <TextGenerateEffect
                            className="text-center text-[22px] md:text-2xl lg:text-3xl text-white"
                            words="Full Stack Web Developer"
                        />
                        <TextGenerateEffect
                            className="text-center text-[20px] md:text-2xl lg:text-3xl text-white"
                            words="Minneapolis, MN"
                        />
                    </div>
                    <img src="/profile.webp" alt={'Kevin Gresmer profile image'}
                         className="border-blue-800 border-4 border-double rounded-full object-center max-w-xs"/>

                </div>

            </div>
        </div>
    )
}

export default Hero;