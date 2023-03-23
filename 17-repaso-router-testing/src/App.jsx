import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button onClick={() => navigate(-1)}>Back</button>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
