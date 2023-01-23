import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./WithdrawalReport.css";
import { SiMicrosoftexcel } from "react-icons/si"
import { ImTree } from "react-icons/im";
const WithdrawalReport = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="pagePath">
                    <p className="m-0">Home / Withdrawal / <span>Withdrawal Report</span></p>
                </div>
                <Row id="withdrawalReportRow">

                    {/* <Col md="9">
                        <div id='mainExportToExcel'>
                            <div className="exportToExcelItems">
                                <h4>Total Withdrawal</h4>
                                <p>$ 114.75</p>
                            </div>
                            <div className="exportToExcelItems">
                                <h4>Paid Withdrawal</h4>
                                <p>$ 0</p>
                            </div>
                            <div className="exportToExcelItems">
                                <h4>Reject Withdrawal</h4>
                                <p>$ 300</p>
                            </div>
                        </div>
                    </Col> */}
                    <div id="supportDetailsDiv">
                        <Row id="supportDetailsRow">
                            <Col lg="3" md="3" sm="6" >
                                <div className="supportDetail f-2rem">
                                    <h1>$ 114.75</h1>
                                    <p>Total Withdrawal</p>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="6" >
                                <div className="supportDetail f-2rem">
                                    <h1>$ 0</h1>
                                    <p>Paid Withdrawal</p>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="6" >
                                <div className="supportDetail f-2rem fontRed">
                                    <h1>$ 300</h1>
                                    <p>Reject Withdrawal</p>
                                </div>
                            </Col>
                            <Col lg="3" md="3" sm="6" className="d-flex">
                                <div className='exportToExcelCol'>
                                    <button className="save exportToExcel"><i><SiMicrosoftexcel /></i> Export to Excel </button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* <Col md="3" className='exportToExcelCol'>
                        <button className="save exportToExcel"><i><SiMicrosoftexcel /></i> Export to Excel </button>
                    </Col> */}
                </Row>
                <Row>
                    <Row id="directTableRow">
                        <Col md="12" className="p-0">
                            <div style={{ width: "100%" }}>
                                <table>
                                    <tr>
                                        <th>S No.</th>
                                        <th>Amount ($)</th>
                                        <th>TDS (5%)</th>
                                        <th>Admin Charges @ ($)</th>
                                        <th>Payable Amount ($)</th>
                                        <th>Status</th>
                                        <th>Reason</th>
                                        <th>Date</th>

                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>300</td>
                                        <td>15</td>
                                        <td>15</td>
                                        <td>270</td>
                                        <td>Pending</td>
                                        <td></td>
                                        <td>2022-09-10 15:24:37</td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>100</td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td>90</td>
                                        <td>Pending</td>
                                        <td></td>
                                        <td>2022-09-10 15:24:37</td>

                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>400</td>
                                        <td>20</td>
                                        <td>20</td>
                                        <td>360</td>
                                        <td>Pending</td>
                                        <td></td>
                                        <td>2022-09-10 15:24:37</td>

                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>600</td>
                                        <td>30</td>
                                        <td>30</td>
                                        <td>540</td>
                                        <td>Pending</td>
                                        <td></td>
                                        <td>2022-09-10 15:24:37</td>

                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>400</td>
                                        <td>20</td>
                                        <td>20</td>
                                        <td>360</td>
                                        <td>Pending</td>
                                        <td></td>
                                        <td>2022-09-10 15:24:37</td>

                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>100</td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td>90</td>
                                        <td>Pending</td>
                                        <td></td>
                                        <td>2022-09-10 15:24:37</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default WithdrawalReport