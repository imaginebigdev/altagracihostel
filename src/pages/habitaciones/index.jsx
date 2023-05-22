import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import Intro5 from "../../components/Intro5/intro5";
import Works from "../../components/Works/works";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import habitaciones from "../../data/habitaciones/habitacion.json";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro5 />
      {habitaciones?.map((item) => (
        <MinimalArea info={item} />
      ))}
      <Works />
      <Footer />
    </LightTheme>
  );
};

export default About;
