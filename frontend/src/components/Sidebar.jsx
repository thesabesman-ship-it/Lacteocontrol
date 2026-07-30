function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#1b1b1b",
        color: "white",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2>🥛 LácteoControl</h2>

      <hr />

      <p>📊 Dashboard</p>
      <p>🐄 Compras de leche</p>
      <p>🧀 Producción</p>
      <p>🚚 Envíos</p>
      <p>📦 Inventario</p>
      <p>💰 Ganancias</p>
      <p>📈 Reportes</p>

      <hr />

      <p>🤖 Duván IA</p>
    </div>
  );
}

export default Sidebar;