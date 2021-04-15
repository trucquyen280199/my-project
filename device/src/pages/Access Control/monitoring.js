import React from "react";
// import "./style.css";
function Monitoring(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#log-real-time">Log real time</a></li>
                    <li className="link"><a href="#door-status">Door status</a></li>
                    <li className="link"><a href="#elevator-status">Elevator status</a></li>
                    <li className="link"><a href="#zone-status">Zone status</a></li>
                    <li className="link"><a href="#graphic-view">Graphic view</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
            <h2 className="text-center">Monitoring</h2>
                <p>Bạn có thể sử dụng menu Monitoring để xem danh sách các sự kiện kiểm soát ra vào, trạng thái thiết bị và cửa, trạng thái khu vực và lịch sử cảnh báo.
                   <br/> Bạn có thể xem và kiểm soát trạng thái của các cửa trong thời gian thực trong đồ họa nếu bạn thêm bản đồ đồ họa.
                    </p>
                <section>
                    <div id="log-real-time">
                        <h2>1.	Log real time</h2>
                        <div className="content-item" >
                            <img src='./images/log-real-time.png' className="mb-3 w-75" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table " >
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Chạy hoặc dùng (nhận log)</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Xóa danh sách log hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="door-status">
                        <h2>2.	Door status</h2>
                        <div className="content-item" >
                            <img src='./images/door-status.png' className="mb-3 w-75" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Khóa cửa</td>
                                        <td>5</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mở khóa cửa</td>
                                        <td>6</td>
                                        <td>Chọn cửa</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Giải phòng cửa</td>
                                        <td>7</td>
                                        <td>Danh sách cửa</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Mở cửa</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                            <span>Sau khi chọn cửa, bạn có thể thực hiện các thao tác sau:</span><br/>
                            <span className="ml-3">-	<b>Khóa cửa</b>: Kích hoạt rơ-le cửa</span><br/>
                            <span className="ml-3">-	<b>Mở khóa cửa</b>: Hủy kích hoạt rơ-le cửa</span><br/>
                            <span className="ml-3">-	<b>Giải phóng cửa</b>: Trả lại trạng thái ban đầu của rơ-le cửa</span><br/>
                            <span className="ml-3">-	Mở cửa</span>

                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="elevator-status">
                        <h2>3.	Elevator status</h2>
                        <div className="content-item" >
                            <img src='./images/elevator-status.png' className="mb-3 w-75" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kích hoạt</td>
                                        <td>4</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Hủy kích hoạt</td>
                                        <td>5</td>
                                        <td>Chọn tầng của thang máy</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Giải phóng</td>
                                        <td>6</td>
                                        <td>Danh sách thang máy và tầng</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                            <span>Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:</span><br/>
                            <span className="ml-3">-	<b>Kích hoạt</b>: Kích hoạt rơ-le của tầng</span><br/>
                            <span className="ml-3">-	<b>Hủy kích hoạt</b>: Hủy kích hoạt rơ-le của tầng</span><br/>
                            <span className="ml-3">-	<b>Giải phóng</b>: Trả lại trạng thái ban đầu</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="zone-status">
                        <h2>4.	Zone status</h2>
                        <div className="content-item" >
                            <img src='./images/zone-status.png' className="mb-3 w-75" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Xóa cảnh báo</td>
                                        <td>3</td>
                                        <td>Danh sách zone</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Chọn zone</td>
                                        <td>4</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                            <span className="">Sau khi chọn zone, bạn có thể thực hiện các thao tác sau:</span><br/>
                            <span className="ml-3">-	Xóa cảnh báo</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="graphic-view">
                        <h2>5.	Graphic view</h2>
                        <div className="content-item" >
                            <img src='./images/graphic-view.png' className="mb-3 w-75" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>8</td>
                                        <td>Upload background</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Xóa map</td>
                                        <td>9</td>
                                        <td>Chọn danh sách door</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Sửa map</td>
                                        <td>10</td>
                                        <td>Chọn danh sách zone</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Click xem chi tiết map</td>
                                        <td>11</td>
                                        <td>Hủy</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Danh sách map</td>
                                        <td>12</td>
                                        <td>Lưu thông tin map</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Tên map</td>
                                        <td>13</td>
                                        <td>Vị trí door hoặc zone</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Chọn group map</td>
                                        <td></td>
                                        <td></td>
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
export default Monitoring;