import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaHome, FaList, FaCog, FaPaperPlane, FaInbox, FaUpload } from 'react-icons/fa';
import SendEmail from './SendEmail';
import Inbox from './Inbox';
import SentMail from './SentMail';
import BulkUpload from './BulkUpload';

const TABS = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'tasks', label: 'Tasks', icon: <FaList /> },
  { id: 'inbox', label: 'Inbox', icon: <FaInbox /> },
  { id: 'sent', label: 'Sent', icon: <FaPaperPlane /> },
  { id: 'bulk', label: 'Bulk Upload', icon: <FaUpload /> },
  { id: 'settings', label: 'Settings', icon: <FaCog /> },
  { id: 'send', label: 'Send Email', icon: <FaPaperPlane /> },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="container">
      <Sidebar tabs={TABS} activeTab={activeTab} onTabClick={setActiveTab} />
      <main className="main-content">
        {activeTab === 'home' && <h1>Welcome Home</h1>}
        {activeTab === 'tasks' && <h1>Task List</h1>}
        {activeTab === 'inbox' && <Inbox />}
        {activeTab === 'sent' && <SentMail />}
        {activeTab === 'bulk' && <BulkUpload />}
        {activeTab === 'settings' && <h1>Settings</h1>}
        {activeTab === 'send' && <SendEmail />}
      </main>
    </div>
  );
}

export default App;