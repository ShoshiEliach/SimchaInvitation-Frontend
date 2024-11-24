import React, { useState } from "react";
import "./EnterManually.css"; // Import the CSS file

const EnterManually = () => {
    const [phoneNumbers, setPhoneNumbers] = useState(["0559998888"]);

    // Add a new empty phone number field
    const handleAdd = () => {
        setPhoneNumbers([...phoneNumbers, ""]);
    };

    // Update a specific phone number
    const handleInputChange = (index, value) => {
        const updatedNumbers = [...phoneNumbers];
        updatedNumbers[index] = value;
        setPhoneNumbers(updatedNumbers);
    };

    // Remove a specific phone number
    const handleRemove = (index) => {
        const updatedNumbers = phoneNumbers.filter((_, i) => i !== index);
        setPhoneNumbers(updatedNumbers);
    };

    // Save button handler
    const handleSave = () => {
        console.log("Saved numbers:", phoneNumbers);
        alert("Phone numbers saved: " + phoneNumbers.join(", "));
    };

    return (
        <div className="enter-manually-container">
            <div>
                {phoneNumbers.map((phone, index) => (
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
