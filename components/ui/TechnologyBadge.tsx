interface TechnologyBadgeProps {
    techName: string;
}

const TechnologyBadge = ({techName}: TechnologyBadgeProps) => {
    return (
        <div
            className="flex items-center rounded-full bg-slate-800 px-3 py-1 m-1 text-xs font-medium leading-5 text-violet-300 w-fit">
            {techName}
        </div>
    )
}

export default TechnologyBadge;