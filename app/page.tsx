import Hero from "@/components/Hero";
import ImageGrid from "@/components/ui/ImageGrid";
import DisplayCase from "@/components/ui/DisplayCase";

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
                        <p>Working on a virtualization list with pictures from throughout my life.
                            Each photo was converted to webp format and then uploaded to cloudinary so the site bundle
                            stays small.
                            The photos are retrieved and displayed crazy fast.</p>
                    </DisplayCase>
                </section>
                <ImageGrid/>
                <footer>
                    <DisplayCase>
                        <p>Footer</p>
                    </DisplayCase>
                </footer>
            </div>
        </main>
    );
}
