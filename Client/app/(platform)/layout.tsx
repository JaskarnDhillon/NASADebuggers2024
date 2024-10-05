import Sidebar from "./components/Sidebar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex bg-[#111]  w-full h-full">
        <Sidebar/>
          {children}
      </main>
    );
  }