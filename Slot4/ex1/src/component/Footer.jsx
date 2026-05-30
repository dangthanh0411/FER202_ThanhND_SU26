import React from 'react';
import MyProfile from './MyProfile';
import { Container } from 'react-bootstrap';

function Footer() {
    const profile = {
        id: "DE190735",
        name: "DangThanh",
        email: "ndangthanh0411@gmail.com",
        githubLink: "https://github.com/dangthanh0411/FER202_ThanhND_SU26",
        avatarSrc: "/images/images1.jpg" 
    };

    return (
        <div className="bg-light py-5 mt-5 border-top">
            <Container className="d-flex justify-content-center">
                <MyProfile profile={profile} />
            </Container>
        </div>
    );
}

export default Footer;