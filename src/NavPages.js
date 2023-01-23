import React from "react";
import { Routes, Route } from "react-router-dom";
import Check from "./Pages/Check/Check";
import Test from "./Test";
import WelcomeLetter from "./Pages/WelcomeLetter/WelcomeLetter";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Accounts from "./Pages/Accounts/Accounts";
import DirectPage from "./Pages/DirectPage/DirectPage";
import Generation from "./Pages/Generation/Generation";
import WithdrawalReport from "./Pages/WithdrawalReport/WithdrawalReport";
import KYC from "./Pages/KYC/KYC";
import PinTransfer from "./Pages/PinTransfer/PinTransfer";
import PinHistory from "./Pages/PinHistory/PinHistory";
import PinBox from "./Pages/PinBox/PinBox";
import MemberTopup from "./Pages/MemberTopup/MemberTopup";
import DirectIncome from "./Pages/DirectIncome/DirectIncome";
import LevelIncome from "./Pages/LevelIncome/LevelIncome";
import RewardIncome from "./Pages/RewardIncome/RewardIncome";
import Orders from "./Pages/Orders/Orders";
import Rewards from "./Pages/Rewards/Rewards";
import ReportPage from "./Pages/ReportPage/ReportPage";
import NewsEvent from "./Pages/NewsEvent/NewsEvent";
import Support from "./Pages/Support/Support";
import Tree from "./Pages/Tree/Tree";
import Dashboard from "./Pages/Dashboard/Dashboard";
const NavPages = () => {
    return (
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/check" element={<Check />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/welcome-letter" element={<WelcomeLetter />} />
                    <Route path="/profile-page" element={<ProfilePage />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route path="/direct" element={<DirectPage />} />
                    <Route path="/generation" element={<Generation />} />
                    <Route path="/withdrawal-report" element={<WithdrawalReport />} />
                    <Route path="/kyc" element={<KYC />} />
                    <Route path="/pin-transfer" element={<PinTransfer />} />
                    <Route path="/pin-history" element={<PinHistory />} />
                    <Route path="/pinbox" element={<PinBox />} />
                    <Route path="/member-topup" element={<MemberTopup />} />
                    <Route path="/direct-income" element={<DirectIncome />} />
                    <Route path="/level-income" element={<LevelIncome />} />
                    <Route path="/reward-income" element={<RewardIncome />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/report" element={<ReportPage />} />
                    <Route path="/news-event" element={<NewsEvent />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/tree" element={<Tree />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </section>
        </React.Fragment>
    );
};

export default NavPages;