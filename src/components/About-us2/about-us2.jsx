/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs2Date from "../../data/sections/about-us2.json";

const AboutUs2 = () => {
  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img-mons sm-mb30">
              <div className="row">
                <div className="col-md-5 cmd-padding valign">
                  <div className="img1 wow imago" data-wow-delay=".5s">
                    <img src={AboutUs2Date.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 cmd-padding">
                  <div className="img2 wow imago" data-wow-delay=".3s">
                    <img src={AboutUs2Date.image2} alt="" />
                  </div>
                  <div className="img3 wow imago" data-wow-delay=".8s">
                    <img src={AboutUs2Date.image3} alt="" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6"></div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="content">
              <h3
                className="words chars splitting main-title wow color-font"
                data-splitting
              >
                {AboutUs2Date.title}
              </h3>

              <p className="words chars splitting wow txt" data-splitting>
                {AboutUs2Date.content}
              </p>
              <br />
              <p className="words chars splitting wow txt" data-splitting>
                {AboutUs2Date.content2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
