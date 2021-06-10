import React from 'react';

function OvertimeRegulation(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#addOvertimeRegulation" title="Thêm quy định tăng ca">Thêm quy định tăng ca</a></li>
                    <li className="link"><a href="#updateOvertimeRegulation" title="Cập nhật quy định tăng ca">Cập nhật quy định tăng ca</a></li>
                    <li className="link"><a href="#delOvertimeRegulation" title="Xóa quy định tăng ca">Xóa quy định tăng ca</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Quản lý quy định tăng ca</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Quy định tăng ca</b></p>
                            <img src='./images/overtimeRegulation/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý Quy định tăng ca xuất hiện, với những tính năng như: Thêm, sửa, xóa và tìm kiếm quy định tăng ca để nhận Combo tăng ca</p>
                            <img src='./images/overtimeRegulation/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="addOvertimeRegulation">
                        <h2>1.	Cách thêm quy định tăng ca</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Bấm vào nút thêm ở màn hình</p>
                            <img src='./images/overtimeRegulation/3.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình thêm mới quy địn tăng ca xuất hiện</p>
                            <img src='./images/overtimeRegulation/4.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Giờ chúng ta sẽ cùng tạo ra một quy định tăng ca mới</p>
                            <ul>
                                <li> 	Bước 1: Nhập số giờ cần tăng ca tối thiểu để nhận combo tăng ca
                                    <img src='./images/overtimeRegulation/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chọn những ngày muốn áp dụng quy định tăng ca
                                    <img src='./images/overtimeRegulation/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn ca ăn muốn áp dụng quy định tăng ca
                                    <img src='./images/overtimeRegulation/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Chọn nhóm ăn muốn áp dụng quy định tăng ca
                                    <img src='./images/overtimeRegulation/8.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Chọn combo món ăn tăng ca được nhận khi tăng ca đủ chỉ tiêu trong quy định (Nếu chưa có combo món ăn mong muốn thì có thể bấm vào nút Thêm combo, hoặc Tìm kiếm combo mong muốn)
                                    <img src='./images/overtimeRegulation/9.png' className="mb-3" />
                                </li>
                                <li> 	Bước 6: Chúng ta có thể kiểm tra lại danh sách món ăn trong combo bằng cách chọn nút xem
                                    <img src='./images/overtimeRegulation/10.png' className="mb-3" />
                                    <img src='./images/overtimeRegulation/11.png' className="mb-3" />
                                </li>
                                <li> 	Bước 7: Chọn nút lưu để tạo mới quy định tăng ca
                                    <img src='./images/overtimeRegulation/12.png' className="mb-3" />
                                </li>
                                <li> 	Bước 8: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/overtimeRegulation/13.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="updateOvertimeRegulation">
                        <h2>2.	Cập nhật quy định tăng ca</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút Sửa theo quy định tăng ca mong muốn
                                    <img src='./images/overtimeRegulation/14.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Cập nhật lại thông tin quy định tăng ca và bấm lưu
                                    <img src='./images/overtimeRegulation/15.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/overtimeRegulation/16.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delOvertimeRegulation">
                        <h2>3.	Xóa quy định tăng ca</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Chọn những quy định tăng ca muốn xóa (có thể chọn tất cả). Nếu muốn hủy tất cả lựa chọn trên thì chúng ta không cần phải hủy chọn từng ô, hãy bấm vào cục tẩy vàng này nhé.
                                    <img src='./images/overtimeRegulation/17.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Bấm vào nút xóa quy định tăng ca (ở đây chúng ta sẽ thấy số quy định tăng ca muốn xóa)
                                    <img src='./images/overtimeRegulation/18.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/overtimeRegulation/19.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default OvertimeRegulation;