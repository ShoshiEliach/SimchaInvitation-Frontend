import React, { useState } from "react";
import "./InvitationReady.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, Menu } from 'antd';
import { Color } from "fabric";

const InvitationReady = () => {


    const menu = (
        <Menu>
            <Menu.Item key="1">
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Upload a file                </a>
            </Menu.Item>
            <Menu.Item key="2">
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Enter manauly
                </a>
            </Menu.Item>

        </Menu>
    );

    return (
        <div className="product-container">
            {/* צד שמאל: תצוגת מוצר */}
            <div className="product-image">
                <h2>Your Invitation</h2>

                <img src="/path-to-product-image.jpg" alt="Product" />
                <p>Price: <b>$10.00</b></p>
            </div>



            <div className="product-details">


                {/* אפשרויות */}
                <div className="options">
                    <h4>Delivery Options:</h4>

                    <div className="div-delivery">
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button className="delivery-button">Email Delivery <span style={{ color: 'green' }}>0.1$ for recipient</span>
                            </Button>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button className="delivery-button">SMS Delivery <span style={{ color: 'green' }}>0.1$ for recipient</span>

                            </Button>
                        </Dropdown>
                    </div>
                    <div>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                            <Button className="delivery-button">Phone Voice Delivery <span style={{ color: 'green' }}>0.1$ for recipient</span>

                            </Button>
                        </Dropdown>
                    </div>
                    <Button className="delivery-button">Print <span style={{ color: 'green' }}>0.1$ for recipient</span>

                    </Button>
                </div>

                {/* חבילות */}
                <h4>Packages:</h4>

                <div className="packages">
                    <Button type="primary" className="package-button">100 emails + 70 SMS for $10</Button>
                    <Button type="primary" className="package-button">100 emails + 70 SMS for $10</Button>
                    <Button type="primary" className="package-button">100 emails + 70 SMS for $10</Button>
                </div>

                {/* כפתור */}
                <button className="add-to-cart">Next</button>
            </div>
        </div>
    );
};

export default InvitationReady;