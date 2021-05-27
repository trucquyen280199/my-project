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
                    menuName: "Trang chủ",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/Chart",
                            menuName: "Biểu đồ",
                        },
                    ]
                },
                {
                    menuName: "Thông tin cơ bản",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/ListOfStaffTimekeep",
                            menuName: "Danh sách nhân viên chấm công",
                        },
                        {
                            linkTo: "/Absent",
                            menuName: "Khai báo các kiểu vắng",
                        },
                        {
                            linkTo: "/OverCoefficient",
                            menuName: "Khai báo hệ số tăng ca",
                        },
                        {
                            linkTo: "/DeclareHolidays",
                            menuName: "Khai báo các ngày lễ ",
                        },
                        {
                            linkTo: "/DeviceInOut",
                            menuName: "Khai báo thiết bị ra vào",
                        },
                        {
                            linkTo: "/ShiftGroup",
                            menuName: "Khai báo nhóm ca ",
                        },
                        {
                            linkTo: "/Shift",
                            menuName: "Khai báo ca ",
                        },
                        {
                            linkTo: "/Schedule",
                            menuName: "Khai báo lịch trình",
                        },
                        // {
                        //     linkTo: "/SettingMethod",
                        //     menuName: "Setting Method",
                        // },
                    ]
                },
                {
                    menuName: "Kế hoạch làm việc",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/ShiftStaff",
                            menuName: "Xếp ca nhân viên",
                        },
                        {
                            linkTo: "/ShiftPlan",
                            menuName: "Kế hoạch ca nhân viên",
                        },
                        {
                            linkTo: "/Overtime",
                            menuName: "Kế hoạch tăng ca ",
                        },
                        {
                            linkTo: "/OffsetWork",
                            menuName: "Kế hoạch làm bù",
                        },
                        {
                            linkTo: "/AbsentPlan",
                            menuName: "Kế hoạch nghỉ phép dài hạn",
                        },
                        {
                            linkTo: "/AbsentPlanTime",
                            menuName: "Kế hoạch nghỉ phép ngắn hạn",
                        },
                    ]
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
                            <Content ref={this.contentRef} listComponent={this.props.listComponent} currentCommand={this.state.currentCommand}
                                     showLoading={this.props.showLoading} hideLoading={this.props.hideLoading} command={this.command}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainModule;