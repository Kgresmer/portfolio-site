import {cn} from "@/lib/utils";

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
            <div className="transition duration-200 group-hover/bento:translate-x-2">
                <div className="mt-2 mb-2 font-sans font-bold">
                    {title}
                </div>
                <div className="font-sans text-xs font-normal">
                    {description}
                </div>
            </div>
        </div>
    );
};
