import React from 'react';

function ManageOrderHistory(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#"></a></li>
                </ul>
            </nav>
            {/* <article className="contents" id="contents"> */}
                
                <section>
                    <div id="guide-image">
                    <h2 className="text-center">Quản lý lịch sử đặt món</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Lịch sử đặt món</b></p>
                            <img src='./images/manageMealVouchers/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Lịch sử đặt món</b> xuất hiện với tính năng: Xem các suất ăn đã đặt theo ngày, tháng, năm và tổng tiền của các suất ăn đã đặt của người dùng</p>
                            <img src='./images/manageMealVouchers/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
            {/* </article> */}
        </div>
    )
}

export default ManageOrderHistory;