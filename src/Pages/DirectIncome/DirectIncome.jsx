import React, { useState } from 'react'
import "./DirectIncome.css"
import { Container, Row, Col } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import RewardImg1 from "./../../Images/reward1.png"
const DirectIncome = () => {
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
                    <p className="m-0">Home / Payout Report / <span>Direct Income</span></p>
                </div>
                <Row id="filterRow">
                    <span id="filterLogo" onClick={() => myfun()}><i><BiFilter /></i>Filter</span>
                    <Row id={toggleFilter} className="p-0 m-0">
                        <Col lg="2">
                            <div>
                                <input type="text" placeholder='Search By Name' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="text" placeholder='Search User By Id' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="date" placeholder='from date' />
                            </div>
                        </Col>
                        <Col lg="2">
                            <div>
                                <input type="date" placeholder='to date' />
                            </div>
                        </Col>
                        <Col lg="2">
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
                        <div>
                            <button className="save filter" onClick={() => setToggleFilter("FilterMainDiv")}>Filter <i><BiFilter /></i></button>
                            <button className="cancel reset">Reset <i><GrPowerReset /></i></button>
                        </div>
                    </Row>
                </Row>
                <div id="directIncomeDiv">
                    <Row id="directIncomeRow">
                        <div id="rewardIncomeImg"><img src={RewardImg1} alt="" /></div>
                        <Col xs="6" md="6" lg="6" className="p-0">
                            <h4>Total Income</h4>
                            <p><span>$ </span>2400</p>
                        </Col>
                        <Col xs="6" md="6" lg="6" className="p-0">
                            <h4>Payable Income</h4>
                            <p><span>$ </span>2400</p>
                        </Col>
                    </Row>
                    <Row id="directTableRow" className="">
                        <Col md="12" className="p-0">
                            <div style={{ width: "100%" }}>
                                <table>
                                    <tr>
                                        <th>S No.</th>
                                        <th>User</th>
                                        <th>From</th>
                                        <th>Amount ($)</th>
                                        <th>Remark</th>
                                        <th>Date</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>User(Demo)</td>
                                        <td>C345642</td>
                                        <td>12</td>
                                        <td>Recieve direct income of amount 12 from test (CP159782) from level 1</td>
                                        <td>2022-09-10 15:24:37</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>User(Demo)</td>
                                        <td>C345642</td>
                                        <td>12</td>
                                        <td>Recieve direct income of amount 12 from test (CP159782) from level 1</td>
                                        <td>2022-09-10 15:24:37</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default DirectIncome