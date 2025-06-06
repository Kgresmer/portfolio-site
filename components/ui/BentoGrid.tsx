import {cn} from "@/lib/utils";
import {BackgroundGradientAnimation} from "./BackgroundGradientAnimation";
import { Globe } from "./Globe";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                                  id
                              }: {
    className?: string;
    id?: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string,
    imgClassName?: string,
    titleClassName?: string,
    spareImg?: string,
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input relative row-span-1 flex flex-col justify-between space-y-4 border-red-500 rounded-xl border border-neutral-200 p-4 transition duration-200 hover:shadow-xl border-white/[0.2] bg-black shadow-none",
                className,
            )}
            style={{
                background: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(115, 0, 27, 1) 100%)'
            }}
        >
            <div className={`${id === 6} && 'flex justify-center h-full'`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img src={img} alt={img} className={cn(imgClassName, "object-cover object-center")}/>
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img src={spareImg} alt={spareImg} className="object-cover object-center w-full h-full"/>
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(titleClassName,
                        "group-hover relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 group-hover/bento:translate-x-2 transition duration-200")}>
                    <div className="font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-[#c1c2d3]">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                </div>

                {id === 2 && <Globe />}
            </div>
        </div>
    );
};
