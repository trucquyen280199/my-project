import React from "react";
function Schedule(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#create-schedule" title="Hình hướng dẫn tạo lịch trình">Hình hướng dẫn tạo lịch trình</a></li>
                    <li className="link"><a href="#add-schedule" title="Thêm lịch trình">Thêm lịch trình</a> </li>
                    <li className="link"><a href="#edit-schedule" title="Sửa lịch trình">Sửa lịch trình</a> </li>
                    <li className="link"><a href="#delete-schedule" title="Xóa lịch trình">Xóa lịch trình</a> </li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">Khai báo lịch trình</h2>
                <section>
                    <div id="create-schedule">
                        <h2>1.	Hình hướng dẫn tạo lịch trình</h2>
                        <div className="content-item" >
                            <img src='./images/schedule-1.png' className="mb-0 w-100" />
                            <p className="text-center">Hình 1</p>
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
                                        <td>Danh sách lịch trình</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-schedule">
                        <h2>2.	Thêm lịch trình</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 1) bên trên &minus;&#10095;  hiện thị hình</p>
                                    <img src='./images/schedule-2.png' className="mb-0 w-100" />  
                                    <p className="text-center">Hình 2</p> 
                                    <table className="tables table-list d-flex w-100 mt-3">
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Chọn ngày áp dụng </td>
                                                <td>5</td>
                                                <td>Xóa thông tin vừa chọn</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Chọn nhóm chính hoặc nhóm phụ cần xếp lịch</td>
                                                <td>6</td>
                                                <td>Lưu thông tin vừa nhập</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Thêm vào danh sách xếp lịch</td>
                                                <td>7</td>
                                                <td>Thoát</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Chọn nhóm áp dụng cho thứ trong tuần</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="edit-schedule">
                        <h2>3.	Sửa lịch trình</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li>
                                    <span className="icon">&#10146;</span> Bạn nhấn vào ô số 2 theo hình bên trên (Hình 1) &minus;&#10095;  để sửa thông tin bên trên (Hình 2)
                                </li>
                                <li>
                                    <span className="icon">&#10146; </span> Bạn nhập thông tin cần sửa và thao tác giống các bước ở <b style={{color: "red"}}>Mục 2</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delete-schedule">
                        <h2>4.	Xóa ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 3 theo hình bên trên (Hình 1) để thức hiện thao tác xóa lịch trình không cần thiết trong danh mục</li>
                                <li>
                                    <span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 3)
                                    <img src='./images/schedule-3.png' className="mb-0 " />  
                                    <p className="text-center">Hình 3</p> 
                                    <p className="ml-4">
                                    &#10004; Bạn nhấn nút <b> Đồng ý</b> ( Hình 3 ) để xóa thông tin vừa được chọn<br />
                                    &#10004; Bạn nhấn nút <b>Thoát</b> ( Hình 3 ) để bỏ qua không thực hiện thao tác xóa</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
            </article>
        </div>
    )
}
export default Schedule;