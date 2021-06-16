import React from 'react';

function ReceiveMeal(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#usageRules" title="Quy định sử dụng chức năng nhận suất ăn">Quy định sử dụng chức năng nhận suất ăn</a></li>
                    <li className="link"><a href="#DemoReceiveMeal" title="Demo nhận suất ăn">Demo nhận suất ăn</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Nhận suất ăn</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn 2 mục </p>
                            <p>1.	Màn hình nhà bếp</p>
                            <img src='./images/receiveMeal/1.png' className="mb-3" />
                            <p>2.	Màn hình người dùng</p>
                            <img src='./images/receiveMeal/2.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy hai màn hình <b>nhà bếp</b> và màn hình <b>người dùng</b> như sau:</p>
                            <img src='./images/receiveMeal/3.png' className="mb-3" />
                            <img src='./images/receiveMeal/4.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="usageRules">
                        <h2>1.  Quy định sử dụng chức năng nhận suất ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Kết nối Thiết bị để người dùng nhận suất ăn, khi bạn kết nối thành công thì sẽ
                                     xuất hiện như hình bên dưới
                                    <img src='./images/receiveMeal/5.png' className="mb-3" />
                                    <img src='./images/receiveMeal/6.png' className="mb-3" />
                                </li>
                                <li> 	Đã bật cả hai màn hình Nhà bếp và Người dùng</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="DemoReceiveMeal">
                        <h2>2.  Demo nhận suất ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Người dùng 1 nhận suất ăn
                                    <img src='./images/receiveMeal/7.png' className="mb-3" />
                                    <img src='./images/receiveMeal/8.png' className="mb-3" />
                                </li>
                                <li> 	Người dùng 2: Khách nhận hai suất ăn 
                                    <img src='./images/receiveMeal/9.png' className="mb-3" />
                                    <img src='./images/receiveMeal/10.png' className="mb-3" />
                                </li>
                                <li> 	Người dùng 3 nhận suất ăn
                                    <img src='./images/receiveMeal/11.png' className="mb-3" />
                                    <img src='./images/receiveMeal/12.png' className="mb-3" />
                                </li>
                                <li> 	Người dùng 4 nhận suất ăn (Đây là người dùng chưa đặt món). 
                                    Nên thông báo cho người dùng chưa đăng ký phần ăn, và căn tin sẽ không hiện món mới
                                    <img src='./images/receiveMeal/13.png' className="mb-3" />
                                    <img src='./images/receiveMeal/14.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default ReceiveMeal;