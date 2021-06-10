import React from "react";
import './main_module.css'
import Content from "./Content";
import LeftMenu from "./LeftMenu";

class MainModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftOpen: true,
            currentCommand: "/modules",
            menuList: [
                
                {
                    linkTo: "/OvertimeTheMainMeal",
                    menuName: "Đặt suất ăn chính",
                    isSingle: true,
                },
                {
                    linkTo: "/OrderOvertimeMeal",
                    menuName: "Đặt suất ăn tăng ca",
                    isSingle: true,
                },
                {
                    linkTo: "/ManageMealVouchers",
                    menuName: "Quản lý phiếu ăn",
                    isSingle: true,
                },
                {
                    linkTo: "/ManageOrderHistory",
                    menuName: "Quản lý lịch sử đặt món",
                    isSingle: true,
                },
                {
                    linkTo: "/MealStatistics",
                    menuName: "Thống kê suất ăn",
                    isSingle: true,
                },
                {
                    linkTo: "/ManageExtraMeal",
                    menuName: "Quản lý suất ăn thêm",
                    isSingle: true,
                },
                {
                    menuName: "Quản lý thực phẩm",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/ManageDishes",
                            menuName: "Quản lý món ăn",
                        },
                        {
                            linkTo: "/MenuManagement",
                            menuName: "Quản lý thực đơn",
                        },  
                    ]
                },
                {
                    menuName: "Báo cáo",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/FoodReport",
                            menuName: "Báo cáo món ăn",
                        },
                        {
                            linkTo: "/EmployeeReport",
                            menuName: "Báo cáo nhân viên",
                        },
                        {
                            linkTo: "/ExtraMealReport",
                            menuName: "Báo cáo suất ăn thêm",
                        },
                        {
                            linkTo: "/MealVoucherReport",
                            menuName: "Báo cáo phiếu ăn (suất ăn)",
                        }
                    ]
                },
                {
                    linkTo: "/ManageOvertimeMenu",
                    menuName: "Quản lý combo thực đơn tăng ca",
                    isSingle: true,
                },
                {
                    linkTo: "/OvertimeRegulation",
                    menuName: "Quản lý quy định tăng ca",
                    isSingle: true,
                },
                {
                    linkTo: "/FoodGroupSettings",
                    menuName: "Cài đặt nhóm ăn cho người dùng",
                    isSingle: true,
                },
                {
                    menuName: "Cài đặt",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/DefUpMealShift",
                            menuName: "Định nghĩa và cập nhật ca ăn",
                        },
                        {
                            linkTo: "/DeviceSettings",
                            menuName: "Cài đặt thiết bị",
                        },
                        {
                            linkTo: "/DefUpGroupEating",
                            menuName: "Định nghĩa và cập nhật nhóm ăn",
                        },
                    ]
                },
                {
                    linkTo: "/ManageCurrentMealShift",
                    menuName: "Quản lý ca ăn hiện tại",
                    isSingle: true,
                },
                {
                    linkTo: "/ReceiveMeal",
                    menuName: "Nhận suất ăn",
                    isSingle: true,
                },
            ],
            
        }
        this.command = this.command.bind(this);
        this.action = this.action.bind(this);
        this.contentRef = React.createRef();
    }

    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({[key]: !this.state[key]});
    }

    command(command) {
        console.log(command);
        this.action(command);
    }

    action(command) {
        this.props.showLoading();
        this.contentRef.current.action(command);
        setTimeout(() => {
            this.props.hideLoading();
        }, 600);
    }

    render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        let rightOpen = this.state.rightOpen ? 'open' : 'closed';
        return (
            <div>
                <div id='layout'>
                    <div id='left' className={leftOpen}>
                        <div className='icon'
                             onClick={this.toggleSidebar}>
                            &equiv;
                        </div>
                        <div className={`sidebar ${leftOpen}`}>
                            {/* <div className="sidebar-bg"> */}
                                <div className='header'>
                                    <h3 className='title'>
                                    </h3>
                                </div>
                                <div className='content p-0'>
                                    <LeftMenu menuList={this.state.menuList} action={this.action}/>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div id='main'>
                        <div className='header'>
                            <h3 className={`title ${'left-' + leftOpen} ${'right-' + rightOpen}`}>
                                {this.props.title}
                            </h3>
                        </div>
                        <div className='content body-content'>
                            <Content menuList={this.state.menuList} ref={this.contentRef} listComponent={this.props.listComponent} currentCommand={this.state.currentCommand}
                                     showLoading={this.props.showLoading} hideLoading={this.props.hideLoading} command={this.command}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainModule;