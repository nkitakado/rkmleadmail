import React from "react";

const navLinks = [
  { name: "Dashboard", icon: "🏠" },
  { name: "Contacts", icon: "👥" },
  { name: "Campaigns", icon: "📧" },
  { name: "Analytics", icon: "📊" },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        background: "#0c0d19",
        color: "#fff",
        width: "260px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1rem",
        boxShadow: "2px 0 8px rgba(0,0,0,0.07)",
      }}
    >
      <img
        src="https://rkmfreightinc.com/wp-content/uploads/2025/05/logo-white.png"
        alt="Company Logo"
        style={{ width: "140px", margin: "0 auto 2.5rem auto" }}
      />
      <nav>
        {navLinks.map((link) => (
          <div
            key={link.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "0.8rem 1rem",
              marginBottom: "0.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#1f2233")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}
          >
            <span style={{ fontSize: "1.4rem" }}>{link.icon}</span>
            {link.name}
          </div>
        ))}
      </nav>
    </aside>
  );
}