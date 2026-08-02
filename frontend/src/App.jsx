import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;