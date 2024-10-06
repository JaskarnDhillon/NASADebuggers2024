import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StarsCanvas from "@/components/StarCanvas";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // bg-[#030014]
    return (
      <main className=" ">
                {/* <StarsCanvas /> */}
                <Header />
                
          {children}
          <Footer/>
      </main>
    );
  }