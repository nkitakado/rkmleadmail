import React from 'react';

export default function SentMail() {
  // Replace with real data as needed
  const sent = [
    { id: 1, subject: "Project Update", to: "client@example.com", date: "2025-08-01" }
  ];
  return (
    <div>
      <h2>Sent Mail</h2>
      <ul>
        {sent.map(email => (
          <li key={email.id}>
            <strong>{email.subject}</strong> to {email.to} on {email.date}
          </li>
        ))}
      </ul>
    </div>
  );
}