import Hero from "@/components/Hero";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative bg-slate-900 flex justify-center
         items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
        >
            <div className="max-w-7xl w-full max-w-[1015px]">
                <Hero/>
                <MainSection />
                <Footer />
            </div>
        </main>
    );
}
