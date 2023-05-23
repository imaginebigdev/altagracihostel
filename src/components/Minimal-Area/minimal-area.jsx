/* eslint-disable @next/next/no-img-element */
import React from "react";

const MinimalArea = ({ info }) => {
  return (
    <section
      className="min-area sub-bg"
      style={{ background: info.id % 2 === 0 ? "#f4be28" : "#f8f9fc" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img className="thumparallax-down" src={info?.img} alt="" />
            </div>
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

export default MinimalArea;
