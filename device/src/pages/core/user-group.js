import React from 'react';

function UserGroup(){
    return(
        <div className="pageTest notfound" style={{background: "url(./images/bg-404.jpg)"}}>
            <nav className="toc d-none">
                <ul className="menu-main"></ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <img src="./images/iconChuyenViet.png" className="w-75" />
            <div className="d-flex justify-content-center">

            <a href="">Go to Home</a>
            </div>
        </div>
    )
}
export default UserGroup;