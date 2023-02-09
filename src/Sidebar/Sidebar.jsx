import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Sidebar.css"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../Images/logo.png"
import { IoMdArrowBack } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { MdManageAccounts } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FcApprove } from 'react-icons/fc';
import { BsFillPinFill } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { FcMoneyTransfer } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BiRegistered } from 'react-icons/bi';
import { AiFillGift } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import { ImNewspaper } from 'react-icons/im';
import { FcCustomerSupport } from 'react-icons/fc';
import { IoIosLogOut } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { GiLetterBomb } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdAccountBalance } from 'react-icons/md';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { AiOutlineFileText } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { ImTree } from 'react-icons/im';
import { FaUserCheck } from 'react-icons/fa';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import { NavLink } from "react-router-dom";
import Check from "../Pages/Check/Check";
import NavPages from "../NavPages";
import KYC from "./../Pages/KYC/KYC"
import WelcomeLetter from "../Pages/WelcomeLetter/WelcomeLetter";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import EditProfile from "../Pages/EditProfile/EditProfile";
import Accounts from "../Pages/Accounts/Accounts";
import DirectPage from "../Pages/DirectPage/DirectPage";
import Generation from "../Pages/Generation/Generation";
import Tree from "../Pages/Tree/Tree";
import WithdrawalReport from "../Pages/WithdrawalReport/WithdrawalReport";
import PinBox from "../Pages/PinBox/PinBox";
import PinTransfer from "../Pages/PinTransfer/PinTransfer";
import PinHistory from "../Pages/PinHistory/PinHistory";
import MemberTopup from "../Pages/MemberTopup/MemberTopup";
import DirectIncome from "../Pages/DirectIncome/DirectIncome";
import LevelIncome from "../Pages/LevelIncome/LevelIncome";
import RewardIncome from "../Pages/RewardIncome/RewardIncome";
import Orders from "../Pages/Orders/Orders";
import Rewards from "../Pages/Rewards/Rewards";
import ReportPage from "../Pages/ReportPage/ReportPage";
import NewsEvent from "../Pages/NewsEvent/NewsEvent";
import Support from "../Pages/Support/Support";

