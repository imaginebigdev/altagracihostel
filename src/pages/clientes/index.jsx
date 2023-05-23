import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import LightTheme from "../../layouts/Light";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import Services8 from "../../components/Services8/services8";
import AboutUs2 from "../../components/About-us2/about-us2";
import PageHeader from "../../components/Page-header/page-header";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import Works4 from "../../components/Works4/works4";
import WorksStyle2 from "../../components/Works-style2/works-style2";

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
      <PageHeader title="Nuestros clientes" paragraph="" />
      <WorksStyle2 grid={3} filterPosition="left" hideFilter />
      <Footer />
    </LightTheme>
  );
};

export default About;
