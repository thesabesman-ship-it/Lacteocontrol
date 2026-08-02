function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>📊 Dashboard</h1>

      <h2>Bienvenido a LácteoControl</h2>

      <p>
        Aquí podrás controlar toda la información de tu empresa láctea.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#1f1f1f",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
          }}
        >
          <h3>🐄 Leche comprada</h3>
          <h2>0 Litros</h2>
        </div>

        <div
          style={{
            background: "#1f1f1f",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
          }}
        >
          <h3>🧀 Producción</h3>
          <h2>0 Kg</h2>
        </div>

        <div
          style={{
            background: "#1f1f1f",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
          }}
        >
          <h3>💰 Ganancias</h3>
          <h2>$0</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;