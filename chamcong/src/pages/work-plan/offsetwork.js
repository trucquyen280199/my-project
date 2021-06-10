import React from "react";
function OffsetWork(props) {
    return(
        <div className="pages pageTest d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#create-offsetwork" title="Hình hướng dẫn tạo kế hoạch làm bù">Hình hướng dẫn tạo kế hoạch làm bù</a></li>
                    <li className="link"><a href="#add-offsetwork" title="Thêm kế hoạch làm bù">Thêm kế hoạch làm bù</a> </li>
                    <li className="link"> <a href="#edit-offsetwork" title="Sửa kế hoạch làm bù">Sửa kế hoạch làm bù</a> </li>
                    <li className="link"> <a href="#delete-offsetwork" title="Xóa kế hoạch làm bù">Xóa kế hoạch làm bù</a> </li>
                </ul>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">KHAI BÁO KẾ HOẠCH LÀM BÙ</h2>
                <section>
                    <div id="create-offsetwork">
                        <h2>1.	Hình hướng dẫn tạo kế hoạch làm bù</h2>
                        <div className="content-item" >
                            <img src='./images/offsetwork-1.png' className="mb-0 w-100" />
                            <p className="text-center">Hình 1</p>
                            <table className="tables table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm </td>
                                        <td>4</td>
                                        <td>Danh sách kế hoạch làm bù</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sửa</td>
                                        <td>5</td>
                                        <td>Tìm kiếm nhân viên thoe phong ban, ngày , mã nhân viên , tên nhân viên</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Xóa </td>
                                        <td>6</td>
                                        <td>Chọn để lọc danh sách theo ngày làm bù (mặt định dữ liệu lọc theo ngày ngày nghỉ)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="add-offsetwork">
                        <h2>2.	Thêm kế hoạch làm bù</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li> 
                                    <p><span className="icon">&#10146;</span> Nhấn vào nút 1 (Hình 1) bên trên &minus;&#10095;  hiện thị hình</p>
                                    <img src='./images/offsetwork-2.png' className="mb-0 w-100" />  
                                    <p className="text-center">Hình 2</p> 
                                    <table className="tables table-list d-flex w-100 mt-3">
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Chọn ngày nghỉ và ngày làm bù , ghi chú</td>
                                                <td>5</td>
                                                <td>Chọn kiểu vắng để lọc dữ liệu</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Chọn lọc nhân viên theo phong ban, hoặc bỏ nhân viên đã thêm cùng ngày áp dụng đó</td>
                                                <td>6</td>
                                                <td>Danh sách nhân viên</td>
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
                    <div id="edit-offsetwork">
                        <h2>3.	Sửa kế hoạch làm bù</h2>
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
                    <div id="delete-offsetwork">
                        <h2>4.	Xóa kế hoạch làm bù</h2>
                        <div className="content-item" >
                            <ul className="list">
                                <li>
                                    <img src='./images/offsetwork-3.png' className="mb-0 w-100 " /> 
                                    <p className="text-center">Hình 3</p>  
                                    <p><span className="icon">&#10146;</span> Bạn nhấn vào số 1 &minus;&#10095; Bạn nhấn vào số 2 theo hình bên trên (Hình 3) để thức hiện thao tác xóa ca nhân viên vừa xếp không cần thiết trong danh mục</p>
                                    <span className="icon">&#10146; </span> Màn hình xuất hiện thông báo như hình bên dưới (Hình 4)
                                    <img src='./images/offsetwork-4.png' className="mb-0 w-100 " /> 
                                    <p className="text-center">Hình 4</p>  
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
export default OffsetWork;