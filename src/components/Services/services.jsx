import React, { useState, useEffect } from "react";
import featuresData from "../../data/sections/features.json";

const Services = ({ style, lines }) => {
  const [ipAddress, setIPAddress] = useState("");
  const [ip, setIP] = useState("");

  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((response) => response.json())
      .then((data) => {
        setIPAddress({});
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIP(''))
      .catch((error) => console.log(error));
  }, []);

  console.log("ip addreaa", ipAddress);
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                System Details
              </h6>
              <h3 className="wow color-font">Get surprised by IP Detail</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay={`0.5s`}>
            <div className="item-box">
              <div>
                <span className={`icon`}></span>
              </div>
              <div className="cont">
                <h6>Ip - {ipAddress?.IPV4 ? ipAddress.IPV4 : ip}</h6>
                {/* <p>{feature.content}</p> */}
              </div>
            </div>
            <div className="item-box">
              <div>
                <span className={`icon`}></span>
              </div>
              <div className="cont">
                <h6>City - {ipAddress?.city}</h6>
                {/* <p>{feature.content}</p> */}
              </div>
            </div>
            <div className="item-box">
              <div>
                <span className={`icon`}></span>
              </div>
              <div className="cont">
                <h6>Country Code - {ipAddress?.country_code}</h6>
                {/* <p>{feature.content}</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay={`0.5s`}>
            <div className="item-box">
              <div>
                <span className={`icon`}></span>
              </div>
              <div className="cont">
                <h6>Country - {ipAddress?.country_name}</h6>
                {/* <p>{feature.content}</p> */}
              </div>
            </div>
            <div className="item-box">
              <div>
                <span className={`icon`}></span>
              </div>
              <div className="cont">
                <h6>Postal - {ipAddress?.postal}</h6>
                {/* <p>{feature.content}</p> */}
              </div>
            </div>
            <div className="item-box">
              <div>
                <span className={`icon`}></span>
              </div>
              <div className="cont">
                <h6>State - {ipAddress?.state}</h6>
                {/* <p>{feature.content}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
    </section>
  );
};

export default Services;
