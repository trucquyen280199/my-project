import React from "react";
function DeviceInOut(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#guide-device" title="Hình hướng dẫn khai báo thiết bị ra vào">Hình hướng dẫn khai báo thiết bị ra vào</a></li>
                    <li className="link"><a href="#add-device" title="Thêm thiết bị ra vào">Thêm thiết bị ra vào</a> </li>
                    <li className="link"><a href="#edit-device" title="Sửa thiết bị ra vào">Sửa thiết bị ra vào</a> </li>
                    <li className="link"><a href="#delete-device" title="Xóa thiết bị ra vào">Xóa thiết bị ra vào</a> </li>
                    <li className="link"><a href="#event-setup" title="Thiết lập sự kiện chấm công">Thiết lập sự kiện chấm công</a> </li>
                    
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Khai báo các thiết bị ra vào</h2>
                <section>
                    <div id="guide-device">
                        <h2>1.	Hình hướng dẫn khai báo thiết bị ra vào</h2>
                        <div className="content-item" >
                            <img src='./images/device-in-out-1.png' className="mb-0 w-75" />
                            <p className="text-center">Hình 17</p>
                            <table className="tables table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm</td>
                                        <td>4</td>
                                        <td>Danh sách các thiết bị ra vào</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sửa</td>
                                        <td>5</td>
                                        <td>Thiết lập sự kiện châm công</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Xóa</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-device">
                        <h2>2.	Thêm thiết bị ra vào</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 17) bên trên &minus;&#10095;  hiện thị hình</p>
                                    <img src='./images/device-in-out-2.png' className="mb-0 w-50" />  
                                    <p className="text-center">Hình 18</p> 
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn chọn vào ô số 1 để chọn thiết bị và chọn vào ô số 2 để chọn cổng ra, vào &minus;&#10095; nhấn
nút số 3 theo hình bên trên (Hình 18) &minus;&#10095; Để thực hiện lưu thông tin thiết bị ra vào</li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào ô số 4 (Hình 18) &minus;&#10095; Để thoát khỏi danh mục thêm</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="edit-device">
                        <h2>3.	Sửa thiết bị ra vào</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li>
                                    <span className="icon">&#10146;</span> Bạn nhấn vào ô số 2 theo hình bên trên (Hình 17) &minus;&#10095; để sửa thông tin như hình bên dưới (Hình 19)
                                    <img src='./images/device-in-out-3.png' className="mb-0 w-50" />  
                                    <p className="text-center">Hình 19</p> 
                                </li>
                                <li>
                                    <span className="icon">&#10146; </span> Bạn chọn thông tin từ số 1, 2 (HÌnh 19) cần sửa và thao tác giống các bước ở Mục 2
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delete-device">
                        <h2>4.	Xóa thiết bị ra vào</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 3 theo hình bên trên (Hình 17) để thức hiện thao tác xóa thiết bị vào &minus;&#10095; ra không cần thiết trong danh mục</li>
                                <li>
                                    <span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 20)
                                    <img src='./images/device-in-out-4.png' className="mb-0 w-50" />  
                                    <p className="text-center">Hình 16</p> 
                                    <p className="ml-4">
                                    &#10004; Bạn nhấn nút <b> Đồng ý</b> ( Hình 16 ) để xóa thông tin vừa được chọn<br />
                                    &#10004; Bạn nhấn nút <b>Thoát</b> ( Hình 16 ) để bỏ qua không thực hiện thao tác xóa</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="event-setup">
                        <h2>5.	Thiết lập sự kiện chấm công</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 5 theo hình bên trên (Hình 21) để thức hiện thao tác thiết lập sự kiện</li>
                                <li>
                                    <span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 21)
                                    <img src='./images/device-in-out-5.png' className="mb-0 mt-3 w-50" />  
                                    <p className="text-center">Hình 16</p> 
                                    <p className="ml-4 mt-3">
                                    &#10004; Bạn nhấn nút <b> Đồng ý</b> ( Hình 16 ) để xóa thông tin vừa được chọn<br />
                                    &#10004; Bạn nhấn nút số 1 ( Hình 21 ) để thực hiện thao tác lưu sự kiện</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default DeviceInOut;