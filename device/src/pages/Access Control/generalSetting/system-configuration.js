import React from "react";
function SystemConfiguration(props) {
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
                <h2 className="text-center">CẤU HÌNH HỆ THỐNG</h2> 
                <section >
                    <img alt="images" src="./images/SystemConfig-1.png" className="w-25"/>
                    <img alt="images" src="./images/SystemConfig-2.png" className="w-100"/>
                    <p>Ghi chú:</p>
                    <table className="tables table-list d-flex w-100 mt-3">
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lưu cấu hình</td>
                                <td>4</td>
                                <td>Đồng bộ tất cả thiết bị</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Reload</td>
                                <td>5</td>
                                <td>Sử dụng camera face</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Tự động đồng bộ đến thiết bị</td>
                                <td>6</td>
                                <td>Sử dụng cảnh báo camera</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </article>
        </div>
    )
}
export default SystemConfiguration;