import { ReactNode } from "react";
declare interface SidebarLinkProps extends SidevarLinkItemProps {
    title: string;
    route:string;
    icon: React.ReactNode;
    isActive:boolean;
}
declare interface SidebarLinkItemProps {
    isActive: boolean;
}
declare interface HeaderBoxProps {
    title: string;
}