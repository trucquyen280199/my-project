import React from 'react';

function MenuManagement(){
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#addUpdateMenu" title="Thêm, cập nhật thực đơn">Thêm, cập nhật thực đơn</a></li>
                    <li className="link"><a href="#searchMenu" title="Cách tìm kiếm thực đơn">Cách tìm kiếm thực đơn</a></li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Quản lý thực đơn</h2>
                <section>
                    <div id="guide-image">
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b>Quản lý thực phẩm &gt; Thực đơn</b></p>
                            <img src='./images/menuManagement/1.png' className="mb-3" />
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý <b>Thực đơn</b> xuất hiện với những tính năng như: Thêm, xóa, sửa, tìm kiếm thực đơn</p>
                            <img src='./images/menuManagement/2.png' className="mb-3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div id="addUpdateMenu">
                        <h2>1.	Thêm, cập nhật thực đơn</h2>
                        <div className="content-item" >
                            <p><b style={{fontSize: "24px"}}>&#8902;</b> Chúng ta có 2 cách để thêm một thực đơn mới:</p>
                            <p><b>Cách 1: Nếu chúng ta muốn thêm một nhóm ăn, một ca ăn và một ngày thì chúng ta sử dụng cách một.</b></p>
                            
                            <ul>
                                <li> 	Bước 1: Chọn nhóm ăn chúng ta muốn thêm thực đơn
                                    <img src='./images/menuManagement/3.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chọn ca ăn
                                    <img src='./images/menuManagement/4.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn ngày ăn
                                    <img src='./images/menuManagement/5.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Chọn các món ăn muốn thêm, hoặc chúng ta có thể bấm vào nút chọn toàn bộ món để thao tác nhanh.
                                    <img src='./images/menuManagement/6.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Bấm vào nút lưu để lưu lại cài đặt thực đơn
                                    <img src='./images/menuManagement/7.png' className="mb-3" />
                                </li>
                                <li> 	Bước 6: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/menuManagement/8.png' className="mb-3" />
                                </li>
                            </ul>
                            <p><b>Cách 2: Nếu chúng ta muốn thêm một lúc nhiều nhóm ăn, nhiều ca ăn và nhiều ngày một lúc thì chúng ta nên sử dụng cách 2 nhé.</b></p>
                            <ul>
                                <li> 	Bước 1: Chọn vào nút <b>Cập nhật (Chi tiết)</b>
                                    <img src='./images/menuManagement/9.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Khi màn hình cập nhật chi tiết thực đơn hiện ra, chọn nhóm ăn chúng ta muốn cập nhật
                                    <img src='./images/menuManagement/10.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn những ca ăn muốn cập nhật
                                    <img src='./images/menuManagement/11.png' className="mb-3" />
                                </li>
                                <li>  	Bước 4: Chọn những ngày muốn cập nhật
                                    <img src='./images/menuManagement/12.png' className="mb-3" />
                                </li>
                                <li> 	Bước 5: Thêm, xóa món ăn ra khỏi thực đơn, hoặc có thể chọn toàn bộ danh sách món ăn khi chọn vào nút Chọn toàn bộ món
                                    <img src='./images/menuManagement/13.png' className="mb-3" />
                                </li>
                                <li> 	Bước 6: Chọn vào nút Lưu để lưu lại cập nhật
                                    <img src='./images/menuManagement/14.png' className="mb-3" />
                                </li>
                                <li> 	Bước 7: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                    <img src='./images/menuManagement/15.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="searchMenu">
                        <h2>2.	Cách tìm kiếm thực đơn</h2>
                        <div className="content-item" >
                            <ul>
                                <li>  	Bước 1: Chọn nhóm ăn cần tìm kiếm
                                    <img src='./images/menuManagement/16.png' className="mb-3" />
                                </li>
                                <li> 	Bước 2: Chọn ca ăn cần tìm kiếm
                                    <img src='./images/menuManagement/17.png' className="mb-3" />
                                </li>
                                <li> 	Bước 3: Chọn ngày cần tìm kiếm
                                    <img src='./images/menuManagement/18.png' className="mb-3" />
                                </li>
                                <li> 	Bước 4: Chọn vào nút tìm kiếm
                                    <img src='./images/menuManagement/19.png' className="mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default MenuManagement;