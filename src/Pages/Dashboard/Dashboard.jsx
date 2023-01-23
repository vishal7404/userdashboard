import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css"
import { BsPeople } from "react-icons/bs"
import { BsCart4 } from "react-icons/bs"
import { MdOutlineAutoGraph } from "react-icons/md"
import { GoMail } from "react-icons/go"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { SlWallet } from "react-icons/sl"
import { SlSpeedometer } from "react-icons/sl"
import { SiSemanticrelease } from "react-icons/si"
import { GiMoneyStack } from "react-icons/gi"
import { RiFacebookFill } from "react-icons/ri"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"
import MoneyCard from "../../Component/MoneyCard/MoneyCard";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import DashboardCard from "../../Component/DashboardCard/DashboardCard";
const data = [
    { label: 'January', income: 21, sales: 41 },
    { label: 'February', income: 35, sales: 79 },
    { label: 'March', income: 75, sales: 57 },
    { label: 'April', income: 51, sales: 47 },
    { label: 'May', income: 41, sales: 63 },
    { label: 'June', income: 47, sales: 71 }
];
const Overall = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg="3">
                    <MoneyCard
                        title="E-Wallet"
                        money="120"
                        icon={SlWallet}
                    />
                </Col>
                <Col lg="3">
                    <MoneyCard
                        title="Payout Panding"
                        money="70"
                        icon={SlSpeedometer}
                    />
                </Col>
                <Col lg="3">
                    <MoneyCard
                        title="Payout Released"
                        money="88"
                        icon={SiSemanticrelease}
                    />
                </Col>
                <Col lg="3">
                    <MoneyCard
                        title="Income"
                        money="140"
                        icon={GiMoneyStack}
                    />
                </Col>
            </Row>
        </React.Fragment>
    )
}
const Commission = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg="4">
                    <MoneyCard
                        title="E-Wallet"
                        money="2.00"
                        icon={SlWallet}
                    />
                </Col>
                <Col lg="4">
                    <MoneyCard
                        title="Payout Panding"
                        money="0.00"
                        icon={SlSpeedometer}
                    />
                </Col>
                <Col lg="4">
                    <MoneyCard
                        title="Payout Released"
                        money="0.00"
                        icon={SiSemanticrelease}
                    />
                </Col>

            </Row>
        </React.Fragment>
    )
}
const Dashboard = () => {
    const [overalltoggle, setOverallToggle] = useState("overall");
    return <>
        <React.Fragment>
            <Container fluid className="main p-0">
                <section id="dashboard">
                    <div className="topDiv">
                        <h2>Dashboard</h2>
                        <h4>Welcome to MLM readymade software</h4>
                    </div>
                    <section id="dashboardContent">
                        <Row>
                            <Col xl="6" >
                                <Row >
                                    <Col xl="6" lg="6" md="6" className="mb-3">
                                        <DashboardCard
                                            title="Total Joining"
                                            icon={BsPeople}
                                            quantity="5"
                                            about="Today's Joining"
                                        />

                                    </Col>
                                    <Col xl="6" lg="6" md="6" className="mb-3">
                                        <DashboardCard
                                            title="Total Order"
                                            icon={BsCart4}
                                            quantity="4"
                                            about="Today's Order"
                                        />
                                    </Col>
                                </Row>
                                <Row >
                                    <Col xl="6" lg="6" md="6" className="mb-3">
                                        <DashboardCard
                                            title="Total Payout Request"
                                            icon={MdOutlineAutoGraph}
                                            quantity="12"
                                            about="Today's Payout Request"
                                        />

                                    </Col>
                                    <Col xl="6" lg="6" md="6" className="mb-3">
                                        <DashboardCard
                                            title="Total Unreaded Mail"
                                            icon={GoMail}
                                            quantity="4"
                                            about="Today's Unreaded Mail"
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl="6" className="mb-3">
                                <div id="graphCol">
                                    <Row style={{ marginBottom: "10px" }}>
                                        <Col lg="6" md="6" sm="6" xs="6" className="dashGraphTopDiv">
                                            <p>Today's Sales</p>
                                            <h1><span>$ </span> 500</h1>
                                        </Col>
                                        <Col lg="6" md="6" sm="6" xs="6" className="dashGraphTopDiv">
                                            <p>Today's Earnings</p>
                                            <h1><span>$ </span> 140</h1>
                                        </Col>
                                    </Row>
                                    <div id="saleAndButton">
                                        <h5>Total Sales : $ 1200.00</h5>
                                        <button className="cancel earnBtn">View Earning <i><HiOutlineArrowNarrowRight /></i></button>
                                    </div>
                                    <div id="graphDiv">
                                        <ResponsiveContainer width="100%" height={300}>
                                            <LineChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
                                                <Tooltip />
                                                <XAxis dataKey="label" />
                                                <YAxis />
                                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                                <Legend />
                                                <Line type="monotone" dataKey="income" stroke="#5C519F" />
                                                <Line type="monotone" dataKey="sales" stroke="rgb(10, 207, 151)" />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div id="overallCommissionDiv">
                            <div id="overCommDiv">
                                <h5 id={`${overalltoggle === "overall" ? "overallActive" : "noId"}`} onClick={() => setOverallToggle("overall")}>OVERALL</h5>
                                <h5 id={`${overalltoggle === "commission" ? "overallActive" : "noId"}`} onClick={() => setOverallToggle("commission")}>COMMISSION</h5>
                            </div>
                            <hr></hr>
                            <div>
                                {
                                    overalltoggle === "overall" ? Overall() : Commission()
                                }
                            </div>
                        </div>
                        <div>
                            <Row className="p-4">
                                <Col lg="8" id="ReferralLinkCol">
                                    <div id="ReferralLink">
                                        <h5>Referral Link</h5>
                                        <div id="ReferralLinkBtn">
                                            <input type="text" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolor!"></input>
                                            <button>copy</button>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="4" id="socialMediaCol">
                                    <p>Social Media Share<span>(Referral Links)</span></p>
                                    <Row>
                                        <Col xs="4"><i id="socialMedia"><RiFacebookFill /></i></Col>
                                        <Col xs="4"><i id="socialMedia"><TiSocialTwitter /></i></Col>
                                        <Col xs="4"><i id="socialMedia"><TiSocialLinkedin /></i></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </section>

            </Container>
        </React.Fragment>
    </>
}
export default Dashboard;