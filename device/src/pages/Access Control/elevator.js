import React from "react";
// import "./style.css";

function Elevator(props) {
    return(
        <div className="pages d-flex align-items-start pageTest">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link">
                        <a href="#add-edit-elevator">Thêm hoặc sửa thang máy</a>
                    </li>
                </ul>
                {/* <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg> */}
            </nav>
            <article className="contents w-100" id="contents">
                <h2 className="text-center">THANG MÁY</h2>
                <section>
                    <div id="screen-main">
                        <p className="font-italic">Lưu ý: Cần phải thêm thiết bị trước khi thực hiện chức năng này.</p>
                        <p>
                        Bạn có thể cấu hình thang máy để kiểm soát các tầng bằng thiết bị kiểm soát ra vào và OM-120 bằng cách sử dụng menu elevator.
                        </p>
                        <img alt="images" src="./images/elevator-1-1.png" className="" />
                        <img alt="images" src="./images/elevator-1-2.png" className="w-100" />
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
                            Sau khi chọn thang máy, bạn có thể thực hiện các thao tác sau:<br/>
                            <span className="font-weight-bold">▪	Xóa </span>: Xóa thang máy đã chọn khỏi danh sách.
                        </p>
                    </div>
                    <div id="add-edit-elevator">
                        <h2>1. Thêm hoặc sửa thang máy</h2>
                        <div className="content-item">
                            <img alt="images" src="./images/elevator-2.png" className="w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>8</td>
                                        <td>Ánh xạ tự động</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mô tả</td>
                                        <td>9</td>
                                        <td>Tên tầng</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Thiết bị điều kiển</td>
                                        <td>10</td>
                                        <td>Số rơle</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Thiết bị đầu đọc</td>
                                        <td>11</td>
                                        <td>Xóa tầng</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Thiết bị mô-đun</td>
                                        <td>12</td>
                                        <td>Thời gian mở (giá trị từ 0 đến 900)</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Số tầng</td>
                                        <td>13</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Tạo số tầng tương ứng</td>
                                        <td>14</td>
                                        <td>Đồng ý</td>
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
export default Elevator;
 