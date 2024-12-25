import React, { useState } from "react";
import "./InvitationReady.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, Menu } from 'antd';
import { Color } from "fabric";
import { Link } from "react-router-dom";


const InvitationReady = () => {


    const menuEmail = (
        <Menu>
            <Menu.Item key="1">
                <Link to={{ pathname: '/UploadFile', state: { valueType: "email" } }}>
                    Upload a file(Email)
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={{ pathname: '/EnterManually', state: { valueType: "email" } }}>
                    Enter manauly
                </Link>            </Menu.Item>

        </Menu>
    );

    const menuSms = (
        <Menu>
            <Menu.Item key="1">
                <Link to={{ pathname: '/UploadFile', state: { valueType: "phone" } }}>
                    Upload a file
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={{ pathname: '/EnterManually', state: { valueType: "phone", } }}>
                    Enter manauly
                </Link>            </Menu.Item>

        </Menu>
    );

    const menuVoice = (
        <Menu>
            <Menu.Item key="1">
                <Link to={{ pathname: '/UploadFile', state: { valueType: "phone" } }}>
                    Upload a file
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to='/VoiceRecorder'>
                    Record yourself
                </Link>
            </Menu.Item>
        </Menu>
    )

    return (
        <>
            <div className="product-container">
                {/* צד שמאל: תצוגת מוצר */}
                <div className="product-image">
                    <h2>Your Invitation</h2>

                    <img src="/invitation-example.png" alt="Product" />
                    <p>Price: <b>$10.00</b></p>
                </div>




            </div>
            <div className="product-details">


                {/* אפשרויות */}
                <div className="options">
                    <h4>Delivery Options:</h4>

                    <div className="div-delivery">
                        <Dropdown overlay={menuEmail} placement="bottomCenter" arrow>

                            <Button className="delivery-button">Email Delivery <span style={{ color: '#49326b' }}>0.1$ for recipient</span>
                            </Button>

                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown overlay={menuSms} placement="bottomCenter" arrow>
                            <Button className="delivery-button">SMS Delivery <span style={{ color: '#49326b' }}>0.1$ for recipient</span>

                            </Button>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown overlay={menuVoice} placement="bottomCenter" arrow>
                            <Button className="delivery-button">Phone Voice Delivery <span style={{ color: '#49326b' }}>0.1$ for recipient</span>

                            </Button>
                        </Dropdown>
                    </div>
                    <Button className="delivery-button">Print <span style={{ color: '#49326b' }}>0.1$ for recipient</span>

                    </Button>
                </div>

                {/* חבילות */}
                <h4>Packages:</h4>

                <div className="packages">
                    <Button type="primary" className="package-button">100 emails + 70 SMS for $10</Button>
                    <Button type="primary" className="package-button">100 emails + 70 SMS for $10</Button>
                    <Button type="primary" className="package-button">100 emails + 70 SMS for $10</Button>
                </div>

            </div>
            <div className="button-next">
                <Button type="primary" style={{ backgroundColor: '#2c2d2d', width: '25vh', color: '#49326b', height: '7vh', fontSize: '26px' }}>Next </Button>
            </div>
        </>
    );
};

export default InvitationReady;
