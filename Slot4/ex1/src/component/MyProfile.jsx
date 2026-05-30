import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MyProfile({ profile }) {
    return (
        <Card className="shadow-lg border-0" style={{ width: '22rem', borderRadius: '15px', overflow: 'hidden' }}>
            <Card.Img variant="top" src={profile.avatarSrc} style={{ height: '320px', objectFit: 'cover' }} />
            <Card.Body className="text-center p-4">
                <Card.Title className="fw-bold fs-4 mb-1">{profile.name}</Card.Title>
                <Card.Text className="text-muted mb-3">ID: {profile.id}</Card.Text>
                
                <div className="text-start bg-light p-3 rounded-3 mb-4" style={{ fontSize: '0.9rem' }}>
                    <strong>Email:</strong> {profile.email}
                </div>

                <Button variant="dark" href={profile.githubLink} target="_blank" className="w-100 rounded-pill fw-semibold py-2">
                    Truy cập GitHub
                </Button>
            </Card.Body>
        </Card>
    );
}

export default MyProfile;