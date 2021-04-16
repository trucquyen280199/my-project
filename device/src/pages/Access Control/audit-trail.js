import React from "react";
function AuditTrail(props) {
    return(
        <div className="pageTest" style={{overflowY: "scroll",height: "calc(100vh - 48px)"}}>
            <nav className="toc">
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <h2 className="text-center">LỊCH SỬ HỆ THỐNG</h2>
            <div className="content-item" >
                <img src="./images/audit-trail-1.png" className="w-25" /> 
                <img src="./images/audit-trail-1-2.png" className="w-100" /> 
                <p>Ghi chú:</p>
                <table className="table table-list d-flex w-100 mt-3">
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Từ ngày (tìm khoảng thời gian)</td>
                            <td>6</td>
                            <td>Thể loại danh mục thực hiện (door, elevator, …)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Đến ngày (tìm khoảng thời gian)</td>
                            <td>7</td>
                            <td>Mục tiêu</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nhập để tìm kiếm và chọn người dùng</td>
                            <td>8</td>
                            <td>Hành động thực hiện (add, update, delete, …)</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Cấp điều hành viên</td>
                            <td>9</td>
                            <td>Nút tìm kiếm</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Địa chỉ IP truy cập</td>
                            <td>10</td>
                            <td>Danh sách</td>
                        </tr>
                    </tbody>
                </table> 
            </div>
                    
        </div>
    )
}
export default AuditTrail;