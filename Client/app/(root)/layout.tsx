import Header from "@/components/Header";
import StarsCanvas from "@/components/StarCanvas";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
                <StarsCanvas />
                <Header />
          {children}
      </main>
    );
  }