
"use client";

import React, { useContext, useState } from 'react';
import logo from "../../../public/assets/images/resources/logo-2.png";
import home_showcase_1 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg";
import home_showcase_2 from "../../../public/assets/images/home-showcase/home-showcase-1-2.jpg";
import home_showcase_3 from "../../../public/assets/images/home-showcase/home-showcase-1-3.jpg";
import Link from 'next/link';
import Image from 'next/image';
import FreshFlowContext from '../context/FreshFlowContext';

const MobileNav: React.FC = () => {
    const context = useContext(FreshFlowContext);
    if (!context) throw new Error('context is null!')
    const { setIsMobileOpen, isMobileOpen } = context;
    const [isHomeOpen, setIsHomeOpen] = useState<boolean>(false);
    const [isPageOpen, setIsPagesOpen] = useState<boolean>(false);
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
    const [isShopOpen, setIsShopOpen] = useState<boolean>(false);
    const [isBlogOpen, setIsBlogOpen] = useState<boolean>(false);
    const [product, setProducts] = useState<boolean>(false);
    const handleLinkClick = (): void => {
        setIsHomeOpen(false);
        setIsPagesOpen(false);
        setIsServicesOpen(false);
        setIsShopOpen(false);
        setIsBlogOpen(false);
        setProducts(false);
        setIsMobileOpen(false)
    };

    return (
        <div className={`mobile-nav__wrapper ${isMobileOpen ? 'expanded' : ''}`}>
            <div onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__overlay mobile-nav__toggler"></div>
            <div className="mobile-nav__content">
                <span onClick={() => setIsMobileOpen((pre) => !pre)} className="mobile-nav__close mobile-nav__toggler">
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image" onClick={handleLinkClick}>
                        <Image src={logo} width="150" alt="" />
                    </Link>
                </div>
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li>
                            <Link href="/" onClick={handleLinkClick}>Inicio</Link>
                        </li>
                        <li>
                            <a href="#about" onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick();
                                const element = document.getElementById('about');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}>Nosotros</a>
                        </li>
                        <li>
                            <a href="#services" onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick();
                                const element = document.getElementById('services');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}>Servicios</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick();
                                const element = document.getElementById('contact');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}>Contacto</a>
                        </li>
                    </ul>
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <Link href="mailto:info@serviciosunoa.com">
                            info@serviciosunoa.com
                        </Link>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <Link href="tel:+573014374588">(+57) 301-437-4588</Link>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <Link href="https://www.instagram.com/serviciosunoaoficial" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></Link>
                        <Link href="https://www.facebook.com/p/Servicios-Uno-a-Uno-100094252877806/" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-square"></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;