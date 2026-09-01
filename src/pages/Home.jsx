import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import states from "../data/states";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const [totalVotes, setTotalVotes] = useState(0);
  const [leadingParty, setLeadingParty] = useState("None");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/results");
        const data = await response.json();
        console.log("Fetched results:", data);
        if (response.ok) {
          setTotalVotes(data.totalVotes);

          // Find the leading party
          if (data.parties && data.parties.length > 0) {
            setLeadingParty(data.parties[0].party);
          } else {
            setLeadingParty("None");
          }
        }
      } catch (error) {
        console.error("Failed to fetch results:", error);
      }
    };

    fetchResults();
  }, []);
  return (
    <div className="home-container">
      <h1 className="home-title">TransparentVote</h1>
      <p className="home-subtitle">2026 Presidential Election</p>
      <p>Your vote is secure, anonymous, and counts in real time.</p>

      <div className="stats-card">
        <h3>Total Votes Cast: {totalVotes}</h3>
        <h3>Leading Party: {leadingParty}</h3>
      </div>

      <div className="button-group">
        <button className="btn-primary" onClick={() => navigate("/vote")}>
          Vote Now
        </button>
        <button className="btn-secondary" onClick={() => navigate("/results")}>
          View Live Results
        </button>
      </div>

      <div className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <strong>1.</strong> Enter your Voter Card Number
          </div>
          <div className="step">
            <strong>2.</strong> Choose your preferred party
          </div>
          <div className="step">
            <strong>3.</strong> Confirm and submit your vote
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;