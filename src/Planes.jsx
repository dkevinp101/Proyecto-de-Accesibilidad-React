

function Planes() {
  const plans = [
    {
      title: "Plan Básico",
      description: "Acceso ilimitado a máquinas de cardio y fuerza.",
      prices: ["Mensual: $30 USD", "Trimestral: $80 USD", "Anual: $300 USD"],
    },
    {
      title: "Plan Plus",
      description: "Acceso ilimitado + 4 sesiones personalizadas.",
      prices: ["Mensual: $45 USD", "Trimestral: $120 USD", "Anual: $400 USD"],
    },
    {
      title: "Plan VIP",
      description: "Acceso completo + asesorías personalizadas + eventos.",
      prices: ["Mensual: $80 USD", "Trimestral: $210 USD", "Anual: $700 USD"],
    },
  ];

  return (
    <div className="container">
      <h2 style={{ color: "var(--color-primary)" }}>Nuestros Planes</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {plans.map((plan, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{plan.title}</h3>
            <p className="card-text">{plan.description}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {plan.prices.map((price, idx) => (
                <li key={idx} style={{ color: "var(--color-primary)" }}>
                  {price}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Planes;
