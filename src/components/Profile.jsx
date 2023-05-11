import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://645cf892250a246ae313d573.mockapi.io/api/users/user/${id}`);
        const data = await response.json();
        setUserData(data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <Container className="mt-0">
      <h1>Profile</h1>
      {userData && (
        <Card>
          <Card.Body>
            <Card.Title>Name : {userData.name}</Card.Title>
            <Card.Text>Email : {userData.email}</Card.Text>
            <Link to={`/edit-profile/${id}`} className="btn btn-primary">
              Edit Profile
            </Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Profile;
