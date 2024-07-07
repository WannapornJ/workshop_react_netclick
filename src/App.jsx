import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const [myList, setMyList] = useState({
    like: [],
    list: [],
  });
  console.log("myList", myList);
  return (
    <div>
      <Navbar />
      <div className="w-[75%] mx-auto mt-8">
        <Outlet context={[myList, setMyList]}></Outlet>
      </div>
    </div>
  );
}

export default App;
