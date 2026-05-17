import React from "react";
import "./App.css";

import {
  FaUserTie,
  FaRobot,
  FaSearch,
  FaBriefcase
} from "react-icons/fa";

import CandidateForm from "./components/CandidateForm";
import CandidateList from "./components/CandidateList";
import JobForm from "./components/JobForm";

function App() {

  return (
    <div className="app">

      {/* SIDEBAR */}

      <div className="sidebar">

        <div className="logo">
          Talent<span>AI</span>
        </div>

        <div className="menu">

          <div className="menu-item active">
            <FaUserTie />
            Dashboard
          </div>

          <div className="menu-item">
            <FaBriefcase />
            Candidates
          </div>

          <div className="menu-item">
            <FaSearch />
            Shortlisting
          </div>

          <div className="menu-item">
            <FaRobot />
            AI Ranking
          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="main">

        {/* TOPBAR */}

        <div className="topbar">

          <div>
            <h1>AI Recruitment Dashboard</h1>

            <p>
              Smart hiring platform powered by AI
            </p>
          </div>

          <button className="top-btn">
            + New Hiring
          </button>

        </div>

        {/* DASHBOARD CARDS */}

        <div className="stats">

          <div className="stat-card">
            <h2>124</h2>
            <p>Total Candidates</p>
          </div>

          <div className="stat-card">
            <h2>48</h2>
            <p>Shortlisted</p>
          </div>

          <div className="stat-card">
            <h2>16</h2>
            <p>AI Recommended</p>
          </div>

        </div>

        {/* MAIN CONTENT */}

        <div className="content">

          <div className="left">

            <CandidateForm />

            <JobForm />

          </div>

          <div className="right">

            <CandidateList />

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;