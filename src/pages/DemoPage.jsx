import { Header } from "../components/Header";
import { Demo } from "../components/Demo";
import { Footer } from "../components/Footer";

export function DemoPage(){
    return (
        <>
        <Header />
            <main>
                <Demo />
            </main>
        <Footer />
        </>
    );
}