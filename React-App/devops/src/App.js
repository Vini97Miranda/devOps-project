import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./assets/HomePage";
import Login from "./assets/Login";
import ChangePassword from "./assets/ChangePassword";
import DevPage from "./assets/DevPage";
import ScheduleAdd from "./assets/ScheduleAdd";
import SubmitStu from "./assets/SubmitStu";
import { getFeatureStatus } from './globalconfig';
import Calendar from "./assets/Calendar";
import Grades from "./assets/Grades";
function App() {
    const [featureStatus, setFeatureStatus] = useState(getFeatureStatus());

    useEffect(() => {
        const status = getFeatureStatus();
        setFeatureStatus(status);
    }, []);

    const updateFeatureStatus = (status) => {
        setFeatureStatus(status);
    };

    return (
        <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/login" element={<Login updateFeatureStatus={updateFeatureStatus} />} />
            <Route path="/change-password" index element={<ChangePassword />} />
            <Route path="/dev-page" index element={<DevPage />} />
            <Route  path="/calendar" index element={<Calendar />}
            /><Route path="/schedule-add" index element={<ScheduleAdd />} />
            <Route path="/SubmitStu" index element={<SubmitStu />} />
        </Routes>
    );
}

export default App;
