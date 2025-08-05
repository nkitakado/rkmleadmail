import React from "react";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#181a26" }}>
      <Sidebar />
      <main
        style={{
          flex: 1,
          padding: "2.5rem",
          background: "#181a26",
          color: "#fff",
          borderRadius: "24px 0 0 0",
          margin: "1.5rem 0 1.5rem 1.5rem",
          boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
        }}
      >
        {children}
      </main>
    </div>
  );
}