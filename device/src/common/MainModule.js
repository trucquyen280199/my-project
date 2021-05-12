import React from "react";
import './main_module.css'
import Content from "./Content";
import LeftMenu from "./LeftMenu";

class MainModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftOpen: true,
            currentCommand: "/Dashboard",
            menuListCore:[
                {
                    linkTo: "/User",
                    menuName: "Người dùng",
                    isSingle: true
                },
                {
                    linkTo: "/Permission",
                    menuName: "Phân quyền",
                    isSingle: true
                },
                {
                    linkTo: "/ImportFiles",
                    menuName: "Nhập file",
                    isSingle: true
                },
                {
                    menuName: "Cài đặt",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/Module",
                            menuName: "Mô-đun",
                        },
                        {
                            linkTo: "/CoreCategory",
                            menuName: "Danh mục cốt lõi",
                        },
                        {
                            linkTo: "/Mail",
                            menuName: "Hộp thư",
                        },
                        {
                            linkTo: "/SMS",
                            menuName: "SMS",
                        },
                    ]
                },
            ],
            
            menuListAccessControl: [
                {
                    linkTo: "/Dashboard",
                    menuName: "Dashboard",
                    isSingle: true
                },
                
                
                {
                    linkTo: "/Device",
                    menuName: "Thiết bị",
                    isSingle: true
                },
                {
                    linkTo: "/Door",
                    menuName: "Cửa",
                    isSingle: true
                },
                {
                    linkTo: "/Elevator",
                    menuName: "Thang máy",
                    isSingle: true
                },
                {
                    linkTo: "/AccessControl",
                    menuName: "Kiểm soát truy cập",
                    isSingle: true,
                },
                {
                    linkTo: "/Monitoring",
                    menuName: "Giám sát",
                    isSingle: true
                },
                {
                    linkTo: "/Zone",
                    menuName: "Zone",
                    isSingle: true
                },
                {
                    menuName: "Báo cáo",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/ReportByDoor",
                            menuName: "Báo cáo cửa",
                        },
                        {
                            linkTo: "/ReportByElevator",
                            menuName: "Báo cáo thang máy",
                        },
                        {
                            linkTo: "/ReportByDevice",
                            menuName: "Báo cáo thiết bị",
                        },
                    ]
                },
                {
                    menuName: "Cài đặt chung",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/Schedule",
                            menuName: "Lịch trình",
                        },
                        {
                            linkTo: "/Singnal",
                            menuName: "Tín hiệu",
                        },
                        {
                            linkTo: "/Card",
                            menuName: "Thẻ",
                        },
                        {
                            linkTo: "/GroupCard",
                            menuName: "Nhóm thẻ",
                        },
                        {
                            linkTo: "/TriggerAction",
                            menuName: "Kích hoạt hành động",
                        },
                        {
                            linkTo: "/ModuleConfig",
                            menuName: "Cấu hình mô-đun",
                        },
                        {
                            linkTo: "/SystemConfig",
                            menuName: "Cấu hình hệ thống",
                        },
                        {
                            linkTo: "/WiegandFormat",
                            menuName: "Định dạng Wiegand",
                        },
                    ]
                },
                {
                    linkTo: "/AuditTrail",
                    menuName: "Lịch sử",
                    isSingle: true
                },
                {
                    menuName: "Cảnh báo xâm nhập",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/IntrusionAlarm",
                            menuName: "Cảnh báo xâm nhập",
                        },
                        {
                            linkTo: "/IntrusionDoor",
                            menuName: "Cửa xâm nhập",
                        },
                    ]
                },
                {
                    linkTo: "/Camera",
                    menuName: "Camera",
                    isSingle: true
                },
                
            ],
            menuListVisit: [
                {
                    linkTo: "/Visitor",
                    menuName: "Khách",
                    isSingle: true
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
                                    <LeftMenu menuListCore={this.state.menuListCore} menuListAccessControl={this.state.menuListAccessControl} menuListVisit={this.state.menuListVisit}  action={this.action}/>
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