'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
    // Número de WhatsApp
    const phoneNumber = '573014374588'; // Formato: código país + número sin espacios
    const message = encodeURIComponent('Hola, me gustaría solicitar información sobre servicios de aseo para instituciones educativas.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float-button"
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp size={32} />
            <style jsx>{`
                .whatsapp-float-button {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: #25D366;
                    color: white;
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    z-index: 9999;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    animation: pulse 2s infinite;
                }

                .whatsapp-float-button:hover {
                    background: #128C7E;
                    transform: scale(1.1);
                    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
                }

                @keyframes pulse {
                    0% {
                        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    }
                    50% {
                        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7);
                    }
                    100% {
                        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
                    }
                }

                @media (max-width: 768px) {
                    .whatsapp-float-button {
                        bottom: 20px;
                        right: 20px;
                        width: 55px;
                        height: 55px;
                    }
                }
            `}</style>
        </a>
    );
};

export default WhatsAppButton;

