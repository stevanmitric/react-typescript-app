import React, { useEffect, useState } from 'react'
import { User } from '../ts/interfaces/User';
import { handleLogout } from '../helpers/logout';
import axios from 'axios';

const Home: React.FC = () => {


  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: ''
  });

  const userToken = localStorage.getItem('token');
  const userId = localStorage.getItem('userId')
  

  const fetchUserById = async() => {
    try {
      
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      setUser(response.data);
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUserById();
  }, [userId]);

  return (
    <div>
      <h2>Welcome, {user?.firstName} {user?.lastName}!</h2>
      <button type="submit" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home