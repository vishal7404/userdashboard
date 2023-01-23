import React from 'react'
import "./Orders.css"
import { Container, Row, Col } from "react-bootstrap";
import OrdersImg from "./../../Images/orders.png"
import RewardImg2 from "./../../Images/reward2.png"
const Orders = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / <span>Orders</span></p>
                </div>
                <div id="directIncomeDiv">
                    <div id="ordersImg"><img src={OrdersImg} alt="" /></div>
                    <Row id="directIncomeRow">
                        <Col xs="12" md="12" lg="12" className="p-0">
                            <h4>Total Package Amount</h4>
                            <p><span>$ </span>2400</p>
                        </Col>
                    </Row>
                    <Row id="directTableRow" className="">
                        <Col md="12" className="p-0">
                            <div style={{ width: "100%" }}>
                                <table>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Package Id</th>
                                        <th>Package Amount ($)</th>
                                        <th>Package Date</th>
                                        <th>Package Status</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>#3</td>
                                        <td>500</td>
                                        <td>2022-09-10 15:24:37</td>
                                        <td>Approved</td>
                                        <td><button className="save m-0">View Details</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>#7</td>
                                        <td>900</td>
                                        <td>2022-09-10 15:24:37</td>
                                        <td>Approved</td>
                                        <td><button className="save m-0">View Details</button></td>
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

export default Orders