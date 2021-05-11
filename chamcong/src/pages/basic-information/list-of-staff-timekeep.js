import React from "react";
import "../../style.css";
function ListOfStaffTimekeep(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#create-guide-image">Hình ảnh hướng dẫn</a></li>
                    <li className="link"><a href="#add-list-staff">Thêm danh nhân viên chấm công</a> </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">DANH SÁCH NHÂN VIÊN CHẤM CÔNG</h2>
                <section>
                    <div id="create-guide-image">
                        <h2>1.	Hình ảnh hướng dẫn tạo</h2>
                        <div className="content-item" >
                            <img src='./images/list-of-staff-timekeep-1.png' className="mb-3 w-75" />
                            <p className="text-center">Hình 02</p>
                            <table className="table">
                                <tr>
                                    <td>1</td>
                                    <td>Nhập và chọn để tìm </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-list-staff">
                        <h2>2.	Thêm danh nhân viên chấm công</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Bạn nhập và chọn vào ô 1 bên trên màn hình ( Hình 02 ) &minus;&#10095; Nhấn tìm enter để tìm thông tin</p>
                                    
                                </li>
                                {/* <li><span className="icon">&#10146;</span> Số 8 là danh sách nhân viên.</li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 1 theo hình vẽ (Hình 03) bên trên màn hình &minus;&#10095; để thực hiện thao tác lọc
                                bỏ những nhân viên đã được tạo trước ra khỏi danh sách nhân viên.
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 2 theo hình vẽ (Hình 03) bên trên màn hình &minus;&#10095; để thực hiện thao tác lọc
                                danh sách nhân viên theo phòng ban, công ty.
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 3 theo hình vẽ (Hình 03) bên trên màn hình &minus;&#10095; để thực hiện thao tác
                                chọn tất cả danh sách nhân viên viên theo phòng ban hoặc theo điều kiện lọc số 1, số 2, số 3,
                                số 4.
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 4 theo hình vẽ (Hình 03) bên trên màn hình &minus;&#10095; để thực hiện thao tác lọc
                                danh sách nhân viên theo mã nhân viên, họ tên
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 5 theo hình vẽ (Hình 03) bên trên màn hình &minus;&#10095; để thực hiện thao tác
                                chọn hoặc bỏ nhân viên trong danh sách nhân viên theo phòng ban hoặc theo điều kiện lọc số
                                1, số 2, số 3, số 4. 
                                </li>
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 6 theo hình vẽ (Hình 03) bên trên màn hình &minus;&#10095; để thực hiện thao tác
                                lưu danh sách nhân viên theo phòng ban, công ty vừa chọn .
                                    <img src='./images/list-of-staff-timekeep-3.png' className="mb-3 w-75" /> 
                                    <p className="text-center">Hình 04</p>
                                    <p> Sau khi nhấn và số 6 chương trình sẽ thông báo thức hiện thành công &minus;&#10095; bạn nhấn
                                    vào nút <b>Tiếp tục</b> bên trên ( Hình 04 ) để thực hiện tiếp hoặc nhấn vào nút <b>Thoát</b> để thoát
                                    khỏi danh mục them</p>
                                </li>
                                <li>
                                <span className="icon">&#10146;</span> Bạn nhấn vào số 7 theo hình vẽ (Hình 03) bên trên màn hình &minus;&#10095; để thực hiện thao tác
                                thoát khỏi màn hình thêm
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <div id="Delete-list-staff">
                        <h2>3.	Xóa danh sách nhân viên chấm công</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li><span className="icon">&#10146;</span> Bạn nhấn vào số 2 theo hình vẽ (Hình 02) bên trên màn hình &minus;&#10095; để thực hiện thao tác
                                chọn nhân viên cần xóa
                                </li>
                                <li>
                                <span className="icon">&#10146; </span> Bạn nhấn vào số 3 theo hình vẽ (Hình 02) bên trên màn hình &minus;&#10095; để thực hiện thao tác
                                xóa nhân viên đã chọn &minus;&#10095; Màn hình hiển thị (Hình 05) thông báo.
                                <img src='./images/list-of-staff-timekeep-4.png' className="mb-3 w-75" /> 
                                <p className="text-center">Hình 05</p>
                                <p className="ml-4">
                                    &#10004; <b>Đồng ý (Hình 05)</b> : xóa nhân viên đã chọn<br />
                                    &#10004; <b>Thoát (Hình 05)</b> : bỏ qua không thực hiện thao tác xóa nhân viên đã chọn</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section> */}
            </article>
        </div>
    )
}
export default ListOfStaffTimekeep;