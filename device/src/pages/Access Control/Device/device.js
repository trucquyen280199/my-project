import React from "react";
// import "../../../style.css";
function Device(props) {
    return(
        <div className="pages pageTest device d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    {/* <li className="link"><a href="#device">Device</a></li> */}
                    <li className="link"><a href="#basic-search">Tìm kếm cơ bản</a></li>
                    <li className="link"><a href="#advanced-search">Tìm kiếm nâng cao</a></li>
                    <li className="link"><a href="#details-and-configuration">Xem chi tiết và cấu hình thông tin của thiết bị</a></li>
                    <li className="link"><a href="#device-waiting">Thiết bị đang chờ</a></li>
                    <li className="link"><a href="#device-group">Nhóm thiết bị</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h1 className="text-center">THIẾT BỊ</h1>
                <section>
                    <div id="device">
                        <div className="content-item" >
                            <p>Bạn có thể sử dụng menu Device để thêm, xóa hoặc chỉnh sửa các thiết bị đã đăng ký, tìm nạp thông tin người dùng đã đăng ký trong thiết bị vào máy chủ.</p>
                            <img src='./images/device-1.png' className="" />
                            <img src='./images/device-1-2.png' className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tìm kiếm cơ bản</td>
                                        <td>9</td>
                                        <td>Làm mới lại danh sách thiết bị</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tìm kiếm nâng cao</td>
                                        <td>10</td>
                                        <td>Tìm kiếm thiết bị wiegand</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Kết nối lại thiết bị </td>
                                        <td>11</td>
                                        <td>Tìm kiếm thiết bị slave</td>
                                    </tr>
                                    <tr>    
                                        <td>4</td>
                                        <td>Ngắt kết nối thiết bị (và xóa khỏi danh sách)</td>
                                        <td>12</td>
                                        <td>Quản lý người dùng trong thiết bị</td>
                                    </tr>
                                    <tr>    
                                        <td>5</td>
                                        <td>Chọn thiết bị đã kết nối</td>
                                        <td>13</td>
                                        <td>Khởi động lại thiết bị</td>
                                    </tr>
                                    <tr>    
                                        <td>6</td>
                                        <td>Click double vào từng dòng để xem chi tiết hoặc click chuột phải để mở các chức năng mở rộng</td>
                                        <td>14</td>
                                        <td>Xóa tất cả dữ liệu trên thiết bị (ngoại trừ người dùng)</td>
                                    </tr>
                                    <tr>    
                                        <td>7</td>
                                        <td>Danh sách thiết bị đã kết nối</td>
                                        <td>15</td>
                                        <td>Xóa tất cả dữ liệu trên thiết bị</td>
                                    </tr>
                                    <tr>    
                                        <td>8</td>
                                        <td>Tìm kiếm thiết bị đã kết nối</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="basic-search">
                        <h2>1.	Tìm kếm cơ bản</h2>
                        <div className="content-item" >
                            <img src="./images/device-2.png" className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Chọn thiết bị để kết nối</td>
                                        <td>5</td>
                                        <td>Trạng thái thiết bị đã kết nối tới IP server</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tìm kiếm thiết bị trong danh sách hiện tại</td>
                                        <td>6</td>
                                        <td>Trạng thái hiện tại của thiết bị</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tìm kiếm lại</td>
                                        <td>7</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Danh sách thiết bị được tìm thấy</td>
                                        <td>6</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="advanced-search">
                        <h2>2.	Tìm kiếm nâng cao</h2>
                        <div className="content-item" >
                            <img src="./images/device-3.png" className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nhập địa chỉ IP cần tìm kiếm</td>
                                        <td>6</td>
                                        <td>Trạng thái thiết bị đã kết nối tới IP server</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Port</td>
                                        <td>7</td>
                                        <td>Trạng thái hiện tại của thiết bị</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tìm kiếm (được kích hoạt khi đã nhập IP) </td>
                                        <td>8</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Chọn thiết bị cần kết nối</td>
                                        <td>9</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Danh sách thiết bị được tìm thấy </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="details-and-configuration">
                        <h2>3.	Xem chi tiết và cấu hình thông tin của thiết bị</h2>
                        <div className="content-item" >
                            <img src="./images/device-4.png" className="mb-3 w-100" />
                            <p className="ml-4">
                            Restore default<br />
                             <span className="ml-4">-	<b>All</b>: Khôi phục tất cả mặc định cấu hình của thiết bị.</span><br />
                             <span className="ml-4">-	<b>Without network</b>: Khôi phục tất cả mặc định (ngoại trừ thông tin network) của thiết bị.</span><br />
                            Network<br />
                            <span className="ml-4">-	<b>Use DHCP</b>: Sử dụng TCP/IP tự động hoặc thủ công.<br />
                            <span className="ml-4">-	<b>Device &gt; Server connection</b>: Cấu hình thông tin server (thiết bị sẻ tự động kết nối tới server được cấu hình nếu được bật)</span><br />
                            Authentication: Cấu hình các loại xác thực, quyền hạn và các hành động cho thiết bị</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="device-waiting">
                        <h2>4.	Thiết bị đang chờ</h2>
                        <div className="content-item" >
                            <p className="ml-4">Các thiết bị được cấu hình kết nối thiết bị đến server, nếu chưa kết nối sẽ được quản lý trong trang này</p>
                            <img src="./images/device-5.png" className="mb-3 w-25" />
                            <img src="./images/device-6.png" className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Kết nối thiết bị</td>
                                        <td>4</td>
                                        <td>Tìm kiếm thiết bị trong danh sách hiện tại</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Chọn thiết bị cần kết nối</td>
                                        <td>5</td>
                                        <td>Làm mới lại danh sách</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Danh sách thiết bị được tìm thấy</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="device-group">
                        <h2>4.	Nhóm thiết bị</h2>
                        <div className="content-item" >
                            <p className="ml-4">Các thiết bị được cấu hình kết nối thiết bị đến server, nếu chưa kết nối sẽ được quản lý trong trang này</p>
                            <img src="./images/device-7.png" className="mb-3 w-25" />
                            <img src="./images/device-8.png" className="mb-3 w-100" />
                            <p className="font-weight-bold">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm nhóm thiết bị </td>
                                        <td>5</td>
                                        <td>Thêm nhóm thiết bị con</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tìm nhóm thiết bị </td>
                                        <td>6</td>
                                        <td>Sửa nhóm</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Danh sách thiết bị</td>
                                        <td>7</td>
                                        <td>Xóa nhóm</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Tổng số thiết bị</td>
                                        <td>8</td>
                                        <td>Cấu hình thiết bị</td>
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
export default Device;