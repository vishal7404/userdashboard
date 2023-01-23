import React, { useState } from 'react'
import "./DirectPage.css"
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";

const DirectPage = () => {
    const [style, setStyle] = useState("FilterMainDiv");
    const myfun = () => {
        if (style === "FilterMainDiv") {
            setStyle("FilterMainDiv1");
        } else {
            setStyle("FilterMainDiv");
        }
    }
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / My Genelogy / <span>Direct</span></p>
                </div>
                <Row id="filterRow">
                    <span id="filterLogo" onClick={() => myfun()}><i><BiFilter /></i>Filter</span>
                    <Row id={style} className="p-0 m-0">
                        <Col lg="2" md="4">
                            <div>
                                <input type="text" placeholder='Search By Name' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input type="text" placeholder='Search User By Id' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input type="date" placeholder='from date' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <input type="date" placeholder='to date' />
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <select name="" id="">
                                    <option value="">--All--</option>
                                    <option value="">20</option>
                                    <option value="">50</option>
                                    <option value="">100</option>
                                    <option value="">200</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="2" md="4">
                            <div>
                                <select name="" id="">
                                    <option value="">--Status--</option>
                                    <option value="">Active</option>
                                    <option value="">Inactive</option>
                                </select>
                            </div>
                        </Col>
                        <div>
                            <button onClick={() => setStyle("FilterMainDiv")} className="save filter">Filter <i><BiFilter /></i></button>
                            <button className="cancel reset">Reset <i><GrPowerReset /></i></button>
                        </div>
                    </Row>
                </Row>
                <Row id="directTableRow">
                    <Col md="12" className="p-0">
                        <div style={{ width: "100%" }}>
                            <table>
                                <tr>
                                    <th>S No.</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Mobile</th>
                                    <th>Join Date</th>
                                    <th>Status</th>
                                    <th>Package</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>CP159782</td>
                                    <td>987654321</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "green" }}>Active</td>
                                    <td>$ 500</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Smith</td>
                                    <td>CP159782</td>
                                    <td>987654321</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "red" }}>InActive</td>
                                    <td>$ 100</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bravo</td>
                                    <td>CP159782</td>
                                    <td>987654321</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "green" }}>Active</td>
                                    <td>$ 1000</td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default DirectPage