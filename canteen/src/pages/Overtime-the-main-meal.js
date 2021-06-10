import React from 'react';

function OvertimeTheMainMeal(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#rulesOrderingMainDishes" title="Quy định đặt món ăn chính">Quy định đặt món ăn chính</a></li>
                    <li className="link"><a href="#orderMainMeal" title="Cách đặt suất ăn chính">Cách đặt suất ăn chính</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Đặt suất ăn chính</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Đặt món</b></p>
                            <img src='./images/overtimeTheMainMeal/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Đặt món (suất ăn chính)</b> xuất hiện</p>
                            <img src='./images/overtimeTheMainMeal/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="rulesOrderingMainDishes">
                        <h2>1.	Quy định đặt món ăn chính</h2>
                        <div className="content-item" >
                            <ul>
                                <li>1.	Chỉ được đặt suất ăn tuần hiện tại và tuần sau</li>
                                <li>2.	Suất ăn phải đặt trước một ngày để căn tin chuẩn bị, giảm thiểu tính trạng đồ ăn dư thừa (chỉ có người dùng Vip là không cần đặt món trước, đây là người dùng tiếp khách hoặc là khách đến thăm bất ngờ)</li>
                                <li>3.	Suất ăn chính chỉ có thể chọn một món chính và một món phụ ( thẻ Vip thì tùy vào suất ăn căn tin có)</li>
                                <li>4.	Khi đã đăng ký nghỉ phép, hệ thống sẽ không cho đăng ký suất ăn trong ngày nghỉ phép đó</li>
                                <li>5.	Người dùng phải nằm trong một Nhóm ăn thì mới có thể đăng ký suất ăn</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="orderMainMeal">
                        <h2>2.	Cách đặt suất ăn chính</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Chọn tuần mong muốn đặt suất ăn
                                    <img src='./images/overtimeTheMainMeal/3.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chọn ngày
                                    <img src='./images/overtimeTheMainMeal/4.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn ca ăn
                                    <img src='./images/overtimeTheMainMeal/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Chọn tìm kiếm, để lấy ra Thực đơn ứng với ngày và ca ăn cụ thể
                                    <img src='./images/overtimeTheMainMeal/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Chọn món ăn (chỉ được một món chính và một món phụ), và bấm nút lưu
                                    <img src='./images/overtimeTheMainMeal/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 6: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/overtimeTheMainMeal/8.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default OvertimeTheMainMeal;