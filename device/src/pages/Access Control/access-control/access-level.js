import React from "react";

function AccessLevel(props) {
    return(
        <div className="pageTest dashboard p-3">
            <nav className="toc d-none">
                <div className="menu-main" style={{position: "relative"}}>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
                </div>
            </nav>
            <h2 className="text-center">Access Level</h2>
            <img src="./images/access-level-1.png" />
            <p className="font-weight-bold ml-4">Ghi chú:</p>
            <table className="table table-list d-flex w-100 mt-3">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Thêm mới</td>
                        <td>2</td>
                        <td>Xóa </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Tìm kiếm trong danh sách hiện tại</td>
                        <td>4</td>
                        <td>Chọn danh sách cần xóa</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                        <td>6</td>
                        <td>Danh sách đã thêm</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>1. Thêm hoặc sửa cấp độ truy cập</h3>
            <img src="./images/access-level-2.png" />
            <p className="font-weight-bold ml-4">Ghi chú:</p>
            <table className="table table-list d-flex w-100 mt-3">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tên</td>
                        <td>2</td>
                        <td>Mô tả </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Danh sách cửa</td>
                        <td>4</td>
                        <td>Schedule (lịch trình)</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Xóa 1 mục</td>
                        <td>6</td>
                        <td>Thêm 1 mục</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default AccessLevel;