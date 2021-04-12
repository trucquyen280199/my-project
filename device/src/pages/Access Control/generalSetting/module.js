import React from "react";
// import "../style.css";
function Module(props) {
    return(
        <div className="pages pageTest groupCard d-flex align-items-start" style={{overflowY: "scroll",height: "calc(100vh - 48px)"}}>
            <nav className="toc d-none">
                <ul className="menu-main">
                    <li className="link"><a href="#add-card">Thêm hoặc sửa</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents w-100" id="contents" >
            <h2 className="text-center">Module</h2>
                <section>
                    <div>
                        <div className="content-item" >
                            <p>B1: Vào <b>Trang chủ &gt; Người dùng &gt; Nhóm người dùng (NGD)</b></p>
                            <img src="./images/module-1.png" className="w-75 mb-3" /> 
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Thêm mới</td>
                                        <td>4</td>
                                        <td>Chuyển hướng</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Click xem chi tiết hoặc thay đổi thông tin</td>
                                        <td>5</td>
                                        <td>Xóa module</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tìm kiếm trong danh sách hiên tại</td>
                                        <td>6</td>
                                        <td>Phân quyền</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div>
                        <h2>1. Thêm hoặc sửa</h2>
                        <div className="content-item" >
                            <p>B1: Vào <b>Trang chủ &gt; Người dùng &gt; Nhóm người dùng (NGD)</b></p>
                            <img src="./images/module-2.png" className="w-75 mb-3" /> 
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>ID module (giá trị hợp lệ từ 1 đến 2000 000 000)</td>
                                        <td>4</td>
                                        <td>Key bản quyền</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tên module (sử dụng các key ngôn ngữ)</td>
                                        <td>5</td>
                                        <td>Trạng thái (nếu check là trạng thái được sử dụng)</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Đường dẫn của module</td>
                                        <td>6</td>
                                        <td>Chuyển hướng (nếu check khi chuyển hướng sẽ mở tab trình duyệt mới)</td>
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
export default Module;