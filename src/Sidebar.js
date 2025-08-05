import React from 'react';
import {
  FaHome,
  FaList,
  FaInbox,
  FaPaperPlane,
  FaUpload,
  FaCog
} from 'react-icons/fa';

const Sidebar = ({ tabs, activeTab, onTabClick }) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-circle">M</span>
        <span className="logo-text">MailApp</span>
      </div>
      <div className="sidebar-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`sidebar-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => onTabClick(tab.id)}
            aria-label={tab.label}
          >
            <span className="tab-icon">
              {tab.icon}
            </span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="sidebar-footer">
        <button className="sidebar-tab settings-tab" onClick={() => onTabClick('settings')}>
          <span className="tab-icon"><FaCog /></span>
          <span className="tab-label">Settings</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;