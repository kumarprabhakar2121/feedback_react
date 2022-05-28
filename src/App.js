import "./App.css";
import "./style/c.css";
import SignupAndLogin from "./Pages/SignupAndLogin";
import HomePage from "./Pages/HomePage";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";
import ListAllUsers from "./Pages/ListAllUsers"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupAndLogin />} />
        <Route exact path="/login" element={<SignupAndLogin />} />
        <Route exact path="/list-users" element={<ListAllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
