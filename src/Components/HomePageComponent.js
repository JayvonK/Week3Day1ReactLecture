//rafce short hand for react arrow function component export
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../DataServices/DataServices';
import UserContext from '../UserContext/UserContext';

const HomePageComponent = () => {
    const [userInfo, setUserInfo] = useState({}); //userInfo is a state variable set to an empty object
    const [newPerson, setNewPerson] = useState(true); //newPerson is a state variable set to a boolean

    let data = useContext(UserContext)

    const navigate = useNavigate(); //Reacts-router-dom's method for changing URL locations

    const handlePageChange = () => {
        navigate('/profile');
    }

    const handleNewPerson = () => {
        setNewPerson(!newPerson);
    }

    //Everytime the component is re-rendered or a state is changed the useEffect hook fires.
    useEffect(() => {
        const getData = async () => {
            const fetchedData = await getUserData();
            console.log(fetchedData);
            setUserInfo(fetchedData);
            data.setUser(fetchedData);
        }

        getData();

    }, [newPerson])//Dependancy Array, determines when the useEffect fires


    return (
        <div>
            <h1>Hello this is our Home Page</h1>
            {/* if the left side epression is truth then the right side is returned, else nothing will be returned */}
            <h2>{userInfo.name && userInfo.name.title} {userInfo.name && userInfo.name.first} {userInfo.name && userInfo.name.last}</h2>

            <Button variant="secondary" onClick={handlePageChange}>Go To Profile Page</Button>{' '}
            <Button variant="warning" onClick={handleNewPerson}>New Person</Button>{' '}
        </div>
    )
}

export default HomePageComponent


