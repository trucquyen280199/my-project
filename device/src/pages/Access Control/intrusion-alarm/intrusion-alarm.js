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
                <p className="mt-3"> Thêm hoặc sửa zone</p>
                <img src="./images/intrusion-alarm-3.png" className="w-100" /> 
                <p>Ghi chú:</p>
                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Tên</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Loại</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><b>Chế độ</b> : Bạn có thể kiểm tra phạm vi ứng dụng của khu vực. Chỉ hỗ trợ chế độ Cục bộ cho vùng báo động xâm
                                nhập và chỉ có thể đặt vùng này với các thiết bị được kết nối với thiết bị xâm nhập và RS-485
                                </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><b>Hoạt động / Không hoạt động</b> : Bạn có thể vô hiệu hóa vùng báo động xâm nhập. Chọn Hoạt động để kích hoạt nó</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><b>Hoạt động / Không hoạt động</b> : Bạn có thể vô hiệu hóa vùng báo động xâm nhập. Chọn Hoạt động để kích hoạt nó</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>
                                <b>Cài đặt Arm / Disarm:</b> Bạn có thể thêm cài đặt xác thực cho vũ khí và vũ khí.<br/>
                                ▪ <b>Thời gian trễ</b> : Bạn có thể đặt thời gian trễ để kích hoạt hoặc giải trừ vũ
                                khí. Arm là thời gian trễ từ khi xác thực đến cánh tay, và Disarm là thời gian trễ
                                từ khi phát hiện xâm nhập đến khi xảy ra cảnh báo.<br/>
                                ▪ <b>Thẻ truy cập</b> : Bạn có thể thêm thẻ có quyền sử dụng hoặc tước vũ khí. Bạn có
                                thể đăng ký tối đa 128 thẻ truy cập.<br/>
                                ▪ <b>Nhóm truy cập</b> : Bạn có thể thêm một nhóm truy cập có quyền sử dụng vũ khí
                                hoặc tước vũ khí. Bạn có thể đăng ký tối đa 128 nhóm truy cập.<br/>
                                ▪ <b>Cài đặt vũ khí / giải giáp</b>: Bạn có thể cài đặt vũ khí và giải giáp bằng thiết bị hoặc
                                tín hiệu đầu vào. Nhấp vào + Thêm và đặt từng mục.<br/>
                                <b>Thêm arm và disarm bằng thiết bị</b><br/>
                                Nhấp vào <b>Thiết bị</b> để chọn thiết bị kiểm soát vùng báo động đột nhập trong số các thiết bị ra vào của cửa và
                                chọn Loại arm.<br/>
                                Có thể chọn <b>Thẻ</b> , <b>Chìa khóa</b> và <b>Thẻ</b> hoặc <b>Chìa khóa</b> cho <b>kiểu Đầu vào</b> . Chỉ có <b>Thẻ</b> làm loại đầu vào cho thiết
                                bị không có màn hình LCD.
                                <img src="./images/intrusion-alarm-4.png" className="w-75" />
                                <p><b>Thêm arm và disarm bằng tín hiệu đầu vào</b></p>
                                <p>Bấm <b>Thiết bị</b> để chọn thiết bị điều khiển vùng báo động xâm nhập. Nhấp vào <b>Port</b> và chọn một cổng đầu vào của thiết bị đã chọn.</p>
                                <p>Chọn <b>Loại arm</b> và đặt loại công tắc và thời lượng tín hiệu</p>
                                <img src="./images/intrusion-alarm-5.png" className="w-75" />
                                <p>(Nó chỉ được kích hoạt khi <b>Cửa</b> được đặt từ <b>Cấu hình</b>)</p>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>
                                <p><b>Cài đặt xâm nhập</b>: Bạn có thể đặt tín hiệu phát hiện xâm nhập. Khi bạn nhấp vào + Thêm và thiết lập như trong
                                màn hình bên dưới, thiết bị sẽ nhận dạng phát hiện xâm nhập nếu cảm biến N / O kết nối với cổng đầu vào 0 của
                                BioStation L2 gửi tín hiệu trong 100 (mili giây).</p>
                                <img src="./images/intrusion-alarm-6.png" className="w-75" />
                                <p>(Nó chỉ được kích hoạt khi <b>Cửa</b> được đặt từ <b>Cấu hình</b>)</p>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>
                                <p><b>Cảnh báo</b>: Đặt hành động báo động để thực hiện khi một sự kiện cụ thể xảy ra tại vùng báo động xâm nhập.</p>
                                <p>(Nó chỉ được kích hoạt khi <b>Cửa</b> được đặt từ <b>Cấu hình</b>)</p>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Đóng cửa sổ</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Đồng ý</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                    
        </div>
    )
}
export default IntrusionAlarm;