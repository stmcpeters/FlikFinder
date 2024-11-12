import UserAuth from "../components/UserAuth";
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardBody from "react-bootstrap/esm/CardBody";
import NavBar from "../components/NavBar";

export default function Auth(user, isLoggedIn, setIsLoggedIn, setUser) {
  console.log(user);
  return (
    <>
      <NavBar />
      <div className="auth-card">
        <Card>
          <CardBody>
            <UserAuth />
          </CardBody>
        </Card>
      </div>
    </>
  )
}
