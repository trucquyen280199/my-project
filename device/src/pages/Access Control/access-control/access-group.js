import React from "react";

function AccessGroup(props) {
    return(
        <div className="pageTest dashboard p-3">
            <nav className="toc">
                <div className="menu-main" style={{position: "relative"}}>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
                </div>
            </nav>
            <p>Bạn có thể sử dụng menu Access Control để tạo cấp độ truy cập bằng cách định cấu hình cửa và lịch truy cập
cũng như để định cấu hình nhóm truy cập bằng cách sử dụng cấp độ truy cập và thông tin nhóm người dùng.
Các nhóm truy cập đã cấu hình sau đó được sử dụng như các thành phần của kiểm soát truy cập.</p>
            <h2 className="text-center">Access Group</h2>
            <img src="./images/access-group-1.png" />
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
            <p> Sau khi chọn nhóm, bạn có thể thực hiện các thao tác sau:</p>
            <p className="ml-3"><b>Xóa</b> : Xóa nhóm đã chọn khỏi danh sách.</p>
            <h3>1. Thêm hoặc sửa nhóm truy cập</h3>
            <img src="./images/access-group-2.png" />
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
                        <td>Danh sách cấp độ truy cập</td>
                        <td>4</td>
                        <td>Danh sách cấp dộ tầng</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Danh sách nhóm người dùng</td>
                        <td>6</td>
                        <td>Danh sách người dùng</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default AccessGroup;