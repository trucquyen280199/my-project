import React from "react";
function IntrusionDoor(props) {
    return(
        <div className="pageTest" style={{overflowY: "scroll",height: "calc(100vh - 48px)"}}>
            <nav className="toc">
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <h2 className="text-center">CỬA XÂM NHẬP</h2>
            <div className="content-item" >
                <img src="./images/intrusion-door-1.png" className="w-25" /> 
                <img src="./images/intrusion-door-2.png" className="w-100" /> 
                <p>Ghi chú:</p>
                <table className="table table-list d-flex w-100 mt-3">
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Thêm mới</td>
                            <td>4</td>
                            <td>Chọn danh sách cần xóa</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Xóa</td>
                            <td>5</td>
                            <td>Tìm kiếm trong danh sách hiên tại</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                            <td>6</td>
                            <td>Danh sách đã thêm</td>
                        </tr>
                    </tbody>
                </table>
                <p>Sau khi chọn cửa, bạn có thể thực hiện các thao tác sau:<br/>
                ▪<b className="ml-3">Xóa</b>: Xóa cửa đã chọn khỏi danh sách.
                </p>
                <div>
                    <h2>1. Thêm hoặc sửa cửa</h2>
                    <div className="content-item" >
                        <img src="./images/intrusion-door-3.png" className="w-100" /> 
                        <p>Ghi chú:</p>
                        <table className="table table-list d-flex w-100 mt-3">
                            <tr>    
                                <td>1</td>
                                <td>Tên </td>
                                <td>5</td>
                                <td>Công tắc cho cảm biến cửa</td>
                            </tr>
                            <tr>    
                                <td>2</td>
                                <td>Mô tả</td>
                                <td>6</td>
                                <td>Thời gian mở (giá trị hợp lệ từ 0 đến 900)</td>
                            </tr>
                            <tr>    
                                <td>3</td>
                                <td>Thiết bị cảm biến</td>
                                <td>7</td>
                                <td>Đóng cửa sổ</td>
                            </tr>
                            <tr>    
                                <td>4</td>
                                <td>Cảm biến cửa</td>
                                <td>8</td>
                                <td>Đồng ý</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IntrusionDoor;