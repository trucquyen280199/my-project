import React from 'react';

function DefUpGroupEating(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#addMealShift" title="Cách thêm nhóm ăn">Cách thêm nhóm ăn</a></li>
                    <li className="link"><a href="#updateMealShift" title="Cập nhật nhóm ăn">Cập nhật nhóm ăn</a> </li>
                    <li className="link"><a href="#delMealShift" title="Xóa nhóm ăn">Xóa nhóm ăn</a> </li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Định nghĩa và cập nhật nhóm ăn</h2>
                <section>
                    <div id="guide-image">
                        {/* <h2>1.	</h2> */}
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Cài đặt &gt; Nhóm ăn</b></p>
                            <img src='./images/groupEating/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý Nhóm ăn xuất hiện với những tính năng như: Thêm, xóa, sửa nhóm ăn</p>
                            <img src='./images/groupEating/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="addMealShift">
                        <h2>1.	Cách thêm nhóm ăn</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Bấm vào nút thêm mới ở màn hình</p>
                            <img src='./images/groupEating/3.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình thêm mới nhóm ăn xuất hiện</p>
                            <img src='./images/groupEating/4.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Trên đây là những thông tin về nhóm ăn: Tên nhóm ăn, tiếp khách (Nếu chọn vô tiếp khách thì đây là người dùng Vip, là dạng người dùng không cần đặt món trước)</p>
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Giờ chúng ta sẽ cùng tạo ra hai nhóm ăn cho nhân viên khu hóa chất (không chọn tiếp khách), và nhà thầu (chọn tiếp khách)</p>
                            <ul>
                                <li> 	Bước 1: Nhập tất cả thông tin tên nhóm ăn, và có thể chọn hoặc không chọn tiếp khách (như hình bên dưới)</li>
                                <li> 	Bước 2: Bấm vào nút lưu
                                    <img src='./images/groupEating/5.png' className="mb-3" />
                                    <img src='./images/groupEating/6.png' className="mb-3" />
                                </li>
                                <li>  	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/groupEating/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Sau khi thêm lần lượt  nhân viên khu hóa chất và nhà thầu hoàn tất, chúng ta đã có thêm hai loại nhóm ăn
                                    <img src='./images/groupEating/8.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="updateMealShift">
                        <h2>2. Cập nhật ca ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li>Bước 1: Bấm vào nút chỉnh sửa theo nhóm ăn mong muốn
                                    <img src='./images/groupEating/9.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Cập nhật lại thông tin nhóm ăn và bấm lưu
                                    <img src='./images/groupEating/10.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/groupEating/11.png' className="mb-3" />
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delMealShift">
                        <h2>3.	Xóa nhóm ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút xóa theo nhóm ăn mong muốn
                                    <img src='./images/groupEating/12.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/groupEating/13.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/groupEating/11.png' className="mb-3" />
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default DefUpGroupEating;