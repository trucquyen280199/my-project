import React from 'react';

function ManageMealVouchers(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#seeDetails" title="Xem chi tiết phiếu ăn">Xem chi tiết phiếu ăn</a></li>
                    <li className="link"><a href="#rateMealVouchers" title="Đánh giá phiếu ăn">Đánh giá phiếu ăn</a></li>
                    <li className="link"><a href="#transferMealVouchers" title="Chuyển phiếu ăn">Chuyển phiếu ăn</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Quản lý phiếu ăn</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Quản lý phiếu ăn</b></p>
                            <img src='./images/manageMealVouchers/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Quản lý phiếu ăn</b> xuất hiện với các tính năng: Xem các phiếu ăn đã đăng ký theo ngày, xem chi tiết phiếu ăn(Thông tin món ăn, tổng tiền, thời gian đặt, đã ăn hay chưa...), đánh giá món ăn, chuyển phiếu ăn cho người dùng khác.</p>
                            <img src='./images/manageMealVouchers/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="seeDetails">
                        <h2>1.  Xem chi tiết phiếu ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Chọn vào nút xem chi tiết của phiếu ăn mong muốn
                                    <img src='./images/manageMealVouchers/3.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Màn hình sẽ hiện ra thông tin chi tiết của phiếu ăn
                                    <img src='./images/manageMealVouchers/4.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="rateMealVouchers">
                        <h2>2.	Đánh giá phiếu ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Chọn vào nút Đánh giá (Tới ngày ăn nút đánh giá mới hiện lên)
                                    <img src='./images/manageMealVouchers/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Điền thông tin đánh giá món ăn và bấm Gửi
                                    <img src='./images/manageMealVouchers/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageMealVouchers/7.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="transferMealVouchers">
                        <h2>3.	Chuyển phiếu ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút <b>Chuyển phiếu ăn</b>
                                    <img src='./images/manageMealVouchers/8.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Tìm kiếm người dùng được nhận phiếu ăn
                                    <img src='./images/manageMealVouchers/9.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn người dùng được nhận phiếu ăn và điền ghi chú (không bắt buộc). 
                                    Sau đó bấm <b>Lưu</b> để chuyển phiếu ăn
                                    <img src='./images/manageMealVouchers/10.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Khi hiện ra thông báo xác nhận, ta bấm <b>Đồng ý</b>
                                    <img src='./images/manageMealVouchers/11.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Phiếu ăn bạn cho đang trong giai đoạn chờ người nhận đồng ý (Nếu người nhận chưa đồng ý bạn có thể xuống căn tin ăn hoặc chọn Hủy chuyển phiếu ăn)
                                    <img src='./images/manageMealVouchers/12.png' className="mb-3" />
                                </li>
                                <li> 	Bước 6: Người nhận có quyền từ chối hoặc đồng ý nhận phiếu ăn, ở đây chúng ta sẽ đồng ý thử nhé. Chọn <b>Phê duyệt</b>
                                    <img src='./images/manageMealVouchers/13.png' className="mb-3" />
                                </li>
                                <li> 	Bước 7: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageMealVouchers/14.png' className="mb-3" />
                                </li>
                                <li> 	Bước 8: Vậy là chúng ta đã chuyển được phiếu ăn cho người khác thành công
                                    <img src='./images/manageMealVouchers/15.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default ManageMealVouchers;