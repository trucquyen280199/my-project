import React from "react";
// import "../Access Control/style.css";

function Visitor(props) {
    return(
        <div className="pages pageTest groupCard d-flex align-items-start">
            <nav className="toc">
                <div className="menu-main" style={{position: "relative"}}>
                <ul  className="menu-main">
                    <li className="link"><a href="#definitions-and-updates">Định nghĩa và cập nhật loại khách</a></li>
                    <li className="link"><a href="#setting-card-list">Cài đặt danh sách thẻ dùng cho quản lý khách</a></li>
                    <li className="link"><a href="#setting-people-list">Cài đặt danh sách nhân viên mà khách có thể gặp</a></li>
                    <li className="link"><a href="#degistered-visitor-afar">Đăng ký khách (từ xa)</a></li>
                    <li className="link"><a href="#degistered-visitor-place">Đăng ký khách (đăng ký tại chỗ)</a></li>
                    <li className="link"><a href="#view-list-visitor-pending">Xem danh sách khách chờ xử lý</a></li>
                    <li className="link"><a href="#approval-visitor">Phê duyệt khách</a></li>
                    <li className="link"><a href="#update-period">Cập nhật khoảng thời gian gặp của khách</a></li>
                    <li className="link"><a href="#refuse-visitor">Từ chối khách</a></li>
                    <li className="link"><a href="#list-visitor-acceptance">Xem danh sách khách chấp thuận</a></li>
                    <li className="link"><a href="#degistered-fingerprint">Đăng ký mẫu vân tay cho khách</a></li>
                    <li className="link"><a href="#degistered-card">Đăng ký thẻ (hoặc xoá thẻ) cho khách</a></li>
                    <li className="link"><a href="#synchronize-authorization">Đồng bộ các uỷ quyền cho khách</a></li>
                    <li className="link"><a href="#visitor-list-expire">Xem danh sách khách hết hạn</a></li>
                    <li className="link"><a href="#view-report">Xem báo cáo</a></li>
                    <li className="link"><a href="#daily-visitor-statistics">Xem thống kê khách hàng ngày</a></li>
                    <li className="link"><a href="#monitoring-visitor">Giám sát khách</a>
                        <ul>
                            <li className="link"><a href="#adjust-device-type">Điều chỉnh loại thiết bị (ra - vào)</a></li>
                            <li className="link"><a href="#adjust-diary">Điều khiển nhật ký ra – vào</a></li>
                        </ul>
                    </li> 
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
                </div>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Visitor</h2>
                <section>
                    <div id="definitions-and-updates">
                        <h2>1.	Định nghĩa và cập nhật loại khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KIỂM SOÁT TRUY CẬP &gt; Cài đặt.</b></p>
                            <img src="./images/visitor-1.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Loại khách đăng ký</b>.</p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-2.png" className="w-100 mb-3" />
                            <p>Bấm nút <b>Thêm</b> để tạo mới hoặc <b>bấm đúp chuột vào dòng</b> để cập nhật loại khách tương ứng.</p>
                            <p>B3: Cửa sổ sau sẽ xuất hiện, điền vào hoặc chỉnh sửa các thông tin cần thiết.</p>
                            <img src="./images/visitor-3.png" className="w-100 mb-3" />
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th>Tên mục</th>
                                        <th>Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tên loại</td>
                                        <td>- Định nghĩa tên loại khách.</td>
                                    </tr>
                                    <tr>
                                        <td>Mã loại</td>
                                        <td>
                                        <span className="ml-3">-	Là mã số từ 1 đến 99999 (tối đa 5 chữ số).</span><br/>
                                        <span className="ml-3">-	Là duy nhất.</span><br/>
                                        <span className="ml-3">-	Chỉ hiển thị khi tạo mới.</span>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chứng chỉ</td>
                                        <td>- Chưa cần thiết (đang phát triển).</td>
                                    </tr>
                                    <tr>
                                        <td>Tổng thời gian ở lại</td>
                                        <td>- Số giờ tối đa mà loại khách này được phép ở trong công ty (giá trị hợp lệ từ 0 ~ 24).</td>
                                    </tr>
                                </tbody>
                            </table> 
                            <p>B4: Bấm <b>Đồng ý</b> để cập nhật.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="setting-card-list">
                        <h2>2.	Cài đặt danh sách thẻ dùng cho quản lý khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH  &gt; Cài đặt.</b></p>
                            <img src="./images/visitor-4.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Cài đặt thẻ</b>.</p>
                            <p>B2: Trang sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-5.png" className="w-100 mb-3" />
                            <p>B3: Chọn hoặc bỏ chọn thẻ. </p>
                            <p>B4: Bấm nút <b>Lưu</b> để cập nhật. </p>
                            <p>Lưu ý:</p>
                            <p>
                                <span className="ml-3">-	<b>Trạng thái</b>: Nếu thẻ đang được sử dụng bởi khách hoặc nhân viên thì sẽ hiển thị
                                mã của họ. Còn lại là thẻ chưa được sử dụng.</span><br/>
                                <span className="ml-3">-	<b>Ô tìm kiếm</b>: tìm kiếm theo <b>Mã thẻ</b> hoặc <b>Tên thẻ</b>.</span><br/>
                                <span className="ml-3">-	<b>Nút làm mới</b>: để tải lại danh sách thẻ.</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="setting-people-list">
                        <h2>3.	Cài đặt danh sách nhân viên mà khách có thể gặp</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH  &gt; Cài đặt.</b></p>
                            <img src="./images/visitor-4.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Cài đặt người dùng</b>.</p>
                            <p>B2: Trang sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-7.png" className="w-100 mb-3" />
                            <p>B3: Chọn phòng ban ở <b>Danh sách phòng ban</b> (nếu cần) để lọc nhân viên.</p>
                            <img src="./images/visitor-8.png" className="w-100 mb-3" />
                            <p>B4: Chọn hoặc bỏ chọn nhân viên. </p>
                            <p>B5: Bấm nút <b>Lưu</b> để cập nhật.</p>
                            <p>Lưu ý:</p>
                            <p>
                                <span className="ml-3">-	<b>Ô tìm kiếm</b>: tìm kiếm theo <b>Mã người dùng (Thiết bị)</b> hoặc <b>Họ tên</b>.</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="degistered-visitor-afar">
                        <h2>4.	Đăng ký khách (từ xa)</h2>
                        <div className="content-item" >
                            <p>B1: Mở trình duyệt và vào đường link: <a href="http://mobile.suprema.vn:8081/register">http://mobile.suprema.vn:8081/register</a>.</p>
                            <img src="./images/visitor-9.png" className="w-100 mb-3" /> 
                            <p>(Nút ở góc trái trên cùng để chọn ngôn ngữ)</p>
                            <p>B2: Nếu ghé thăm lần đầu, bấm nút <b>Ghé thăm lần đầu</b> (:D) và đi đến B3.</p>
                            <p>
                                Nếu đã từng đăng ký, hãy tìm kiếm theo <b>Họ tên, Chứng minh nhân dân (CMND), Căn cước công dân (CCCD), Số điện thoại</b> hoặc <b>Email</b> và bấm nút <b>Tìm kiếm</b>.
                                Cửa sổ thông báo sau sẽ xuất hiện nếu tìm thấy. <br/>
                                Bấm <b>Đồng ý</b> để tiếp tục.
                            </p>
                            <img src="./images/visitor-10.png" className="w-100 mb-3" />
                            <p>B3: Mẫu đăng ký sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-11.png" className="w-100 mb-3" />
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Họ tên (bắt buộc).</td>
                                        <td>7</td>
                                        <td>Thời gian bắt đầu (bắt buộc).</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Số tuổi (bắt buộc).</td>
                                        <td>8</td>
                                        <td>Thời gian kết thúc (bắt buộc).</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Chứng minh nhân dân (CMND) hoặc căn cước công dân (CCCD) (bắt buộc).</td>
                                        <td>9</td>
                                        <td>Chọn loại khách đăng ký (bắt buộc).</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Số điện thoại (bắt buộc).</td>
                                        <td>10</td>
                                        <td>Nút mở webcam để chụp hình khuôn mặt.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Email (bắt buộc).</td>
                                        <td>11</td>
                                        <td>Nút tải file hình khuôn mặt.</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Chọn ngời cần gặp nếu cần thiết.</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Điền các <b>thông tin bắt buộc</b>.</p>
                            <p>Nếu muốn gặp nhân viên nào đó, hoặc chọn nút phía dưới <b>Người gặp</b> để cập nhật.<br/> Cửa sổ sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-12.png" className="w-100 mb-3" />
                            <p>Chọn nhân viên cần gặp và bấm nút <b>Lưu</b> để cập nhật.<br/>
                            B4: Sau đó bấm <b>Đồng ý (Điều khoản dịch vụ)</b>.<br/>
                            B5: Bấm nút <b>Đăng ký</b> để hoàn thành.
                            </p>
                            <p>Lưu ý:</p>
                            <p>
                                <span className="ml-3">-	<b>Ô tìm kiếm</b>: tìm kiếm theo <b>Mã người dùng (Thiết bị)</b> hoặc <b>Họ tên</b>.</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="degistered-visitor-place">
                        <h2>5.	Đăng ký khách (đăng ký tại chỗ)</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chờ</b>. </p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-14.png" className="w-100 mb-3" />
                            <p>Bấm nút <b>Đăng ký</b>.</p>
                            <p>B3: Một tab mới sẽ xuất hiện.</p>
                            <img src="./images/visitor-15.png" className="w-100 mb-3" />
                            <p>Điền các <b>thông tin bắt buộc</b>.</p>
                            <p>B4: <b>Lấy mẫu ảnh chân dung</b> bằng cách bấm vào nút <b>Khuôn mặt</b> hoặc <b>khung hình</b>.</p>
                            <p>
                                Có 2 cách lấy:<br/>
                                -	Lấy thông qua <b>thiết bị Suprema</b>:

                            </p>
                            <img src="./images/visitor-16.png" className="w-100 mb-3" />
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút để chọn kiểu lấy mẫu khuôn mặt bằng thiết bị Suprema.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút để chọn kiểu lấy mẫu khuôn mặt bằng thiết bị USB (webcam, …).</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút để tải lại danh sách thiết bị Suprema khả dụng.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Danh sách các thiết bị (Face) có sẵn.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Nút để thực hiện lấy mẫu (chụp ảnh).</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Hình ảnh sau khi thực hiện lấy mẫu.</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Nút lưu hình ảnh hoặc huỷ bỏ.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                <span className="ml-4">o	Chọn thiết bị Face.</span><br/>
                                <span className="ml-4">o	Bấm nút Lấy mẫu, sau khi thiết bị chụp xong sẽ hiển thị hinh ở ô 6.</span><br/>
                                <span className="ml-4">o	Bấm nút Lưu khi thực hiện xong.</span>
                            </p>
                            <p className="ml-4">-	Lấy thông qua <b>thiết bị USB</b>:</p>
                            <img src="./images/visitor-17.png" className="w-100 mb-3" />
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh sách thiết bị USB hiện có trên thiết bị đang sử dụng.</td>
                                        <td>4</td>
                                        <td>Màn hình trực tiếp từ thiết bị USB (webcam, ...).</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút để thực hiện lấy mẫu (chụp ảnh).</td>
                                        <td>5</td>
                                        <td>Nút lưu hình ảnh hoặc huỷ bỏ.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Hình ảnh sau khi lấy mẫu.</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                                <span className="ml-4">o	Chọn thiết bị USB</span><br/>
                                <span className="ml-4">o	Bấm nút <b>Chụp</b> để lấy mẫu.</span><br/>
                                <span className="ml-4">o	Bấm nút <b>Lưu</b> khi thực hiện xong.</span>
                            </p>
                            <p>
                                B5: Chụp hình ảnh <b>CMND/CCCD</b> tương tự như trên. <br/>
                                B6: Bấm nút <b>Đăng ký</b> để hoàn thành.<br/>
                                Nếu cần kiểm tra nhiệt độ của khách, bấm nút <b>Nhiệt độ</b> ở góc phải trên.
                            </p>
                            <img src="./images/visitor-18.png" className="w-100 mb-3" />
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút Nhiệt độ để mở cửa sổ kiểm tra nhiệt độ.</td>
                                        <td>4</td>
                                        <td>Danh sách thiết bị Suprema khả dụng.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút thực hiện quét nhiệt độ.</td>
                                        <td>5</td>
                                        <td>Kết quả hiển thị sau khi thực hiện quét nhiệt độ (đơn vị độ C).</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút tải lại danh sách thiết bị Suprema.</td>
                                        <td>6</td>
                                        <td>Nút Đồng ý hoặc từ chối khách.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="view-list-visitor-pending">
                        <h2>6.	Xem danh sách khách chờ xử lý</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chờ</b>. </p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-19.png" className="w-100 mb-3" />
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh sách thiết bị Suprema (Face) khả dụng.</td>
                                        <td>6</td>
                                        <td>Nút làm mới lại danh sách khách chờ xử lý.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút phê duyệt (chỉ hiện thị khi chọn ít nhất 1 khách).</td>
                                        <td>7</td>
                                        <td>Nút lọc theo loại khách.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút từ chối (chỉ hiện thị khi chọn ít nhất 1 khách).</td>
                                        <td>8</td>
                                        <td>Nút tìm kiếm toàn bộ khách đang chờ xét duyệt theo bộ lọc.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Bộ lọc theo thời gian từ ngày đến ngày.</td>
                                        <td>9</td>
                                        <td>Danh sách khách đang chờ xử lý.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Ô tìm kiếm theo <b>Họ tên, CMND/CCCD, Số điện thoại, Email</b>.</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Chú thích thông tin từng dòng của khách</p>
                            <img src="./images/visitor-20.png" className="w-100 mb-3" />
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Trạng thái đang chọn khách này</td>
                                        <td>7</td>
                                        <td>Nút xem thông tin danh sách người gặp của khách (nếu có).</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mã và Họ tên khách.</td>
                                        <td>8</td>
                                        <td>Khoảng thời gian gặp của khách.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Thông tin khác của khách.</td>
                                        <td>9</td>
                                        <td>Nút cập nhật khách (chỉ được cập nhật khoảng thời gian gặp).</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Loại khách.</td>
                                        <td>10</td>
                                        <td>Nút phê duyệt.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Hình ảnh của khách.</td>
                                        <td>11</td>
                                        <td>Nút từ chối.</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Nút xem hình CMND/CCCD (nếu có).</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="approval-visitor">
                        <h2>7.	Phê duyệt khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chờ</b>. </p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-21.png" className="w-100 mb-3" />
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh sách thiết bị Suprema (Face) khả dụng.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút phê duyệt toàn bộ khách đang chọn.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút chọn (huỷ chọn) toàn bộ khách (Lưu ý: chỉ chọn ở trang hiện tại).</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Nút chọn (huỷ chọn) theo từng khách.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Nút phê duyệt khách của dòng đó.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Chọn <b>thiết bị Face</b> muốn áp dụng.</p>
                            <p>
                            B3: Chọn danh sách khách cần phê duyệt.<br/>
                            B4: Bấm nút <b>Phê duyệt (5)</b> nếu chỉ phê duyệt 1 khách đó, hoặc bấm nút <b>Phê duyệt (2)</b>nếu danh sách nhiều hơn 1.<br/>
                            B5: Danh sách được phê duyệt sẽ được chuyển qua <b>Danh sách chấp thuận</b>.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="update-period">
                        <h2>8.	Cập nhật khoảng thời gian gặp của khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chờ</b>. </p>
                            <p>B2: Bấm nút <b>Cập nhật</b> của khách cần cập nhật</p>
                            <img src="./images/visitor-22.png" className="w-100 mb-3" />
                            <p>B3: Cửa số sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-23.png" className="w-100 mb-3" />
                            <p>Điều chỉnh khoảng thời gian hợp lý. </p>
                            <p>B4: Bấm nút <b>Lưu</b> để lưu thông tin mới.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="refuse-visitor">
                        <h2>9.	Từ chối khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chờ</b>. </p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-24.png" className="w-100 mb-3" />
                            <table className="table ">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nút từ chối khách đang chọn.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Nút chọn (huỷ chọn) toàn bộ khách (Lưu ý: chỉ chọn ở trang hiện tại).</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nút chọn (huỷ chọn) theo từng khách.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Nút từ chối khách của dòng đó.</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>Chọn danh sách khách cần từ chối.</p>
                            <p>
                                B3: Bấm nút <b>Xoá (4)</b> nếu chỉ từ chối 1 khách đó, hoặc bấm nút <b>Xoá (1)</b> nếu danh sách nhiều hơn 1.<br/>
                                B4: Sau đó có cửa sổ xuất hiện, nhập <b>lý do</b> từ chối (nếu cần thiết).
                            </p>
                            <img src="./images/visitor-25.png" className="w-100 mb-3" />
                            <p>B5: Bấm nút <b>Lưu</b> để hoàn thành.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="list-visitor-acceptance">
                        <h2>10.	Xem danh sách khách chấp thuận</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chấp thuận</b>. </p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-26.png" className="w-100 mb-3" />
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nút đông bộ các uỷ quyền (là các mẫu vân tay, khuôn mặt và thẻ) tới thiết bị đang kết nối.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Nút thiết lập kiểm tra ra.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Danh sách khách đã được chập thuận theo bọ lọc.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Bộ lọc thời gian từ ngày đến ngày.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Ô tìm kiếm theo Họ tên, CMND/CCCD, Số điện thoạ và Email.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Nút làm mới trang.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Nút lọc theo loại khách.</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Nút tìm kiếm toàn bộ khách được chấp thuận theo bộ lọc.</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>Chú thích thông tin từng dòng của khách.</p>
                            <img src="./images/visitor-27.png" className="w-100 mb-3" />
                            <table className="table ">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Trạng thái đang chọn khách này.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mã và Họ tên khách.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Thông tin khác của khách.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Loại khách.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hình ảnh của khách.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Nút xem hình CMND/CCCD (nếu có).</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Nút xem thông tin danh sách người gặp của khách (nếu có).</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Khoảng thời gian gặp của khách.</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Nút xem, đăng ký và cập nhật mẫu vân tay cho khách.</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Nút xem, đăng ký và cập nhật thẻ cho khách.</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Nút đồng bộ (các mẫu vân tay, thẻ và khuôn mặt) đến thiết bị.</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Nút thiết lập kiểm tra ra cho khách.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="degistered-fingerprint">
                        <h2>11.	Đăng ký mẫu vân tay cho khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chấp thuận</b>. </p>
                            <p>B2: Bấm nút <b>Đăng ký vân tay</b> của khách</p>
                            <img src="./images/visitor-28.png" className="w-100 mb-3" />
                            <p>B3: Cửa sổ sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-29.png" className="w-100 mb-3" />
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Thiết bị Suprema đang được chọn trong danh sách thiết bị khả dụng.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mức chất lượng của mẫu vân tay.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nút thêm 1 mẫu vân tay mới.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Danh sách mẫu vân tay hiện tại.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Hình ảnh của mẫu vân tay đang chọn.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Nút quét để lấy mẫu mới của mẫu vân tay đang chọn.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Nút xoá mẫu vân tay đang chọn</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Nút lưu lại toàn bộ mẫu vân tay hiện tại.</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>Chọn mẫu vân tay cần cập nhật ở <b>vùng (4)</b> hoặc bấm nút <b>Thêm (3)</b> để tạo mẫu mới.</p>
                            <p>
                                B4: Chọn thiết bị thực hiện lấy mẫu.<br/>
                                B5: Bấm nút <b>Quét (6)</b> để lấy mẫu, hình ảnh mẫu vân tay mới sau khi quét thành công sẽ hiện thỉ ở <b>vùng (5)</b>.<br/>
                                B6: Sau khi hoàn tất lấy mẫu mới, huỷ mẫu cũ, ... bấm nút <b>Đồng ý (8)</b> để cập nhật.<br/><br/>

                                Cách xoá mẫu vân tay (không cần chọn thiết bị):<br/>
                                <span className="ml-3">•	Chọn mẫu cần xoá.</span><br/>
                                <span className="ml-3">•	Bấm nút <b>Xoá (7)</b>.</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="degistered-card">
                        <h2>12.	Đăng ký thẻ (hoặc xoá thẻ) cho khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chấp thuận</b>. </p>
                            <p>B2: Bấm nút <b>Đăng ký vân thẻ</b> của khách (mỗi khách chỉ <b>tối đa 1 thẻ duy nhất</b>).</p>
                            <img src="./images/visitor-30.png" className="w-100 mb-3" />
                            <p>Trường hợp <b>đã có thẻ</b> thì sẽ hiển thị giống như hình dưới.</p>
                            <img src="./images/visitor-31.png" className="w-100 mb-3" />
                            <p>B3: Cửa sổ sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-32.png" className="w-100 mb-3" />
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Danh sách thẻ khả dụng</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                    Trạng thái của từng thẻ:<br/>
                                    <span className="ml-3">-	Nếu có người sử dụng sẽ hiển thị mãc của họ.</span><br/>
                                    <span className="ml-3">-	Nếu không sẽ hiển thị “OK”.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Ô chọn thẻ cho khách.</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>Chọn thẻ đăng ký cho khách.</p>
                            <p>
                            B4: Bấm nút <b>Lưu</b> để lưu thông tin cập nhật.<br/><br/>
                            Trường hợp xoá thẻ cho khách, bấm nút <b>Xoá thẻ</b> và xác nhận xoá.
                            </p>
                            <img src="./images/visitor-33.png" className="w-100 mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="synchronize-authorization">
                        <h2>13.	Đồng bộ các uỷ quyền cho khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách chấp thuận</b>. </p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-34.png" className="w-100 mb-3" />
                            
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nút đồng bộ các uỷ quyền cho toàn bộ khách đang chọn.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Nút chọn (huỷ chọn) toàn bộ khách (Lưu ý: chỉ chọn ở trang hiện tại).</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Nút chọn (huỷ chọn) theo từng khách.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Nút đồng bộ các uỷ quyền cho khách ở dòng đó</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>B3: Chọn danh sách khách cần đồng bộ.<br/>
                                B4: Bấm nút <b>Đồng bộ các uỷ quyền (4)</b> nếu chỉ phê duyệt 1 khách đó, hoặc bấm nút
                                <b>Đồng bộ các uỷ quyền (2)</b> nếu danh sách nhiều hơn 1.<br/>
                                Các <b>mẫu vân tay, thẻ</b> và <b>khuôn mặt</b> của khách sẽ được <b>đồng bộ</b> đến các <b>thiết bị đang được kết nối</b>.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="visitor-list-expire">
                        <h2>14.	Xem danh sách khách hết hạn</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Khách</b>.</p>
                            <img src="./images/visitor-13.png" className="w-25 mb-3" /> 
                            <p>Sau đó chọn <b>Danh sách hết hạn</b>. </p>
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-35.png" className="w-100 mb-3" />
                            
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nút thiết lập kiểm tra ra.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Nút xoá (ẩn).</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bộ lọc theo loại khách.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Ô tìm kiếm theo Họ tên, CMND/CCCD, Số điện thoại và Email.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Nút làm mới trang.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Nút tìm kiếm toàn bộ khách hết hạn theo bộ lọc.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Danh sách khách hết hạn theo bộ lọc.</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>Chú thích thông tin từng dòng của khách.</p>
                            <img src="./images/visitor-36.png" className="w-100 mb-3" />
                            <table className="table" >
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Trạng thái đang chọn khách này.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mã và Họ tên khách.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Thông tin khác của khách.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Hình ảnh của khách</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Nút xem hình CMND/CCCD (nếu có).</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Khoảng thời gian gặp của khách.</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Nút đăng ký lại cho khách.</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Nút xoá (ẩn) khách.</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Nút thiết lập kiểm tra ra.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="view-report">
                        <h2>15.	Xem báo cáo</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Báo cáo</b>.</p>
                            <img src="./images/visitor-37.png" className="w-25 mb-3" /> 
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-38.png" className="w-100 mb-3" />
                            
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nút in báo cáo theo bọ lọc hiện tại.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Bộ lọc: thời gian bắt đầu.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bộ lọc: danh sách thiết bị khả dụng.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Bộ lọc: loại kiểm tra (<b>vào, ra</b> và <b>tất cả</b>).</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Danh sách nhật ký.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Nút tiềm kiếm theo bộ lọc hiện tại.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Nút làm mới trang.</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Bộ lọc: thời gian kết thúc.</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Bộ lọc: danh sách khách đã được phế duyệt trong khoảng thời gian đã chọn.</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Chọn kiểu báo cáo: xem theo toàn bộ danh sách và xem theo <b>cặp ra – vào</b>.<br/>
                                    (Nếu chọn kiểu báo cáo theo cặp ra – vào thì không sử dụng được <b>bộ lọc 3 và 4</b>)
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <p>Chú thích thông tin từng dòng của báo cáo.</p>
                            <img src="./images/visitor-39.png" className="w-100 mb-3" />
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thông tin mã và họ tên khách.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Loại và thời gian kiểm tra lúc kiểm tra.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Thông tin thiiết bị lúc kiểm tra.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Loại sự kiện lúc kiểm tra.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Nút xem người gặp của khách.</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Nút xem hình ảnh khi kiểm tra (nếu có).</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Thời gian và thông tin thiết bị khi kiểm tra <b>Vào</b>.</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Thời gian và thông tin thiết bị khi kiểm tra <b>Ra</b>.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="daily-visitor-statistics">
                        <h2>16.	Xem thống kê khách hàng ngày</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Thống kê khách</b>.</p>
                            <img src="./images/visitor-40.png" className="w-25 mb-3" /> 
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-41.png" className="w-100 mb-3" />
                            
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Danh sách toàn bộ khách trong ngày (có thể bấm vào để xem chi tiết).</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                    Danh sách khách theo từng loại khách, bao gồm:<br/>
                                    <span className="ml-3">-	Hiện diện (ở sau tên loại khách).</span><br/>
                                    <span className="ml-3">-	Thực tế, Ra và Từ chối.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                    Bộ lọc xem Danh sách chi tiết:<br/>
                                        <span className="ml-3">-	Lọc theo 1 ngày, nhiều ngày.</span><br/>
                                        <span className="ml-3">-	Lọc theo tháng.</span><br/>
                                        <span className="ml-3">-	Lọc theo năm.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Nút lấy dữ liệu theo bộ lọc.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Danh sách hiện diện trong ngày, bao gồm tổng thời gian đã ở lại tính từ lần đầu tiên kiểm tra vào.</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Nút làm mới <b>Danh sách khách hàng ngày</b>.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Biểu đồ của <b>Dach sách chi tiết</b>.</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Nút làm mới <b>Danh sách hiện diện</b>.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="monitoring-visitor">
                        <h2>17.	Giám sát khách</h2>
                        <div className="content-item" >
                            <p>B1: Ở mục menu bên trái màn hình. Vào mục <b>KHÁCH &gt; Giám sát khách</b>.</p>
                            <img src="./images/visitor-42.png" className="w-25 mb-3" /> 
                            <p>B2: Màn hình sau sẽ xuất hiện.</p>
                            <img src="./images/visitor-43.png" className="w-100 mb-3" />
                            
                            <table className="table">
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nút kích hoạt/tạm dừng Giám sát khách.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Nút xem danh sách nhân viên còn trong công ty.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                    Danh sách toàn bộ thiết bị đang kết nối:<br/>
                                    <span className="ml-3">-	Danh sách thiết bị vào – ra đã cài đặt</span><br/>
                                    <span className="ml-3">-	Các thiết bị còn lại</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Danh sách nhật ký ra vào của nhân viên và khách.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Nút để làm sách danh sách nhật ký (xoá tạm).</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Nút xem danh sách khách (của từng loại khách) còn lại trong công ty.</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Nút xem danh sách toàn bộ nhân viên và khách còn lại trong công ty.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="adjust-device-type">
                        <h2>a.	Điều chỉnh loại thiết bị (ra - vào)</h2>
                        <div className="content-item" >
                            <p>
                                Khi có thiết bị nắm 2 chức năng ra – vào. <br/>
                                B1: Kích hoạt <b>Giám sát khách</b>.<br/>
                                B2: Bấm nút Thiết bị.
                            </p>
                            <img src="./images/visitor-44.png" className="w-100 mb-3" /> 
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh sách thiết bị chính.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Thiết bị có 2 chức năng ra - vào</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Danh sách thiết bị còn lại</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>
                            B3:<br/>
                                <span className="ml-3">-	Chọn Tự động vào: khi chọn, tất cả nhật ký từ thiết bị này sẽ mặc định là nhật ký Vào.</span><br/>
                                <span className="ml-3">-	Chọn Tự động ra: khi chọn, tất cả nhật ký từ thiết bị này sẽ mặc định là nhật ký Ra.</span><br/>
                                <span className="ml-3">-	Dừng: tất cả nhật ký khi này sẽ gán ra – vào cách thủ công, thông qua
                                người giám sát điều khiển.</span>
                            </p><br/>
                            <p> 
                                <b>Lưu ý</b>: <i>Nếu không mở màn hình (tab) giám sát thì các nhật ký từ các thiết bị 2 chức năng ra – vào sẽ mặc định gán loại Không xác định</i>.
                            </p>
                        </div>
                    </div>
                    <div id="adjust-diary">
                        <h2>b.	Điều khiển nhật ký ra – vào</h2>
                        <div className="content-item" >
                            <p >Chỉ có thể điều khiển, chỉnh sửa khi thiết bị của nhật ký đang gắn 2 chức năng ra – vào</p>
                            <img src="./images/visitor-45.png" className="w-100 mb-3" /> 
                            <p className="text-center font-italic">Hình 1 Thiết bị (với ID là 543614266) được gán 2 chức năng Ra - Vào</p>
                            <img src="./images/visitor-46.png" className="w-100 mb-3" />
                            <p className="text-center font-italic">Hình 2 Thiết bị (với ID là 241617276) chỉ được gán 1 chức năng (Vào)</p>
                            <p>B1: Tuỳ vào tình hình thực tế, chọn <b>Vào</b>Vào hoặc <b>Ra</b> để xác định loại kiểm tra. <br/>
                                B2: Sau khi chọn loại vào – ra.
                            </p>
                            <img src="./images/visitor-47.png" className="w-100 mb-3" />
                            <p>Nếu có sai sót trong quá trình xác định loại kiểm tra, có thể bấm vào nút <b>Sửa sai</b>
                                để đổi lại loại kiểm tra (từ <b>Vào</b> thành <b>Ra</b> và ngược lại).</p>
                            <p>
                            <b>Lưu ý</b>:<br/>
                                <span className="ml-3">-	Chỉ có thể <b>điều chỉnh</b> nhật ký <b>gần nhất</b> đối với từng người, các nhật ký đã trôi qua sẽ <b>không thể</b> chỉnh sửa.</span><br/>
                                <span className="ml-3">-	Khi ở màn hình giám sát, <b>Thẻ</b> của khách sẽ <b>bị xoá</b> nếu thiết lập <b>kiểm tra Ra</b>, bất kể là loại thiết bị <b>Ra</b> hay do người giám sát điều khiển (vân tay và khuôn mặt vẫn hoạt động bình thường).</span>
                            </p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Visitor;