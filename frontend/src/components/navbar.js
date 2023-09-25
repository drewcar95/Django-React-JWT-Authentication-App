import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    } else {
      setIsAuth(false); // Ensure that isAuth is false if no token is found
    }
  }, []);

  const handleLogout = async () => {
    try {
        const response = await axios.post('/api/logout/', {
            refresh_token: 'your_refresh_token_here', // Include the user's refresh token
        });
        if (response.status === 200) {
            

        }
    } catch (error) {
        // Handle error
        console.error('Logout error:', error);
    }
    localStorage.removeItem('access_token');
    setIsAuth(false);

};


//   const handleLogout = () => {

    
//     // Clear the access_token from localStorage
//     localStorage.removeItem('access_token');
//     // Set isAuth to false after logout
//     setIsAuth(false);
//   };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>JWT Authentication</Navbar.Brand>
        <Nav>
          {isAuth ? (
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          ) : null}
        </Nav>
      </Navbar>
    </div>
  );
}