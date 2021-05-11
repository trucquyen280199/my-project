import React from "react";
function SMS(props) {
    return(
        <div className="pages pageTest importFiles d-flex align-items-start">
            <nav className="toc">
                <ul className="menu-main">
                    <li className="link">
                        <a href="#configuration-mail">Cấu hình mail</a>
                    </li>
                    <li className="link">
                        <a href="#compose">Lịch sử</a>
                    </li>
                </ul>
                {/* <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg> */}
            </nav>
            <article className="contents" id="contents">
                <h2 className="text-center">HỘP THƯ</h2>
                <section>
                    <div id="configuration-mail">
                        <h2>1.	Cấu hình mail</h2>
                        <div className="content-item" >
                            <img alt="images" src='./images/sms/sms-1.png' className="mb-3 w-25" />
                            <img alt="images" src='./images/sms/sms-2.png' className="mb-3 w-100" />
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Lưu cấu hình</td>
                                        <td>4</td>
                                        <td>Tốc độ truyền</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Thông tin mô-đun</td>
                                        <td>5</td>
                                        <td>Nhà sản xuất</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Cổng nối tiếp (COM)</td>
                                        <td>6</td>
                                        <td>Model</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Để gửi gửi sms, cần nhập đủ thông tin modem và cổng nối tiếp.</p>
                        </div>
                    </div>
                </section>
                <section className="mt-3">
                    <div id="compose">
                        <h2>2.	Lịch sử</h2>
                        <div className="content-item" >
                            <p>Danh sách mô tả thông tin gửi sms: ngày gửi, điện thoại nhận, nội dung, trạng thái, mô tả.</p>
                            <img alt="images" src='./images/sms/sms-3.png' className="mb-3 w-100" />
                        </div>
                    </div>
                </section>
                
            </article>
        </div>
    )
}
export default SMS;