import React from 'react';
import { FaInbox, FaStar, FaPaperclip, FaExclamationCircle } from 'react-icons/fa';

const emails = [
  {
    id: 1,
    subject: "Welcome!",
    from: "team@example.com",
    date: "2025-08-04",
    starred: true,
    important: false,
    hasAttachment: false,
    label: "Updates"
  },
  {
    id: 2,
    subject: "Your Invoice",
    from: "billing@example.com",
    date: "2025-08-03",
    starred: false,
    important: true,
    hasAttachment: true,
    label: "Finance"
  },
  {
    id: 3,
    subject: "Project Files",
    from: "colleague@example.com",
    date: "2025-08-02",
    starred: false,
    important: false,
    hasAttachment: true,
    label: "Work"
  }
];

export default function Inbox() {
  return (
    <div>
      <h2 style={{display: 'flex', alignItems: 'center', gap: 8}}>
        <FaInbox style={{color: '#6366f1'}} /> Inbox
      </h2>
      <ul className="inbox-list">
        {emails.map(email => (
          <li key={email.id} className="inbox-email">
            <div className="email-icons">
              {email.starred && <FaStar className="email-icon star" title="Starred" />}
              {email.important && <FaExclamationCircle className="email-icon important" title="Important" />}
              {email.hasAttachment && <FaPaperclip className="email-icon attachment" title="Has Attachment" />}
            </div>
            <div className="email-main">
              <span className="email-subject">{email.subject}</span>
              <span className={`email-label label-${email.label.toLowerCase()}`}>{email.label}</span>
              <span className="email-from">{email.from}</span>
              <span className="email-date">{email.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}