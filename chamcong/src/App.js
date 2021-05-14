import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'; 
import PrivateRoute from './base/PrivateRoute';
import PublicRoute from './base/PublicRoute';
import MainModule from './common/MainModule';
import Loading from "./common/Loading";

import Chart from './pages/home/chart';
import ListOfStaffTimekeep from './pages/basic-information/list-of-staff-timekeep';
import Absent from './pages/basic-information/absent';
import OverCoefficient from './pages/basic-information/over-coefficent';
import DeclareHolidays from './pages/basic-information/declare-holidays';
import DeviceInOut from './pages/basic-information/devices-in-out';
import ShiftGroup from './pages/basic-information/shift-group';
import Shift from './pages/basic-information/shift';
import Schedule from './pages/basic-information/schedule';

import ShiftStaff from './pages/work-plan/shift-staff';
import ShiftPlan from './pages/work-plan/shift-plan';
import Overtime from './pages/work-plan/overtime-plan';
import OffsetWork from './pages/work-plan/offsetwork';
import AbsentPlan from './pages/work-plan/absent-plan';
import AbsentPlanTime from './pages/work-plan/absent-plan-time';

 import './style.css';


function App() {
    const loadingRef = React.createRef()

    const showLoading = () => {
        loadingRef.current.showLoading(true)
    }
    const hideLoading = () => {
        loadingRef.current.showLoading(false)
    }
    

    const listComponent = [
        {view: <Chart showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Chart"},
        {view: <ListOfStaffTimekeep showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ListOfStaffTimekeep"},
        {view: <Absent showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Absent"},
        {view: <OverCoefficient showLoading={showLoading} hideLoading={hideLoading}/>, path: "/OverCoefficient"},
        {view: <DeclareHolidays showLoading={showLoading} hideLoading={hideLoading}/>, path: "/DeclareHolidays"},
        {view: <DeviceInOut showLoading={showLoading} hideLoading={hideLoading}/>, path: "/DeviceInOut"},
        {view: <ShiftGroup showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ShiftGroup"},
        {view: <Shift showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Shift"},
        {view: <Schedule showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Schedule"},
        
        {view: <ShiftStaff showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ShiftStaff"},
        {view: <ShiftPlan showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ShiftPlan"},
        {view: <Overtime showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Overtime"},
        {view: <OffsetWork showLoading={showLoading} hideLoading={hideLoading}/>, path: "/OffsetWork"},
        {view: <AbsentPlan showLoading={showLoading} hideLoading={hideLoading}/>, path: "/AbsentPlan"},
        {view: <AbsentPlanTime showLoading={showLoading} hideLoading={hideLoading}/>, path: "/AbsentPlanTime"},
    ];

    const system = () => {
        return (
            <MainModule showLoading={showLoading} hideLoading={hideLoading} listComponent={listComponent}/>
        );
    }

    return (
        <div className="App">
            <Loading ref={loadingRef}/>
            <BrowserRouter>
                <div>
                    <div className="content">
                        <Switch>
                            <PublicRoute exact path="/" component={system}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;