import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/(layout)/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-dvh w-dvw p-0 m-0 bg-neutral-950 text-zinc-300 flex flex-col">
            <div className="flex-1">
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    );
}