import React, { Component } from 'react';

class DeviceSettings extends Component{
    constructor(props) {
        super(props);
        this.state = {
            menuList: ""

        }
    }
    render(){
        return(
            <div className="pages pageTest d-flex align-items-start">
                <nav className="toc">
                    <ul className="menu-main">
                        <li className="link"><a href="#addDevice" title="Thêm thiết bị">Thêm thiết bị</a></li>
                    </ul>
                </nav>
                <article className="contents" id="contents">
                    <h2 className="text-center">Cài đặt thiết bị</h2>
                    <section>
                        <div id="guide-image">
                            <div className="content-item" >
                                <p><b style={{fontSize: "24px"}}>&#8902;</b> Ở menu bên trái màn hình, chọn mục <b> Cài đặt &gt; Thiết bị</b></p>
                                <img src='./images/DeviceSettings/1.png' className="mb-3" />
                                <p><b style={{fontSize: "24px"}}>&#8902;</b> Sau khi chọn, chúng ta sẽ thấy một màn hình quản lý Thiết bị xuất hiện với tính năng: 
                                cài đặt thiết bị cho người dùng sử dụng để <b>Nhận món ăn</b></p>
                                <img src='./images/DeviceSettings/2.png' className="mb-3" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="addDevice">
                            <h2>1.	Thêm thiết bị</h2>
                            <div className="content-item" >
                                <ul>
                                    <li> 	Bước 1: Chọn thiết bị cần thêm
                                        <img src='./images/DeviceSettings/3.png' className="mb-3" />
                                    </li>
                                    <li> 	Bước 2: Chọn nút lưu để lưu lại thiết bị
                                        <img src='./images/DeviceSettings/4.png' className="mb-3" />
                                    </li>
                                    <li> 	Bước 3: Khi hiện ra thông báo xác nhận, ta bấm đồng ý
                                        <img src='./images/DeviceSettings/5.png' className="mb-3" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
}

export default DeviceSettings;