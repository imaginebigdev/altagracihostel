import React from 'react';
import data from "../../data/clients.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { v4 as uuid_v4 } from "uuid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


function Modal({ shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // cierra el modal si se hace click por fuera del modal
        close();
      }}
    >
      <div
        className="modal-content container"
        onClick={e => {
          // no cierra el modal si se hace click en el interior
          e.stopPropagation();
        }}
      >
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="container">
          <Swiper
            style={{
              "--swiper-navigation-color": "#de7218",
              "--swiper-pagination-color": "#de7218",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="modal-swipper"
          >
            {data?.map((item) => (
              <SwiperSlide key={uuid_v4()}>
                <img src={item.img} />
              </SwiperSlide>
            ))}
              
          </Swiper>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;