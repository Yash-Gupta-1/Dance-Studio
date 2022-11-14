/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Overview
              </h6>
              <h3 className="wow color-font">
                Our Big Think Dance Studio &amp; <br /> Take a Look.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
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
              <span data-filter=".brand">1</span>
              <span data-filter=".web">2</span>
              <span data-filter=".graphic">3</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/22.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Creativity Demand</h6>
                {/* <span>
                  <Link href="/works/works-dark">Design</Link>,{" "}
                  <Link href="/works/works-dark">WordPress</Link>
                </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/33.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Through The Breaking</h6>
                {/* <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/44.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Create With Creatives</h6>
                {/* <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/55.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Energies of Love</h6>
                {/* <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/66.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>See It Yourself</h6>
                {/* <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span> */}
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/portfolio/portfolio/1/77.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
                {/* <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
