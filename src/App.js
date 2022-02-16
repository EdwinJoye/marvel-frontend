import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Comics from "./Pages/Comics";
import SignUp from "./Pages/Signup";
import LogIn from "./Pages/LogIn";
import Personnages from "./Pages/Personnages";

function App() {
  const [searchBar, setSearchBar] = useState("");

  return (
    <Router>
      <Header setSearchBar={setSearchBar}></Header>
      <Routes>
        <Route path="/" element={<Home searchBar={searchBar}></Home>}></Route>
        <Route
          path="/comics"
          element={<Comics searchBar={searchBar}></Comics>}
        ></Route>
        <Route path="/characters" element={<Personnages></Personnages>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
