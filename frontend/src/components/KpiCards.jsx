function KpiCards() {
  const cards = [
    { title: "Model Accuracy", value: "81.6%" },
    { title: "Total Customers", value: "7,043" },
    { title: "Churn Cases", value: "1,869" },
    { title: "Retention Rate", value: "73.5%" },
  ];

  return (
    <div className="kpi-grid">
      {cards.map((card) => (
        <div className="kpi-card" key={card.title}>
          <p>{card.title}</p>
          <h3>{card.value}</h3>
        </div>
      ))}
    </div>
  );
}

export default KpiCards;