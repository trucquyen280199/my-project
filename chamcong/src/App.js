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