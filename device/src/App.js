import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'; 
import PrivateRoute from './base/PrivateRoute';
import PublicRoute from './base/PublicRoute';
import MainModule from './common/MainModule';
import Loading from "./common/Loading";

import User from './pages/core/user';
import UserGroup from './pages/core/user-group';
import ImportFiles from './pages/core/importFiles';
import Module from './pages/core/setting/module';
import CoreCategory from './pages/core/setting/core-category';
import Mail from './pages/core/setting/mail';
import SMS from './pages/core/setting/sms';
import Dashboard from './pages/Access Control/dashboard/dashboard';
import Device from './pages/Access Control/Device/device';
import Door from './pages/Access Control/door';
import Elevator from './pages/Access Control/elevator';
import Monitoring from './pages/Access Control/monitoring';
import Zone from './pages/Access Control/zone';
import Camera from './pages/Access Control/camera';
import ReportByDoor from './pages/Access Control/report/report-by-door';
import ReportByDevice from './pages/Access Control/report/report-by-device';
import ReportByElevator from './pages/Access Control/report/report-by-elevator';
import Schedule from './pages/Access Control/generalSetting/schedule';
import Singnal from './pages/Access Control/generalSetting/singnal';
import Card from './pages/Access Control/generalSetting/card';
import GroupCard from './pages/Access Control/generalSetting/group-card';
import TriggerAction from './pages/Access Control/generalSetting/trigger-action';
import ModuleConfig from './pages/Access Control/generalSetting/module-config';
import AuditTrail from './pages/Access Control/audit-trail';
import Visitor from './pages/visitor/visitor';
import AccessGroup from "./pages/Access Control/access-control/access-group";
import AccessLevel from "./pages/Access Control/access-control/access-level";
import FloorLevel from "./pages/Access Control/access-control/floor-level";
import './pages/style.css';

function App() {
    const loadingRef = React.createRef()

    const showLoading = () => {
        loadingRef.current.showLoading(true)
    }
    const hideLoading = () => {
        loadingRef.current.showLoading(false)
    }
    

    const listComponent = [
        
        {view: <Dashboard showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Dashboard"},
        {view: <User  showLoading={showLoading} hideLoading={hideLoading}/>, path: "/User"},
        {view: <UserGroup  showLoading={showLoading} hideLoading={hideLoading}/>, path: "/UserGroup"},
        {view: <ImportFiles  showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ImportFiles"},
        {view: <Module showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Module"},
        {view: <CoreCategory showLoading={showLoading} hideLoading={hideLoading}/>, path: "/CoreCategory"},
        {view: <Mail showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Mail"},
        {view: <SMS showLoading={showLoading} hideLoading={hideLoading}/>, path: "/SMS"},
        {view: <Device showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Device"},
        {view: <Door showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Door"},
        {view: <Elevator showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Elevator"},
        {view: <Monitoring showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Monitoring"},
        {view: <Zone showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Zone"},
        {view: <Camera showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Camera"},
        {view: <ReportByDoor showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ReportByDoor"},
        {view: <ReportByElevator showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ReportByElevator"},
        {view: <ReportByDevice showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ReportByDevice"},
        {view: <Schedule showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Schedule"},
        {view: <Singnal showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Singnal"},
        {view: <Card showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Card"},
        {view: <GroupCard showLoading={showLoading} hideLoading={hideLoading}/>, path: "/GroupCard"},
        {view: <TriggerAction showLoading={showLoading} hideLoading={hideLoading}/>, path: "/TriggerAction"},
        {view: <ModuleConfig showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ModuleConfig"},
        {view: <AuditTrail showLoading={showLoading} hideLoading={hideLoading}/>, path: "/AuditTrail"},
        {view: <Visitor showLoading={showLoading} hideLoading={hideLoading}/>, path: "/Visitor"},
        {view: <AccessGroup showLoading={showLoading} hideLoading={hideLoading}/>, path: "/AccessGroup"},
        {view: <AccessLevel showLoading={showLoading} hideLoading={hideLoading}/>, path: "/AccessLevel"},
        {view: <FloorLevel showLoading={showLoading} hideLoading={hideLoading}/>, path: "/FloorLevel"},
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