import React from "react";

function Dashboard(props) {
    return(
        <div className="pageTest dashboard p-3">
            <nav className="toc d-none">
                <div className="scroll-menu-main" >
                <div className="menu-main" style={{position: "relative"}}>
                    <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                    </svg>
                </div>
                </div>
            </nav>
            <h2 className="text-center">Dashboard</h2>
            <img src="./images/dashboard.png" className="w-25" />
            <img src="./images/dashboard-2.png" className="w-100" />
            <p className="font-weight-bold ml-4">Ghi chú:</p>
            <table className="table mt-3">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tổng số thống kê theo năm/tháng/tuần (Nếu số liệu thống kê lớn hơn 0, người dùng có thể click xem danh sách chi tiết)</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Giao diện thống kê biểu đò (có các lụa chọn theo năm / tháng /tuần)</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tống kê tổng quan các thông tin trong hệ thống như: Người dùng, Cửa, Zone,…</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard;