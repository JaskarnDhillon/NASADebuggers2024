import Sidebar from "./components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex bg-[#111] w-full h-full">
            <Sidebar />
            <div className="flex-grow flex flex-col items-center justify-center">
                {children}
            </div>
        </main>
    );
}

  
