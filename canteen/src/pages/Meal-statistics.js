import React from 'react';

function MealStatistics(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#"></a></li>
                </ul>
            </nav>
            <section>
                <div id="guide-image">
                <h2 className="text-center">Thống kê suất ăn</h2>
                    <div className="content-item" >
                        <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Thống kê suất ăn</b></p>
                        <img src='./images/mealStatistics/1.png' className="mb-3" />
                        <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý Thống kê suất ăn xuất hiện với tính năng: Giúp quản lý căn tin xem được chi tiết các suất ăn trong từng tuần, món nào ăn nhiều và món nào ăn ít, để từ đó tối ưu món ăn cho tuần tiếp theo</p>
                        <img src='./images/mealStatistics/2.png' className="mb-3" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MealStatistics;