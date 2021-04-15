import React from "react";
// import "./style.css";
function Door(props) {
    return(
        <div className="pages d-flex align-items-start pageTest">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link">
                        <a href="#add-edit-door">Thêm hoặc sửa cửa</a>
                    </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" stroke-width="3" fill="transparent" stroke-dasharray="0, 0, 0, 1000" stroke-linecap="round" stroke-linejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents w-100" id="contents">
               <h2 className="text-center">Door</h2>
                <section>
                    <div id="screen-main">
                        <p className="font-italic mb-3">Lưu ý: Cần phải thêm thiết bị trước khi thực hiện chức năng này.</p>
                        <p>
                        Bạn có thể sử dụng menu DOOR để thêm thông tin về cửa kết nối với thiết bị.<br />
                        Bạn có thể định cấu hình cài đặt chuyển tiếp, xác thực kép, chống trả về, bắt buộc mở và giữ cài đặt cảnh báo mở của thiết bị. Thông tin cửa sau đó được sử dụng như một thành phần của các cấp độ truy cập.
                        </p>
                        <img src="./images/door-1.png" className="w-75" />
                        <p className="font-weight-bold">Ghi chú:</p>
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
                        <p>
                            Sau khi chọn cửa, bạn có thể thực hiện các thao tác sau:<br/>
                            <span className="font-weight-bold">▪	Xóa </span>: Xóa cửa đã chọn khỏi danh sách.
                        </p>
                    </div>
                    <div id="add-edit-door">
                        <h2>1. Thêm hoặc sửa cửa</h2>
                        <div className="content-item">
                            <img src="./images/door-2.png" className="w-75" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>6</td>
                                        <td>Nút nhấn lối ra</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mô tả</td>
                                        <td>7</td>
                                        <td>Công tắc cho nút nhấn lối ra</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Thiết bị lỗi vào</td>
                                        <td>8</td>
                                        <td>Cảm biến cửa</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Thiết bị lối ra</td>
                                        <td>9</td>
                                        <td>Công tắc cho cảm biến cửa</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Rơ-le cửa</td>
                                        <td>10</td>
                                        <td>Thời gian mở (giá trị hợp lệ từ 0 đến 900)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Door;
 