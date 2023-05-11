import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListUsers = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await fetch(
        "https://645cf892250a246ae313d573.mockapi.io/api/users/user"
      );
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };

  const handleDelete = async (user) => {
    try {
      const response = await fetch(
        `https://645cf892250a246ae313d573.mockapi.io/api/users/user/${user.id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert(`${user.name} User deleted successfully`);
        fetchUserList();
      } else {
        console.error("Error deleting user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Container className="table-container">
      <h1>List Users</h1>
      <br />
      <Table striped bordered hover style={{ border: "2px solid" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="d-flex justify-content-around">
                <Link
                  to={`/edit-user/${user.id}`}
                  className="btn btn-primary mr-2"
                >
                  Edit
                </Link>
                <Link to={`/profile/${user.id}`} className="btn btn-info mr-2">
                  Profile
                </Link>
                <Button variant="danger" onClick={() => handleDelete(user)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListUsers;
