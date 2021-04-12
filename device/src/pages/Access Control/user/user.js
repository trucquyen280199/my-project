import React from "react";
import "../style.css";

function User(props) {

    return(
        <div >
        <div className="pages d-flex align-items-start pageTest" >
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link">
                    <a href="#screen-main"> Giải thích các màn hình</a>
                        <ul>
                            <li className="link"><a href="#screen-main">Màn hình chính</a></li>
                            <li className="link"><a href="#screen-update">Màn hình của mẫu thêm<br/> hoặc cập nhật nhân viên</a></li>
                        </ul>
                    </li>
                    <li className="link">
                        <a href="#add-personnel">Thêm nhân viên mới</a>
                    </li>
                    <li className="link">
                        <a href="#update-personnel">Cập nhật nhân viên</a>
                    </li>
                    <li className="link">
                        <a href="#certificate-registration">Đăng ký các chứng chỉ</a>
                        <ul>
                            <li className="link"><a href="#fingerprint-registration">Đăng ký vân tay</a></li>
                            <li className="link"><a href="#face-registration">Đăng ký khuôn mặt</a></li>
                            <li className="link"><a href="#visual-face-registration">Đăng ký Visual face</a></li>
                            <li className="link"><a href="#card-registration">Đăng ký thẻ</a></li>
                        </ul>
                    </li>
                    <li className="link">
                        <a href="#end-of-contract">Kết thúc hợp đồng</a>
                    </li>
                    <li className="link">
                        <a href="#delete-hide-personnel">Xóa(Ẩn) nhân viên</a>
                    </li>
                    <li className="link">
                        <a href="#re-activate-personnel">Kích hoạt lại nhân viên</a>
                    </li>
                    <li className="link">
                        <a href="#sync-to-device">Đồng bộ đến thiết bị</a>
                    </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" stroke-width="3" fill="transparent" stroke-dasharray="0, 0, 0, 1000" stroke-linecap="round" stroke-linejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">User</h2>
                <section>
                    <div id="screen-main">
                        <h2>1. Giải thích các màn hình</h2>
                        <h3 className=" ml-4">1.a Màn hình chính</h3>
                        <div className="content-item" >
                            <img src='./images/manhinhchinh1.png' className="mb-3" />
                            <p>Bộ lọc và các nút</p>
                            <img src='./images/manhinhchinh2.png' />
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Nút bộ lọc phòng ban.</td>
                                        <td>4</td>
                                        <td>Nút để xoá (ẩn) những nhân viên đã chọn</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Nút bộ lọc chức vụ.</td>
                                        <td>5</td>
                                        <td>Nút đồng bộ các mẫu vân tay, ... của những nhân viên đã chọn đến toàn bộ thiết bị</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Nút để thêm nhân viên mới.</td>
                                        <td>6</td>
                                        <td>Nút để xem danh sách bị xoá</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="screen-update">
                        <h3 className="ml-4">1.b Màn hình của mẫu thêm/cập nhật nhân viên</h3>
                        <div className="content-item" >
                            <img src='./images/3.png' className="w-75" />
                            <table className="table mt-3">
                                <tbody>
                                    <tr>
                                        <td>Quốc tịch</td>
                                        <td>(bắt buộc)</td>
                                    </tr>
                                    <tr>
                                        <td>Tỉnh thành</td>
                                        <td>(bắt buộc)</td>
                                    </tr>
                                    <tr>
                                        <td>Mã</td>
                                        <td>Mã số duy nhất của nhân viên (chỉ nhập số, bắt buộc)</td>
                                    </tr>
                                    <tr>
                                        <td>Mã người dùng</td>
                                        <td>Mã tự tạo dựa trên mã tỉnh thành và mã nhập phía trên – Mã trên thiết bị</td>
                                    </tr>
                                    <tr>
                                        <td>Mã nhân viên</td>
                                        <td>Mã tự tạo dựa trên mã tỉnh thành và mã nhập phía trên</td>
                                    </tr>
                                    <tr>
                                        <td>Họ tên </td>
                                        <td>(bắt buộc)</td>
                                    </tr>
                                    <tr>
                                        <td>Tên tài khoản</td>
                                        <td>(duy nhất)</td>
                                    </tr>
                                    <tr>
                                        <td>Mật khẩu/Nhập lại mật khẩu</td>
                                        <td>-	Nếu nhập tài khoản thì mới có thể nhập mật khẩu.<br/>
                                            -	Có thể tạo tài khoản cho nhân viên mà không cần đặt mật khẩu (tài khoản sẽ được đăng ký nhưng chưa thể sử dụng)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Phòng ban</td>
                                        <td>(bắt buộc)</td>
                                    </tr>
                                    <tr>
                                        <td>Chức vụ</td>
                                        <td>(bắt buộc)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-personnel">
                        <h2>2.	Thêm nhân viên mới</h2>
                        <p className="ml-4">B1: Vào theo mục <b>Home &gt; Người dùng &gt; Danh sách</b></p>
                        <img src="./images/4.png" />
                        <p className="ml-4">B2: Bấm nút Thêm</p>
                        <img src="./images/5.png" />
                        <p className="ml-4">B3: <a href="#screen-update">Ở cửa sổ mới</a>, điền các thông tin bắc buộc và thông tin cần thiết </p>
                        <p className="ml-4">B4: Bấm nút Lưu để lưu thông tin nhân viên</p>
                    </div>
                </section>
                <section>
                    <div id="update-personnel">
                        <h2>3.	Cập nhật nhân viên</h2>
                        <p className="ml-4">B1: Vào theo mục <b>Home &gt; Người dùng &gt; Danh sách</b></p>
                        <img src="./images/4.png" />
                        <p className="ml-4">B2: Bấm đúp chuột vào dòng nhân viên cần cập nhật</p>
                        <img src="./images/5.png" />
                        <p className="ml-4">B3:  <a href="#screen-update">Ở cửa sổ mới</a>, điền các thông tin bắc buộc và thông tin cần thiết </p>
                        <p className="ml-4">B4: Bấm nút Lưu để lưu thông tin nhân viên</p>
                    </div>
                </section>
                <section>
                    <div id="certificate-registration">
                        <h2>4.	Đăng ký các chứng chỉ</h2>
                        <p className="ml-4" style={{fontWeight: "700"}}><span>Lưu ý:</span> chỉ có thể đăng ký chứng chỉ sau khi đã thêm nhân viên</p>
                        <p className="ml-4">B1: Vào theo mục <b>Home &gt; Người dùng &gt; Danh sách</b></p>
                        <img src="./images/4.png" />
                        <p>B2: Bấm đúp chuột vào dòng nhân viên cần đăng ký</p>
                        <img src="./images/8.png" />
                        <p className="">B3: <a href="#screen-update">Ở cửa sổ mới</a>, tìm đến mục Chứng chỉ</p>
                        <img src="./images/9.png" />
                    </div>
                    <div id="fingerprint-registration">
                        <h3 className="ml-4">4.a	Đăng ký vân tay</h3>
                        <p className="ml-4">B4: Chọn nút Vân tay</p>
                        <img src="./images/4.1.png" />
                        <p className="ml-4">Cửa sổ sau sẽ xuất hiện</p>
                        <img src="./images/4.2.png" />
                        <p className="ml-4">B5: Chọn thiết bị và Chất lượng</p>
                        <p className="ml-4">B6: Bấm thêm hoặc chọn vân tay cần cập nhật </p>
                        <p className="ml-4">B7: Bấm quét để tiến hành lấy mẫu</p>
                        <p className="ml-4">B8: Bấm đồng ý để lưu thông tin</p>
                        <p style={{fontWeight: "700"}}>Lưu ý: có thể xoá vân tay bằng cách chọn vân tay cần xoá &gt; Bấm xoá</p>
                    </div>
                    <div id="face-registration">
                        <h3 className="ml-4">4.b	Đăng ký khuôn mặt</h3>
                        <p className="ml-4">B4: Chọn nút Vân tay</p>
                        <img src="./images/4.3.png" />
                        <p className="ml-4">Cửa sổ sau sẽ xuất hiện</p>
                        <img src="./images/4.4.png" />
                        <p className="ml-4">B5: Chọn thiết bị và biến thể tư thế khuôn mặt </p>
                        <p className="ml-4">B6: Bấm thêm hoặc chọn khuôn mặt cần cập nhật  </p>
                        <p className="ml-4">B7: Bấm quét để tiến hành lấy mẫu</p>
                        <p className="ml-4">B8: Bấm đồng ý để lưu thông tin</p>
                        <p style={{fontWeight: "700"}}>Lưu ý: có thể xoá khuôn mặt bằng cách chọn khuôn mặt cần xoá &gt; Bấm xoá</p>
                    </div>
                    <div id="visual-face-registration">
                        <h3 className="ml-4">4.c	Đăng ký Visual face</h3>
                        <p className="ml-4">B4: Chọn nút Visual face</p>
                        <img src="./images/4.5.png" />
                        <p className="ml-4">Cửa sổ sau sẽ xuất hiện</p>
                        <img src="./images/4.6.png" />
                        <p className="ml-4">B5: Chọn thiết bị</p>
                        <p className="ml-4">B6: Bấm thêm, tải lên hoặc chọn Visual face cần cập nhật </p>
                        <p className="ml-4">B7: Bấm quét để tiến hành lấy mẫu</p>
                        <p className="ml-4">B8: Bấm đồng ý để lưu thông tin</p>
                        <p style={{fontWeight: "700"}}>Lưu ý: có thể xoá Visual face bằng cách chọn Visual face cần xoá &gt; Bấm xoá</p>
                    </div>
                    <div id="card-registration">
                        <h3 className="ml-4">4.c	Đăng ký thẻ</h3>
                        <p className="ml-4">B4: Chọn nút Thẻ</p>
                        <img src="./images/4.7.png" />
                        <p className="ml-4">Cửa sổ sau sẽ xuất hiện</p>
                        <img src="./images/4.8.png" />
                        <p className="ml-4">B5: Chọn loại thẻ (hiện tại chỉ hỗ trợ CSN) </p>
                        <p className="ml-4">B6: Chọn thiết bị</p>
                        <p className="ml-4">B7: Nhập mã thẻ để đọc thẻ hoặc thêm từ thẻ có sẵn (nút dấu cộng) </p>
                        <p className="ml-4">B8: Bấm đồng ý để lưu thông tin</p>
                        <p style={{fontWeight: "700"}}>Lưu ý: có thể xoá thẻ bằng cách bấm nút xoá ở cuối dòng</p>
                    </div>
                </section>
                <section>
                    <div id="end-of-contract">
                        <h2>5.	Kết thúc hợp đồng</h2>
                        <p className="ml-4" style={{fontWeight: "700"}}>Lưu ý: chỉ có thể huỷ hợp đồng nếu nhân viên có thông tin về hợp đồng (Ngày ký hợp đồng, thời hạn hợp đồng, ...)</p>
                        <p className="ml-4">B1: Vào theo mục <b>Home &gt; Người dùng &gt; Danh sách</b></p>
                        <img src="./images/4.png" />
                        <p>B2: Bấm đúp chuột vào dòng nhân viên cần huỷ hợp đồng</p>
                        <img src="./images/8.png" />
                        <p className="">B3: <a href="#screen-update">Ở cửa sổ mới</a>, tìm đến mục Thông tin hợp đồng</p>
                        <img src="./images/5.1.png" />
                        <p className="">B4: Bấm nút Kết thúc hợp đồng Cửa sổ sau sẽ xuất hiện</p>
                        <img src="./images/5.2.png" />
                        <p>B5: Chọn ngày kết thúc hợp đồng và nhập lý do kết thúc </p>
                        <p>B6: Chọn Kết thúc hợp đồng</p>
                        <p>B7: Bấm Lưu để cập nhật thông tin </p>
                        <p>Trường hợp cần khôi phục hợp đồng</p>
                        <img src="./images/5.3.png" />
                        <p>
                            Thực hiện tương tự từ B1 &minus;&gt; B3<br/> B4: Bấm nút Cập nhật <br />Cửa sổ sau sẽ xuất hiện
                        </p>
                        <img src="./images/5.4.png" />
                        <p>B5: Bấm khôi phục hợp đồng</p>
                        <p>B6: Bấm lưu để cập nhật thông tin</p>
                    </div>
                </section>
                <section>
                    <div id="delete-hide-personnel">
                        <h2>6.	Xoá (ẩn) nhân viên</h2>
                        <p className="ml-4">B1: Vào theo mục <b>Home &gt; Người dùng &gt; Danh sách</b></p>
                        <img src="./images/4.png" />
                        <p>B2: Chọn nhân viên </p>
                        <p className="">B3: Bấm nút Xoá</p>
                        <img src="./images/6.1.png" />
                    </div>
                </section>
                <section>
                    <div id="re-activate-personnel">
                        <h2>7.	Kích hoạt lại nhân viên</h2>
                        <p className="ml-4">B1: Vào theo mục <b>Home &gt; Người dùng &gt; Danh sách</b></p>
                        <img src="./images/4.png" />
                        <p>B2: Chọn Danh sách bị xoá</p>
                        <img src="./images/7.1.png" />
                        <p className="">B3: Chọn nhân viên</p>
                        <p className="">B4: Bấm nút Kích hoạt lại</p>
                        <img src="./images/7.4.png" />
                    </div>
                </section>
                <section>
                    <div id="sync-to-device">
                        <h2>8.	Đồng bộ đến thiết bị</h2>
                        <p className="ml-4">B1: Vào theo mục <b>Home &gt; Người dùng &gt; Danh sách</b></p>
                        <img src="./images/4.png" />
                        <p>B2: Chọn nhân viên</p>
                        <p className="">B3: Bấm nút Đồng bộ đến thiết bị</p>
                        <img src="./images/8.3.png" />
                    </div>
                </section>
            </article>
        </div></div>
    )
}
export default User;