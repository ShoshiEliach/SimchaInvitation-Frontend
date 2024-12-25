import React, { useState } from "react";
import "./EnterManually.css"; // Import the CSS file
import { useLocation } from "react-router-dom";
const EnterManually = () => {

    const location = useLocation();
    const valueType = location.state;
    const [recipients, setRecipients] = useState([""]);

    // Add a new empty phone number field
    const handleAdd = () => {
        const allValid = recipients.every(validateValue);
        if (allValid) {
            setRecipients([...recipients, ""]);
        } else {
            alert(`Some ${valueType === "email" ? "emails" : "phone numbers"} are invalid.`);
        }
    };

    // Update a specific phone number
    const handleInputChange = (index, value) => {
        const updatedNumbers = [...recipients];
        updatedNumbers[index] = value;
        setRecipients(updatedNumbers);
    };

    // Remove a specific phone number
    const handleRemove = (index) => {
        const updatedNumbers = recipients.filter((_, i) => i !== index);
        setRecipients(updatedNumbers);
    };

    //check validate value:

    const validateValue = (value) => {
        if (valueType === "email") {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        } else if (valueType === "phone") {
            return /^\d{9,10}$/.test(value);
        }
        return false;
    };

    // Save button handler
    const handleSave = async () => {
        const allValid = recipients.every(validateValue);
        if (allValid) {
            try {
                const response = await fetch("http://localhost:5000/api/phone-numbers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ recipients }),
                });

                if (response.ok) {
                    alert("Phone numbers saved successfully!");
                } else {
                    alert("Failed to save phone numbers.");
                }
            } catch (error) {
                console.error("Error saving phone numbers:", error);
                alert("An error occurred while saving phone numbers.");
            }
        };
    }



    return (
        <div className="enter-manually-container">
            <div>
                {recipients.map((phone, index) => (
                    <div key={index} className="phone-input-wrapper">
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            className="phone-input"
                        />
                        <button
                            onClick={() => handleRemove(index)}
                            className="remove-button"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
            <div className="buttons-wrapper">
                <button onClick={handleAdd} className="add-button">
                    Add
                </button>
                <button onClick={handleSave} className="save-button">
                    Save
                </button>
            </div>
        </div>
    );
};

export default EnterManually;
