import React, { Component, useState } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false
        }
    }
    // let [states, setState] = useState({
    //     id : '',
    //     name : '',
    //     status : false
    // })

    componentDidMount() {
        if(this.props.itemEditing && this.props.itemEditing.id !== null){
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            });
        }else{
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id : nextProps.itemEditing.id,
                name : nextProps.itemEditing.name,
                status : nextProps.itemEditing.status
            });
        }else{
            this.onClear();
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.onSave(this.state);
        this.onClear();
        this.onExitForm();
        console.log()
    }

    onClear = () => {
        this.setState({
            id : '',
            name : '',
            status : false
        });
    }

    onExitForm = () => {
        this.props.onExitForm();
    }
    render(){

    
        return (
            <div className="panel panel-warning border rounded" style={{overflow: "hidden"}}>
                <div className="panel-heading d-flex justify-content-between text-white bg-dark border-bottom p-2 ">
                    <h4 className="panel-title">Thêm Công Việc</h4>
                    <span
                        className="fa fa-times-circle text-right"
                        onClick={this.onExitForm}
                    >X</span>
                </div>
                <div className="panel-body p-2">
                    <form onSubmit={this.onHandleSubmit} >
                        <div className="form-group text-left">
                            <label>Tên :</label>
                            <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={ this.onHandleChange }
                                />
                        </div>
                        <div className="text-left" >
                            <label>Trạng Thái :</label>
                            <select className="form-control" 
                                    name="status" 
                                    value={ this.state.status } 
                                    onChange={ this.onHandleChange } 
                                > 
                                <option value={true}>Kích Hoạt</option> 
                                <option value={false}>Ẩn</option> 
                            </select>
                        </div>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning" >Thêm</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={ this.onClear } >Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default TaskForm;