import React from "react";
function Overtime(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#create-overtime">Hình hướng dẫn tạo kế hoạch tăng ca</a></li>
                    <li className="link"><a href="#add-overtime">Thêm kế hoạch tăng ca</a> </li>
                    <li className="link"> <a href="#edit-overtime">Sửa kế hoạch tăng ca</a> </li>
                    <li className="link"> <a href="#delete-overtime">Xóa kế hoạch tăng ca</a> </li>
                    <li className="link"> <a href="#approval">Phê duyệt</a> </li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">KHAI BÁO KẾ HOẠCH TĂNG CA NHÂN VIÊN</h2>
                <section>
                    <div id="create-overtime">
                        <h2>1.	Hình hướng dẫn tạo kế hoạch tăng ca</h2>
                        <div className="content-item" >
                            <img src='./images/overtime-1.png' className="mb-0 w-100" />
                            <p className="text-center">Hình 1</p>
                            <table className="tables table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm kế hoạch tăng ca</td>
                                        <td>4</td>
                                        <td>Phê duyệt danh sách tăng ca</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sửa kế hoạch tăng ca</td>
                                        <td>5</td>
                                        <td>Danh sách kế hoạch tăng ca</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Xóa kế hoạch tăng ca</td>
                                        <td>6</td>
                                        <td>Tìm kiếm nhân viên theo phong ban, ngày , mã nhân viên , tên nhân viên</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-overtime">
                        <h2>2.	Thêm kế hoạch tăng ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 1) bên trên &minus;&#10095;  hiện thị hình</p>
                                    <img src='./images/overtime-2.png' className="mb-0 w-100" />  
                                    <p className="text-center">Hình 2</p> 
                                    <table className="tables table-list d-flex w-100 mt-3">
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Chọn ngày tăng ca, giờ tăng ca, …</td>
                                                <td>5</td>
                                                <td>Thêm vào danh sách ngày giờ tăng ca</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Chọn lọc nhân viên theo phong ban, hoặc bỏ nhân viên đã thêm cùng ngày áp dụng đó</td>
                                                <td>6</td>
                                                <td>Xóa dòng giữ liệu thông tin vừa nhập</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Chọn tất cả nhân viên trên một trang</td>
                                                <td>7</td>
                                                <td>Lưu thông tin vừa nhập</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Chọn tất cả nhân viên trong hệ thống</td>
                                                <td>8</td>
                                                <td>Thoát</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="edit-overtime">
                        <h2>3.	Sửa kế hoạch tăng ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li>
                                    <span className="icon">&#10146;</span> Bạn nhấn vào ô số 2 theo hình bên trên (Hình 1) &minus;&#10095;   để sửa thông tin như hình bên trên (Hình 2)
                                </li>
                                <li>
                                    <span className="icon">&#10146; </span> Bạn nhập thông tin cần sửa và thao tác giống các bước ở <b style={{color: "red"}}>Mục 2</b>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="delete-overtime">
                        <h2>4.	Xóa kế hoạch tăng ca</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li>
                                    <img src='./images/overtime-3.png' className="mb-0 w-100 " /> 
                                    <p className="text-center">Hình 3</p>  
                                    <p><span className="icon">&#10146;</span> Bạn nhấn vào số 1 &minus;&#10095; Bạn nhấn vào số 2 theo hình bên trên (Hình 3) để thức hiện thao tác xóa ca nhân viên vừa xếp không cần thiết trong danh mục</p>
                                    <span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 4)
                                    <img src='./images/overtime-4.png' className="mb-0 w-100 " /> 
                                    <p className="text-center">Hình 4</p>  
                                    <p className="ml-4">
                                    &#10004; Bạn nhấn nút <b> Đồng ý</b> ( Hình 3 ) để xóa thông tin vừa được chọn<br />
                                    &#10004; Bạn nhấn nút <b>Thoát</b> ( Hình 3 ) để bỏ qua không thực hiện thao tác xóa</p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="approval">
                        <h2>5. Phê duyệt</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li>
                                    <img src='./images/overtime-5.png' className="mb-0 w-100 " /> 
                                    <p className="text-center">Hình 5</p>  
                                    <p><span className="icon">&#10146;</span> Bạn nhấn vào số 4 (Hình 1) &minus;&#10095;  hiển thị danh sách phê duyệt</p>
                                    <span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên trên (Hình 5) 
                                    <table className="tables table-list d-flex w-100 mt-3">
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Tìm thông tin nhân viên cần phê duyệt</td>
                                                <td>4</td>
                                                <td>Từ chối phê duyệt</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Chọn lọc nhân viên cân fphee duyệt hoặc từ chối phê duyệt</td>
                                                <td>5</td>
                                                <td>Thoát</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Phê duyệt danh sách</td>
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
            </article>
        </div>
    )
}
export default Overtime;