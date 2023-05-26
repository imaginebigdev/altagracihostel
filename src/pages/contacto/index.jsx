/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ContactForm from "../../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
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
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps" style={{ height: "60vh" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6792.392001731305!2d-64.429763!3d-31.655857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d50cd3e1844bd%3A0x9e95dc3a7b8907b9!2sAlta%20Gracia%20Hostel!5e0!3m2!1ses!2sar!4v1684768409503!5m2!1ses!2sar"
            loading="lazy"
          ></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export default Contact;
