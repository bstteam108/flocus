import { XLg } from "@styled-icons/bootstrap";
import Link from "next/link";
import c from "./mobileNav.module.css";

const navItem = [
    {
        id: 1,
        name: "Home",
        to: "/",
    },
    {
        id: 2,
        name: "About us",
        to: "/about",
    },
    {
        id: 4,
        name: "Review",
        to: "/categories",
    },
    {
        id: 5,
        name: "Contact",
        to: "/contact",
    },
];

export default function Sidebar({ show, toggle, data, BASE_URL }) {
    return (
        <div className={show ? `${c.sidebar} ${c.show}` : `${c.sidebar} ${c.hide}`}>
            <div className={c.header}>
                <h4>Menu</h4>
                <XLg width={25} height={25} onClick={toggle} />
            </div>
            <div className={c.sidebar_link}>
                <ul className={c.sidebar_ul}>
                <li className={c.sidebar_list}><Link href={'/'}>Home</Link></li>
                        {data.navigation.map((item, index) =>
                            <li className={c.sidebar_list} key={index}><Link href={item.href}>{item.text}</Link></li>
                        )}
                        {data.cta.map((item, index) =>
                            <li key={index} className={item.text == "CONTACT US" ? c.ss_hed_btn_1 : c.ss_hed_btn_2}><a href="#">{item.text}</a></li>
                        )}
                </ul>
            </div>
        </div>
    );
}


