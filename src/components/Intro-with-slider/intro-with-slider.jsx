import React from "react";
import Link from "next/link";
import introData from "../../data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="video-background">
                  <video
                    src="/video/altagracia.mp4"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                  ></video>
                </div>
                <div className="bg-img valign" data-overlay-dark="6">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30">
                          <a className="logo mb-30">
                            <img
                              src="/img/logo.png"
                              alt="logo"
                              style={{ width: "150px" }}
                            />
                          </a>
                          <h1 style={{ fontSize: "50px" }}>{slide.title}</h1>
                          {slide?.content && <p>{slide.content}</p>}
                          <Link href="/contacto">
                            <a
                              className="butn bord curve mt-30"
                              style={{ cursor: "pointer" }}
                            >
                              <span>haz tu Reserva</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </header>
  );
};

export default IntroWithSlider;
