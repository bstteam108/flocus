"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from 'react';
import { getStrapiURL } from '../../src/utils/get-strapi-url';
import BrowserNavbar from './navbar';
import useWindowDimensions from '../../src/utils/useWindowDimensions';
import { getGlobalSettings } from '../../src/data/loader';
import MobileNav from '../MobileNav';

export default function Navbar() {
    const [data, setData] = useState(null); // Store the navbar data
    const BASE_URL = getStrapiURL();
    const dimension = useWindowDimensions(); // Now it runs on the client
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const navbar = await getGlobalSettings();
                if (!navbar) return;
                setData(navbar.data.header);

                setMobileNav(dimension.width !== 0 && dimension.width <= 991);
            } catch (error) {
                console.error("Failed to fetch navbar data:", error);
            }
        }

        fetchData();
    }, [dimension.width]); // Added dependency

    if (!data) return <p>Loading...</p>; // Prevent rendering before data is loaded

    return mobileNav ? (
        <MobileNav data={data} BASE_URL={BASE_URL} />
    ) : (
        <BrowserNavbar data={data} BASE_URL={BASE_URL} />
    );
}

