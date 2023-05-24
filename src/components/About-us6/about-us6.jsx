import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section id="about" className="about-ar section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="img">
              <div
                className="bg-img hero-bg"
                style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
              ></div>
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="sub-title main-color ls10 text-u">
                Alta gracia Hostel
              </h6>
              <h4>Horarios</h4>

              <p>ChekIn: 14:00hs</p>
              <p>ChekOut: 10:00hs</p>
              <p>Te recomendamos hacer tu reserva para que tu checkin</p>
              <h4 className="mt-30">Ubicación</h4>
              <p>
                Se encuentra a 10 minutos a pie del casco histórico, Estancia
                Jesuítica y Tajamar; sitio de Patrimonio de la Humanidad de la
                Unesco.
              </p>
              <Link href={`/contacto`}>
                <a className="butn bord mt-30">
                  <span>¡Reserva ahora!</span>
                </a>
              </Link>

              <a
                className="butn bord mt-30"
                style={{ marginLeft: "20px" }}
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x942d50cd3e1844bd:0x9e95dc3a7b8907b9?source=g.page.share"
              >
                <span>Ver ubicacion en el Gmap</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
