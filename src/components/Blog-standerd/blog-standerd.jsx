/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";

const BlogStanderd = ({ blogs, currentPage, nextHandler, prevHandler }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                    <a>
                      <img src={blogItem.image} alt="" />
                    </a>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <a className="date">
                          <span className="num">{blogItem.date.day} </span>{" "}
                          <span>{blogItem.date.month} </span>{" "}
                          <span className="num">{blogItem.date.year} </span>
                        </a>

                        <h4 className="title">{blogItem.title}</h4>
                        <p>{blogItem.content}</p>
                        <a
                          className="butn bord curve mt-30"
                          href={blogItem.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Leer más
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pagination">
                <span onClick={prevHandler} style={{ cursor: "pointer" }}>
                  <a>
                    <i className="fas fa-angle-left"></i>
                  </a>
                </span>
                <span className="active">
                  <a>{currentPage + 1}</a>
                </span>
                <span onClick={nextHandler} style={{ cursor: "pointer" }}>
                  <a>
                    <i className="fas fa-angle-right"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
