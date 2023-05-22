import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const BlogLight = () => {
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
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        title="Our News."
        paragraph="All the most current news and events of our creative team."
      />
      <div className="map" id="ieatmaps">
        <iframe
          src="https://guia360.com.ar/files/galerias/568altagraciahostel/"
          allow="fullscreen"
        ></iframe>
      </div>
      <Footer />
    </LightTheme>
  );
};

export default BlogLight;
