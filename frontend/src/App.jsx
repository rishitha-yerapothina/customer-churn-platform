import { useState } from "react";
import CustomerForm from "./components/CustomerForm";
import ResultCard from "./components/ResultCard";
import KpiCards from "./components/KpiCards";
import ChurnCharts from "./components/ChurnCharts";
import { predictChurn } from "./services/api";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async (formData) => {
    try {
      setLoading(true);
      const data = await predictChurn(formData);
      setResult(data);
    } catch (error) {
      alert("Prediction failed. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <section className="hero">
        <h1>Customer Churn Prediction Platform</h1>
        <p>Predict churn risk and view customer retention insights.</p>
      </section>

      <section className="analytics-section">
        <KpiCards />
      </section>

      <main className="dashboard">
        <CustomerForm onPredict={handlePredict} loading={loading} />
        <ResultCard result={result} />
      </main>

      <section className="analytics-section">
        <h2>Customer Analytics</h2>
        <ChurnCharts />
      </section>
    </div>
  );
}

export default App;