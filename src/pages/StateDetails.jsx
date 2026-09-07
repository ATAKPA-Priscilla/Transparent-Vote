import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/StateDetails.css";

function StateDetails() {
    const { stateName } = useParams();
    const navigate = useNavigate();

    const [stateData, setStateData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStateResults = async () => {
            try {
                const response = await fetch(
                    `https://transparent-vote-backend.onrender.com/api/results/${stateName}`
                );
                const data = await response.json();

                if (!response.ok) {
                    setError(data.error || "Failed to load state results");
                    return;
                }

                setStateData(data);
            } catch (err) {
                setError("Unable to connect to the server");
            } finally {
                setLoading(false);
            }
        };

        fetchStateResults();
    }, [stateName]);

    if (loading) {
        return <div className="state-details-container">Loading...</div>;
    }

    if (error || !stateData) {
        return (
            <div className="state-details-container">
                <h2>{error || "State not found"}</h2>
                <button className="btn-secondary" onClick={() => navigate("/results")}>
                    Back to Results
                </button>
            </div>
        );
    }

    return (
        <div className="state-details-container">
            <h1>{stateData.state} Results</h1>

            <div className="summary-box">
                <p>
                    <strong>Total Votes:</strong> {stateData.totalVotes}
                </p>
                <p>
                    <strong>Winning Party:</strong>{" "}
                    {stateData.parties[0]?.party || "None"}
                </p>
            </div>

            <h2>Votes per Party</h2>


            {(() => {
                const allParties = {
                    APC: 0,
                    PDP: 0,
                    LP: 0,
                    NNPP: 0
                };

                stateData.parties.forEach((item) => {
                    allParties[item.party] = Number(item.votes);
                });

                return (
                    <div className="party-list">
                        {Object.entries(allParties).map(([party, votes]) => {
                            const percentage =
                                stateData.totalVotes === 0
                                    ? 0
                                    : Math.round((votes / stateData.totalVotes) * 100);

                            return (
                                <div key={party} className="party-item">
                                    <div className="party-info">
                                        <span className="party-name">{party}</span>
                                        <span>
                                            {votes} votes ({percentage}%)
                                        </span>
                                    </div>
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
                );
            })()}

            <button className="btn-secondary" onClick={() => navigate("/results")}>
                Back to All Results
            </button>
        </div>
    );
}

export default StateDetails;