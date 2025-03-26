'use client'

import { List } from "@styled-icons/bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import c from "./mobileNav.module.css";
import Sidebar from "./sidebar";

export default function MobileNav({ data, BASE_URL }) {
    const [show, setShow] = useState(false);
    const toggleSidebar = () => setShow(!show);
    const pathname = usePathname(); // Get the current route

    useEffect(() => {
        // Close the sidebar when the route changes
        setShow(false);
    }, [pathname]); // Run effect when pathname changes

    return (
        <>
            <nav className={c.nav}>
                <div className={c.start}>
                    <button
                        className={c.sidebar_button}
                        onClick={toggleSidebar}
                        title="Menu"
                    >
                        <List width={51} height={35} />
                    </button>
                    <div className={c.brand}>
                        <Link href="/"><img src={`${BASE_URL}${data.logo.image.url}`} alt="Logo" /></Link>
                    </div>
                </div>
            </nav>
            <Sidebar show={show} toggle={toggleSidebar} data={data} BASE_URL={BASE_URL} />
        </>
    );
}
