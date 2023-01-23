import React from 'react'
import "./EditProfile.css"
import { Container, Row, Col, Card, } from "react-bootstrap";
import { useState } from 'react';
// import One from "./../../Images/one.png"
import Two from "./../../Images/two.png"
// import Three from "./../../Images/three.png"
// import Check from "./../../Images/check.jpg"
import EditProfileSection from './EditProfileSection';
const password = () => {
    return (
        <>
            <section>
                <div className="form">
                    <Row>
                        <Col lg="6" id='passImage'>
                            <img src={Two} alt="" />
                        </Col>
                        <Col lg="6" style={{ margin: "auto" }}>
                            <div id="changePassword">
                                <div>
                                    <label>
                                        Old Password
                                    </label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label>
                                        New Password
                                    </label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>
                                        Confirm Password
                                    </label>
                                    <input type="email" />
                                </div>
                                <button className='save'>Update</button>
                                <button className='cancel'>Cancel</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
const EditProfile = () => {
    const [page, setPage] = useState("page1");
    const [active, setActive] = useState("true");
    return (
        <React.Fragment>
            <Container>
                <section id="editProfile">
                    <div id='profileImage' className="d-flex" style={{ justifyContent: "center" }}>
                        {/* <h1 className="text-center">Edit Profile</h1> */}
                    </div>
                    <div id='tabs' className="d-flex">
                        <p id="infoTab" className={`${active === "true" ? "userActive" : "notactive"}`} style={{ cursor: "pointer" }} onClick={() => (setPage("page1"), setActive("true"))}>User Information</p>
                        <p id="passTab" className={`${active != "true" ? "userActive" : "notactive"}`} style={{ cursor: "pointer" }} onClick={() => (setPage("page2"), setActive("false"))}>Change Password</p>
                    </div>
                    <section id='editProfileContent'>
                        {
                            page === "page1" ? <EditProfileSection /> : password()
                        }
                    </section>
                </section>
            </Container>
        </React.Fragment>
    )
}

export default EditProfile
