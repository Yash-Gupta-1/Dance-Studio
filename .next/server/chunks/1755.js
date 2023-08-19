"use strict";
exports.id = 1755;
exports.ids = [1755];
exports.modules = {

/***/ 1755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _components_Intro2_intro2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1375);
/* harmony import */ var _components_Services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7509);
/* harmony import */ var _components_Video2_video2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4974);
/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2786);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5914);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9516);
/* harmony import */ var _components_Portfolio_portfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1480);
/* harmony import */ var _components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7492);
/* harmony import */ var _components_Team2_team2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4899);
/* harmony import */ var _components_blogs_Blogs2_blogs2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8858);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















const Homepage2 = () => {
  const navbarRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  const logoRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_Intro2_intro2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_Services_services__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      style: "4item"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage2);

/***/ })

};
;