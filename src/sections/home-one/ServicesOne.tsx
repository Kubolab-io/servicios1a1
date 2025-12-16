'use client';

import React from 'react';
import service1_shape_4 from "../../../public/assets/images/shapes/services-one-shape-4.png";
import service1_shape_3 from "../../../public/assets/images/shapes/services-one-shape-3.png";
import services1 from "../../../public/assets/images/services/services-one-img-1.jpg";
import services2 from "../../../public/assets/images/services/services-one-img-2.jpg";
import Image from 'next/image';
import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import { motion } from "framer-motion"
import TextAnimation from '@/components/elements/TextAnimation';

const ServicesOne: React.FC = () => {
    return (
        <section id="services" className="services-one">
            <div className="services-one__shape-bg"></div>
            <div className="services-one__shape-1"></div>
            <div className="services-one__shape-2"></div>
            <div className="services-one__shape-3 float-bob-x">
                <Image src={service1_shape_3} alt="services" />
            </div>
            <div className="services-one__shape-4 float-bob-y">
                <Image src={service1_shape_4} alt="services" />
            </div>

            <div className="container">
                <div className="services-one__top">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="services-one__top-left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape-box">
                                            <div className="section-title__tagline-shape"></div>
                                            <div className="section-title__tagline-shape-2"></div>
                                        </div>
                                        <span className="section-title__tagline">Servicios</span>
                                    </div>
                                    <h2 className="section-title__title title-animation">
                                        <TextAnimation text='Servicios Especializados para' textColor='black' />
                                        <TextAnimation text='Instituciones Educativas' textColor='' />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="services-one__top-right">
                                <p className="services-one__top-text">
                                    Ofrecemos servicios integrales de limpieza y
                                    <br />
                                    mantenimiento diseñados específicamente para <br />
                                    colegios y centros educativos en Colombia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-one__bottom">
                    <div className="row">
                        <div className="col-xl-5">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 1.8,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="services-one__left"
                            >
                                <div className="services-one__img-box">
                                    <div className="services-one__img-shape-1"></div>
                                    <div className="services-one__img">
                                        <Image src={services1} alt="services" />
                                    </div>
                                    <div className="services-one__img-2">
                                        <Image src={services2} alt="services" />
                                    </div>
                                    <div className="services-one__experience-box">
                                        <div className="services-one__experience-icon">
                                            <span className="icon-trophy"></span>
                                        </div>
                                        <div className="services-one__experience-content">
                                            <p><AdvanceCountUp ending={11} />
                                                <span>+ Años</span>
                                                <br /> de Experiencia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="col-xl-7">
                            <div className="services-one__right">
                                <ul className="services-one__services-list list-unstyled">
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <a href="#contact" onClick={(e) => {
                                                            e.preventDefault();
                                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                        }}>Limpieza de Aulas y Salones</a>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Limpieza profunda de salones de clase, <br />
                                                        pupitres, pizarras y áreas de aprendizaje
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <a href="#contact" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                }}><span className="icon-diagonal-arrow"></span></a>

                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <a href="#contact" onClick={(e) => {
                                                            e.preventDefault();
                                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                        }}>Sanitización de Baños</a>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Desinfección y limpieza profunda de <br />
                                                        baños escolares con productos especializados
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <a href="#contact" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                }}><span className="icon-diagonal-arrow"></span></a>

                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <a href="#contact" onClick={(e) => {
                                                            e.preventDefault();
                                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                        }}>Limpieza de Áreas Comunes</a>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Pasillos, cafeterías, bibliotecas y <br />
                                                        zonas recreativas siempre impecables
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <a href="#contact" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                }}><span className="icon-diagonal-arrow"></span></a>

                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <a href="#contact" onClick={(e) => {
                                                            e.preventDefault();
                                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                        }}>Mantenimiento de Áreas Verdes</a>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Cuidado de jardines, patios y <br />
                                                        zonas exteriores del colegio
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <a href="#contact" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                }}><span className="icon-diagonal-arrow"></span></a>

                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="services-one__services-single">
                                            <div className="services-one__count-and-content">
                                                <div className="services-one__count"></div>
                                                <div className="services-one__content">
                                                    <h3 className="services-one__title">
                                                        <a href="#contact" onClick={(e) => {
                                                            e.preventDefault();
                                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                        }}>Desinfección Especializada</a>

                                                    </h3>
                                                    <p className="services-one__text">
                                                        Protocolos de desinfección contra virus <br />
                                                        y bacterias para ambientes seguros
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="services-one__arrow">
                                                <a href="#contact" onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                                }}>
                                                    <span className="icon-diagonal-arrow"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOne;