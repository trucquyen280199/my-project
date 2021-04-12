import React from "react";
import MenuItem from "./MenuItem";
import Menu from "./Menu";

class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCommand: ""
        }
        this.action = this.action.bind(this);
    }

    action(command) {
        this.props.action(command);
        this.setState({currentCommand: command});
    }
    componentDidMount() {
        this.setState({currentCommand: "/modules"});
    }
    render() {
        return (
            this.props.menuList.map((item, index) => {
                if (item.isSingle) {
                    return <MenuItem key={index} linkTo={item.linkTo}
                                     menuName={item.menuName} action={this.action}
                                     currentAction={this.state.currentCommand}/>
                } else {
                    return <Menu key={index} item={item} action={this.action}
                                 currentAction={this.state.currentCommand}/>
                }
            })
        )
    }
}

export default LeftMenu;