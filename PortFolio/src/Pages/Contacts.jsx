import React,{useEffect} from "react";
import Header from "../Home/Header/Head/Header";

import ContactUs from "../Contact/ContactUs";
import Services from "../Home/Header/Service/P_services";


const Contacts = () => {
  useEffect(()=>{
    document.title="Contact"
  })
  return (
    <>
      <Header />
      <ContactUs />
      <Services />
    </>
  );
};

export default Contacts;
