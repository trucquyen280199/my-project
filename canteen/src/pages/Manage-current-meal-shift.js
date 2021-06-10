import React from 'react';

function ManageCurrentMealShift(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#"></a></li>
                </ul>
            </nav>
            {/* <article className="contents" id="contents"> */}
                
                <section>
                <h2 className="text-center mb-5">Quản lý ca ăn hiện tại</h2>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Ca ăn hiện tại</b></p>
                            <img src='./images/manageCurrentMealShift/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Ca ăn hiện tại</b> xuất hiện với tính năng: Giúp quản lý căn tin xem được thông tin của ca ăn hiện tại (đang trong ca ăn nào, thông tin món ăn, tổng suất ăn thêm, tổng suất ăn nhân viên đăng kí, suất ăn nhân viên đã ăn, suất ăn còn lại theo thời gian thực), để từ đó biết được trong ca ăn có tổng bao nhiêu phần ăn và đã phục vụ bao nhiêu người để từ đó giúp quản lý ca ăn được tốt nhất.</p>
                            <img src='./images/manageCurrentMealShift/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                
            {/* </article> */}
        </div>
    )
}

export default ManageCurrentMealShift;