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
            menuList: [
                {
                    linkTo: "/Dashboard",
                    menuName: "Dashboard",
                    isSingle: true
                },
                {
                    linkTo: "/User",
                    menuName: "User",
                    isSingle: true
                },
                {
                    linkTo: "/UserGroup",
                    menuName: " Group User",
                    isSingle: true
                },
                {
                    linkTo: "/ImportFiles",
                    menuName: "Import Files",
                    isSingle: true
                },
                {
                    linkTo: "/Device",
                    menuName: "Device",
                    isSingle: true
                },
                {
                    linkTo: "/Door",
                    menuName: "Door",
                    isSingle: true
                },
                {
                    linkTo: "/Elevator",
                    menuName: "Elevator",
                    isSingle: true
                },
                {
                    menuName: "Access Control",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/AccessGroup",
                            menuName: "Access Group",
                        },
                        {
                            linkTo: "/AccessLevel",
                            menuName: "Access Level",
                        },
                        {
                            linkTo: "/FloorLevel",
                            menuName: "Floor Level",
                        },
                    ]
                },
                {
                    linkTo: "/Monitoring",
                    menuName: "Monitoring",
                    isSingle: true
                },
                {
                    linkTo: "/Zone",
                    menuName: "Zone",
                    isSingle: true
                },
                {
                    linkTo: "/Camera",
                    menuName: "Camera",
                    isSingle: true
                },
                {
                    menuName: "Report",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/ReportByDoor",
                            menuName: "Report By Door",
                        },
                        {
                            linkTo: "/ReportByElevator",
                            menuName: "Report By Elevator",
                        },
                        {
                            linkTo: "/ReportByDevice",
                            menuName: "Report By Device",
                        },
                    ]
                },
                {
                    menuName: "General Setting",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/Schedule",
                            menuName: "Schedule",
                        },
                        {
                            linkTo: "/Singnal",
                            menuName: "Singnal",
                        },
                        {
                            linkTo: "/Card",
                            menuName: "Card",
                        },
                        {
                            linkTo: "/GroupCard",
                            menuName: "Group Card",
                        },
                        {
                            linkTo: "/TriggerAction",
                            menuName: "Trigger Action",
                        },
                        {
                            linkTo: "/CoreCategory",
                            menuName: "Core Category",
                        },
                        {
                            linkTo: "/Module",
                            menuName: "Module",
                        },
                        {
                            linkTo: "/ModuleConfig",
                            menuName: "Module Config",
                        },
                    ]
                },
                {
                    linkTo: "/AuditTrail",
                    menuName: "Audit Trail",
                    isSingle: true
                },
                {
                    linkTo: "/Visitor",
                    menuName: "Visitor",
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