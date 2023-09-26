import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./components/Verify/Verify";
import Dashboard from "./components/Dashboard/Dashboard";
import IdVerify from "./components/IdVerify/IdVerify";
import Email from "./components/Dashboard/Email";
import Code from "./components/Home/Code/Code";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/IdVerify" element={<IdVerify />} />
          <Route path="/code" element={<Code />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/id" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
