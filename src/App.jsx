import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-[75%] mx-auto mt-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
