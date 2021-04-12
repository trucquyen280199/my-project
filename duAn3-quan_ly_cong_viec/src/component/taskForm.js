import React, { useState } from 'react';

function TaskForm(props) {
    let [states, setState] = useState({
        id : '',
        name : '',
        status : false
    })

    function componentDidMount() {
        if(props.itemEditing && props.itemEditing.id !== null){
            setState({
                id : props.itemEditing.id,
                name : props.itemEditing.name,
                status : props.itemEditing.status
            });
        }else{
            onClear();
        }
    }

    function componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            setState({
                id : nextProps.itemEditing.id,
                name : nextProps.itemEditing.name,
                status : nextProps.itemEditing.status
            });
        }else{
            onClear();
        }
    }

    const onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        setState({
            [name] : value
        });
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        props.onSave(states);
        onClear();
        onExitForm();
        console.log()
    }

    const onClear = () => {
        setState({
            id : '',
            name : '',
            status : false
        });
    }

    const onExitForm = () => {
        props.onExitForm();
    }
    
    return (
        <div className="panel panel-warning border rounded">
            <div className="panel-heading d-flex justify-content-between border-bottom p-2 ">
                <h4 className="panel-title">Thêm Công Việc</h4>
                <span
                    className="fa fa-times-circle text-right"
                    onClick={onExitForm}
                >X</span>
            </div>
            <div className="panel-body p-2">
                <form onSubmit={onHandleSubmit} >
                    <div className="form-group text-left">
                        <label>Tên :</label>
                        <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={states.name}
                                onChange={ onHandleChange }
                            />
                    </div>
                    <div className="text-left" >
                        <label>Trạng Thái :</label>
                        <select className="form-control" 
                                name="status" 
                                value={ states.status } 
                                onChange={ onHandleChange } 
                            > 
                            <option value={true}>Kích Hoạt</option> 
                            <option value={false}>Ẩn</option> 
                        </select>
                    </div>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning" >Thêm</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={ onClear } >Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default TaskForm;