import React, { useState, useEffect } from 'react';
import Dialog from "@mui/material/Dialog";
import Popoup from '../../Advertisement/PopupContent/Propopup';
import './banner.scss';

interface AppLocalizer {
    khali_dabba: boolean;
    pro_url?: string; // Add other properties as needed
}

const appLocalizer : AppLocalizer ={
    khali_dabba : true
}

export default function Banner(): JSX.Element {
    // Ensure localStorage is initialized correctly
    if (localStorage.getItem('banner') !== 'false') {
        localStorage.setItem("banner", "true");
    }

    const [modal, setModal] = useState<boolean>(false);
    const [banner, setBanner] = useState<boolean>(localStorage.getItem('banner') === 'true');

    const handleCloseBanner = (): void => {
        localStorage.setItem('banner', 'false');
        setBanner(false);
    };

    const handleClose = (): void => {
        setModal(false);
    };

    const handleOpen = (): void => {
        setModal(true);
    };

    useEffect(() => {
        if (!banner) return;

        const carouselItems: NodeListOf<Element> = document.querySelectorAll('.carousel-item');
        const totalItems: number = carouselItems.length;
        if (!totalItems) return;

        let currentIndex: number = 0;
        let interval: NodeJS.Timeout;

        const showSlide = (index: number): void => {
            carouselItems.forEach(item => item.classList.remove('active'));
            carouselItems[index].classList.add('active');
        };

        const nextSlide = (): void => {
            currentIndex = (currentIndex + 1) % totalItems;
            showSlide(currentIndex);
        };

        const prevSlide = (): void => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            showSlide(currentIndex);
        };

        const startAutoSlide = (): void => {
            interval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
        };

        const stopAutoSlide = (): void => {
            clearInterval(interval);
        };

        showSlide(currentIndex);
        startAutoSlide();

        // Event Listeners for Next and Previous Buttons
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopAutoSlide();
                startAutoSlide();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopAutoSlide();
                startAutoSlide();
            });
        }

        return () => {
            stopAutoSlide();
            if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
            if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
        };
    }, [banner]);

    return (
        <>
            {!appLocalizer.khali_dabba ? (
                banner ? (
                    <div className="custom-banner">
                        <Dialog
                            className="admin-module-popup"
                            open={modal}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title"
                        >	
                            <span 
                                className="admin-font adminLib-cross stock-manager-popup-cross"
                                onClick={handleClose}
                            ></span>
                            <Popoup />
                        </Dialog>
                        <div className="admin-carousel-container">
                            <div className="carousel-container">
                                <div className="admin-font adminLib-cross pro-slider-cross" onClick={handleCloseBanner}></div>
                                <div className="why-go-pro-tag" onClick={handleOpen}>Why Premium</div>
                                <ul className="carousel-list">
                                    <li className="carousel-item active">
                                        <div className="admin-pro-txt-items">
                                            <h3>This is a sample banner</h3>
                                            <p>Sample banner description</p>
                                            <a
                                                href="#"
                                                target='_blank'
                                                className="admin-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                    <li className="carousel-item">
                                        <div className="admin-pro-txt-items">
                                            <h3>This is an example banner</h3>
                                            <p>Example banner description</p>
                                            <a
                                                href="#"
                                                target='_blank'
                                                className="admin-btn btn-red"
                                            >
                                                View Pricing
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-controls">
                                <button id="prevBtn"><i className='admin-font adminLib-arrow-left'></i></button>
                                <button id="nextBtn"><i className='admin-font adminLib-arrow-right'></i></button>
                            </div>
                        </div>
                    </div>
                ) : null
            ) : null}
        </>
    );
}
