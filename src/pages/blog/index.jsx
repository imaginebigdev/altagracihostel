import React from "react";
import blog1Data from "../../data/blog1.json";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar";
import BlogStanderd from "../../components/Blog-standerd/blog-standerd";
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
  /* ====================== [ Start paginated  ] ====================== */
  const itemPerPage = 5;
  const [blogsArray, setBlogsArray] = React.useState(blog1Data);
  const [items, setItems] = React.useState(
    [...blog1Data].splice(0, itemPerPage)
  );
  const [currentPage, setCurrentPage] = React.useState(0);

  const nextHandler = () => {
    const totalItems = blogsArray.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemPerPage;
    if (firstIndex >= totalItems) return;
    setItems([...blogsArray].splice(firstIndex, itemPerPage));
    setCurrentPage(nextPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * itemPerPage;
    setItems([...blogsArray].splice(firstIndex, itemPerPage));
    setCurrentPage(prevPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  /* ====================== [ End paginated  ] ====================== */
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        title="Nuestro blog"
        paragraph="Las noticias mas recientes sobre alta gracia"
      />
      <BlogStanderd
        blogs={blog1Data}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        currentPage={currentPage}
      />
      <Footer />
    </LightTheme>
  );
};

export default BlogLight;