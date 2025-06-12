import DisplayCase from "@/components/ui/DisplayCase";
import MagicLink from "@/components/ui/MagicLink";


const Footer = () => {
    return (
        <footer>
            <DisplayCase showBorder={false} className="pt-4 pl-4">
                <p className="">This site was built with Next.Js, React, Tailwind and deployed using AWS CDK, S3,
                    Cloudfront and
                    Route53.</p>
                <div className="flex flex-row gap-8">
                    <MagicLink title="LinkedIn" to="https://www.linkedin.com/in/kevingresmer"><img
                        src="/InBug-White.png" alt="LinkedIn logo"
                        className="max-w-6"/></MagicLink>
                    <MagicLink title="Github" to="https://github.com/Kgresmer"><img
                        src="/github-mark-white.png"
                        alt="github logo"
                        className="max-w-6"/></MagicLink>
                </div>
            </DisplayCase>
        </footer>
    );
}

export default Footer;