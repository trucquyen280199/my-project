import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {removeToken} from "../base/Base";

function Home(props) {
    const openPage = (page) => {
        props.history.push(page);
    }

    const handleLogout = () => {
        removeToken();
        props.history.push('/login');
    }

    return (
        <BrowserRouter>
            <div>
                <div className="header">
                    <input type="button" onClick={handleLogout} value="Logout"/>
                </div>
                <div className="content">
                    <div>
                        <ul>
                            <li onClick={() => {openPage('/modules');}}>Module management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Home;