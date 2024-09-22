import React,{useEffect} from "react";
import Header from "../Home/Header/Head/Header";
import Info from "../Home/Header/info/Info";
import Project from "../Home/Header/Project/Project";
import P_services from "../Home/Header/Service/P_services";
import ContactUs from "../Contact/ContactUs";

const Home = () => {
  useEffect(()=>{
    document.title="Home"
  })
  return (
    <div>
      <Header />
      <Info />
      <Project />
      <ContactUs />
      <P_services />

    </div>
  );
};

export default Home;
