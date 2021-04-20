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
            openVisitor: false
        }
        this.action = this.action.bind(this);
    }

    toggleCore = () => {
        if (!this.state.openCore) {
            this.setState({openCore: true});
        } else {
            this.setState({openCore: false});
        }
    };
    toggleAccess = () => {
        if (!this.state.openAccess) {
            this.setState({openAccess: true});
        } else {
            this.setState({openAccess: false});
        }
    };
    toggleVisitor = () => {
        if (!this.state.openVisitor) {
            this.setState({openVisitor: true});
        } else {
            this.setState({openVisitor: false});
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
        var className3 = this.state.openVisitor ? "active" : "inactive";
        return (
            <div style={{width: "101%"}}>
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
                }):null
            }
            {/* <p onClick={this.toggleVisitor.bind(this)} className={className3 + " titleMenu"}>Khách</p> */}
            <div className="titleMenu p-0">
            {    
                // this.state.openVisitor ?
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
                // :null
            }</div>
            </div>
        )
    }
}

export default LeftMenu;