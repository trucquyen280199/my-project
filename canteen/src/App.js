import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'; 
// import PrivateRoute from './base/PrivateRoute';
import PublicRoute from './base/PublicRoute';
import MainModule from './common/MainModule';
import Loading from "./common/Loading";

import DefUpMealShift from './pages/setting/Definition-update-meal-shift';
import DefUpGroupEating from './pages/setting/Definition-update-group-eating';
import DeviceSettings from "./pages/setting/Device-settings";
import FoodGroupSettings from "./pages/Food-group-settings";
import ManageDishes from "./pages/food-management/Manage-dishes";
import MenuManagement from "./pages/food-management/Menu-management";
import ManageOvertimeMenu from "./pages/Manage-overtime-menu";
import OvertimeRegulation from "./pages/Overtime-regulation-management";
import OvertimeTheMainMeal from "./pages/Overtime-the-main-meal";
import OrderOvertimeMeal from "./pages/Order-overtime-meal";
import ManageMealVouchers from "./pages/Manage-meal-vouchers";
import ManageOrderHistory from "./pages/Manage-order-history";
import MealStatistics from "./pages/Meal-statistics";
import ManageExtraMeal from "./pages/Manage-extra-meals";
import ReceiveMeal from "./pages/Receive-meal";
import ManageCurrentMealShift from "./pages/Manage-current-meal-shift";
import MealVoucherReport from "./pages/report/Meal-voucher-report";
import ExtraMealReport from "./pages/report/Extra-meal-report";
import FoodReport from "./pages/report/Food-report";
import EmployeeReport from "./pages/report/Employee-reports";


import './style.css';



function App(props) {

    // const menuList = props.menuList;
    const loadingRef = React.createRef()

    const showLoading = () => {
        loadingRef.current.showLoading(true)
    }
    const hideLoading = () => {
        loadingRef.current.showLoading(false)
    }
    

    const listComponent = [
        {view: <DefUpMealShift showLoading={showLoading} hideLoading={hideLoading}/>, path: "/DefUpMealShift"},
        {view: <DefUpGroupEating showLoading={showLoading} hideLoading={hideLoading}/>, path: "/DefUpGroupEating"},
        {view: <DeviceSettings showLoading={showLoading} hideLoading={hideLoading}/>, path: "/DeviceSettings"},
        {view: <FoodGroupSettings showLoading={showLoading} hideLoading={hideLoading}/>, path: "/FoodGroupSettings"},
        {view: <ManageDishes showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ManageDishes"},
        {view: <MenuManagement showLoading={showLoading} hideLoading={hideLoading}/>, path: "/MenuManagement"},
        {view: <ManageOvertimeMenu showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ManageOvertimeMenu"},
        {view: <OvertimeRegulation showLoading={showLoading} hideLoading={hideLoading}/>, path: "/OvertimeRegulation"},
        {view: <OvertimeTheMainMeal showLoading={showLoading} hideLoading={hideLoading}/>, path: "/OvertimeTheMainMeal"},
        {view: <OrderOvertimeMeal showLoading={showLoading} hideLoading={hideLoading}/>, path: "/OrderOvertimeMeal"},
        {view: <ManageMealVouchers showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ManageMealVouchers"},
        {view: <ManageOrderHistory showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ManageOrderHistory"},
        {view: <MealStatistics showLoading={showLoading} hideLoading={hideLoading}/>, path: "/MealStatistics"},
        {view: <ManageExtraMeal showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ManageExtraMeal"},
        {view: <ReceiveMeal showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ReceiveMeal"},
        {view: <ManageCurrentMealShift showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ManageCurrentMealShift"},
        {view: <MealVoucherReport showLoading={showLoading} hideLoading={hideLoading}/>, path: "/MealVoucherReport"},
        {view: <ExtraMealReport showLoading={showLoading} hideLoading={hideLoading}/>, path: "/ExtraMealReport"},
        {view: <FoodReport showLoading={showLoading} hideLoading={hideLoading}/>, path: "/FoodReport"},
        {view: <EmployeeReport showLoading={showLoading} hideLoading={hideLoading}/>, path: "/EmployeeReport"},
    ];

    const system = () => {
        return (
            <MainModule showLoading={showLoading} hideLoading={hideLoading} listComponent={listComponent} />
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