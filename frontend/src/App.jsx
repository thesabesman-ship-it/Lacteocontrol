import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1>Bienvenido a LácteoControl</h1>

        <h2>👋 Hola, Duván</h2>

        <p>
          🤖 Duván IA está listo para ayudarte a controlar tu empresa láctea.
        </p>

        <button
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default App;