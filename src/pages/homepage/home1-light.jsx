import React from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import Services from "../../components/Services/services";
import appData from "../../data/app.json";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import AboutUs6 from "../../components/About-us6/about-us6";
import TestimonialsArch from "../../components/Testimonials-arch/testimonials-arch";
import Testimonials from "../../components/Testimonials/testimonials";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Clients from "../../components/Clients/clients";
import Clients2 from "../../components/Clients2/clients2";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);
  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs6 />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Homepage1;
