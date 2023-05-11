import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

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
      const response = await fetch('https://645cf892250a246ae313d573.mockapi.io/api/users/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        // User created successfully
        console.log('User created successfully');
        // Reset form fields
        setUserData({
          name: '',
          email: '',
          password: ''
        });
      } else {
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Container>
      <h1>Create User</h1>
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

        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
