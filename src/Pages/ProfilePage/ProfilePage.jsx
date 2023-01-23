
import React from 'react'
import "./ProfilePage.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
const ProfilePage = () => {
    return (
        <React.Fragment>
            <Container className="mt-4">
                <div className="pagePath">
                    <p className="m-0">Home / My Account / <span>Profile</span></p>
                </div>

                <div className='editProfileCard'>
                    <div className="d-flex">
                        <img src="https://cdn.vectorstock.com/i/1000x1000/53/21/young-businessman-profile-over-white-background-vector-12055321.webp" alt="logo.png" />

                        <div className='m-3' style={{ marginTop: "20px" }}>
                            <h3>Demo</h3>
                            <p>Status: <span style={{ color: "green" }}>Active</span></p>
                        </div>
                    </div>
                    <button>Edit Profile</button>
                </div>

                <div className="profileUserDetail">

                    <Row>
                        <Col lg="6">
                            <ul className="p-0">
                                <li><b>Suponsor :</b></li>
                                <li><b>Name :</b> User Name</li>
                                <li><b>Email :</b>companyname@gmail.com</li>
                                <li><b>Status :</b>Active</li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <ul className="p-0">
                                <li><b>Sponsor Name : </b></li>
                                <li><b>Mobile :</b> User Name</li>
                                <li><b>Date if joining :</b>2018-12-26 10:19:08</li>
                                <li><b>Activation Date :</b>2020-10-30 11:26:14</li>
                            </ul>
                        </Col>
                    </Row>

                </div>

            </Container>
        </React.Fragment>

    )
}

export default ProfilePage