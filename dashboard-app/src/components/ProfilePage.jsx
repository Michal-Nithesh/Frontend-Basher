import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    const [profile, setProfile] = useState({});
    const token = localStorage.getItem('token');

useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user/profile/', {
        headers: {
            'Authorization': `Token ${token}`,
        },
    })
    .then(response => setProfile(response.data))
    .catch(error => console.error('Error:', error));
}, []);

return (
    <div>
        <h1>Profile Page</h1>
        <p>Name: {profile.username}</p>
        <p>Email: {profile.email}</p>
    </div>
);
};

export default ProfilePage;