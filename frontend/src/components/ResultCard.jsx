function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="card result-card empty">
        <h2>Prediction Result</h2>
        <p>Submit a customer profile to see churn risk.</p>
      </div>
    );
  }

  const progressWidth = `${result.churn_probability}%`;

  const riskClass =
    result.risk_level === "High"
      ? "risk-high"
      : result.risk_level === "Medium"
      ? "risk-medium"
      : "risk-low";

  return (
    <div className="card result-card">
      <h2>Prediction Result</h2>

      <div className={`risk-badge ${riskClass}`}>
        {result.risk_level} Risk
      </div>

      <h3>{result.prediction}</h3>

      <div className="progress-container">
        <div
          className={`progress-fill ${riskClass}`}
          style={{ width: progressWidth }}
        ></div>
      </div>

      <p className="probability">
        {result.churn_probability}%
      </p>

      <p>Churn Probability</p>
      <div className="metric-grid">
  <div>
    <span>Risk Score</span>
    <strong>{result.churn_probability}</strong>
  </div>

  <div>
    <span>Retention Chance</span>
    <strong>{(100 - result.churn_probability).toFixed(2)}%</strong>
  </div>

  <div>
    <span>Priority</span>
    <strong>{result.risk_level}</strong>
  </div>
</div>
<div className="suggestion">
  <h4>Key Risk Factors</h4>

  <ul>
    <li>Month-to-month contract</li>
    <li>Low customer tenure</li>
    <li>Electronic check payment</li>
  </ul>
</div>

      <div className="suggestion">
        <h4>Recommended Actions</h4>

        {result.risk_level === "High" && (
          <ul>
            <li>Offer retention discount</li>
            <li>Assign customer success representative</li>
            <li>Provide priority support</li>
            <li>Schedule follow-up call</li>
          </ul>
        )}

        {result.risk_level === "Medium" && (
          <ul>
            <li>Send engagement campaign</li>
            <li>Recommend suitable plans</li>
            <li>Monitor usage behavior</li>
          </ul>
        )}

        {result.risk_level === "Low" && (
          <ul>
            <li>Maintain current engagement</li>
            <li>Offer loyalty rewards</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default ResultCard;