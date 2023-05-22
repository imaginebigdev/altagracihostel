import React from "react";
import Navbar from "../../components/Navbar/navbar";
import info from "../../data/minimal-services.json";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import LightTheme from "../../layouts/Light";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import Services8 from "../../components/Services8/services8";
import AboutUs2 from "../../components/About-us2/about-us2";

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
      <PagesHeader />
      <AboutIntro />
      <MinimalArea info={info} />
      <AboutUs2 />
      <Services8 />
      <Footer />
    </LightTheme>
  );
};

export default About;
