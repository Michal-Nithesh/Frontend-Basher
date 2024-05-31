import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Leaderboard from './components/Leaderboard';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default App;
