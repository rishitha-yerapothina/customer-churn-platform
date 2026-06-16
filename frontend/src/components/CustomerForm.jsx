import { useState } from "react";

function CustomerForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    gender: "Female",
    SeniorCitizen: 0,
    Partner: "Yes",
    Dependents: "No",
    tenure: 1,
    PhoneService: "No",
    MultipleLines: "No phone service",
    InternetService: "DSL",
    OnlineSecurity: "No",
    OnlineBackup: "Yes",
    DeviceProtection: "No",
    TechSupport: "No",
    StreamingTV: "No",
    StreamingMovies: "No",
    Contract: "Month-to-month",
    PaperlessBilling: "Yes",
    PaymentMethod: "Electronic check",
    MonthlyCharges: 29.85,
    TotalCharges: 29.85,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict({
      ...formData,
      SeniorCitizen: Number(formData.SeniorCitizen),
      tenure: Number(formData.tenure),
      MonthlyCharges: Number(formData.MonthlyCharges),
      TotalCharges: Number(formData.TotalCharges),
    });
  };

  return (
    <div className="card">
      <h2>Customer Profile</h2>

      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          Gender
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option>Female</option>
            <option>Male</option>
          </select>
        </label>

        <label>
          Tenure
          <input name="tenure" value={formData.tenure} onChange={handleChange} />
        </label>

        <label>
          Contract
          <select name="Contract" value={formData.Contract} onChange={handleChange}>
            <option>Month-to-month</option>
            <option>One year</option>
            <option>Two year</option>
          </select>
        </label>

        <label>
          Payment Method
          <select name="PaymentMethod" value={formData.PaymentMethod} onChange={handleChange}>
            <option>Electronic check</option>
            <option>Mailed check</option>
            <option>Bank transfer (automatic)</option>
            <option>Credit card (automatic)</option>
          </select>
        </label>

        <label>
          Monthly Charges
          <input name="MonthlyCharges" value={formData.MonthlyCharges} onChange={handleChange} />
        </label>

        <label>
          Total Charges
          <input name="TotalCharges" value={formData.TotalCharges} onChange={handleChange} />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Predicting..." : "Predict Churn"}
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;