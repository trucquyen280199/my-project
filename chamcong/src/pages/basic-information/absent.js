import React from "react";
import "../../style.css";
function Absent(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#guide-image">Hình hướng dẫn tạo các kiểu vắng</a></li>
                    <li className="link"><a href="#add-list">Thêm danh sách các kiểu văng</a> </li>
                    <li className="link"> <a href="#edit-information">Sửa thông tin kiểu vắng</a> </li>
                    <li className="link"> <a href="#delete-information">Xóa thông tin kiểu vắng</a> </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Khai báo các kiểu vắng</h2>
                <section>
                    <div id="guide-image">
                        <h2>1.	Hình hướng dẫn tạo các kiểu vắng</h2>
                        <div className="content-item" >
                            <img src='./images/absent/1.png' className="mb-3 w-100" />
                            <p className="text-center">Hình 06</p>
                            <table className="tables table-list d-flex w-100 mt-3">
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
                                        <td>Danh sách kiểu vắng</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-list">
                        <h2>2.	Thêm danh sách các kiểu văng</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 06) bên trên &minus;&#10095; hiện thị</p>
                                    <img src='./images/absent/absent-2.png' className=" mb-3" />  
                                    <p className="text-center">Hình 07</p> 
                                    <table className="tables table-list d-flex w-100 mt-3">
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Tên kiểu vắng</td>
                                            <td>5</td>
                                            <td>Măt định hệ thống xét nghĩ không lý do</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Ký hiệu kiểu văng</td>
                                            <td>6</td>
                                            <td>Lưu</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Phương thức tính lương</td>
                                            <td>7</td>
                                            <td>Thoát</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Phương thức không tính lương</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhập thông tin số 1 , 2 và chọn một trong số 3 hoặc 4 hoặc 5 như trên ( Hình 07 ) và
                                    sau đó nhấn nút 6 để lưu lại thông tin</li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn số 7 để thoát </li>
                                <li><span className="icon">&#10146;</span> Lưu ý : Các ký hiệu vắng không được trùng</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="edit-information">
                        <h2>3.	Sửa thông tin kiểu vắng</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 2 theo hình bên trên (Hình 06) để sửa thông tin như hình bên dưới
                                    (Hình 08)
                                    <img src='./images/absent/absent-3.png' className="mb-3" />  
                                    <p className="text-center">Hình 08</p> 
                                </li>
                                <li>
                                <span className="icon">&#10146; </span> Bạn nhập thông tin cần sửa và thao tác giống các bước ở Mục 2</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delete-information">
                        <h2>4.	Xóa thông tin kiểu vắng</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 3 theo hình bên trên (Hình 06) để thức hiện thao tác xóa kiểu văng
                                không cần thiết trong danh mục</li>
                                <li><span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 09)
                                    <img src='./images/absent/absent-4.png' className="mb-3 w-75" />  
                                    <p className="text-center">Hình 09</p> 
                                    <p className="ml-4">
                                    &#10004; Bạn nhấn nút <b>Xóa</b> ( Hình 09 ) để xóa thông tin vừa được chọn<br />
                                    &#10004; Bạn nhấn nút <b>Thoát</b> ( Hình 09 ) để bỏ qua không thực hiện thao tác xóa</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Absent;