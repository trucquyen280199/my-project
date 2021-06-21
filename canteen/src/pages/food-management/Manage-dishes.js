import React from 'react';

function ManageDishes(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#addDishes" title="Thêm món ăn">Thêm món ăn</a></li>
                    <li className="link"><a href="#updateDishes" title="Cập nhật món ăn">Cập nhật món ăn</a></li>
                    <li className="link"><a href="#seeFeedback" title="Xem phản hồi (đánh giá) món ăn">Xem phản hồi (đánh giá) món ăn</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Quản lý món ăn</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Quản lý thực phẩm &gt; Món ăn</b></p>
                            <img src='./images/manageDishes/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý Món ăn xuất hiện với những tính năng như: Thêm, sửa, phản hồi món ăn</p>
                            <img src='./images/manageDishes/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="addDishes">
                        <h2>1.	Thêm món ăn</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Bấm vào nút thêm mới ở màn hình</p>
                            <img src='./images/manageDishes/3.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình thêm mới món ăn xuất hiện</p>
                            <img src='./images/manageDishes/4.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Giờ chúng ta sẽ cùng tạo ra một món ăn mới.</p>
                            <ul>
                                <li> 	Bước 1: Nhập tất cả thông tin tên món ăn, giá, hình ảnh món ăn, chọn loại món ăn.</li>
                                <li> 	Bước 2: Bấm vào nút lưu
                                    <img src='./images/manageDishes/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageDishes/6.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="updateDishes">
                        <h2>2.	Cập nhật món ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút Sửa theo món ăn mong muốn
                                    <img src='./images/manageDishes/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Cập nhật lại thông tin món ăn và bấm lưu
                                    <img src='./images/manageDishes/8.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageDishes/9.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="seeFeedback">
                        <h2>3.	Xem phản hồi (đánh giá) món ăn</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút xem phản hồi theo món ăn mong muốn
                                    <img src='./images/manageDishes/10.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Từ màn hình dưới chúng ta có thể xem được thông tin đánh giá món ăn (số sao, đánh giá chi tiết của người dùng), để từ đó giúp cải thiện được chất lượng món ăn cho căn tin
                                    <img src='./images/manageDishes/11.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default ManageDishes;