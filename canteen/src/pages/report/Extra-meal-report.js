import React from 'react';

function ExtraMealReport(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#" ></a></li>
                </ul>
            </nav>
            {/* <article className="contents" id="contents"> */}
                
                <section>
                <h2 className="text-center">Báo cáo suất ăn thêm</h2>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Báo cáo &gt; Suất ăn thêm</b></p>
                            <img src='./images/extraMealReport/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình <b>Báo cáo suất ăn thêm</b> xuất hiện với tính năng: Xem được tổng số xuất ăn thêm của từng món theo tháng, và tổng tiền từ các suất ăn thêm.</p>
                            <img src='./images/extraMealReport/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
            {/* </article> */}
        </div>
    )
}

export default ExtraMealReport;