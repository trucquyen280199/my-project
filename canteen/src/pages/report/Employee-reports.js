import React from 'react';

function EmployeeReport(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#" ></a></li>
                </ul>
            </nav>
            {/* <article className="contents" id="contents"> */}
                
                <section>
                <h2 className="text-center">Báo cáo nhân viên</h2>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Báo cáo &gt; Nhân viên</b></p>
                            <img src='./images/employeeReport/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình Báo cáo nhân viên xuất hiện với tính năng: Có thể xem chi tiết số lượng suất ăn nhân viên đặt theo từng tháng, ngày, ca và số lượng thực tế nhân viên đã ăn</p>
                            <img src='./images/employeeReport/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
            {/* </article> */}
        </div>
    )
}

export default EmployeeReport;