"use client"; // Mark as a Client Component

import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import AdminHeader from "./components/AdminHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <main className={`${isAdminRoute ? "bg-[#111] w-full h-full" : "flex bg-[#111] w-full h-full"}`}>
      {!isAdminRoute && <Sidebar />}
      {isAdminRoute && <AdminHeader />}
      <div className={isAdminRoute ? "block w-full" : "flex-grow"}>
        {children}
      </div>
    </main>
  );
}