"use client"
import DisplayCase from "@/components/ui/DisplayCase";
import ImageCarousel from "@/components/ui/carousel/ImageCarousel";
import JobDescription from "@/components/ui/JobDescription";
import {Jobs} from "@/data";
import {useGSAP} from "@gsap/react";
import {animateWithGsap} from "@/utils/animations";

const MainSection = () => {

    useGSAP(() => {
        animateWithGsap('.desc-text', {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        });
        animateWithGsap('.desc-container', {
            scale: 1,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        });
    }, [])

    return (
        <section role="main" className="flex flex-col justify-center">
            <DisplayCase showBorder={false}>
                <p className="opacity-0 desc-text">Hello! I’m Kevin Gresmer, a passionate developer with a strong
                    foundation in
                    building efficient, scalable, and user-centric web applications.</p><br/>
                <p className="opacity-0 desc-text">Currently, I’m a Full-Stack Developer, helping the Federal Reserve
                    create a new application
                    to sell and manage savings bonds. With a deep interest in modern web technologies and a
                    commitment to continuous learning, I enjoy tackling complex challenges and staying ahead of
                    industry trends. Whether it’s building responsive user interfaces, optimizing databases, or
                    deploying cloud-based applications, I thrive on creating impactful digital experiences.</p>
                <br/>
                <p className="opacity-0 desc-text">I hold a bachelor’s degree in environmental engineering from The
                    University of Wisconsin -
                    Platteville, where I developed my problem-solving, time management skills and love for
                    Ultimate Frisbee.</p>
            </DisplayCase>

            <DisplayCase showBorder={false}>
                {Jobs.map(job => <JobDescription key={job.jobTitle} descLines={job.descLines} jobTitle={job.jobTitle}
                                                 timeline={job.timeline} technologies={job.technologies}/>)}
            </DisplayCase>

            <DisplayCase className="lg:pb-[55px]" showBorder={false}>
                <p className="mb-8 p-6">This is just a nice carousel of pictures from throughout my life to help get to
                    know
                    me.
                    Each photo was converted to webp format and then uploaded to cloudinary so the site bundle
                    stays small.
                    The photos are retrieved and displayed crazy fast.</p>
                <ImageCarousel/>
            </DisplayCase>
        </section>
    );
}

export default MainSection;