import React from "react";
import "../../style.css";
function DeviceInOut(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#guide-device">Hình hướng dẫn khai báo thiết bị ra vào</a></li>
                    <li className="link"><a href="#add-device">Thêm hệ số tăng ca</a> </li>
                    <li className="link"> <a href="#edit-device">Sửa thông tin kiểu vắng</a> </li>
                    <li className="link"> <a href="#delete-device">Xóa thông tin kiểu vắng</a> </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Khai báo các thiết bị ra vào</h2>
                <section>
                    <div id="guide-device">
                        <h2>1.	Hình hướng dẫn khai báo thiết bị ra vào</h2>
                        <div className="content-item" >
                            <img src='./images/device-in-out-1.png' className="mb-3 w-75" />
                            <p className="text-center">Hình 17</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm</td>
                                        <td>3</td>
                                        <td>Xóa</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sửa</td>
                                        <td>4</td>
                                        <td>Danh sách các thiết bị ra vào</td>
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
                                    <img src='./images/device-in-out-2.png' className="mb-3 w-75" />  
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
                                    <img src='./images/device-in-out-3.png' className="mb-3 w-75" />  
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
                                    <img src='./images/device-in-out-4.png' className="mb-3 w-75" />  
                                    <p className="text-center">Hình 16</p> 
                                    <p className="ml-4">
                                    &#10004; Bạn nhấn nút <b> Đồng ý</b> ( Hình 16 ) để xóa thông tin vừa được chọn<br />
                                    &#10004; Bạn nhấn nút <b>Thoát</b> ( Hình 16 ) để bỏ qua không thực hiện thao tác xóa</p>
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