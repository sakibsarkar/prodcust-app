"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navlink = ({ children, href }) => {
    const path = usePathname()
    const isActive = path === href

    return (
        <Link href={href} className={isActive ? "activeRoute" : ""}>{children}</Link>
    );
};

export default Navlink;