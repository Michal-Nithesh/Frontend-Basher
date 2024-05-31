import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    const [profile, setProfile] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
        }

        axios.get('YOUR_BACKEND_URL/api/profile/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setProfile(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the profile!', error);
            if (error.response && error.response.status === 401) {
                navigate('/login');
            }
        });
    }, [navigate]);

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default ProfilePage;
