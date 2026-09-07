import { useState } from "react";
import { useNavigate } from "react-router-dom";
import parties from "../data/parties";
import states from "../data/states";
import "../styles/Vote.css";

function Vote() {
    const navigate = useNavigate();
    const [selectedState, setSelectedState] = useState(null);
    const [selectedParty, setSelectedParty] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [voterCard, setVoterCard] = useState("");
    const [error, setError] = useState("");

    const handleVote = async () => {

        if (!selectedState) {
            setError("Please select your state");
            return;
        }

        if (!voterCard.trim()) {
            setError("Please enter your Voter Card Number");
            return;
        }


        try {
            const response = await fetch("https://transparent-vote-backend.onrender.com/api/vote", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    state: selectedState,
                    party: selectedParty.abbreviation,
                    voterCard: voterCard.trim(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Something went wrong");
                return;
            }

            // Success
            navigate("/success");
        } catch (err) {
            console.error(err);
            setError("Unable to connect to the server. Make sure the backend is running.");
        }
    };
    return (
        <div className="vote-container">
            <h1>Cast Your Vote</h1>
            <p>Select your preferred party</p>

            <div className="parties-grid">
                {parties.map((party) => (
                    <div key={party.id} className="party-card">
                        <h3>{party.abbreviation}</h3>
                        <p>{party.name}</p>
                        <p><strong>{party.candidate}</strong></p>
                        <button
                            className="btn-primary"
                            onClick={() => {
                                setSelectedParty(party);
                                setShowConfirm(true);
                                setError("");
                            }}
                        >
                            Vote
                        </button>
                    </div>
                ))}
            </div>
            {showConfirm && selectedParty && (
                <div className="modal" >
                    <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
                        <h2>Confirm Your Vote</h2>
                        <p>You selected: <strong>{selectedParty.abbreviation} – {selectedParty.candidate}</strong></p>

                        <label>
                            Voter Card Number:
                            <label>
                                Select Your State:
                                <br></br>
                                <select
                                    value={selectedState}
                                    onChange={(e) => setSelectedState(e.target.value)}
                                >
                                    <option value="">-- Choose a state --</option>
                                    {states.map((state) => (
                                        <option key={state.id} value={state.name}>
                                            {state.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <input
                                type="text"
                                value={voterCard}
                                onChange={(e) => setVoterCard(e.target.value)}
                                placeholder="Enter your voter card number"
                            />
                        </label>

                        {error && <p className="error">{error}</p>}

                        <div className="confirm-buttons">
                            <button className="btn-secondary" onClick={() => setShowConfirm(false)}>
                                Cancel
                            </button>
                            <button className="btn-primary" onClick={handleVote}>
                                Submit Vote
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Vote;