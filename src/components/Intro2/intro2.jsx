/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Big Think Dance Studio</h6>
              </div>
              <h1 className="mb-10 fw-600">Unique Forms of Dance</h1>
              <p>
                We help our students succeed by teaching them new dance forms,
                different styles, and many more....
              </p>
              <Link href={`/about/about-dark`}>
                <a className="butn bord curve mt-30">
                  <span>About Us</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img
                src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2;
