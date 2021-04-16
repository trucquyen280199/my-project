import React from "react";
function IntrusionAlarm(props) {
    return(
        <div className="pageTest" style={{overflowY: "scroll",height: "calc(100vh - 48px)"}}>
            <nav className="toc">
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <h2 className="text-center">CẢNH BÁO XÂM NHẬP</h2>
            <div className="content-item" >
                <img src="./images/intrusion-alarm-1.png" className="w-25" /> 
                <img src="./images/intrusion-alarm-2.png" className="w-100" /> 
                <p>Ghi chú:</p>
                <table className="table table-list d-flex w-100 mt-3">
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Thêm mới</td>
                            <td>5</td>
                            <td>Chọn danh sách zone</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Hoạt động</td>
                            <td>6</td>
                            <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Không hoạt động</td>
                            <td>7</td>
                            <td>Danh sách đã thêm</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Xóa</td>
                            <td>8</td>
                            <td>Tìm kiếm trong danh sách hiện tại</td>
                        </tr>
                    </tbody>
                </table> 
                <p>Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:</p>
                <p>▪<b className="ml-2">Xóa:</b> Xóa zone đã chọn khỏi danh sách.</p>
                <p>▪<b className="ml-2">Hoạt động:</b> Thay đổi trạng thái của zone</p>
                <p>▪<b className="ml-2">Không hoạt động:</b> Thay đổi trạng thái của zone</p>
            </div>
                    
        </div>
    )
}
export default IntrusionAlarm;