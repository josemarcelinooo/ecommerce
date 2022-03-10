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
        orders: []
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

    let grossAmount = 0;

    const gross = () => {
        userInfo.orders.map(order => {
            return grossAmount += order.totalAmount;
        })
    }

    gross();

    return(
        localStorage.accessToken ?
        <>
          <Row>
             <Col className="pr-0">
                <Container className="mt-5 ml-0 mr-0 p-0" id="profile">
                  <Card className="text-left border-0" id="profileContainer">
                      <Card.Body>
                        <Card.Text>
                            First Name: {userInfo.firstName}
                        </Card.Text>
                        <Card.Text>
                            Last Name: {userInfo.lastName}
                        </Card.Text>
                        <Card.Text>
                            Middle Name: {userInfo.middleName}
                        </Card.Text>
                        <Card.Text>
                            Email: {userInfo.email}
                        </Card.Text>
                        <Card.Text>
                            Mobile No: {userInfo.mobileNo}
                        </Card.Text>
                        <Card.Text>
                            Gender: {userInfo.gender}
                        </Card.Text>
                        <Card.Text>
                            Home Address: {userInfo.homeAddress}
                        </Card.Text>
                        <Card.Body>
                        <Card.Text className="text-right">
                            {userInfo.orders.map(order => <div key={order.id}>{order.products.map(
                                product => 
                                    <>
                                        <div className="mt-5">Product Name: {product.productName}</div>
                                        <div>Quantity: {product.quantity}</div>
                                        <div>Subtotal: {order.totalAmount}</div>
                                    </>
                            )}</div>)}
                            <div><h5 className="mt-3">Total Amount: {grossAmount}</h5></div>
                            <a className="btn btn-success mt-2" href="/">Checkout</a>
                        </Card.Text>
                        </Card.Body>
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