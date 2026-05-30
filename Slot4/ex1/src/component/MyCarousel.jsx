import React from 'react';
import { Carousel } from 'react-bootstrap';
import { bannerData } from '../data/bannerData'; 

function MyCarousel() {
    return (
        <Carousel className="mb-5 shadow">
            {bannerData.map((banner) => (
                <Carousel.Item key={banner.id}>
                    <img
                        className="d-block w-100"
                        src={banner.imageSrc}
                        alt={banner.title}
                        style={{ height: 'auto', maxHeight: '650px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption 
                        className="mb-4 rounded-4" 
                        style={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                            padding: '20px 40px', 
                            bottom: '15%', 
                            maxWidth: '70%', 
                            margin: '0 auto', 
                            backdropFilter: 'blur(5px)' 
                        }}
                    >
                        <h3 className="fw-bold text-white mb-2 fs-2" style={{ letterSpacing: '1px' }}>
                            {banner.title}
                        </h3>
                        <p className="text-light fs-5 mb-0">
                            {banner.description}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MyCarousel;