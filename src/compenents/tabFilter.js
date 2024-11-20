import React, { useState } from 'react';
import './TabFilter.css';

const TabFilter = () => {
  const [activeTab, setActiveTab] = useState('cakes');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab-item ${activeTab === 'cakes' ? 'active' : ''}`}
          onClick={() => handleTabClick('cakes')}
        >
          <img 
            src="/movie_100dp_49326B.png"
            alt="עוגות" 
            className="tab-icon-img"
          />
          <span>Video</span>
        </div>
        <div
          className={`tab-item ${activeTab === 'cakes' ? 'active' : ''}`}
          onClick={() => handleTabClick('cakes')}
        >
          <img 
            src="/movie_100dp_49326B.png"
            alt="עוגות" 
            className="tab-icon-img"
          />
          <span>Invitation</span>
        </div>
        <div
          className={`tab-item ${activeTab === 'party' ? 'active' : ''}`}
          onClick={() => handleTabClick('party')}
        >
          <img 
            src="/movie_100dp_49326B.png"
            alt="Voice" 
            className="tab-icon-img"
          />
          <span>צד</span>
        </div>
        <div
          className={`tab-item ${activeTab === 'park' ? 'active' : ''}`}
          onClick={() => handleTabClick('park')}
        >
          <img 
            src="/movie_100dp_49326B.png"
            alt="Poster" 
            className="tab-icon-img"
          />
          <span>פארק</span>
        </div>
      </div>

      
      <div className="tab-content">
        {activeTab === 'cakes' && <div>תוכן עבור עוגות</div>}
        {activeTab === 'party' && <div>תוכן עבור צד</div>}
        {activeTab === 'park' && <div>תוכן עבור פארק</div>}
      </div>
    </div>
  );
};

export default TabFilter;
