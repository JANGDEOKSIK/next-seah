"use client";
import React, { useState } from 'react';

export default function Tab({ tabNames }) {
  const [activeTab, setActiveTab] = useState(tabNames[0]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tab-area f-body1-eb">
      {tabNames.map((name) => (
        <button
          key={name}
          className={activeTab === name ? 'on' : ''}
          onClick={() => handleTabClick(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}