const Sidebar = () => {
    const [dropdown, setDropdown] = useState("none");
    const [genelogyDropdown, setGenelogyDropdown] = useState("none");
    const [pinDropdown, setPinDropdown] = useState("none");
    const [topupDropdown, setTopupDropdown] = useState("none");
    const [payoutReportDropdown, setPayoutReportDropdown] = useState("none");
    const [withdrawalDropdown, setWithdrawalDropdown] = useState("none");
    // ----------------------------Dropdown Icons --------------------------------------
    const [dropdownIcon, setDropdownIcon] = useState("0deg");
    const [genelogyDropdownIcon, setGenelogyDropdownIcon] = useState("0deg");
    const [pinDropdownIcon, setPinDropdownIcon] = useState("0deg");
    const [topupDropdownIcon, setTopupDropdownIcon] = useState("0deg");
    const [payoutReportDropdownIcon, setPayoutReportDropdownIcon] = useState("0deg");
    const [withdrawalDropdownIcon, setWithdrawalDropdownIcon] = useState("0deg");

    const [leftMargin, setLeftMargin] = useState("260px");
    const [toggle, setToggle] = useState("0");
    const [active, setActive] = useState("");
    // transform: rotate(180deg);
    const [activeSide, setActiveSide] = useState("activeSidebar");
    const [currentPage, setCurrentPage] = useState("dashboard");
    const [activePage, setActivePage] = useState(<Dashboard />)
    return (
        <React.Fragment>
            <Container fluid className="p-0">

                <div id="sidebar-wrapper" className="" style={{ left: toggle }}>
                    <div id="sidebarTopDiv">
                        <div className="logo" >
                            <img src={Logo} alt="logo.png" />
                            {/* <i><IoMdArrowBack /></i> */}
                        </div>
                    </div>

                    {/* <hr className="p-0" /> */}

                    <section style={{ padding: "5px" }}>
                        <div className="logowithtext">
                            <img src="https://cdn.vectorstock.com/i/1000x1000/53/21/young-businessman-profile-over-white-background-vector-12055321.webp" alt="logo.png" />
                            <h3 className="m-0">User Name <div></div></h3>
                            <p>CP159782 </p>
                        </div>
                        <div className={`items ${currentPage === "dashboard" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("dashboard"), setActivePage(<Dashboard />))}>
                            <i><AiFillHome /></i>
                            <h4 className="m-0">Dashboard</h4>
                        </div>

                        {/* --------------------------My Account------------------------ */}
                        <div className="dropdownitems" onClick={() => dropdown === "none" ? (setDropdown("block"), setDropdownIcon("180deg")) : (setDropdown("none"), setDropdownIcon("0deg"))}>
                            <div className={`head items ${(currentPage === "welcomeLetter" || currentPage === "profile" || currentPage === "editProfile" || currentPage === "account") ? "activeSidebar" : "noclass"}`} >
                                <i><MdManageAccounts /></i>
                                <h4 className="m-0">My Account</h4>
                                <i className="dropicon" style={{ transform: `rotate(${dropdownIcon})` }} ><BsChevronDown /></i>
                            </div>
                            <div className="dropdown" style={{ display: dropdown }}>

                                <div className="items" onClick={() => (setCurrentPage("welcomeLetter"), setActivePage(<WelcomeLetter />))}>
                                    <i><GiLetterBomb /></i>
                                    <h4 className="m-0">Welcome Letter</h4>
                                </div>


                                <div className="items" onClick={() => (setCurrentPage("profile"), setActivePage(<ProfilePage />))}>
                                    <i><CgProfile /></i>
                                    <h4 className="m-0">Profile</h4>
                                </div>


                                <div className="items" onClick={() => (setCurrentPage("editProfile"), setActivePage(<EditProfile />))}>
                                    <i><FiEdit /></i>
                                    <h4 className="m-0">Edit Profile</h4>
                                </div>

                                <div className="items" onClick={() => (setCurrentPage("account"), setActivePage(<Accounts />))}>
                                    <i><MdAccountBalance /></i>
                                    <h4 className="m-0">Accounts</h4>
                                </div>

                            </div>
                        </div>
                        {/* --------------------------------My Genelogy--------------------------------- */}
                        <div className="dropdownitems" onClick={() => genelogyDropdown === "none" ? (setGenelogyDropdown("block"), setGenelogyDropdownIcon("180deg")) : (setGenelogyDropdown("none"), setGenelogyDropdownIcon("0deg"))}>

                            <div className={`head items ${(currentPage === "direct" || currentPage === "generation" || currentPage === "tree") ? "activeSidebar" : "noclass"}`}>
                                <i><IoIosPeople /></i>
                                <h4 className="m-0">My Genelogy</h4>
                                <i className="dropicon" style={{ transform: `rotate(${genelogyDropdownIcon})` }} ><BsChevronDown /></i>
                            </div>
                            <div className="dropdown" style={{ display: genelogyDropdown }}>

                                <div className="items" onClick={() => (setCurrentPage("direct"), setActivePage(<DirectPage />))}>
                                    <i><GiLetterBomb /></i>
                                    <h4 className="m-0">Direct</h4>
                                </div>

                                <div className="items" onClick={() => (setCurrentPage("generation"), setActivePage(<Generation />))}>
                                    <i><CgProfile /></i>
                                    <h4 className="m-0">Generation</h4>
                                </div>


                                <div className="items" onClick={() => (setCurrentPage("tree"), setActivePage(<Tree />))}>
                                    <i><ImTree /></i>
                                    <h4 className="m-0">Tree</h4>
                                </div>

                            </div>
                        </div>
                        {/* -------------------Withdrawal------------------------------------ */}
                        <div className="dropdownitems" onClick={() => withdrawalDropdown === "none" ? (setWithdrawalDropdown("block"), setWithdrawalDropdownIcon("180deg")) : (setWithdrawalDropdown("none"), setWithdrawalDropdownIcon("0deg"))}>

                            <div className={`head items ${(currentPage === "withdrawalReport") ? "activeSidebar" : "noclass"}`} >
                                <i><BsCurrencyDollar /></i>
                                <h4 className="m-0">Withdrawal</h4>
                                <i className="dropicon" style={{ transform: `rotate(${withdrawalDropdownIcon})` }} ><BsChevronDown /></i>
                            </div>
                            <div className="dropdown" style={{ display: withdrawalDropdown }}>

                                <div className="items" onClick={() => (setCurrentPage("withdrawalReport"), setActivePage(<WithdrawalReport />))}>
                                    <i><AiOutlineFileText /></i>
                                    <h4 className="m-0">Withdrawal Report</h4>
                                </div>
                            </div>
                        </div>

                        <div className={`items ${currentPage === "kyc" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("kyc"), setActivePage(<KYC />))}>
                            <i><FaUserCheck /></i>
                            <h4 className="m-0">KYC</h4>
                        </div>

                        {/* --------------------------------PIN--------------------------------- */}

                        <div className="dropdownitems" onClick={() => pinDropdown === "none" ? (setPinDropdown("block"), setPinDropdownIcon("180deg")) : (setPinDropdown("none"), setPinDropdownIcon("0deg"))}>
                            <div className={`head items ${(currentPage === "pinTransfer" || currentPage === "pinHistory" || currentPage === "pinBox") ? "activeSidebar" : "noclass"}`} >
                                <i><BsFillPinFill /></i>
                                <h4 className="m-0">E-pin</h4>
                                <i className="dropicon" style={{ transform: `rotate(${pinDropdownIcon})` }} ><BsChevronDown /></i>
                            </div>
                            <div className="dropdown" style={{ display: pinDropdown }}>

                                <div className="items" onClick={() => (setCurrentPage("pinTransfer"), setActivePage(<PinTransfer />))}>
                                    <i><GiLetterBomb /></i>
                                    <h4 className="m-0">Pin Transfer</h4>
                                </div>


                                <div className="items" onClick={() => (setCurrentPage("pinHistory"), setActivePage(<PinHistory />))}>
                                    <i><CgProfile /></i>
                                    <h4 className="m-0">Pin History</h4>
                                </div>

                                <div className="items" onClick={() => (setCurrentPage("pinBox"), setActivePage(<PinBox />))}>
                                    <i><CgProfile /></i>
                                    <h4 className="m-0">PinBox</h4>
                                </div>

                            </div>
                        </div>
                        {/* ------------------------------topup-------------------------------------------- */}
                        <div className="dropdownitems" onClick={() => topupDropdown === "none" ? (setTopupDropdown("block"), setTopupDropdownIcon("180deg")) : (setTopupDropdown("none"), setTopupDropdownIcon("0deg"))}>
                            <div className={`head items ${(currentPage === "memberTopup") ? "activeSidebar" : "noclass"}`}>
                                <i><GiReceiveMoney /></i>
                                <h4 className="m-0">Topup</h4>
                                <i className="dropicon" style={{ transform: `rotate(${topupDropdownIcon})` }} ><BsChevronDown /></i>
                            </div>
                            <div className="dropdown" style={{ display: topupDropdown }}>

                                <div className="items" onClick={() => (setCurrentPage("memberTopup"), setActivePage(<MemberTopup />))}>
                                    <i><GiLetterBomb /></i>
                                    <h4 className="m-0">Member Topup</h4>
                                </div>

                            </div>
                        </div>

                        {/* --------------------------------------Payout Report--------------------------------------*/}
                        <div className="dropdownitems" onClick={() => payoutReportDropdown === "none" ? (setPayoutReportDropdown("block"), setPayoutReportDropdownIcon("180deg")) : (setPayoutReportDropdown("none"), setPayoutReportDropdownIcon("0deg"))}>
                            <div className={`head items ${(currentPage === "directIncome" || currentPage === "levelIncome" || currentPage === "rewardIncome") ? "activeSidebar" : "noclass"}`} >
                                <i><FaMoneyCheckAlt /></i>
                                <h4 className="m-0">Payout Report</h4>
                                <i className="dropicon" style={{ transform: `rotate(${payoutReportDropdownIcon})` }} ><BsChevronDown /></i>
                            </div>
                            <div className="dropdown" style={{ display: payoutReportDropdown }}>

                                <div className="items" onClick={() => (setCurrentPage("directIncome"), setActivePage(<DirectIncome />))}>
                                    <i><GiLetterBomb /></i>
                                    <h4 className="m-0">Direct Income</h4>
                                </div>

                                <div className="items" onClick={() => (setCurrentPage("levelIncome"), setActivePage(<LevelIncome />))}>
                                    <i><GiLetterBomb /></i>
                                    <h4 className="m-0">Level Income</h4>
                                </div>

                                <div className="items" onClick={() => (setCurrentPage("rewardIncome"), setActivePage(<RewardIncome />))}>
                                    <i><GiLetterBomb /></i>
                                    <h4 className="m-0">Reward Income</h4>
                                </div>

                            </div>
                        </div>

                        {/* -----------------------------------------------------------------------------------------------*/}

                        <div className={`items ${currentPage === "orders" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("orders"), setActivePage(<Orders />))}>
                            <i><BsFillCartCheckFill /></i>
                            <h4 className="m-0">Orders</h4>
                        </div>


                        <div className="items">
                            <i><BiRegistered /></i>
                            <h4 className="m-0">Register New User</h4>
                        </div>

                        <div className={`items ${currentPage === "rewards" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("rewards"), setActivePage(<Rewards />))}>
                            <i><AiFillGift /></i>
                            <h4 className="m-0">Rewards</h4>
                        </div>

                        <div className={`items ${currentPage === "report" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("report"), setActivePage(<ReportPage />))}>
                            <i><TbReport /></i>
                            <h4 className="m-0">Report</h4>
                        </div>

                        <div className={`items ${currentPage === "newsEvent" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("newsEvent"), setActivePage(<NewsEvent />))}>
                            <i><ImNewspaper /></i>
                            <h4 className="m-0">News & Event</h4>
                        </div>



                        <div className={`items ${currentPage === "support" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("support"), setActivePage(<Support />))}>
                            <i><MdSupportAgent /></i>
                            <h4 className="m-0">Support</h4>
                        </div>

                        <div className={`items ${currentPage === "logout" ? "activeSidebar" : "noclass"}`} onClick={() => (setCurrentPage("logout"), setActivePage(<Check />))}>
                            <i><IoIosLogOut /></i>
                            <h4 className="m-0">Logout</h4>
                        </div>

                    </section>

                </div>
                <div id="page-content" className="p-0" style={{ background: "#F4F7FC", minHeight: "100vh", marginLeft: toggle === "-260px" ? "0px" : "260px" }}>
                    <div className="navMain">
                        <div className="topNavbar">
                            <i onClick={() => toggle === "-260px" ? setToggle("0") : setToggle("-260px")} style={{ cursor: "pointer" }}> {toggle !== "-260px" ? <AiOutlineArrowLeft /> : <GiHamburgerMenu />}</i>
                            <div style={{ marginRight: toggle === "-260px" ? "0px" : "260px" }}>
                                {/* <h1>setting</h1> */}
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "80px" }} >
                        {activePage}
                    </div>
                </div>
            </Container >
        </React.Fragment >
    );
}
// const Sidebar = withRouter(Side);
export default Sidebar;