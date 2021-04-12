import React, { useState } from 'react';
import './App.css';

function App() {

    const [states , setState] = useState({
        txtUsername : "",
        txtPassword : "",
        txtDes : "",
        slGender : 0,
        radLanguages: 'en',
        chkbStatus : true
    })

    const onHandleChanged = (event) => {
        const target = event.target;
        const name = target.name;
        
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setState( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    function onHandleSubmit(event) {
        event.preventDefault();
        console.log(states)
    }

    function onResetForm(event) {
        setState({
            txtUsername: '',
            txtPassword: '',
            txtDes : " ",
            slGender : 0,
        })
    }

    return (
        <div className="App">
            <div className="container mt-5">
                <div className="card w-50 mx-auto">
                    <div className="card-header bg-primary"> Form </div>
                    <div className="card-body p-3">
                        <form  onSubmit={onHandleSubmit}>
                            <ul className="w-100 px-0 m-0">
                                <li className="userName form-group">
                                    <label className="panel-heading" >User Name:</label>
                                    <input type="text" 
                                        className="form-control" 
                                        name="txtUsername" 
                                        value={states.txtUsername}
                                        onChange={ onHandleChanged } />
                                </li>
                                <li className="password form-group">
                                    <label className="panel-heading">Password:</label>
                                    <input type="password" 
                                        className="form-control" 
                                        name="txtPassword" 
                                        value={states.txtPassword}
                                        onChange={ onHandleChanged } />
                                </li>
                                <li className="description form-group">
                                    <label className="panel-heading" >Description:</label>
                                    <textarea className="form-control" rows="3" 
                                        name="txtDes" 
                                        value={states.txtDes}
                                        onChange={ onHandleChanged } />
                                </li>
                                <li className="gender form-group">
                                    <label className="panel-heading">Gender:</label>
                                    <select className="form-control" name="slGender" onChange={ onHandleChanged } 
                                    value={ states.slGender } >
                                        <option value={0}>Female</option>
                                        <option value={1}>Male</option>
                                    </select>
                                </li>
                                <li className="languages form-group">
                                    <label className="panel-heading">Languages:</label>
                                    <div className="group d-flex flex-column">
                                        <label>
                                            <input type="radio" name="radLanguages" 
                                                value="en" 
                                                checked={states.radLanguages === "en"}
                                                onChange={ onHandleChanged } 
                                            /> 
                                            English
                                        </label>
                                        <label>
                                            <input type="radio" name="radLanguages" 
                                                value="vi" 
                                                checked={states.radLanguages === "vi"}
                                                onChange={ onHandleChanged } 
                                            /> 
                                            VietNam
                                        </label>
                                    </div>
                                </li>
                                <li className="form-group">
                                    <label>
                                        <input type="checkbox" className="mr-2" 
                                            name="chkbStatus" value={true} 
                                            onChange={ onHandleChanged } 
                                            checked={ states.chkbStatus === true }
                                        />
                                        Trang thai
                                    </label>
                                </li>
                                <li className="userName form-group">
                                    <button type="submit" className="btnSave bg-primary border border-primary text-white">Save</button>
                                    <button type="reset" className="btnReset border" onClick={onResetForm}>Reset</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
