import React from "react";
function ShiftGroup(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#create-shiftGroup" title="Hình hướng dẫn tạo nhóm ca">Hình hướng dẫn tạo nhóm ca</a></li>
                    <li className="link"><a href="#add-shiftGroup" title="Thêm nhóm ca">Thêm nhóm ca</a> </li>
                    <li className="link"> <a href="#edit-shiftGroup" title="Sửa nhóm ca">Sửa nhóm ca</a> </li>
                    <li className="link"> <a href="#delete-shiftGroup" title="Xóa nhóm ca">Xóa nhóm ca</a> </li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Khai báo nhóm ca</h2>
                <section>
                    <div id="create-shiftGroup">
                        <h2>1.	Hình hướng dẫn tạo nhóm ca</h2>
                        <div className="content-item" >
                            <img src='./images/shift-group-1.png' className="mb-0 w-100" />
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
                                        <td>Danh sách nhóm ca</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-shiftGroup">
                        <h2>2.	Thêm nhóm ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 10) bên trên &minus;&#10095;  hiện thị hình</p>
                                    <img src='./images/shift-group-2.png' className="mb-0 w-50" />  
                                    <p className="text-center">Hình 11</p> 
                                    <table className="tables col-md-9 col-12">
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Tên nhóm ca</td>
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
                                <li><span className="icon">&#10146;</span> Bạn nhập thông tin nhóm ca vào ô số 1 ( phải nhập dạng số ) &minus;&#10095; nhấn nút số 2 theo hình 
                                        bên trên (Hình 11) &minus;&#10095;  Để thực hiện lưu thông tin nhóm ca</li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào ô số 3 theo hình bên trên (Hình 11) để thoát khỏi</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="edit-shiftGroup">
                        <h2>3.	Sửa nhóm ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li>
                                    <span className="icon">&#10146;</span> Bạn nhấn vào ô số 2 theo hình bên trên (Hình 10)  &minus;&#10095;  để sửa thông tin như hình bên dưới(Hình 12)
                                    <img src='./images/shift-group-3.png' className="mb-0 w-50" />  
                                    <p className="text-center">Hình 12</p> 
                                </li>
                                <li>
                                    <span className="icon">&#10146; </span> Bạn nhập thông tin cần sửa và thao tác giống các bước ở <b style={{color: "red"}}>Mục 2</b>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delete-shiftGroup">
                        <h2>4.	Xóa nhóm ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 3 theo hình bên trên (Hình 10) để thức hiện thao tác xóa nhóm ca không cần thiết trong danh mục</li>
                                <li>
                                    <span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 13)
                                    <img src='./images/shift-group-4.png' className="mb-0 w-50" />  
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
export default ShiftGroup;