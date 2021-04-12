import React from "react";
import "../../style.css";
function Chart() {
    return(
        <div className="pages d-flex align-items-start pageTest">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#"></a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <img src="./images/chart.png" />
        </div>
    )
}
export default Chart;