'use client';

import React from 'react'
import officImg1 from "../../../public/assets/images/shapes/office-location-shape-1.png"
import officImg2 from "../../../public/assets/images/shapes/office-location-map.png"
import officImg3 from "../../../public/assets/images/resources/office-location-popup-img-1.jpg"
import officImg4 from "../../../public/assets/images/resources/office-location-popup-img-2.jpg"
import officImg5 from "../../../public/assets/images/resources/office-location-popup-img-3.jpg"
import officImg6 from "../../../public/assets/images/resources/office-location-popup-img-4.jpg"
import officImg7 from "../../../public/assets/images/resources/office-location-popup-img-5.jpg"
import Link from 'next/link'
import Image from 'next/image'
import TextAnimation from '@/components/elements/TextAnimation'

const OfficeLocation: React.FC = () => {
    return (
        <section className="office-location">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="office-location__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape-box">
                                        <div className="section-title__tagline-shape"></div>
                                        <div className="section-title__tagline-shape-2"></div>
                                    </div>
                                    <span className="section-title__tagline">Nuestras Ubicaciones</span>
                                </div>
                                <h2 className="section-title__title title-animation">
                                    <TextAnimation text='Servicios de Aseo Escolar' textColor='black'/>
                                    <TextAnimation text='en las Principales Ciudades' /> 
                                </h2>
                            </div>
                            <p className="office-location__text">Cobertura en las principales ciudades de Colombia. 
                                Servicios especializados de limpieza para instituciones educativas.</p>
                            <div className="office-location__btn-box">
                                <a href="#contact" onClick={(e) => {
                                    e.preventDefault();
                                    const element = document.getElementById('contact');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }} className="thm-btn">
                                    Contactar
                                    <span><i className="icon-diagonal-arrow"></i></span>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="office-location__right">
                            <div className="office-location__cities-list" style={{ 
                                padding: '40px 20px'
                            }}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <ul style={{ 
                                            listStyle: 'none', 
                                            padding: 0,
                                            margin: 0
                                        }}>
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#a8edea',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Bogotá</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Cundinamarca</p>
                                                </div>
                                            </li>
                                            
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#f093fb',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Santa Marta</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Magdalena</p>
                                                </div>
                                            </li>
                                            
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#4facfe',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Cartagena</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Bolívar</p>
                                                </div>
                                            </li>
                                            
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#43e97b',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Valledupar</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Cesar</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <ul style={{ 
                                            listStyle: 'none', 
                                            padding: 0,
                                            margin: 0
                                        }}>
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#fa709a',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Medellín</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Antioquia</p>
                                                </div>
                                            </li>
                                            
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#30cfd0',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Tunja</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Boyacá</p>
                                                </div>
                                            </li>
                                            
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#667eea',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Barranquilla</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Atlántico</p>
                                                </div>
                                            </li>
                                            
                                            <li style={{
                                                padding: '20px 25px',
                                                marginBottom: '15px',
                                                background: '#fff',
                                                borderRadius: '10px',
                                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer'
                                            }}>
                                                <span className="icon-pin" style={{ 
                                                    fontSize: '28px', 
                                                    color: '#ff9a9e',
                                                    marginRight: '20px'
                                                }}></span>
                                                <div>
                                                    <h4 style={{ 
                                                        fontSize: '20px', 
                                                        fontWeight: 'bold',
                                                        marginBottom: '5px',
                                                        color: '#1a1a1a'
                                                    }}>Cali</h4>
                                                    <p style={{ 
                                                        fontSize: '14px', 
                                                        color: '#666',
                                                        margin: 0
                                                    }}>Valle del Cauca</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocation;