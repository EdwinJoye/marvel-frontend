import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Comics from "./Pages/Comics";
import Signup from "./Pages/Signup";
import LogIn from "./Pages/LogIn";
import Personnages from "./Pages/Personnages";
import ComicList from "./Pages/ComicList";
import { useState } from "react";
import Footer from "./components/Footer";

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
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
        <Route
          path="/character/:id"
          element={<ComicList searchBar={searchBar}></ComicList>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
