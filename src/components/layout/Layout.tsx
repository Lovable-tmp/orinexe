import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 pt-16 md:pt-20" role="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
