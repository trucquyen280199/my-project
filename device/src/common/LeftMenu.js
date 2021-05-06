import React from "react";
import MenuItem from "./MenuItem";
import Menu from "./Menu";

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCommand: "",
            openCore: false,
            openAccess: false,
        }
        this.action = this.action.bind(this);
    }

    toggleCore = () => {
        if (!this.state.openCore) {
            this.setState({openCore: true,
                openAccess: false
             });
        } else {
            this.setState({openCore: false});
        }
    };

    toggleAccess = () => {
        if (!this.state.openAccess) {
            this.setState({openAccess: true, openCore: false});
        } else {
            this.setState({openAccess: false});
        }
    };

    action(command) {
        this.props.action(command);
        this.setState({currentCommand: command});
    }
    
    componentDidMount() {
        this.setState({currentCommand: "/modules"});
    }

    render() {
        var className1 = this.state.openCore ? "active" : "inactive";
        var className2 = this.state.openAccess ? "active" : "inactive";
        return (
            <div style={{width: "100%"}}>
                <p onClick={this.toggleCore.bind(this)} className={className1 + " titleMenu"}>CORE</p>
                    {this.state.openCore ?
                        this.props.menuListCore.map((item, index) => {
                            if (item.isSingle) {
                                return <MenuItem key={index} linkTo={item.linkTo} 
                                                menuName={item.menuName} action={this.action}
                                                currentAction={this.state.currentCommand}/>
                            } else {
                                return <Menu key={index} item={item} action={this.action}
                                            currentAction={this.state.currentCommand}/>
                            }
                        }) : null
                }
                <p  onClick={this.toggleAccess.bind(this)} className={className2 + " titleMenu"}>Kiểm soát truy cập</p>
                {   this.state.openAccess ?
                    
                    this.props.menuListAccessControl.map((item, index) => {
                        if (item.isSingle) {
                            return <MenuItem key={index} linkTo={item.linkTo}
                                            menuName={item.menuName} action={this.action}
                                            currentAction={this.state.currentCommand}/>
                        } else {
                            return <Menu key={index} item={item} action={this.action}
                                        currentAction={this.state.currentCommand}/>
                        }
                    })
                    :null
                }
                <div className="titleMenu p-0">

                    {    
                        this.props.menuListVisit.map((item, index) => {
                            if (item.isSingle) {
                                return <MenuItem key={index} linkTo={item.linkTo}
                                                menuName={item.menuName} action={this.action}
                                                currentAction={this.state.currentCommand}/>
                            } else {
                                return <Menu key={index} item={item} action={this.action}
                                            currentAction={this.state.currentCommand}/>
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default LeftMenu;