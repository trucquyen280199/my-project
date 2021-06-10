import React from 'react';

function OrderOvertimeMeal(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#rulesOrderOvertimeMeal" title="Quy định đặt suất ăn tăng ca">Quy định đặt suất ăn tăng ca</a></li>
                    <li className="link"><a href="#orderOvertimeMeal" title="Cách đặt suất ăn tăng ca">Cách đặt suất ăn tăng ca</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Đặt suất ăn tăng ca</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Đặt món</b></p>
                            <img src='./images/orderOvertimeMeal/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Đặt món</b> xuất hiện, chọn Phiếu ăn tăng ca để đến màn hình đặt Suất ăn tăng ca</p>
                            <img src='./images/orderOvertimeMeal/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="rulesOrderOvertimeMeal">
                        <h2>1.  Quy định đặt suất ăn tăng ca</h2>
                        <div className="content-item" >
                            <ul>
                                <li>1.	Chỉ được đặt suất ăn tăng ca khi đủ điều kiện trong Quy định tăng ca</li>
                                <li>2.	Chỉ được đặt suất ăn tuần hiện tại và tuần sau</li>
                                <li>3.	Khi đã đăng ký nghỉ phép, hệ thống sẽ không cho đăng ký suất ăn trong ngày nghỉ phép đó</li>
                                <li>4.	Người dùng phải nằm trong một Nhóm ăn thì mới có thể đăng ký suất ăn</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="orderOvertimeMeal">
                        <h2>2.	Cách đặt suất ăn tăng ca</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Đăng ký tăng ca (phải được phê duyệt) để đủ điều kiện đặt suất ăn tăng ca</li>
                                <li> 	Bước 2: Chọn tuần mong muốn đặt suất ăn
                                    <img src='./images/orderOvertimeMeal/3.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn ngày
                                    <img src='./images/orderOvertimeMeal/4.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Chọn ca ăn
                                    <img src='./images/orderOvertimeMeal/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Chọn tìm kiếm, để lấy ra Thực đơn ứng với ngày và ca ăn cụ thể </li>
                                <li> 	Bước 6: Khi đăng đăng ký đủ điều kiện, chúng ta sẽ thấy giao diện đặt món tăng ca như hình bên dưới (nó sẽ hiện ra tất cả combo món ăn mà người dùng đủ điều kiện).
                                    <img src='./images/orderOvertimeMeal/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 7: Chọn vào nút Thêm để thêm combo
                                    <img src='./images/orderOvertimeMeal/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 8: Chọn nút Lưu để cập nhật đăng ký suất ăn tăng ca
                                    <img src='./images/orderOvertimeMeal/4.png' className="mb-3" />
                                </li>
                                <li> 	Bước 9: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/orderOvertimeMeal/5.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default OrderOvertimeMeal;