import React from 'react';

function ManageExtraMeal(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#createNewMeal" title="Cách tạo mới suất ăn thêm">Cách tạo mới suất ăn thêm</a></li>
                    <li className="link"><a href="#updateExtraMeal" title="Cách cập nhật suất ăn thêm">Cách cập nhật suất ăn thêm</a></li>
                    <li className="link"><a href="#delExtraMeal" title="Cách xóa suất ăn thêm">Cách xóa suất ăn thêm</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Quản lý suất ăn thêm</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Suất ăn thêm</b></p>
                            <img src='./images/manageExtraMeal/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Suất ăn thêm</b> xuất hiện với tính năng: Thêm, cập nhật, xóa suất ăn thêm</p>
                            <img src='./images/manageExtraMeal/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="createNewMeal">
                        <h2>1.  Cách tạo mới suất ăn thêm</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Chọn ngày muốn thêm suất ăn rồi bấm nút tìm kiếm
                                    <img src='./images/manageExtraMeal/3.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chọn nút Thêm mới để tạo mới suất ăn thêm
                                    <img src='./images/manageExtraMeal/4.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn món ăn muốn tạo suất ăn thêm
                                    <img src='./images/manageExtraMeal/5.png' className="mb-3" />
                                </li>
                                 <li> 	Bước 4: Nhập vào số lượng muốn thêm
                                    <img src='./images/manageExtraMeal/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Bấm nút lưu để thêm mới suất ăn thêm
                                    <img src='./images/manageExtraMeal/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 6: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageExtraMeal/8.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="updateExtraMeal">
                        <h2>2.  Cách cập nhật suất ăn thêm</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút chỉnh sửa suất ăn thêm muốn cập nhật
                                    <img src='./images/manageExtraMeal/9.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Cập nhật thông tin suất ăn thêm và bấm nút Lưu để cập nhật
                                    <img src='./images/manageExtraMeal/10.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageExtraMeal/11.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delExtraMeal">
                        <h2>3.  Cách xóa suất ăn thêm</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Bấm vào nút xóa suất ăn thêm cần xóa
                                    <img src='./images/manageExtraMeal/12.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/manageExtraMeal/13.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default ManageExtraMeal;