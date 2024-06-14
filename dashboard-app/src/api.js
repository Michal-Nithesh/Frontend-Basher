// src/api.js
import axios from 'axios';

export const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error('No token found');
        return;
    }

    try {
        console.log('Fetching user data with token:', token);
        const response = await axios.get('http://127.0.0.1:8000/api/user/profile/', {
            headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log('User data fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};
