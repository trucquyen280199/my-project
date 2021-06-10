import React from 'react';

function ManageOvertimeMenu(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#addOvertimeMenu" title="Thêm combo thực đơn tăng ca">Thêm combo thực đơn tăng ca</a></li>
                    <li className="link"><a href="#updateOvertimeMenu" title="Cập nhật combo thực đơn tăng ca">Cập nhật combo thực đơn tăng ca</a></li>
                    <li className="link"><a href="#delOvertimeMenu" title="Xóa combo thực đơn tăng ca">Xóa combo thực đơn tăng ca</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Quản lý combo thực đơn tăng ca</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Combo thực đơn tăng ca</b></p>
                            <img src='./images/manageOvertimeMenu/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Combo thực đơn tăng ca</b> xuất hiện vối những tính năng như: Thêm, xóa, sửa combo thực đơn tăng ca</p>
                            <img src='./images/manageOvertimeMenu/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="addOvertimeMenu">
                        <h2>1.	Thêm combo thực đơn tăng ca</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Bấm vào nút thêm ở màn hình</p>
                            <img src='./images/manageOvertimeMenu/3.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình thêm mới combo thực đơn tăng ca xuất hiện</p>
                            <img src='./images/manageOvertimeMenu/4.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Giờ chúng ta sẽ cùng tạo ra một combo thực đơn tăng ca mới</p>
                            <ul>
                                <li> 	Bước 1: Nhập tên combo
                                    <img src='./images/manageOvertimeMenu/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chọn món ăn muốn thêm vào thực đơn (khi thêm vào chúng ta sẽ thấy tổng tiền của combo thay đổi theo giá trị món ăn của chúng ta, dễ dàng cho việc quản lý tổng giá trị của combo)
                                    <img src='./images/manageOvertimeMenu/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn nút lưu để thêm combo thực đơn tăng ca mới
                                    <img src='./images/manageOvertimeMenu/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageOvertimeMenu/8.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="updateOvertimeMenu">
                        <h2>2.	Cập nhật combo thực đơn tăng ca</h2>
                        <div className="content-item" >
                            <ul>
                                <li>  	Bước 1: Bấm vào nút Sửa theo combo thực đơn tăng ca mong muốn
                                    <img src='./images/manageOvertimeMenu/9.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Cập nhật lại thông tin món ăn và bấm lưu
                                    <img src='./images/manageOvertimeMenu/10.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageOvertimeMenu/11.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delOvertimeMenu">
                        <h2>3.	Xóa combo thực đơn tăng ca</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút Xóa theo combo thực đơn tăng ca mong muốn
                                    <img src='./images/manageOvertimeMenu/12.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageOvertimeMenu/13.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default ManageOvertimeMenu;