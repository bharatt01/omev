import { Outlet } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHead } from "@/lib/PageHead";

export default function RootLayout() {
  return (
    <>
      <PageHead title="OMEV — Built in Lakhimpur. Built for Bharat." />
      <div className="min-h-screen bg-cream text-ink">
        <Header />
        <main className="relative">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
