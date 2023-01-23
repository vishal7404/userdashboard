import React from "react";
import "./BinaryTree.css"
import UserImg from "./../../Images/user.png";
import Icon1 from "./../../Images/boy2.png"
import Icon2 from "./../../Images/boy2.png"
import ReactTooltip from 'react-tooltip';
import { Container, Row, Col } from "react-bootstrap";
const BinaryTree = () => {
    return (
        <React.Fragment >
            <ReactTooltip place="right" type="dark" effect="float" />
            <Container fluid className="of mb-4" >
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12" className="m-0 p-0">
                        <div className="imgDiv" data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0">
                            {/* <ReactTooltip place="top" type="dark" effect="float" /> */}
                            <img src={Icon1} alt="logo.png" />
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="6" className="m-0 p-0">
                        <div className="imgDiv" data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0">
                            <hr className="hrVerticalOnImg"></hr>
                            <img src={Icon1} alt="logo.png" />
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                    </Col>
                    <Col lg="6" md="6" sm="6" xs="6" className="m-0 p-0">
                        <div className="imgDiv" data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0">
                            <hr className="hrVerticalOnImg"></hr>
                            <img src={Icon1} alt="logo.png" />
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                    </Col>
                </Row>
                <Row>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0">
                            <hr className="hrVerticalOnImg"></hr>
                            <img src={Icon1} alt="logo.png" />
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>

                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>

                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0">
                            <hr className="hrVerticalOnImg"></hr>
                            <img src={Icon1} alt="logo.png" />
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>

                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>

                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0">
                            <hr className="hrVerticalOnImg"></hr>
                            <img src={Icon1} alt="logo.png" />
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>

                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" md="3" sm="3" xs="3" className="m-0 p-0">
                        <div className="imgDiv" data-html="true" data-tip="User: UserName <br/> Status: Active <br/> Total Member: L-2 R-2 <br/> Kit: 0">
                            <hr className="hrVerticalOnImg"></hr>
                            <img src={Icon1} alt="logo.png" />
                            <hr className="hrVertical"></hr>
                        </div>
                        <hr className="hrHorizontal"></hr>
                        <Row>
                            <Col lg="6" md="6" sm="6" xs="6" className="pr-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>
                                </div>

                            </Col>
                            <Col lg="6" md="6" sm="6" xs="6" className="pl-0">
                                <div className="imgDiv" data-html="true" data-tip="User: null <br/> Status: InActive <br/> Total Member: 0 <br/> Kit: 0">
                                    <ReactTooltip place="right" type="dark" effect="float" />
                                    <hr className="hrVerticalOnImg"></hr>
                                    <img src={Icon2} alt="logo.png" />
                                    <p className="null">Null</p>
                                </div>

                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container>
        </React.Fragment >
    );
}

export default BinaryTree
