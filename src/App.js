import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Comics from "./Pages/Comics";
import SignUp from "./Pages/Signup";
import LogIn from "./Pages/LogIn";
import Personnages from "./Pages/Personnages";
import { useState } from "react";

function App() {
  const [searchBar, setSearchBar] = useState("");
  return (
    <Router>
      <Header setSearchBar={setSearchBar}></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/comics"
          element={<Comics searchBar={searchBar}></Comics>}
        ></Route>
        <Route
          path="/characters"
          element={<Personnages searchBar={searchBar}></Personnages>}
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
