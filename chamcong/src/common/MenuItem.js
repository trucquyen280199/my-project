import React from "react";
import './menu_item.css'
/* eslint-disable */
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: false
        }
        this.setSelect = this.setSelect.bind(this);
    }

    setSelect(action) {
        if (action === this.props.currentAction) {
            this.setState({isSelect: true})
        } else {
            this.setState({isSelect: false})
        }
    }

    action = () => {
        this.props.action(this.props.linkTo)
    }

    render() {
        var classCss = "button_menu links"
        if (this.props.currentAction === this.props.linkTo) {
            classCss = "button_menu_open links"
        }
        return (
            <React.Fragment>
                <a onClick={this.action} className={classCss}>{this.props.menuName}</a>
            </React.Fragment>
        )
    }
}

export default MenuItem