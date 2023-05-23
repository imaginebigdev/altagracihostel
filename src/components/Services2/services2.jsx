import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Alta Gracia Hostel
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="step-item xtop">
              <span className="icon fa fa-wifi"></span>
              <h6>CONEXIÓN WIFI</h6>
              <p>
                Internet las 24Hs . Wifi de banda ancha disponible en toda tu
                estadía. Te esperamos en Alta Gracia Hostel.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div className="step-item xcolor">
              <span className="icon fa fa-bed"></span>
              <h6>HABITACIONES</h6>
              <p>
                Contamos con habitaciónes dobles, triples, individuales. Y
                habitaciones “dormi” de estadia compartida. Todas tienen baño
                privado.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div className="step-item xbottom">
              <span className="icon fa fa-fire"></span>
              <h6>ASADOR</h6>
              <p>
                El hostel cuenta con un amplio jardín con asador, muy cómodo
                para que tu estadía sea un experiencia cómoda y agradable con
                amigos.
              </p>
            </div>
          </div>
        </div>
        <div className="smore">
          <Link href="/servicios">
            <a>Ver todos los servicio</a>
          </Link>
          <i className="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div className="line top left"></div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services2;
