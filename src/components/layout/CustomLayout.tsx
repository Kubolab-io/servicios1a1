"use client"
import React, { useContext } from 'react';
import MobileNav from '../elements/MobileNav';
import FreshFlowContext from '../context/FreshFlowContext';
import ScrollToTop from '../elements/ScrollToTop';
import SideBar from '../elements/SideBar';
import { usePathname } from 'next/navigation';
import MobileNavSingle from '../elements/MobileNavSingle';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const context = useContext(FreshFlowContext);
    if (!context) throw new Error('context is null!')
    const { isMobileOpen, isSearch } = context;
    const pathName = usePathname();
    return (
        <div className={`${isMobileOpen ? "locked" : ""} ${isSearch ? "search-active" : ""}`}>
            {children}
            {pathName === "/single-page" ? < MobileNavSingle /> : <MobileNav />}
            <ScrollToTop />
            <SideBar />
        </div >
    );
};

export default CustomLayout;