import React from "react";
// import "./style.css";

function Permission(props) {

    return(
        <div className="pages d-flex align-items-start pageTest" >
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#general-decentralization"> Phân quyền tổng quát</a>
                    <ul>
                            <li className="link"><a href="#create-decentralization">Tạo quyền cho nhân viên mới theo mô-đun</a></li>
                            <li className="link"><a href="#update-decentralization">Cập nhật quyền của nhân viên theo mô đun</a></li>
                        </ul>
                    </li>
                    <li className="link"><a href="#function-adjustment">Điều chỉnh chức năng theo vai trò</a>
                        <ul>
                            <li className="link"><a href="#add-update-role">Thêm/Cập nhật vai trò</a></li>
                            <li className="link"><a href="#function-adjustment-b">Điều chỉnh chức năng</a></li>
                        </ul>
                    </li>
                    <li className="link"><a href="#decentralized-function">Phân quyền chức năng tùy chỉnh</a></li>
                    <li className="link"><a href="#decentralized-data">Phân quyền dữ liệu tùy chỉnh</a></li>
                    <li className="link"><a href="#view-history">Xem lịch sử phân quyền</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">HƯỚNG DẫN PHÂN QUYỀN</h2>
                <section>
                    <div id="general-decentralization">
                        <h2>1. Phân quyền tổng quát</h2>
                        <div className="content-item" >
                            <p>B1: Vào <b>CORE &gt; Phân quyền &gt; Phân quyền tổng quát</b></p>
                            <img alt="images" src='./images/permission/1.png' className="mb-3" />
                            <p>B2: Màn hình sau xuất hiện:</p>
                            <img alt="images" src='./images/permission/2.png' className="w-100" />
                        </div>
                    </div>
                    <div id="create-decentralization">
                        <h3 className="ml-4">a.	Tạo quyền cho nhân viên mới theo mô-đun</h3>
                        <div className="content-item" >
                            <p className="ml-4">B3: Chọn <b>Danh sách chưa kích hoạt</b> và chọn Mô-đun</p>
                            <img alt="images" src="./images/permission/3.png" className="w-100" />
                            <p className="ml-4">B4: Chọn nhân viên và quyền cụ thể</p>
                            <img alt="images" src="./images/permission/4.png" className="w-100" />
                            <p className="ml-4 mb-4">B5: Bấm <b>Xác nhận lưu</b> để tạo quyền</p>
                        </div>
                    </div>
                    <div id="update-decentralization">
                        <h3 className="ml-4">b.	Cập nhật quyền của nhân viên theo mô đun</h3>
                        <div className="content-item" >
                            <p className="ml-4">B3: Chọn <b>Danh sách kích hoạt</b> và chọn Mô-đun</p>
                            <img alt="images" src="./images/permission/5.png" className="w-100" />
                            <p className="ml-4">B4: Chọn quyền khác hoặc bỏ chọn để xoá quyền theo mô-đun đang chọn</p>
                            <img alt="images" src="./images/permission/6.png" className="w-100" />
                            <p className="ml-4">B5: Bấm <b>Xác nhận lưu</b> để cập nhật</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="function-adjustment">
                        <h2>2.	Điều chỉnh chức năng theo vai trò</h2>
                        <div className="content-item" >
                            <p className="ml-4">B1: Vào theo mục <b>CORE &gt; Phân quyền &gt; Điều chỉnh chức năng theo quyền (vai trò)</b></p>
                            <img alt="images" src="./images/permission/7.png"/>
                            <p className="ml-4">B2: Màn hình sau sẽ xuất hiện:</p>
                            <img alt="images" src="./images/permission/8.png" className="w-100" />
                        </div>
                    </div>
                    <div id="add-update-role">
                        <h3 className="ml-4">a.	Thêm/Cập nhật vai trò</h3>
                        <div className="content-item" >
                            <p className="ml-4">B3: Bấm nút <b>Thêm/Hoặc chọn quyền</b> để cập nhật</p>
                            <img alt="images" src="./images/permission/9.png" className="w-100" />
                            <p className="ml-4">B4: Nhập tên quyền – vai trò</p>
                            <img alt="images" src="./images/permission/10.png" />
                            <p className="ml-4">B5: Bấm <b>Lưu</b>.</p>
                            <p className="mt-4"><i><b>Lưu ý</b>: Không thể nhập tên đặc biệt “admin”</i></p>
                        </div>
                    </div>
                    <div id="function-adjustment-b">
                        <h3 className="ml-4">b.	 Điều chỉnh chức năng</h3>
                        <div className="content-item" >
                            <p className="ml-4">B3:  Chọn <b>quyền - vai trò và mô-đun</b> để xem các chức năng đang chọn</p>
                            <img alt="images" src="./images/permission/11.png" className="w-100" />
                            <img alt="images" src="./images/permission/12.png" className="w-100" />
                            <p className="ml-4">B4: Cập nhật các chức năng và quyền theo chức năng<br />
                            B5: Bấm nút <b>Lưu</b> để cập nhật</p>
                            <p className="my-4"><i><b>Lưu ý</b>:  Quyền “admin” không thể cập nhật hay xoá</i></p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="decentralized-function">
                        <h2>3.	 Phân quyền chức năng tuỳ chỉnh</h2>
                        <div className="content-item" >
                            <p className="ml-4">B1: Vào theo mục <b>CORE &gt; Phân quyền &gt; Phân quyền chức năng tuỳ chỉnh</b></p>
                            <img alt="images" src="./images/permission/13.png" />
                            <p>B2: Màn hình sau sẽ xuất hiện:</p>
                            <img alt="images" src="./images/permission/14.png" className="w-100" />
                            <p className="mb-3">
                                B3: Chọn nhân viên cần điều chỉnh:<br />
                                - Có thể chọn nhân viên đang kích hoạt theo mô-đun, phòng ban, ...<br />
                                - Chọn theo danh sách nhân viên toàn hệ thống bằng cách tích vào Toàn bộ nhân viên
                            </p>
                            <p>B4: Bấm tiếp theo:</p>
                            <img alt="images" src="./images/permission/15.png" className="w-100" />
                            <p>
                                B5: Chọn mô-đun.<br />
                                B6: Chọn quyền – vai trò đã định nghĩa sẵn hoặc quyền Khác để tuỳ chỉnh (Tham chiếu quyền để tiện so sánh).<br />
                                Nếu chọn quyền Khác, chọn các chức năng.<br />
                                B7: Bấm <b>Lưu</b> để hoàn tất.<br />
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="decentralized-data">
                        <h2>4. Phân quyền dữ liệu tuỳ chỉnh</h2>
                        <div className="content-item" >
                            <p className="ml-4">B1: Vào theo mục <b>CORE &gt; Phân quyền &gt; Phân quyền dữ liệu tuỳ chỉnh</b></p>
                            <img alt="images" src="./images/permission/16.png" />
                            <p>B2: Màn hình sau sẽ xuất hiện:</p>
                            <img alt="images" src="./images/permission/17.png" className="w-100" />
                            <p className="">B3: Chọn danh sách nhân viên để cập nhật quyền dữ liệu.<br />
                                B4: Bấm tiếp theo.</p>
                            <img alt="images" src="./images/permission/18.png" className="w-100" />
                            <p className="">B5: Chọn dữ liệu cho phép truy cập.<br />
                                B6: Bấm <b>Lưu</b> để hoàn tất.
                            </p>
                            <p className="font-italic my-4">
                                <b>Lưu ý:</b><br />
                                <span className="ml-3">- Chỉ những nhân viên đã được kích hoạt ít nhất 1 mô-đun mới có thể cấp quyền dữ liệu</span><br />
                                <span className="ml-3">- Quyền dữ liệu sẽ áp dụng cho toàn bộ mô-đun mà nhân viên sở hữu</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="view-history">
                        <h2>5. Xem lịch sử phân quyền</h2>
                        <div className="content-item" >
                            <p className="ml-4">B1: Vào theo mục <b>CORE &gt; Phân quyền &gt;  Lịch sử phân quyền.</b></p>
                            <img alt="images" src="./images/permission/19.png" />
                            <p>B2: Màn hình sau sẽ xuất hiện:</p>
                            <img alt="images" src="./images/permission/20.png" className="w-100" />
                            <p className="">B3: Tìm nhân viên.<br />
                                B4: Bấm vào nhân viên để xem lịch sử:
                            </p>
                            <img alt="images" src="./images/permission/21.png" className="w-100" />
                            
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Permission;