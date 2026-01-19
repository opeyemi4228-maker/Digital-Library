import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

// Global Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "New Creation Digital Library",
  description: "A comprehensive digital library for faith-based resources, devotionals, sermons, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased text-gray-700`} suppressHydrationWarning>
        <Navbar />
        <Toaster position="top-right" />

        <AppContextProvider>
          {/* Global Navbar */}
  

          {/* Page Content */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
