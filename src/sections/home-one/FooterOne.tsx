"use client"
import React from 'react'
import footerimg1 from "../../../public/assets/images/shapes/site-footer-shape-2.png"
import footerimg2 from "../../../public/assets/images/resources/logo-2.png"
import footerimg3 from "../../../public/assets/images/shapes/site-footer-shape-1.png"
import footerimg4 from "../../../public/assets/images/resources/site-footer-top-right-heading-img.png"
import Image from 'next/image'
import Link from 'next/link'
const FooterOne: React.FC = () => {

    const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        alert("tel:+9288006780")

    };
    const handleinfoDom = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        alert("mailto:info@domain.com")
    }

    const handleForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const Email = formData.get("footerEmail") as string;
        const Swal = (await import("sweetalert2")).default;

        if (Email) {
            setTimeout(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Subscribed",
                    showConfirmButton: false,
                    timer: 1000
                });
            }, 1000)
        } else {
            Swal.fire({
                title: "Oops...",
                text: "Enter your email",
                icon: "error"
            });
        }
    }

    return (
        <footer className="site-footer">
            <div className="site-footer__shape-bg float-bob-y"
            ></div>
            <div className="site-footer__shape-2 img-bounce">
                <Image src={footerimg1} alt="" />
            </div>
            <div className="container">
                <div className="site-footer__inner">
                    <div className="site-footer__top">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__top-left">
                                    <div className="site-footer__logo-box">
                                        <div className="site-footer__logo">
                                            <Link href={"/"}><Image src={footerimg2} alt="" /></Link>
                                        </div>
                                        <p className="site-footer__text-1">Especializados en servicios de limpieza y mantenimiento
                                            para instituciones educativas, colegios y universidades. Creamos ambientes seguros 
                                            y saludables para el aprendizaje.</p>
                                    </div>
                                    <div className="site-footer__contact-info-box">
                                        <ul className="list-unstyled site-footer__contact-info">
                                            <li>
                                                <div className="site-footer__contact-info-icon">
                                                    <span className="icon-pin"></span>
                                                </div>
                                                <div className="site-footer__contact-info-content">
                                                    <p>Dirección:</p>
                                                    <h5>Calle 98 No 70 91 Of. 508<br />Bogotá – Colombia</h5>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled site-footer__contact-info site-footer__contact-info--two">
                                            <li>
                                                <div className="site-footer__contact-info-icon">
                                                    <span className="icon-envelope"></span>
                                                </div>
                                                <div className="site-footer__contact-info-content">
                                                    <p>Correo Electrónico:</p>
                                                    <h5><Link href="mailto:info@serviciosunoa.com">info@serviciosunoa.com</Link></h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="site-footer__contact-info-icon">
                                                    <span className="icon-phone-call"></span>
                                                </div>
                                                <div className="site-footer__contact-info-content">
                                                    <p>Teléfonos:</p>
                                                    <h5>
                                                        <Link href="tel:+573014374588">
                                                            (+57) 301-437-4588
                                                        </Link>
                                                        <br />
                                                        <Link href="tel:+573214783379">
                                                            (+57) 321-478-3379
                                                        </Link>
                                                    </h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="site-footer__social-box">
                                        <h4 className="site-footer__social-title">Síguenos</h4>
                                        <div className="site-footer__social">
                                            <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                            <Link href="#"><span className="icon-pinterest"></span></Link>
                                            <Link href="#"><span className="icon-linkedin-big-logo"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer__bottom-text-box text-center">
                                    <p className="site-footer__bottom-text">Copyright © 2025 by <Link href="/">ServiciosUnoaUno.</Link> All
                                        rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;