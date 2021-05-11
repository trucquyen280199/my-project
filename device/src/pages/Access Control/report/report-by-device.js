import React from "react";
// import "../style.css";
function ReportByDevice(props) {
    return(
        <div className="pages pageTest p-3">
            <nav className="toc d-none">
                <div className="menu-main" style={{position: "relative"}}>
                {/* <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg> */}
                </div>
            </nav>
            <h2 className="text-center">BÁO CÁO THIẾT BỊ</h2>
            <img alt="images" src="./images/report-by-device-1.png" className="w-25" /><br/>   
            <img alt="images" src="./images/report-by-device-1-2.png" className="w-100" /><br/>   
            <table className="table mt-3" >
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Chọn thiết bị</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tìm kiếm</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Danh sách người dùng trong thiết bị</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ReportByDevice;