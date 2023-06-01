/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";
import data from "../../data/clients.json";
import Modal from "./modal";


const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  const [modalShown, toggleModal] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <Modal
        shown={modalShown}
        className="modal fade"
        close={() => {
          toggleModal(false);
        }}
      >
      </Modal>
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
              </div>
            </div>
          )}

          <div className="gallery full-width">
            {data?.map((c) => (
              <div
                key={c.id}
                className={`${
                  grid === 3
                    ? "col-lg-4 col-md-6"
                    : grid === 2
                    ? "col-md-6"
                    : "col-12"
                } items graphic`}
                data-wow-delay=".4s"
              >
                <div className="item-img">
                    <img
                      src={c.img}
                      style={{
                        width: "360px",
                        height: "450px",
                        cursor: "pointer",
                      }}
                      alt="image"
                      onClick={() => {
                        toggleModal(!modalShown);
                      }}
                    />
                  
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
    </>
  );
};

export default WorksStyle2;