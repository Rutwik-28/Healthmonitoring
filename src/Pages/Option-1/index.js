import './main.css';
import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Tooltip, message } from 'antd';

function OPTION1() {
    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const items = [
        {
            label: '1st menu item',
            key: '1',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '2',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '3',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '4rd menu item',
            key: '4',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return <div>

        <div className="box-content dashboard active">

            <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
                Search 🔎
            </Dropdown.Button>

            <div className="overview-boxes">
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">chills</div>
                        <div className="number chills">
                            True
                        </div>
                        <div className="indicator">
                            <span className="text"> Safe: false</span>
                        </div>
                    </div>
                    <i className="cart" >❄</i>

                </div>
                <div className="box" >
                    <div className="right-side" >
                        <div className="box-topic" >Diastole BP</div>
                        <div className="number dbp">
                            90
                        </div>
                        <div className="indicator" >
                            <span className="text">Safe [60 - 80 mm Hg]</span>
                        </div>

                    </div>
                    <i className="fas fa-lungs cart two"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Systole BP</div>
                        <div className="number sbp">
                            90
                        </div>
                        <div className="indicator">
                            <span className="text">Safe [90 - 120 mm Hg]</span>
                        </div>
                    </div>
                    <i className="fa-sharp fa-solid fa-heart cart three"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div classNameName="box-topic">HeartRate</div>
                        <div className="number heartrate">
                            99
                        </div>
                        <div className="indicator">
                            <span className="text">Safe [60 to 100 beats]</span>
                        </div>
                    </div>
                    <i className="fas fa-heartbeat cart four"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Respiration Rate</div>
                        <div className="number respiration">
                            23
                        </div>
                        <div className="indicator">
                            <span className="text">Safe [12 to 16 breaths/min]</span>
                        </div>
                    </div>
                    <i className="fas fa-lungs cart two"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">SpO2</div>
                        <div className="number spo2">
                            98
                        </div>
                        <div className="indicator">
                            <span className="text">Range [95% or higher]</span>
                        </div>
                    </div>
                    <i className="fas fa-wind cart three"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Blood Group</div>
                        <div className="number bloodg">
                            O+
                        </div>
                        <div className="indicator">
                            <span className="text"></span>
                        </div>
                    </div>
                    <i className="fas fa-droplet cart four"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Temperature</div>
                        <div className="number temp">
                            98
                        </div>
                        <div className="indicator">
                            <span className="text">Range [97°F to 99°F]</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-temperature-half cart "></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Ambulation </div>
                        <div className="number ambulation">
                            False
                        </div>
                        <div className="indicator">
                            <span className="text">Values possible : True/False</span>
                        </div>
                    </div>
                    <i className="fa-solid fa-face-thermometer"></i>
                    <i className="fas fa-syringe cart three"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">Fever History </div>
                        <div className="number fever">
                            Yes
                        </div>
                        <div className="indicator">
                            <span className="text">Values possible : Yes/No/Other</span>
                        </div>
                    </div>
                    <i className="fas fa-temperature-half cart four"></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">BMI</div>
                        <div className="number bmi">
                            23
                        </div>
                        <div className="indicator">
                            <span className="text">Range [18.5 to 24.9]</span>
                        </div>
                    </div>
                    <i className="fas fa-balance-scale cart "></i>
                </div>
                <div className="box">
                    <div className="right-side">
                        <div className="box-topic">FiO2 </div>
                        <div className="number fio2">
                            55
                        </div>
                        <div className="indicator">
                            <span className="text">Range [50 to 100]</span>
                        </div>
                    </div>
                    <i className="fas fa-lungs cart two"></i>
                </div>
            </div>
        </div>
    </div>

}
export default OPTION1