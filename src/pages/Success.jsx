import { useNavigate } from "react-router-dom";
import "../styles/Success.css";

function Success() {
    const navigate = useNavigate();

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Thank You!</h1>
                <p>Your vote has been recorded successfully.</p>
                <p>Your vote is anonymous and secure.</p>

                <div className="success-buttons">
                    <button
                        className="btn-primary"
                        onClick={() => navigate("/results")}
                    >
                        View Live Results
                    </button>

                    <button
                        className="btn-secondary"
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Success;