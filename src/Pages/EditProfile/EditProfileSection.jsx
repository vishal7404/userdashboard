import React, { useState } from 'react'
import { Container, Row, Col, Card, } from "react-bootstrap";
const EditProfileSection = () => {
    const [file, setFile] = useState('https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg');
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <React.Fragment>
                <section className="formItems">
                    <div className="uploadImage">
                        <img src={file} alt="logo.png" />
                        <div className='chooseFile' onClick={handleChange}>
                            <label>
                                <span>Upload Profile</span>
                                <input type="file" />
                            </label>
                        </div>

                    </div>
                    <div className="form">
                        <Row>
                            <Col lg="2"></Col>
                            <Col lg="8">
                                <div>
                                    <label>
                                        Full Name
                                    </label>
                                    <input type="text" />
                                </div>

                                <div>
                                    <label>
                                        Username
                                    </label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label>
                                        Email Address
                                    </label>
                                    <input type="email" />
                                </div>


                                <div>
                                    <label>
                                        Contact Number
                                    </label>
                                    <input type="number" />
                                </div>
                                <button className='save'>Save</button>
                                <button className='cancel'>Cancel</button>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        </>
    )
}

export default EditProfileSection