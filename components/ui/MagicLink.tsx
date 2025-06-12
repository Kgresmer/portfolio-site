
const MagicLink = ({
                       title,
                       children,
                       to,
                       additionalStyles
                   }: {
                       title: string,
                       children: React.ReactNode,
                       to: string,
                       additionalStyles?: string,
                   }
) => {
    return (
        <a href={to}
           className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-40 md:mt-2 ${additionalStyles}`}>
            <span
                className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
                {title}
                {children}
  </span>
        </a>
    )
}

export default MagicLink;