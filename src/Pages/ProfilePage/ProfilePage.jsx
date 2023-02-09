
import React, { useEffect, useState } from 'react'
import "./ProfilePage.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileImg from "./../../Images/profileImg.webp"
const ProfilePage = () => {
    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    }
    const [profileData, setprofileData] = useState([]);
    const [colorActive, setColorActive] = useState("#555");
    const GetData = async () => {
        try {
            console.log("token", localStorage.getItem("AuthToken"));
            const token = localStorage.getItem("AuthToken");
            const response = await fetch('http://192.168.1.16:3000/getprofile', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": token,
                }
            })
            var data = await response.json();
            console.log(data);
            setprofileData(data);
            if (data.result.status === "Active") {
                setColorActive("green");
            } else {
                setColorActive("red");
            }
            console.log("data is=", profileData.result.email);
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        GetData();
    }, [])

    return (
        <React.Fragment>
            <Container className="mt-4">
                <div className="pagePath">
                    <p className="m-0">Home / My Account / <span>Profile</span></p>
                </div>
                <div className='editProfileCard'>
                    <div className="d-flex">
                        <img src={ProfileImg} alt="logo.png" />
                        <div className='m-3' style={{ marginTop: "20px" }}>
                            <h3>{profileData.result?.name}</h3>
                            <p>Status: <span style={{ color: colorActive }}>{profileData.result?.status}</span></p>
                        </div>
                    </div>
                    <button>Edit Profile</button>
                </div>

                <div className="profileUserDetail">

                    <Row>
                        <Col lg="6">
                            <ul className="p-0">
                                <li><b>Sponsor :</b>{profileData.result?.sponsor_Id}</li>
                                <li><b>Name :</b>{profileData.result?.name}</li>
                                <li><b>Email :</b>{profileData.result?.email}</li>
                                <li><b>Status :</b>{profileData.result?.status}</li>
                            </ul>
                        </Col>
                        <Col lg="6">
                            <ul className="p-0">
                                <li><b>Sponsor Name : </b>{profileData.result?.sponsor_Name}</li>
                                <li><b>Mobile :</b> {profileData.result?.phone}</li>
                                <li><b>Date if joining :</b>{profileData.result?.joining_date}</li>
                                <li><b>Activation Date :</b>{profileData.result?.Activation_date}</li>
                            </ul>
                        </Col>
                    </Row>

                </div>

            </Container>
        </React.Fragment >

    )
}

export default ProfilePage