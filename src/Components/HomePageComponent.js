//rafce short hand for react arrow function component export
import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const HomePageComponent = () => {

    const navigate = useNavigate(); //Reacts-router-dom's method for changing URL locations

    const handlePageChange = () => {
        navigate('/profile');
    }

  return (
    <div>
      <h1>Hello this is our Home Page</h1>

      <Button variant="secondary" onClick={handlePageChange}>Go To Profile Page</Button>{' '}
    </div>
  )
}

export default HomePageComponent


