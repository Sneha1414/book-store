import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from './ThemeProvider';
import './EditUser.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchUser = () => {
  const [userId, setUserId] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    roleId: '',
    role: '',
    password: '',
  });

  const handleSearchUser = async () => {
    try {
      const response = await axios.get(`https://book-e-sell-node-api.vercel.app/api/user/byId?id=${userId}`);
      setUser(response.data.result);
      setUpdatedUser(response.data.result);
      toast.success('User Found');
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(
        `https://book-e-sell-node-api.vercel.app/api/user/byId?id=${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        }
      );
  
      if (response.ok) {
        console.log('User updated successfully');
      } else {
        const errorData = await response.json();
        console.error('Error updating user:', errorData);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.success('User Updated successfully');
      navigate("/admin")
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="search-user-container">
      <h2>Search User by ID & Update</h2>
      <TextField
        label="User ID"
        variant="outlined"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
       <Button variant="contained" style={{ ...theme.buttons.primary }} onClick={handleSearchUser}>
              Search
            </Button>

      {user && (
        <div className="user-details">
          <h3>User Details:</h3>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Role ID: {user.roleId}</p>
          <p>Role: {user.role}</p>

          <h3>Update User:</h3>
          <TextField
            label="Email"
            name="email"
            value={updatedUser.email}
            onChange={handleInputChange}
          />
          <TextField
            label="First Name"
            name="firstName"
            value={updatedUser.firstName}
            onChange={handleInputChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={updatedUser.lastName}
            onChange={handleInputChange}
          />
          <TextField
            label="Role ID"
            name="roleId"
            value={updatedUser.roleId}
            onChange={handleInputChange}
          />
          <TextField
            label="Role"
            name="role"
            value={updatedUser.role}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            name="password"
            value={updatedUser.password}
            onChange={handleInputChange}
          />
          <Button variant="contained" style={{ ...theme.buttons.primary }} onClick={handleUpdateUser}>
              Update User
            </Button>
        </div>
      )}
    </div>
  );
};

export default SearchUser;

