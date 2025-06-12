import Hero from "@/components/Hero";
import DisplayCase from "@/components/ui/DisplayCase";
import ImageCarousel from "@/components/ui/ImageCarousel";
import MagicLink from "@/components/ui/MagicLink";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center
         items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
        >
            <div className="max-w-7xl w-full">
                <Hero/>
                <section role="main" className="flex flex-col justify-center">
                    <DisplayCase>
                        <p>Hello! I’m Kevin Gresmer, a passionate Full-Stack Developer with a strong foundation in
                            building efficient, scalable, and user-centric web applications.</p><br/>
                        <p>Currently, I’m a Full-Stack Developer, helping the Federal Reserve create a new application
                            to sell and manage savings bonds. With a deep interest in modern web technologies and a
                            commitment to continuous learning, I enjoy tackling complex challenges and staying ahead of
                            industry trends. Whether it’s building responsive user interfaces, optimizing databases, or
                            deploying cloud-based applications, I thrive on creating impactful digital experiences.</p>
                        <br/>
                        <p>I hold a bachelor’s degree in environmental engineering from The University of Wisconsin -
                            Platteville, where I developed my problem-solving, time management skills and love for
                            Ultimate Frisbee.</p>
                    </DisplayCase>

                    <DisplayCase>
                        <p className="mb-8">This is just a nice carousel of pictures from throughout my life to help get to know me.
                            Each photo was converted to webp format and then uploaded to cloudinary so the site bundle
                            stays small.
                            The photos are retrieved and displayed crazy fast.</p>
                        <ImageCarousel />
                    </DisplayCase>
                </section>

                <footer>
                    <DisplayCase showBorder={false} className="pt-4 pl-4">
                        <p className="mb-4">Built with Next.Js, React, Tailwind and deployed using AWS CDK, S3, Cloudfront and Route53.</p>
                        <MagicLink title="LinkedIn" to="https://www.linkedin.com/in/kevingresmer"><img src="/InBug-White.png" alt="LinkedIn logo" className="max-w-6" /></MagicLink>
                    </DisplayCase>
                </footer>
            </div>
        </main>
    );
}
