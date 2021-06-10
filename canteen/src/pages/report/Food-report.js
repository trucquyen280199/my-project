import React from 'react';

function FoodReport(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#" ></a></li>
                </ul>
            </nav>
            {/* <article className="contents" id="contents"> */}
                
                <section>
                <h2 className="text-center">Báo cáo món ăn</h2>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Báo cáo &gt; Món ăn</b></p>
                            <img src='./images/foodReport/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình Báo cáo món ăn xuất hiện với tính năng: Xem được số xuất ăn được bán ra chi tiết từng món ăn theo từng ngày trong tháng, hiển thị ra tổng doanh thu trong ngày, tổng doanh thu của tháng giúp người quản lý căn tin trực quan hơn về số liệu như: món nào bán chạy và mang doanh thu tốt, so sánh chi tiết doanh thu và số lượng suất ăn chi tiết trong các ngày, tháng, năm.</p>
                            <img src='./images/foodReport/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
            {/* </article> */}
        </div>
    )
}

export default FoodReport;