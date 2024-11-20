import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProductSelector = () => {
  const location = useLocation();
  const [eventType, setEventType] = useState('');
  const [selectedMain, setSelectedMain] = useState('');
  const [selectedAdditional, setSelectedAdditional] = useState('');

  const simchaData = {
    Baby: ["ShulemZucher", "Vachtnacht", "Bris", "PidyonHaben","Kidush"],
    ShulemZucher:[],
    Vachtnacht:[],
    Bris:[],
    PidyonHaben:[],
    Upsherin: [],
    BarMitzva: ["BasMitzva", "Kidush", "Bar-Mitzva",],
    BasMitzva:[],
    Kidush:[],
    Thenoim: ["KallahsSide", "ChussenSside", "BothSides"],
    KallahsSide:[],
    ChussenSside:[],
    BothSides:[],
    Wedding: ["WeddingInvitation", "SaveTheDate", "Bavarfen"],
    WeddingInvitation:[],
    SaveTheDate:[],
    Bavarfen:[],
    ShevaBrachot: []
  };

  useEffect(() => {
    // כאשר location.state משתנה, נעדכן את eventType
    if (location.state && location.state.eventType) {
      setEventType(location.state.eventType);
    }
  }, [location.state]); // נעדכן כל פעם ש-state של location משתנה

  // קבלת הרשימה המתאימה מהנתונים
  const list = simchaData[eventType] || [];

  // פונקציה לטיפול בבחירת radio בכל קבוצה
  const handleMainChange = (event) => {
    setSelectedMain(event.target.value);
  };

  const handleAdditionalChange = (event) => {
    setSelectedAdditional(event.target.value);
  };

  return (
    <div>
      <h2>{eventType}</h2>
      {list.length > 0 ? (
        <div>
          <h3>בחירת אפשרות ראשית</h3>
          {list.map((item, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="mainOptions" // הקבוצה של radio הראשונה
                  value={item}
                  checked={selectedMain === item}
                  onChange={handleMainChange}
                />
                {item}
              </label>
            </div>
          ))}

          <h3>בחירת אפשרות נוספת</h3>
          {/* דוגמה לקבוצה נוספת של radio */}
          {["Option 1", "Option 2", "Option 3"].map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="additionalOptions" // הקבוצה של radio השנייה
                  value={option}
                  checked={selectedAdditional === option}
                  onChange={handleAdditionalChange}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <p>אין פריטים ברשימה זו</p>
      )}
    </div>
  );
};

export default ProductSelector;
