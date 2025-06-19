import TechnologyBadge from "@/components/ui/TechnologyBadge";

interface JobDescriptionProps {
    timeline: string;
    jobTitle: string;
    descLines: string[];
    technologies: string[];
}

const JobDescription = ({timeline, jobTitle, descLines, technologies}: JobDescriptionProps) => {
    return (
        <div className="flex p-4 flex-col md:flex-row opacity-0 desc-container">
            <p className="text-sm mr-4">{timeline}</p>
            <div className="flex flex-col flex-4">
                <h3 className="font-bold">{jobTitle}</h3>
                <ul>
                    {descLines.map(line => <li className="text-sm" key={line}>{line}</li>)}
                </ul>
                <div className="flex flex-row flex-wrap">
                    {technologies.map(tech => <TechnologyBadge key={tech} techName={tech}/>)}
                </div>
            </div>
        </div>
    )
}

export default JobDescription;