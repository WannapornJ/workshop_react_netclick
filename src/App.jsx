import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
