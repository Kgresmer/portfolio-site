
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import MultiLayerParallax from "@/components/MultiLayerParallax";

export default function Home() {
    return (
        <main className="relative bg-slate-900 flex justify-center
         items-center flex-col overflow-hidden mx-auto"
        >
            <MultiLayerParallax />
            <div className="max-w-7xl w-full max-w-[1015px]">

                <MainSection />
                <Footer />
            </div>
        </main>
    );
}
