import React from "react";
import './loading.css'
class Loading extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isShow:false
        }
    }
    showLoading(isShow){
        this.setState({isShow:isShow})
    }
    render() {
        let display = this.state.isShow?"flex":"none"
        return(
            <div id="overlay" style={{display:display}}>
                <div className="loader" ></div>
            </div>
        )
    }
}
export default Loading;