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
                    menuName: "Home",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/Chart",
                            menuName: "Chart",
                        },
                    ]
                },
                {
                    menuName: "Basic Information",
                    isSingle: false,
                    subList: [
                        {
                            linkTo: "/ListOfStaffTimekeep",
                            menuName: "List Of Staff",
                        },
                        {
                            linkTo: "/Absent",
                            menuName: "Absent",
                        },
                        {
                            linkTo: "/OverCoefficient",
                            menuName: "Over Coefficient",
                        },
                        {
                            linkTo: "/DeclareHolidays",
                            menuName: "Declare Holidays ",
                        },
                        {
                            linkTo: "/DeviceInOut",
                            menuName: "Device In Out ",
                        },
                        // {
                        //     linkTo: "/ShiftGroup",
                        //     menuName: "Shift Group ",
                        // },
                        // {
                        //     linkTo: "/Shift",
                        //     menuName: "Shift ",
                        // },
                        // {
                        //     linkTo: "/Schedule",
                        //     menuName: "Schedule",
                        // },
                        // {
                        //     linkTo: "/SettingMethod",
                        //     menuName: "Setting Method",
                        // },
                    ]
                },
                // {
                //     menuName: "Work plan",
                //     isSingle: false,
                //     subList: [
                //         {
                //             linkTo: "/ShiftStaff",
                //             menuName: "Shift Staff",
                //         },
                //         {
                //             linkTo: "/PlanShiftStaff",
                //             menuName: "Plan Shift Staff",
                //         },
                //         {
                //             linkTo: "/OvertimePlan",
                //             menuName: "Overtime plan",
                //         },
                //         {
                //             linkTo: "/PlanOffsetWork",
                //             menuName: "Plan Offset Work",
                //         },
                //         {
                //             linkTo: "/TriggerAction",
                //             menuName: "Trigger Action",
                //         },
                //         {
                //             linkTo: "/CoreCategory",
                //             menuName: "Core Category",
                //         },
                //         {
                //             linkTo: "/Module",
                //             menuName: "Module",
                //         },
                //         {
                //             linkTo: "/ModuleConfig",
                //             menuName: "Module Config",
                //         },
                //     ]
                // },
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