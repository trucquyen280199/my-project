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
                <h2 className="text-center">Camera</h2>
                <section>
                    <img src="./images/camera-1.png" className="w-75 mb-3" />   
                    <table className="table table-list d-flex w-100 mt-3">
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Thêm mới</td>
                                <td>5</td>
                                <td>Danh sách đã thêm</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Xóa</td>
                                <td>6</td>
                                <td>Kiểm tra kết nối camera</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td> Chọn danh sách cần xóa</td>
                                <td>7</td>
                                <td>Tìm kiếm trong danh sách hiên tại</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table> 
                    <p>
                        Sau khi chọn cửa, bạn có thể thực hiện các thao tác sau:<br/>
                        <span className="font-weight-bold ml-3">▪	Xóa </span>: Xóa cửa đã chọn khỏi danh sách.
                    </p>
                </section>
                <section>
                    <div id="add-edit-camera">
                        <h2>1. Thêm hoặc sửa camera</h2>
                        <div className="content-item" >
                            <img src="./images/camera-2.png" className="w-75 mb-3" />
                            <p className="font-weight-bolid">Ghi chú:</p>  
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>7</td>
                                        <td>Mật khẩu Onvif</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Địa chỉ IP của thiết bị camera</td>
                                        <td>8</td>
                                        <td>Chọn cửa</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Port của thiết bị camera</td>
                                        <td>9</td>
                                        <td>Thêm sự kiên</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Tên đăng nhập</td>
                                        <td>10</td>
                                        <td>Chọn sự kiện</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Mật khẩu</td>
                                        <td>11</td>
                                        <td>Chọn schedule (lịch trình)</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Tên đăng nhập Onvif</td>
                                        <td>12</td>
                                        <td>Xóa sự kiện</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                Ghi chú:<br/>
                                Nếu cấu hình đủ thông tin trong mục <b>Cấu hình</b>, Khi <b>Sự kiện</b> của <b>Cửa</b> được thực hiện thì hệ thống camera sẽ kết nối và chụp lại hình ảnh tại thời điểm hiện tại.
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Camera;