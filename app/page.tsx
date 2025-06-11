import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import ImageGrid from "@/components/ui/ImageGrid";
import {FaHome} from "react-icons/fa";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center
         items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
        >
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={[{name: 'Home', link: '/', icon: <FaHome/>}]}/>
                <Hero/>
                <section role="main">
                    <div className="p-8">
                        <p>Working on a virtualization list with pictures from throughout my life.</p>
                        <p>Each photo was converted to webp format and then uploaded to cloudinary so the site bundle
                            stays small.</p>
                        <p>The photos are retrieved and displayed crazy fast.</p>
                    </div>
                </section>
                <ImageGrid/>
                <footer>
                    <div className="mt-20">

                    </div>
                </footer>
            </div>
        </main>
    );
}
