import React from "react";
function AccessControl(props) {
    return(
        <div className="pages pageTest device d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link"><a href="#access-group">Nhóm truy cập</a></li>
                    <li className="link"><a href="#access-level">Cấp độ truy cập</a></li>
                    <li className="link"><a href="#floor-level">Cấp độ tầng</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">KIỂM SOÁT TRUY CẬP</h2>
                <p>Bạn có thể sử dụng menu <b>Kiểm soát truy cập</b> để tạo cấp độ truy cập bằng cách định cấu hình cửa và lịch truy cập
                    cũng như để định cấu hình nhóm truy cập bằng cách sử dụng cấp độ truy cập và thông tin nhóm người dùng.
                    Các nhóm truy cập đã cấu hình sau đó được sử dụng như các thành phần của kiểm soát truy cập.</p>
                <section>
                    <div id="access-group">
                        <h2>1.	Nhóm truy cập</h2>
                        <div className="content-item" >
                            <img alt="images" src="./images/access-group-1.png" className="w-25"/>
                            <img alt="images" src="./images/access-group-1-2.png" className="w-100" />
                            <p className="font-weight-bold ml-4">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>2</td>
                                        <td>Nhập file </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Xuất file</td>
                                        <td>4</td>
                                        <td>Xóa </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                        <td>6</td>
                                        <td>Chọn danh sách cần xóa</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                        <td>8</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                </tbody>
                            </table>
                            <b>* Nhập file: </b>
                            <img alt="images" src="./images/access-group-import-file.png" className="w-100" />
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Đính kèm file import (.xlsx)</td>
                                        <td>2</td>
                                        <td>Tên file đang chọn</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Đóng cửa sổ</td>
                                        <td>4</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p> Sau khi chọn nhóm, bạn có thể thực hiện các thao tác sau:</p>
                            <p className="ml-3"><b>Xóa</b> : Xóa nhóm đã chọn khỏi danh sách.</p>
                            <p className="d-flex align-items-center"><span className="mr-2" style={{fontSize: "7px"}}>&#9899;</span> Thêm hoặc sửa nhóm truy cập</p>
                            <img alt="images" src="./images/access-group-2.png" className="w-100" />
                            <p className="font-weight-bold ml-4">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Mô tả </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Trường xác định nhóm khách </td>
                                        <td>4</td>
                                        <td>Danh sách cấp độ truy cập</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Danh sách cấp độ tầng</td>
                                        <td>6</td>
                                        <td>Danh sách nhóm người dùng</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Danh sách người dùng</td>
                                        <td>8</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Đồng ý</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="access-level">
                        <h2>2. Cấp độ truy cập</h2>
                        <div className="content-item">
                            <img alt="images" src="./images/access-level-1.png" className="w-25" />
                            <img alt="images" src="./images/access-level-1-2.png" className="w-100" />
                            <p className="font-weight-bold ml-4">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>2</td>
                                        <td>Xóa </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                        <td>4</td>
                                        <td>Chọn danh sách cần xóa</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                        <td>6</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <p className="d-flex align-items-center"><span className="mr-2" style={{fontSize: "7px"}}>&#9899;</span> Thêm hoặc sửa cấp độ truy cập</p>
                            <img alt="images" src="./images/access-level-2.png" />
                            <p className="font-weight-bold ml-4">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Mô tả </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Danh sách cửa</td>
                                        <td>4</td>
                                        <td>Schedule (lịch trình)</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Xóa 1 mục</td>
                                        <td>6</td>
                                        <td>Thêm 1 mục</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Đóng cửa sổ</td>
                                        <td>8</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="floor-level">
                        <h2>3. Cấp độ tầng</h2>
                        <div className="content-item">
                            <img alt="images" src="./images/floor-level-1.png" />
                            <img alt="images" src="./images/floor-level-1-2.png" className="w-100" />
                            <p className="font-weight-bold ml-4">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>2</td>
                                        <td>Xóa </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tìm kiếm trong danh sách hiện tại</td>
                                        <td>4</td>
                                        <td>Chọn danh sách cần xóa</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                        <td>6</td>
                                        <td>Danh sách đã thêm</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="d-flex align-items-center"><span className="mr-2" style={{fontSize: "7px"}}>&#9899;</span> Thêm hoặc sửa cấp độ tầng</p>
                            <img alt="images" src="./images/floor-level-2.png" className="w-100" />
                            <p className="font-weight-bold ml-4">Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tên</td>
                                        <td>2</td>
                                        <td>Mô tả </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Chọn thang máy</td>
                                        <td>4</td>
                                        <td>Chọn danh sách tầng cửa thang máy</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Schedule (lịch trình)</td>
                                        <td>6</td>
                                        <td>Xóa 1 mục</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Thêm 1 mục</td>
                                        <td>8</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Đồng ý</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default AccessControl;