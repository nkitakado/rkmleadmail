import React from "react";
import MainLayout from "./components/MainLayout";

function Dashboard() {
  return (
    <section>
      <h1 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "2rem" }}>
        Dashboard
      </h1>
      {/* Add your dashboard widgets/charts here */}
      <div style={{
        background: "#22243c",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.12)"
      }}>
        <p style={{ fontSize: "1.1rem" }}>
          Welcome to your analytics dashboard.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}