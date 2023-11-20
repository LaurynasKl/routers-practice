import { Header } from "../components/Header";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";

export function HomePage(){
    return (
        <>
        <Header />
            <main>
                <Features />
            </main>
        <Footer />
        </>
    );
}