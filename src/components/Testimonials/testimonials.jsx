import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Parallax } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination, Parallax]);

const Testimonials = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, [load]);
  const paginationRef = React.useRef(null);
  return (
    <section className="app-testim section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> CLIENTES FELICES
                <span className="right"></span>
              </h6>
              <p>
                El hostel ha recibido a personas de todo el mundo, su inmediatez
                con todo el conurbano de la ciudad, su trayectoria institucional
                y su fácil acceso hace que sea la casa de muchos grupos,
                contingentes, equipos, turistas y viajantes internacionales.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper-container">
              {load ? (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  speed={1000}
                  loop={true}
                  pagination={{
                    clickable: true,
                    el: paginationRef.current,
                  }}
                  className="swiper-wrapper"
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 2,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/img/mobile-app/qoute.png" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          Super bien atendido por Barbara, brinda toda la ayuda
                          y esta al servicio del huésped en todo momento
                        </p>
                      </div>
                      <div className="info">
                        <div className="cont">
                          <h6 className="mb-10">Matias N.</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/img/mobile-app/qoute.png" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          Todo limpio y ordenado. Excelente disposición para
                          ofrecer ayuda sobre el lugar y lugares de
                          esparcimiento
                        </p>
                      </div>
                      <div className="info">
                        <div className="cont">
                          <h6 className="mb-10">Ana M.</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="item">
                      <div className="icon mb-50">
                        <img src="/img/mobile-app/qoute.png" alt="" />
                      </div>
                      <div className="text">
                        <p>
                          Hermoso lugar súper recomendable, muy buena ubicación,
                          súper limpio,te hacen sentir como en casa 🤗
                        </p>
                      </div>
                      <div className="info">
                        <div className="cont">
                          <h6 className="mb-10"> Javier</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                ""
              )}
              <div ref={paginationRef} className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
