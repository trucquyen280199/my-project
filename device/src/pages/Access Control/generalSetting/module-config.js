import React from "react";
function ModuleConfig(props) {
    return(
        <div className="pages pageTest groupCard d-flex align-items-start" style={{overflowY: "scroll",height: "calc(100vh - 48px)"}}>
            <nav className="toc d-none" >
                <ul className="menu-main">
                    <li className="link"><a href="#configuration-device">Cấu hình thiết bị cho module</a></li>
                </ul>
                <svg className="toc-marker" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#444" strokeWidth="3" fill="transparent" strokeDasharray="0, 0, 0, 1000" strokeLinecap="round" strokeLinejoin="round" transform="translate(-0.5, -0.5)" />
                </svg>
            </nav>
            <article className="contents w-100" id="contents" >  
                <h2 className="text-center">CẤU HÌNH MÔ-ĐUN</h2> 
                <section >
                    <div >
                        <div className="content-item" >
                            {/* <p>B1: Vào <b>Trang chủ &gt; Người dùng &gt; Nhóm người dùng (NGD)</b></p> */}
                            <img alt="images" src="./images/module-config-1.png" className="w-25" /> 
                            <img alt="images" src="./images/module-config-1-2.png" className="w-100" /> 
                            <p>Ghi chú:</p>
                            <table className="table ">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh sách module</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Cấu hình thiết bị cho module</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Tìm kiếm trong danh sách hiên tại</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div id="configuration-device">
                        <h2>1. Cấu hình thiết bị cho module</h2>
                        <div className="content-item" >
                            {/* <p>B1: Vào <b>Trang chủ &gt; Người dùng &gt; Nhóm người dùng (NGD)</b></p> */}
                            <img alt="images" src="./images/module-config-2.png" className="w-100 mb-3" /> 
                            <p>Ghi chú:</p>
                            <table className="table table-list d-flex w-100 mt-3">
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Danh sách thiết bị chưa được cấu hình</td>
                                        <td>6</td>
                                        <td>Di chuyển 1 thiết bị qua trái</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Danh sách thiết bị đã được cấu hình</td>
                                        <td>7</td>
                                        <td>Di chuyển tất cả thiết bị qua trái</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Chức năng di chuyển vị trí</td>
                                        <td>8</td>
                                        <td>Đóng cửa sổ</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Di chuyển 1 thiết bị qua phải</td>
                                        <td>9</td>
                                        <td>Đồng ý</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Di chuyển tất cả thiết bị qua phải</td>
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
export default ModuleConfig;