/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>System Details</h6>
              </div>
              <h1 className="mb-10 fw-600">System solutions in your hands.</h1>
              <p>
                Ip fetch is a universal app that helps you setup your apps in a
                beautiful and effective way to get more downloads across
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <center>
              <div className="img">
                <img
                  style={{ width: 200 }}
                  src={
                    "http://clipground.com/images/map-location-clipart-12.png"
                  }
                  alt="banner"
                />
              </div>
            </center>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2;
