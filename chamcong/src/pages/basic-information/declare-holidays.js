import React from "react";
function DeclareHolidays(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#guide-holidays">Hình hướng dẫn khai báo các ngày lễ</a></li>
                    <li className="link"><a href="#add-holidays">Thêm ngày lễ</a> </li>
                    <li className="link"><a href="#edit-holidays">Sửa ngày lễ</a> </li>
                    <li className="link"><a href="#delete-holidays">Xóa ngày lễ</a> </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Khai báo các ngày lễ</h2>
                <section>
                    <div id="guide-holidays">
                        <h2>1.	Hình hướng dẫn tạo hệ số tăng ca</h2>
                        <div className="content-item" >
                            <img src='./images/DeclareHolidays-1.png' className="mb-3 w-75" />
                            <p className="text-center">Hình 14</p>
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
                                        <td>Danh sách các ngày lễ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-holidays">
                        <h2>2.	Thêm ngày lễ</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 14) bên trên &minus;&#10095;  hiện thị hình</p>
                                    <img src='./images/DeclareHolidays-2.png' className="mb-3 w-50" />  
                                    <p className="text-center">Hình 15</p> 
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhập thông tin hệ số vào ô số 1 ( phải nhập dạng số ) &minus;&#10095; nhấn nút số 2 theo hình bên
                                        trên (Hình 11) &minus;&#10095; Để thực hiện lưu thông tin hệ số</li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào ô số 3 theo hình bên trên (Hình 11) để thoát khỏi </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="edit-holidays">
                        <h2>3.	Sửa ngày lễ</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào ô số 2 theo hình bên trên (Hình 14) &minus;&#10095; để sửa thông tin như hình bên trên
                                    (Hình 15 - Mục 2)
                                </li>
                                <li>
                                <span className="icon">&#10146; </span> Bạn nhập thông tin cần sửa và thao tác giống các bước ở <b style={{color: "red"}}>Mục 2</b></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delete-holidays">
                        <h2>4.	Xóa ngày lễ</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 3 theo hình bên trên (Hình 14) để thức hiện thao tác xóa ngày lễ không
                                    cần thiết trong danh mục</li>
                                <li><span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 16)
                                    <img src='./images/DeclareHolidays-3.png' className="mb-3 w-75" />  
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
export default DeclareHolidays;