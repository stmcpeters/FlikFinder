import UserAuth from "../components/UserAuth";
import React from 'react'
import Card from 'react-bootstrap/Card';
import CardBody from "react-bootstrap/esm/CardBody";

export default function Auth() {
  return (
    <div className="auth-card">
      <Card>
        <CardBody>
          <UserAuth />
        </CardBody>
      </Card>
    </div>
  )
}
