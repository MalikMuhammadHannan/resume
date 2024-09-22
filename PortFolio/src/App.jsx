import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Projectzs from "./Pages/Projectzs";
import { Route, Routes } from "react-router-dom";
import Wet from "./weather/Wet";
// import todo from "./Todo/Todo"
import Todo from "./Todo/Todo";
const App = () => {
  return (
    <>
    {/* <Todo/> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contacts" Component={Contacts} />
        <Route path="/about" Component={About} />
        <Route path="/projects" Component={Projectzs} />
        <Route path="/weather" Component={Wet} />
        
      </Routes>

    </>
  );
};

export default App;
