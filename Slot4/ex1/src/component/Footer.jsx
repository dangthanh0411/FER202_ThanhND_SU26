import React from 'react';
import MyProfile from './MyProfile'; // Nhúng MyProfile vào Footer

function Footer() {
const profile = {
        id: "DE190735",
        name: "DangThanh",
        email: "ndangthanh0411@gmail.com",
        githubLink: "https://github.com/dangthanh0411/FER202_ThanhND_SU26",
        avatarSrc: "/images/images1.jpg"
    };

    return (
        <>
            {/* Viết code CSS cho footer canh cuối trang, nội dung đặt giữa trang */}
            <footer style={{position: 'fixed', bottom: 0, width: '100%', textAlign: 'center'}}>
                <MyProfile profile={profile} />
            </footer>
        </>
    );
}
    export default Footer;
