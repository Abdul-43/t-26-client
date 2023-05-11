import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {useParams}  from "react-router-dom"

const EditUser = () => {
  let { id } = useParams();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://645cf892250a246ae313d573.mockapi.io/api/users/user/${id}`);
        const data = await response.json();
        setUserData(data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://645cf892250a246ae313d573.mockapi.io/api/users/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        alert("User updated successfully")
        setUserData({
          name: '',
          email: '',
          password: ''
        });
      } else {
        console.error('Error updating user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Container className='mt-0'>
      <h1>Edit User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            style={{width:"400px"}}
          />

        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            style={{width:"400px"}}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            style={{width:"400px"}}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Save Changes</Button>
      </Form>
    </Container>
  );
};

export default EditUser;
