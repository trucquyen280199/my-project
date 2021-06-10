import React from 'react';

function MealVoucherReport(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#" ></a></li>
                </ul>
            </nav>
            {/* <article className="contents" id="contents"> */}
                
                <section>
                <h2 className="text-center">Báo cáo phiếu ăn (suất ăn)</h2>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Báo cáo &gt; Phiếu ăn</b></p>
                            <img src='./images/mealVoucherReport/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình Báo cáo phiếu ăn (suất ăn) xuất hiện với tính năng: 
                            Báo cáo tổng suất ăn đã đặt (phiếu ăn chính, phiếu ăn tăng ca, tổng), 
                            những suất ăn thực tế đã ăn và biểu đồ chi tiết doanh thu theo từng tháng. 
                            Nhằm đánh giá trực quan số lượng suất ăn (đã đặt, thực tế ăn), doanh thu theo từng tháng, từng năm.</p>
                            <img src='./images/mealVoucherReport/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
            {/* </article> */}
        </div>
    )
}

export default MealVoucherReport;