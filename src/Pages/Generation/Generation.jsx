import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import { ImTree } from "react-icons/im";
import "./Generation.css"
const Generation = () => {
    const [toggleFilter, setToggleFilter] = useState("FilterMainDiv");
    const myfun = () => {
        if (toggleFilter === "FilterMainDiv") {
            setToggleFilter("FilterMainDiv1");
        } else {
            setToggleFilter("FilterMainDiv");
        }
    }
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / My Genelogy / <span>Generation</span></p>
                </div>
                <Row id="filterRow">
                    <span id="filterLogo" onClick={() => myfun()}><i><BiFilter /></i>Filter</span>
                    <Row id={toggleFilter} className="p-0 m-0">
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
                            <button className="save filter">Filter <i><BiFilter /></i></button>
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
                                    <th>Action</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Join Date</th>
                                    <th>Active Status</th>
                                    <th>Lavel</th>
                                    <th>Sponsor ID(Name)</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td id="generationAction"><i><ImTree /></i></td>
                                    <td>John</td>
                                    <td>CP159782</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "green" }}>Active</td>
                                    <td>Lavel 1</td>
                                    <td>CP159782 (User Name)</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td id="generationAction"><i><ImTree /></i></td>
                                    <td>Smith</td>
                                    <td>CP159782</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "red" }}>InActive</td>
                                    <td>Lavel 2</td>
                                    <td>CP159782 (User Name)</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td id="generationAction"><i><ImTree /></i></td>
                                    <td>Bravo</td>
                                    <td>CP159782</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "green" }}>Active</td>
                                    <td>Lavel 3</td>
                                    <td>CP159782 (User Name)</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td id="generationAction"><i><ImTree /></i></td>
                                    <td>Bravo</td>
                                    <td>CP159782</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "green" }}>Active</td>
                                    <td>Lavel 4</td>
                                    <td>CP159782 (User Name)</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td id="generationAction"><i><ImTree /></i></td>
                                    <td>Bravo</td>
                                    <td>CP159782</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "red" }}>InActive</td>
                                    <td>Lavel 5</td>
                                    <td>CP159782 (User Name)</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td id="generationAction"><i><ImTree /></i></td>
                                    <td>Bravo</td>
                                    <td>CP159782</td>
                                    <td>2022-09-10 15:24:37</td>
                                    <td style={{ color: "red" }}>InActive</td>
                                    <td>Lavel 6</td>
                                    <td>CP159782 (User Name)</td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Generation