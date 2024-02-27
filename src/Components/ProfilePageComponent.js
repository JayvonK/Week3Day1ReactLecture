import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext/UserContext';

const ProfilePageComponent = () => {

    const navigate = useNavigate();

    const handlePageChange = () => {
        navigate('/');
    }

    let data = useContext(UserContext);

    return (
        <div>
            <h1>This is the Profile Page</h1>
            <Button variant="success" onClick={handlePageChange}>Go Back To Home Page</Button>{' '}
            <h2>{data.user.name.title} {data.user.name.first} {data.user.name.last}</h2>
        </div>
    )
}

export default ProfilePageComponent
