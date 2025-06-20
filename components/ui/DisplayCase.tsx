export interface DisplayCaseProps {
    children: React.ReactNode;
    showBorder?: boolean,
    className?: string,
}

const DisplayCase = ({children, className, showBorder = true}: DisplayCaseProps) => {
    return (
        <div className="relative flex rounded-lg p-[1px] focus:outline-none display-case mb-12">
            <span
                className={`p-[1.5px] w-full rounded-md ${showBorder ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" : ""}`}>
                <div className={`bg-slate-900 p-2 rounded-md ${className || ''}`}>
                    {children}
                </div>
            </span>
        </div>
    )
}

export default DisplayCase;