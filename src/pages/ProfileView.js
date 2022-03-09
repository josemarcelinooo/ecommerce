import { useState, useEffect } from "react";
import {Row, Col, Card, Container} from 'react-bootstrap';
import { Navigate } from "react-router-dom";

export default function ProfileView(){
    const [userInfo, setUserInfo] = useState({
        firstName: null,
        lastName: null,
        middleName: null,
        email: null,
        mobileNo: null,
        gender: null,
        homeAddress: null,
        orders: null
    });

    useEffect (() => {
        fetch("https://fierce-retreat-87941.herokuapp.com/users/profile", {
            headers: {
                Authorization: `Bearer ${localStorage.accessToken}`
            }
        }).then(res => res.json()).then(convertedData => {
            setUserInfo({
                firstName: convertedData.firstName,
                middleName: convertedData.middleName,
                lastName: convertedData.lastName,
                email: convertedData.email,
                mobileNo: convertedData.mobileNo,
                gender: convertedData.gender,
                homeAddress: convertedData.homeAddress,
                orders: convertedData.orders
            })
        })
    });

    return(
        localStorage.accessToken ?
        <>
          <Row>
             <Col>
                <Container>
                  <Card className="text-center">
                      <Card.Body>
                        <Card.Text>
                            {userInfo.firstName}
                        </Card.Text>
                        <Card.Text>
                            {userInfo.lastName}
                        </Card.Text>
                        <Card.Text>
                            {userInfo.middleName}
                        </Card.Text>
                        <Card.Text>
                            {userInfo.email}
                        </Card.Text>
                        <Card.Text>
                            {userInfo.mobileNo}
                        </Card.Text>
                        <Card.Text>
                            {userInfo.gender}
                        </Card.Text>
                        <Card.Text>
                            {userInfo.homeAddress}
                        </Card.Text>
                        <Card.Text>
                            {JSON.stringify(userInfo.orders)}
                        </Card.Text>
                      </Card.Body>
                  </Card>
                </Container>
             </Col>
          </Row>
        </>
        :
        <Navigate to="/login" replace={true}/>
    );
}