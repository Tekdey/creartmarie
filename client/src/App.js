import "./_reset.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
