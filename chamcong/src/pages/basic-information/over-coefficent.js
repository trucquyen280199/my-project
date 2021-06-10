import React from "react";
import "../../style.css";
function OverCoefficient(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#guide-over-coefficient" title="Hình hướng dẫn tạo hệ số tăng ca">Hình hướng dẫn tạo hệ số tăng ca</a></li>
                    <li className="link"><a href="#add-over-coefficient" title="Thêm hệ số tăng ca">Thêm hệ số tăng ca</a> </li>
                    <li className="link"><a href="#edit-over-coefficient" title="Sửa hệ số tăng ca">Sửa hệ số tăng ca</a> </li>
                    <li className="link"><a href="#delete-over-coefficient" title="Xóa hệ số tăng ca">Xóa hệ số tăng ca</a> </li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Khai báo các hệ số</h2>
                <section>
                    <div id="guide-over-coefficient">
                        <h2>1.	Hình hướng dẫn tạo hệ số tăng ca</h2>
                        <div className="content-item" >
                            <img src='./images/overtimeCoefficient/OverCoefficient-1.png' className="mb-3" />
                            <p className="text-center">Hình 10</p>
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
                                        <td>Danh sách hệ số tăng ca</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-over-coefficient">
                        <h2>2.	Thêm hệ số tăng ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 10) bên trên &minus;&#10095;  hiện thị hình</p>
                                    <img src='./images/overtimeCoefficient/OverCoefficient-2.png' className="mb-3" />  
                                    <p className="text-center">Hình 11</p> 
                                    <table className="tables col-12 col-md-9 mt-3">
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Hệ số</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Lưu</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Thoát</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhập thông tin hệ số vào ô số 1 ( phải nhập dạng số ) &minus;&#10095; nhấn nút số 2 theo hình bên
                                        trên (Hình 11) &minus;&#10095; Để thực hiện lưu thông tin hệ số</li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào ô số 3 theo hình bên trên (Hình 11) để thoát khỏi </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="edit-over-coefficient">
                        <h2>3.	Sửa hệ số tăng ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào ô số 2 theo hình bên trên (Hình 10) &minus;&#10095; để sửa thông tin như hình bên dưới
                                    (Hình 12)
                                    <img src='./images/overtimeCoefficient/OverCoefficient-3.png' className="mb-3 w-50" />  
                                        <p className="text-center">Hình 12</p> 
                                </li>
                                <li>
                                <span className="icon">&#10146; </span> Bạn nhập thông tin cần sửa và thao tác giống các bước ở Mục 2</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delete-over-coefficient">
                        <h2>4.	Xóa hệ số tăng ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 3 theo hình bên trên (Hình 10) để thức hiện thao tác xóa hệ số không
                                    cần thiết trong danh mục</li>
                                <li><span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 13)
                                    <img src='./images/overtimeCoefficient/OverCoefficient-4.png' className="mb-3" />  
                                    <p className="text-center">Hình 13</p> 
                                    <p className="ml-4">
                                    &#10004; Bạn nhấn nút <b> Đồng ý</b> ( Hình 13 ) để xóa thông tin vừa được chọn<br />
                                    &#10004; Bạn nhấn nút <b>Thoát</b> ( Hình 13 ) để bỏ qua không thực hiện thao tác xóa</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default OverCoefficient;