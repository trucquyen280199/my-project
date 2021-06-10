import React from 'react';

function DefUpMealShift(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#addMealShift" title="Cách thêm ca ăn">Cách thêm ca ăn</a></li>
                    <li className="link"><a href="#updateMealShift" title="Cập nhật ca ăn">Cập nhật ca ăn</a> </li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Định nghĩa và cập nhật ca ăn</h2>
                <section>
                    <div id="guide-image">
                        {/* <h2>1.	</h2> */}
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Cài đặt &gt; Ca ăn</b></p>
                            <img src='./images/DefinitionUpdate-1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Ca ăn</b> xuất hiện với những tính năng như: Thêm, sửa ca ăn</p>
                            <img src='./images/DefinitionUpdate-2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="addMealShift">
                        <h2>1. cách thêm ca ăn</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Bấm vào nút thêm mới trên màn hình</p>
                            <img src='./images/addMealShift-1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình thêm mới ca ăn xuất hiện</p>
                            <img src='./images/addMealShift-2.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Trên đây là những thông tin về ca ăn: Tên ca ăn, thời gian ăn. </p>
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Giờ chúng ta sẽ cùng tạo ra ca ăn tối(18h30 – 20h)</p>
                            <ul>
                                <li> 	Bước 1: Nhập tất cả thông tin tên ca ăn, thời gian ăn như hình bên dưới</li>
                                <li> 	Bước 2: Bấm vào nút lưu
                                    <img src='./images/addMealShift-3.png' className="mb-3" />
                                </li>
                                <li>    Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/addMealShift-4.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Sau khi hoàn tất, chúng ta đã có thêm ca tối (18h30 – 20h)
                                    <img src='./images/addMealShift-5.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="updateMealShift">
                        <h2>2. Cập nhật ca ăn</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Giờ chúng ta thử chỉnh lại ca ăn tối (18h30 – 20h) thành (18h30 – 20h30)</p>
                            <ul>
                                <li> 	Bước 1: Bấm vào nút chỉnh sửa theo ca ăn mong muốn
                                    <img src='./images/updateMealShift-1.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Nhập lại thông tin thời gian mong muốn, và bấm nút lưu
                                    <img src='./images/updateMealShift-2.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/updateMealShift-3.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Sau khi hoàn tất, chúng ta đã cập nhật thành công ca tối (18h30 – 20h30)
                                    <img src='./images/updateMealShift-4.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default DefUpMealShift;