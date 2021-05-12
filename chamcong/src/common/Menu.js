import React from "react";
import './menu.css';
/* eslint-disable */
class Menu extends React.Component {
    constructor(props) {
        super(props);
        let isActive = false
        this.props.item.subList.forEach((subItem, index) => {
            if (subItem.linkTo === this.props.currentAction) {
                isActive = true
            }
        })
        this.state = {
            isOpen: isActive
        }
    }

    openSubMenu = (event) => {
        if (!this.state.isOpen) {
            this.setState({isOpen: true});
        } else {
            this.setState({isOpen: false});
        }
    }

    render() {

        var classCss = "button_menu"
        let url_active = this.props.currentAction
        var className = this.state.isOpen ? "links button_parent_open" : "links button_parent"

        return (
            <React.Fragment>
                {/* eslint-disable-next-line*/}
                <a onClick={this.openSubMenu} className={className}>{this.props.item.menuName}</a>
                <div className="sub_menu_item">
                    {
                        this.props.item.subList.map((subItem, index) => {
                            classCss = "button_sub"
                            if (subItem.linkTo === url_active) {
                                classCss = "button_menu_open"
                            }
                            return <a onClick={() => {
                                this.props.action(subItem.linkTo)
                            }} key={index} className={classCss} style={{display: this.state.isOpen ? "block" : "none"}}>{subItem.menuName}</a>
                        })
                    }

                </div>
            </React.Fragment>
        )
    }
}

export default Menu;