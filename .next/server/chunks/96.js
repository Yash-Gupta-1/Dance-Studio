"use strict";
exports.id = 96;
exports.ids = [96];
exports.modules = {

/***/ 434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable @next/next/no-img-element */









const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "block-sec",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "background bg-img pt-100 pb-0 parallaxie",
      style: {
        backgroundImage: `url(https://images.unsplash.com/photo-1523354177913-be035fcee55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`
      },
      "data-overlay-dark": "5",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "vid-area",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "text",
                children: "Watch Video"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "vid-icon",
                children: [ false && /*#__PURE__*/0, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  className: "vid",
                  onClick: e => {
                    e.preventDefault();
                    setOpen(true);
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "vid-butn",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                      className: "icon",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                        className: "fas fa-play"
                      })
                    })
                  })
                })]
              })]
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoWithTestimonials);

/***/ }),

/***/ 8004:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"lightImage":"/img/clients/brands/light/01.png","darkImage":"/img/clients/brands/dark/01.png","url":"www.Vie.com"},{"id":2,"lightImage":"/img/clients/brands/light/02.png","darkImage":"/img/clients/brands/dark/02.png","url":"www.Vie.com"},{"id":3,"lightImage":"/img/clients/brands/light/03.png","darkImage":"/img/clients/brands/dark/03.png","url":"www.Vie.com"},{"id":4,"lightImage":"/img/clients/brands/light/04.png","darkImage":"/img/clients/brands/dark/04.png","url":"www.Vie.com"},{"id":5,"lightImage":"/img/clients/brands/light/05.png","darkImage":"/img/clients/brands/dark/05.png","url":"www.Vie.com"},{"id":6,"lightImage":"/img/clients/brands/light/06.png","darkImage":"/img/clients/brands/dark/06.png","url":"www.Vie.com"},{"id":7,"lightImage":"/img/clients/brands/light/07.png","darkImage":"/img/clients/brands/dark/07.png","url":"www.Vie.com"},{"id":8,"lightImage":"/img/clients/brands/light/08.png","darkImage":"/img/clients/brands/dark/08.png","url":"www.Vie.com"}]');

/***/ })

};
;