import React, { useState } from 'react';
import './TabFilter.css';

const TabFilter = () => {
  const [activeTab, setActiveTab] = useState('video'); // מצב התחלתי של טאב

  const handleTabClick = (tab) => {
    setActiveTab(tab); // עדכון מצב הטאב הפעיל
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab-item ${activeTab === 'video' ? 'active' : ''}`}
          onClick={() => handleTabClick('video')}
        >
          <img
            src="/movie_100dp_49326B.png"
            alt="Video"
            className="tab-icon-img"
          />
          <span>Video</span>
        </div>
        <div
          className={`tab-item ${activeTab === 'invitation' ? 'active' : ''}`}
          onClick={() => handleTabClick('invitation')}
        >
          <img
            src="/invitation.png"
            alt="Invitation"
            className="tab-icon-img"
          />
          <span>Invitation</span>
        </div>
        <div
          className={`tab-item ${activeTab === 'poster' ? 'active' : ''}`}
          onClick={() => handleTabClick('poster')}
        >
          <img
            src="./poster.png"
            alt="Poster"
            className="tab-icon-img"
          />
          <span>Poster</span>
        </div>

      </div>

      {/* תוכן דינמי לפי הטאב הפעיל */}
      <div className="tab-content">
        {activeTab === 'video' && <p>Video content here...</p>}
        {activeTab === 'invitation' && <p>Invitation content here...</p>}
        {activeTab === 'poster' && <p>Poster content here...</p>}
      </div>
    </div>
  );
};

export default TabFilter;
