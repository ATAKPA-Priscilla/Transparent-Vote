import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import states from "../data/states";
import "../styles/Result.css";

function Result() {
    const navigate = useNavigate();
    const [nationalData, setNationalData] = useState({
        totalVotes: 0,
        parties: []
    });
    const [stateResults, setStateResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // National results
                const nationalRes = await fetch("https://transparent-vote-backend.onrender.com");
                const national = await nationalRes.json();

                // All states results
                const statesRes = await fetch("https://transparent-vote-backend.onrender.com/states");
                const statesData = await statesRes.json();

                if (nationalRes.ok) {
                    setNationalData(national);
                }

                if (statesRes.ok) {
                    setStateResults(statesData);
                }
            } catch (error) {
                console.error("Failed to fetch results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getStateLeadingParty = (state) => {
        let leading = "None";
        let highest = 0;

        for (const party in state.votes) {
            if (state.votes[party] > highest) {
                highest = state.votes[party];
                leading = party;
            }
        }
        return leading;
    };

    const getGroupedStates = () => {
        const grouped = {};

        states.forEach((state) => {
            grouped[state.name] = {
                name: state.name,
                votes: {
                    APC: 0,
                    PDP: 0,
                    LP: 0,
                    NNPP: 0
                }
            };
        });

        stateResults.forEach((item) => {
            if (grouped[item.state]) {
                grouped[item.state].votes[item.party] = Number(item.votes);
            }
        });

        return Object.values(grouped);
    };
    if (loading) {
        return <div className="results-container">Loading results...</div>;
    }
    return (
        <div className="results-container">
            <button className="home-btn">Home</button>
            <h1>Live Election Results</h1>

            <div className="national-summary">
                <h2>National Summary</h2>
                <p><strong>Total Votes:</strong> {nationalData.totalVotes}</p>
                <p><strong>Leading Party:</strong> {nationalData.parties[0]?.party || "None"}</p>

                <div style={{ marginTop: "16px" }}>
                    {nationalData.parties.map((item) => (
                        <p key={item.party}>
                            {item.party}: {item.votes}
                        </p>
                    ))}
                </div>
            </div>

            <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>Results by State</h2>

            <div className="states-grid">
                {getGroupedStates().map((state) => {

                    const stateTotal = Object.values(state.votes).reduce(
                        (sum, votes) => sum + votes,
                        0
                    );


                    return (
                        <div
                            key={state.name}
                            className="state-card"
                            onClick={() => navigate(`/results/${state.name}`)}
                        >
                            <h3>{state.name}</h3>
                            <p>
                                Leading: <strong>{getStateLeadingParty(state)}</strong>
                            </p>


                            <div className="party-votes">
                                {Object.entries(state.votes).map(([party, votes]) => {

                                    const percentage =
                                        stateTotal === 0 ? 0 : Math.round((votes / stateTotal) * 100);

                                    return (
                                        <div key={party} className="party-row">
                                            <span>
                                                {party}: {votes} ({percentage}%)
                                            </span>


                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Result;