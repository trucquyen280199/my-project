import React from 'react';

function FoodGroupSettings(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#addUpdateFoodGroup" title="Thêm, cập nhật nhóm ăn cho người dùng">Thêm, cập nhật nhóm ăn cho người dùng</a></li>
                    <li className="link"><a href="#delFoodGroup" title="Xóa nhóm ăn cho người dùng">Xóa nhóm ăn cho người dùng</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Cài đặt nhóm ăn cho người dùng</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Cài đặt nhóm ăn</b></p>
                            <img src='./images/foodGroupSettings/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình Cài đặt nhóm ăn xuất hiện với những tính năng như: Thêm, xóa, cập nhật, tìm kiếm nhóm ăn cho người dùng</p>
                            <img src='./images/foodGroupSettings/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="addUpdateFoodGroup">
                        <h2>1.	Thêm, cập nhật nhóm ăn cho người dùng</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Chọn những người dùng bạn muốn thêm Nhóm ăn (hoặc có thể chọn tất cả để thao tác nhanh), nếu muốn bỏ chọn đồng loạt, không cần phải chọn từng người mà hãy dùng cục tẩy (như hình bên dưới). Sau đó bấm vào nút Cập nhật nhóm ăn
                                    <img src='./images/foodGroupSettings/3.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chọn nhóm ăn cho người dùng đã chọn
                                    <img src='./images/foodGroupSettings/4.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn ngày áp dụng nhóm ăn cho người dùng
                                    <img src='./images/foodGroupSettings/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Bấm nút lưu để cập nhật nhóm ăn cho người dùng
                                    <img src='./images/foodGroupSettings/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/foodGroupSettings/7.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delFoodGroup">
                        <h2>2.	Xóa nhóm ăn cho người dùng</h2>
                        <div className="content-item" >
                            <ul>
                                <li> 	Bước 1: Chọn những người dùng bạn muốn xóa Nhóm ăn (hoặc có thể chọn tất cả để thao tác nhanh), 
                                    nếu muốn bỏ chọn đồng loạt, không cần phải chọn từng người mà hãy dùng cục tẩy (như hình bên dưới). 
                                    Sau đó bấm vào nút Xóa nhóm ăn
                                    <img src='./images/foodGroupSettings/8.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chúng ta có thể chọn xóa nhóm ăn của người dùng trong một đoạn thời gian cụ thể, và bấm xóa (Nếu không chọn đoạn thời gian, thì mặc định sẽ xóa hết các nhóm ăn của người dùng)
                                    <img src='./images/foodGroupSettings/9.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/foodGroupSettings/10.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default FoodGroupSettings;