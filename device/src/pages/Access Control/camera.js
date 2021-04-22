import React from "react";
// import "./style.css";
function Camera(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#add-edit-camera">Thêm hoặc sửa camera</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents w-100" id="contents">
                <h2 className="text-center">CAMERA</h2>
                <section>
                    <img src="./images/camera-1.png" />   
                    <img src="./images/camera-1-2.png" className="w-100 mb-3" />   
                    <table className="table table-list d-flex w-100 mt-3">
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Thêm mới</td>
                                <td>5</td>
                                <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Xóa</td>
                                <td>6</td>
                                <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Tìm kiếm trong danh sách hiên tại</td>
                                <td>7</td>
                                <td>Danh sách đã thêm</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Reload</td>
                                <td>8</td>
                                <td>Kiểm tra kết nối camera</td>
                            </tr>
                        </tbody>
                    </table> 
                    <p>
                        Sau khi chọn cửa, bạn có thể thực hiện các thao tác sau:<br/>
                        <b className="ml-3">▪	Xóa </b>: Xóa cửa đã chọn khỏi danh sách.
                    </p>
                </section>
                <section>
                    <div id="add-edit-camera">
                        <h2>1. Thêm hoặc sửa camera</h2>
                        <div className="content-item" >
                            <img src="./images/camera-2.png" className="w-100 mb-3" />
                            <p className="font-weight-bolid">Ghi chú:</p>  
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>9</td>
                                        <td>Chọn cửa</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Địa chỉ IP của thiết bị camera</td>
                                        <td>10</td>
                                        <td>Chọn sự kiện</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Port của thiết bị camera</td>
                                        <td>11</td>
                                        <td>Chọn schedule (lịch trình)</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Tên đăng nhập Onvif</td>
                                        <td>12</td>
                                        <td>Thêm sự kiện</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Mật khẩu Onvif</td>
                                        <td>13</td>
                                        <td>Xóa sự kiện</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Gửi thư</td>
                                        <td>14</td>
                                        <td>Chọn cảnh báo xâm nhập</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Cấu hình nội dung gửi thư</td>
                                        <td>15</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Thư điện tử</td>
                                        <td>16</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Ghi chú:<br/>
                                - Nếu cấu hình đủ thông tin trong mục <b>Cấu hình</b>, Khi <b>Sự kiện</b> của <b>Cửa</b> được thực hiện thì hệ thống camera sẽ kết nối và chụp lại hình ảnh tại thời điểm hiện tại.<br/>
                                - Cửa chi dùng cho một camera duy nhất
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Camera;