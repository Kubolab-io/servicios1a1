'use client';

import React, { useContext } from 'react';
import FreshFlowContext from '../../components/context/FreshFlowContext';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import logo_1 from "../../../public/assets/images/resources/logo-1.png";
import image2 from "../../../public/assets/images/home-showcase/home-showcase-1-1.jpg";
import image3 from "../../../public/assets/images/home-showcase/home-showcase-1-2.jpg";
import image4 from "../../../public/assets/images/home-showcase/home-showcase-1-3.jpg";

const Header: React.FC = () => {
    const pathname = usePathname();
    const context = useContext(FreshFlowContext);

    if (!context) {
        throw new Error("FreshFlowContext is null");
    }

    const { setIsMobileOpen, setIsSearch } = context;

    const handleSearch = (): void => {
        setIsSearch((prev) => !prev);
    };
    const isActive = (path: string) => pathname === path;

    return (
        <header className="main-header">
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="icon-mail"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <Link href="mailto:info@serviciosunoa.com">info@serviciosunoa.com</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-phone-call"></i>
                                </div>
                                <div className="text">
                                    <p>
                                        <Link href="tel:+573014374588">(+57) 301-437-4588</Link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="icon-pin-1"></i>
                                </div>
                                <div className="text">
                                    <p>Calle 98 No 70 91 Of. 508, Bogotá</p>
                                </div>
                            </li>
                        </ul>
                        <div className="main-menu__top-social-box">
                            <h4 className="main-menu__top-social-title">Síguenos</h4>
                            <div className="main-menu__top-social">
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-facebook-app-symbol"></span>
                                </Link>
                                <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-pinterest"></span>
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-linkedin-big-logo"></span>
                                </Link>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <span className="icon-instagram"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/">
                                        <Image
                                            src={logo_1}
                                            alt="ServiciosUnoaUno Logo"
                                            priority
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <button
                                    className="mobile-nav__toggler"
                                    onClick={() => setIsMobileOpen((pre) => !pre)}
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                                <ul className="main-menu__list">
                                    <li className={isActive('/') ? 'current' : ''}>
                                        <Link href="/">Inicio</Link>
                                    </li>
                                    <li>
                                        <a href="#about" onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById('about');
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }}>Nosotros</a>
                                    </li>
                                    <li>
                                        <a href="#services" onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById('services');
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }}>Servicios</a>
                                    </li>
                                    <li>
                                        <a href="#contact" onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById('contact');
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }}>Contacto</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__search-cart-box">
                                    <div className="main-menu__search-box">
                                        <button
                                            onClick={handleSearch}
                                            className="main-menu__search searcher-toggler-box icon-search"
                                            aria-label="Toggle search"
                                        />
                                    </div>
                                </div>
                                <div className="main-menu__btn-box">
                                    <div className="main-menu__btn">
                                        <a href="#contact" onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById('contact');
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }}>
                                            <span className="icon-customer-support"></span>
                                            Solicitar Cotización
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;