import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { v4 as uuid_v4 } from "uuid";


const Gallery = ({ info }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section
      className="min-area sub-bg gallery"
      style={{ background: info.id % 2 === 0 ? "#f4be28" : "white" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {info?.img.map((item) => (
                <SwiperSlide key={uuid_v4()}>
                  <img src={item} />
                </SwiperSlide>
              ))}
                
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="gallery-thumbs"
            >
              {info?.img.map((item) => (
                  <SwiperSlide key={uuid_v4()}>
                    <img src={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">{info?.tittle}</h4>
              <p className="wow txt" data-splitting>
                {info?.content}
              </p>
              <br />
              <p className="wow txt" data-splitting>
                {info?.small}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
