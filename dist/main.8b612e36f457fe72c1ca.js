/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./solution/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./solution/styles.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bitter:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background-color: var(--font-color);\r\n    transition: 2s;\r\n    font-family: 'Bitter', serif;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n.waitingForDrop {\r\n    background-color: var(--color-third);\r\n}\r\nul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    min-height: 80px;\r\n}\r\nli {\r\n    left: 0;\r\n    text-align: center;\r\n}\r\nh1 {\r\n    font-size: 80px;\r\n}\r\nh2 {\r\n    color: var(--font-color);\r\n    font-size: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.info {\r\n    box-shadow: 15px 5px 30px #000000;\r\n} /*\r\n.infoSec > * {\r\n    padding: 10px;\r\n    flex: 1 100%;\r\n}\r\n.description {\r\n    width: 100%;\r\n}\r\n.infoSec {\r\n    flex: 3 0px;\r\n}\r\n\r\n.coldInfo {\r\n    background-color: var(--color-third);\r\n    margin: 3px;\r\n} */\r\n\r\n.task {\r\n    background-color: var(--color-secondary);\r\n    height: 30px;\r\n    width: 15%;\r\n    margin: 10px;\r\n}\r\n.hide {\r\n    display: none;\r\n}\r\n.subMainSec {\r\n    background-color: var(--color-accent);\r\n    border-radius: 17px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    padding: 20px;\r\n    border: var(--color-third);\r\n    border-width: 10px;\r\n    border-style: solid;\r\n}\r\n.info {\r\n    width: 95%;\r\n    border-radius: 7px;\r\n    padding: 20px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.task {\r\n    width: 500px;\r\n    border-radius: 7px;\r\n}\r\n.mainSec {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nsection {\r\n    margin-top: 2%;\r\n}\r\n#page-title {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n#searchSec {\r\n    margin-top: 1%;\r\n    float: right;\r\n}\r\n#todoSec {\r\n    width: 31%;\r\n    float: left;\r\n}\r\n#inProgressSec {\r\n    width: 31%;\r\n    float: left;\r\n}\r\n#doneSec {\r\n    width: 31%;\r\n    float: left;\r\n}\r\n#addsection {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nspan {\r\n    width: 100%;\r\n    margin-left: 40%;\r\n    margin-right: 40%;\r\n}\r\n\r\n/* colors */\r\n\r\n.theme-purple {\r\n    --color-primary: #501b1d;\r\n    --color-secondary: #83677b;\r\n    --color-third: #64485c;\r\n    --color-accent: #2e1114;\r\n    --font-color: #adadad;\r\n}\r\n.theme-creative {\r\n    --color-primary: #d79922;\r\n    --color-secondary: #efe2ba;\r\n    --color-third: #f13c20;\r\n    --color-accent: #4056a1;\r\n    --font-color: #c5cbe3;\r\n}\r\n.theme-inviting {\r\n    --color-primary: #e7717d;\r\n    --color-secondary: #c2cad0;\r\n    --color-third: #c2b9b0;\r\n    --color-accent: #7e685a;\r\n    --font-color: #afd275;\r\n}\r\n.theme-sleek {\r\n    --color-primary: #2c3531;\r\n    --color-secondary: #116466;\r\n    --color-third: #d9b08c;\r\n    --color-accent: #ffcb9a;\r\n    --font-color: #d1e8e2;\r\n}\r\n.theme-audacious {\r\n    --color-primary: #272727;\r\n    --color-secondary: #747474;\r\n    --color-third: #ff652f;\r\n    --color-accent: #ffe400;\r\n    --font-color: #14a76c;\r\n}\r\n.theme-traditional {\r\n    --color-primary: #88bdbc;\r\n    --color-secondary: #254e58;\r\n    --color-third: #112d32;\r\n    --color-accent: #4f4a41;\r\n    --font-color: #6e6658;\r\n}\r\n.theme-love {\r\n    --color-primary: #a1c3d1;\r\n    --color-secondary: #b39bc8;\r\n    --color-third: #f0ebf4;\r\n    --color-accent: #f172a1;\r\n    --font-color: #e64398;\r\n}\r\n.theme-striking {\r\n    --color-primary: #172605;\r\n    --color-secondary: #176521;\r\n    --color-third: #53900f;\r\n    --color-accent: #a4a71e;\r\n    --font-color: #d6ce15;\r\n}\r\n/* button */\r\n\r\n.container:hover {\r\n    background-color: var(--color-primary);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.container {\r\n    outline: none;\r\n    cursor: pointer;\r\n    background: none;\r\n    transition: 0.5s;\r\n    border-radius: 5px;\r\n\r\n    border-style: solid;\r\n\r\n    transform: scale(1.1);\r\n}\r\n\r\n/* select option */\r\n.select {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    width: 250px;\r\n    height: 40px;\r\n}\r\n\r\n.option {\r\n    padding: 0 30px 0 10px;\r\n    min-height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #333;\r\n    border-top: #222 solid 1px;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    pointer-events: none;\r\n    order: 2;\r\n    z-index: 1;\r\n    transition: background 0.4s ease-in-out;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.option:hover {\r\n    background: #666;\r\n}\r\n\r\n.select:focus .option {\r\n    position: relative;\r\n    pointer-events: all;\r\n}\r\n\r\ninput:checked + label {\r\n    order: 1;\r\n    z-index: 2;\r\n    background: #666;\r\n    border-top: none;\r\n    position: relative;\r\n}\r\n\r\ninput:checked + label:after {\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid white;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: calc(50% - 2.5px);\r\n    pointer-events: none;\r\n    z-index: 3;\r\n}\r\n\r\ninput:checked + label:before {\r\n    position: absolute;\r\n    right: 0;\r\n    height: 40px;\r\n    width: 40px;\r\n    content: '';\r\n    background: #666;\r\n}\r\n/* loading spinner */\r\n@keyframes ldio-6cpvji16g73 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    50% {\r\n        transform: rotate(180deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.ldio-6cpvji16g73 div {\r\n    position: absolute;\r\n    animation: ldio-6cpvji16g73 1.1500000000000001s linear infinite;\r\n    width: 54px;\r\n    height: 54px;\r\n    top: 23px;\r\n    left: 23px;\r\n    border-radius: 50%;\r\n    box-shadow: 0 3.9000000000000004px 0 0 #e15b64;\r\n    transform-origin: 27px 28.95px;\r\n}\r\n.remove {\r\n    float: right;\r\n}\r\n.loader {\r\n    width: 98px;\r\n    height: 98px;\r\n    overflow: hidden;\r\n    background: none;\r\n}\r\n.ldio-6cpvji16g73 {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(0.98);\r\n    backface-visibility: hidden;\r\n    transform-origin: 0 0; /* see note above */\r\n}\r\n.ldio-6cpvji16g73 div {\r\n    box-sizing: content-box;\r\n}\r\n/* generated by https://loading.io/ */\r\n/* form not mine */\r\n\r\n.form {\r\n    max-width: 95%;\r\n    margin: 50px auto;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    background: var(--font-color);\r\n    border-radius: 7px;\r\n    padding: 30px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n.form h1 {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0px 0px 20px 0px;\r\n    color: #5c5c5c;\r\n    font-size: x-large;\r\n}\r\n.form ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.form li {\r\n    display: block;\r\n    padding: 9px;\r\n    border: 1px solid var(--color-secondary);\r\n    margin-bottom: 4px;\r\n    border-radius: 3px;\r\n}\r\n.form li:last-child {\r\n    border: none;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n}\r\n.form li > label {\r\n    display: block;\r\n    float: left;\r\n    margin-top: -19px;\r\n    background: var(--font-color);\r\n    height: 14px;\r\n    padding: 2px 5px 2px 5px;\r\n    color: black;\r\n    font-size: 14px;\r\n    overflow: hidden;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.form input[type='text'],\r\n.form input[type='date'],\r\n.form input[type='datetime'],\r\n.form input[type='email'],\r\n.form input[type='number'],\r\n.form input[type='search'],\r\n.form input[type='time'],\r\n.form input[type='url'],\r\n.form input[type='password'],\r\n.form textarea,\r\n.form select {\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    width: 100%;\r\n    display: block;\r\n    outline: none;\r\n    border: none;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 16px;\r\n    padding: 0;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n.form li > span {\r\n    background: var(--font-color);\r\n    display: block;\r\n    padding: 3px;\r\n    margin: 0 -9px -9px -9px;\r\n    text-align: center;\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15;\r\n}\r\n.form textarea {\r\n    resize: none;\r\n}\r\n.form input[type='submit'],\r\n.form input[type='button'] {\r\n    background: var(--font-color);\r\n    border: none;\r\n    padding: 10px 20px 10px 20px;\r\n    border-bottom: 3px solid var(--font-color);\r\n    border-radius: 3px;\r\n    color: var(--color-secondary);\r\n}\r\n.form input[type='submit']:hover,\r\n.form input[type='button']:hover {\r\n    background: var(--font-color);\r\n    color: var(--color-secondary);\r\n}\r\n\r\n/* the gouge */\r\n/* GAUGE   (I DIDNT WROTE THAT CODE)*/\r\n\r\n.gauge {\r\n    position: relative;\r\n}\r\n\r\n.gauge__container {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    left: 50%;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n    -o-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.gauge__background {\r\n    z-index: 0;\r\n    position: absolute;\r\n    background-color: var(--color-secondary);\r\n    top: 0;\r\n    border-radius: 300px 300px 0 0;\r\n}\r\n\r\n.gauge__data {\r\n    z-index: 1;\r\n    position: absolute;\r\n    background-color: var(--color-primary);\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-radius: 300px 300px 0 0;\r\n    -webkit-transform-origin: center bottom;\r\n    -moz-transform-origin: center bottom;\r\n    -ms-transform-origin: center bottom;\r\n    -o-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n}\r\n\r\n.gauge__center {\r\n    z-index: 2;\r\n    position: absolute;\r\n    background-color: rgba(255, 255, 255, 0.705);\r\n    margin-right: auto;\r\n    border-radius: 300px 300px 0 0;\r\n}\r\n\r\n.gauge__marker {\r\n    z-index: 3;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    width: 1px;\r\n}\r\n\r\n.gauge__needle {\r\n    z-index: 4;\r\n    background-color: var(--color-third);\r\n    height: 3px;\r\n    position: absolute;\r\n    -webkit-transform-origin: left center;\r\n    -moz-transform-origin: left center;\r\n    -ms-transform-origin: left center;\r\n    -o-transform-origin: left center;\r\n    transform-origin: left center;\r\n}\r\n\r\n.gauge__labels {\r\n    display: table;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.gauge__label--low {\r\n    display: table-cell;\r\n    text-align: center;\r\n}\r\n\r\n.gauge__label--spacer {\r\n    display: table-cell;\r\n}\r\n\r\n.gauge__label--high {\r\n    display: table-cell;\r\n    text-align: center;\r\n}\r\n\r\n.gauge {\r\n    height: calc(120px + 3em);\r\n}\r\n.gauge__container {\r\n    width: 240px;\r\n    height: 120px;\r\n}\r\n.gauge__marker {\r\n    height: 120px;\r\n    left: 119.5px;\r\n}\r\n.gauge__background {\r\n    width: 240px;\r\n    height: 120px;\r\n}\r\n.gauge__center {\r\n    width: 144px;\r\n    height: 72px;\r\n    top: 48px;\r\n    margin-left: 48px;\r\n}\r\n.gauge__data {\r\n    width: 240px;\r\n    height: 120px;\r\n}\r\n.gauge__needle {\r\n    left: 120px;\r\n    top: 117px;\r\n    width: 120px;\r\n}\r\n.gauge__labels {\r\n    top: 120px;\r\n    width: 240px;\r\n}\r\n.gauge__label--low {\r\n    width: 48px;\r\n}\r\n.gauge__label--spacer {\r\n    width: 144px;\r\n}\r\n.gauge__label--high {\r\n    width: 48px;\r\n}\r\n\r\n@media only screen and (min-width: 400px) {\r\n    .gauge {\r\n        height: calc(150px + 3em);\r\n    }\r\n    .gauge__container {\r\n        width: 300px;\r\n        height: 150px;\r\n    }\r\n    .gauge__marker {\r\n        height: 150px;\r\n        left: 149.5px;\r\n    }\r\n    .gauge__background {\r\n        width: 300px;\r\n        height: 150px;\r\n    }\r\n    .gauge__center {\r\n        width: 180px;\r\n        height: 90px;\r\n        top: 60px;\r\n        margin-left: 60px;\r\n    }\r\n    .gauge__data {\r\n        width: 300px;\r\n        height: 150px;\r\n    }\r\n    .gauge__needle {\r\n        left: 150px;\r\n        top: 147px;\r\n        width: 150px;\r\n    }\r\n    .gauge__labels {\r\n        top: 150px;\r\n        width: 300px;\r\n    }\r\n    .gauge__label--low {\r\n        width: 60px;\r\n    }\r\n    .gauge__label--spacer {\r\n        width: 180px;\r\n    }\r\n    .gauge__label--high {\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.gauge--liveupdate .gauge__data,\r\n.gauge--liveupdate .gauge__needle {\r\n    -webkit-transition: all 5s ease-in-out;\r\n    -moz-transition: all 5s ease-in-out;\r\n    -ms-transition: all 5s ease-in-out;\r\n    -o-transition: all 5s ease-in-out;\r\n    transition: all 5s ease-in-out;\r\n}\r\n\r\n/*\r\n * For a given gauge value, x, ranging from 0.0 to 1.0, set\r\n * the `transform: rotate()` property according to the\r\n * following equation: `-0.5 + 0.5x turns` The default\r\n * properties below represent an x value of 0.\r\n */\r\n\r\n.gauge__data {\r\n    -webkit-transform: rotate(-0.5turn);\r\n    -moz-transform: rotate(-0.5turn);\r\n    -ms-transform: rotate(-0.5turn);\r\n    -o-transform: rotate(-0.5turn);\r\n    transform: rotate(-0.5turn);\r\n}\r\n.gauge__needle {\r\n    -webkit-transform: rotate(-0.5turn);\r\n    -moz-transform: rotate(-0.5turn);\r\n    -ms-transform: rotate(-0.5turn);\r\n    -o-transform: rotate(-0.5turn);\r\n    transform: rotate(-0.5turn);\r\n}\r\n", "",{"version":3,"sources":["webpack://./solution/styles.css"],"names":[],"mappings":"AACA;IACI,mCAAmC;IACnC,cAAc;IACd,4BAA4B;IAC5B,UAAU;IACV,YAAY;AAChB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,qBAAqB;IACrB,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,OAAO;IACP,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,wBAAwB;IACxB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;AACrC,EAAE;;;;;;;;;;;;;;;GAeC;;AAEH;IACI,wCAAwC;IACxC,YAAY;IACZ,UAAU;IACV,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,cAAc;IACd,YAAY;AAChB;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,UAAU;IACV,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA,WAAW;;AAEX;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;AACA;IACI,wBAAwB;IACxB,0BAA0B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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300&display=swap');\r\nbody {\r\n    background-color: var(--font-color);\r\n    transition: 2s;\r\n    font-family: 'Bitter', serif;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n.waitingForDrop {\r\n    background-color: var(--color-third);\r\n}\r\nul {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    min-height: 80px;\r\n}\r\nli {\r\n    left: 0;\r\n    text-align: center;\r\n}\r\nh1 {\r\n    font-size: 80px;\r\n}\r\nh2 {\r\n    color: var(--font-color);\r\n    font-size: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.info {\r\n    box-shadow: 15px 5px 30px #000000;\r\n} /*\r\n.infoSec > * {\r\n    padding: 10px;\r\n    flex: 1 100%;\r\n}\r\n.description {\r\n    width: 100%;\r\n}\r\n.infoSec {\r\n    flex: 3 0px;\r\n}\r\n\r\n.coldInfo {\r\n    background-color: var(--color-third);\r\n    margin: 3px;\r\n} */\r\n\r\n.task {\r\n    background-color: var(--color-secondary);\r\n    height: 30px;\r\n    width: 15%;\r\n    margin: 10px;\r\n}\r\n.hide {\r\n    display: none;\r\n}\r\n.subMainSec {\r\n    background-color: var(--color-accent);\r\n    border-radius: 17px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    padding: 20px;\r\n    border: var(--color-third);\r\n    border-width: 10px;\r\n    border-style: solid;\r\n}\r\n.info {\r\n    width: 95%;\r\n    border-radius: 7px;\r\n    padding: 20px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.task {\r\n    width: 500px;\r\n    border-radius: 7px;\r\n}\r\n.mainSec {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\nsection {\r\n    margin-top: 2%;\r\n}\r\n#page-title {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n#searchSec {\r\n    margin-top: 1%;\r\n    float: right;\r\n}\r\n#todoSec {\r\n    width: 31%;\r\n    float: left;\r\n}\r\n#inProgressSec {\r\n    width: 31%;\r\n    float: left;\r\n}\r\n#doneSec {\r\n    width: 31%;\r\n    float: left;\r\n}\r\n#addsection {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nspan {\r\n    width: 100%;\r\n    margin-left: 40%;\r\n    margin-right: 40%;\r\n}\r\n\r\n/* colors */\r\n\r\n.theme-purple {\r\n    --color-primary: #501b1d;\r\n    --color-secondary: #83677b;\r\n    --color-third: #64485c;\r\n    --color-accent: #2e1114;\r\n    --font-color: #adadad;\r\n}\r\n.theme-creative {\r\n    --color-primary: #d79922;\r\n    --color-secondary: #efe2ba;\r\n    --color-third: #f13c20;\r\n    --color-accent: #4056a1;\r\n    --font-color: #c5cbe3;\r\n}\r\n.theme-inviting {\r\n    --color-primary: #e7717d;\r\n    --color-secondary: #c2cad0;\r\n    --color-third: #c2b9b0;\r\n    --color-accent: #7e685a;\r\n    --font-color: #afd275;\r\n}\r\n.theme-sleek {\r\n    --color-primary: #2c3531;\r\n    --color-secondary: #116466;\r\n    --color-third: #d9b08c;\r\n    --color-accent: #ffcb9a;\r\n    --font-color: #d1e8e2;\r\n}\r\n.theme-audacious {\r\n    --color-primary: #272727;\r\n    --color-secondary: #747474;\r\n    --color-third: #ff652f;\r\n    --color-accent: #ffe400;\r\n    --font-color: #14a76c;\r\n}\r\n.theme-traditional {\r\n    --color-primary: #88bdbc;\r\n    --color-secondary: #254e58;\r\n    --color-third: #112d32;\r\n    --color-accent: #4f4a41;\r\n    --font-color: #6e6658;\r\n}\r\n.theme-love {\r\n    --color-primary: #a1c3d1;\r\n    --color-secondary: #b39bc8;\r\n    --color-third: #f0ebf4;\r\n    --color-accent: #f172a1;\r\n    --font-color: #e64398;\r\n}\r\n.theme-striking {\r\n    --color-primary: #172605;\r\n    --color-secondary: #176521;\r\n    --color-third: #53900f;\r\n    --color-accent: #a4a71e;\r\n    --font-color: #d6ce15;\r\n}\r\n/* button */\r\n\r\n.container:hover {\r\n    background-color: var(--color-primary);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.container {\r\n    outline: none;\r\n    cursor: pointer;\r\n    background: none;\r\n    transition: 0.5s;\r\n    border-radius: 5px;\r\n\r\n    border-style: solid;\r\n\r\n    transform: scale(1.1);\r\n}\r\n\r\n/* select option */\r\n.select {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: relative;\r\n    width: 250px;\r\n    height: 40px;\r\n}\r\n\r\n.option {\r\n    padding: 0 30px 0 10px;\r\n    min-height: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    background: #333;\r\n    border-top: #222 solid 1px;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    pointer-events: none;\r\n    order: 2;\r\n    z-index: 1;\r\n    transition: background 0.4s ease-in-out;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.option:hover {\r\n    background: #666;\r\n}\r\n\r\n.select:focus .option {\r\n    position: relative;\r\n    pointer-events: all;\r\n}\r\n\r\ninput:checked + label {\r\n    order: 1;\r\n    z-index: 2;\r\n    background: #666;\r\n    border-top: none;\r\n    position: relative;\r\n}\r\n\r\ninput:checked + label:after {\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 5px solid transparent;\r\n    border-right: 5px solid transparent;\r\n    border-top: 5px solid white;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: calc(50% - 2.5px);\r\n    pointer-events: none;\r\n    z-index: 3;\r\n}\r\n\r\ninput:checked + label:before {\r\n    position: absolute;\r\n    right: 0;\r\n    height: 40px;\r\n    width: 40px;\r\n    content: '';\r\n    background: #666;\r\n}\r\n/* loading spinner */\r\n@keyframes ldio-6cpvji16g73 {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    50% {\r\n        transform: rotate(180deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.ldio-6cpvji16g73 div {\r\n    position: absolute;\r\n    animation: ldio-6cpvji16g73 1.1500000000000001s linear infinite;\r\n    width: 54px;\r\n    height: 54px;\r\n    top: 23px;\r\n    left: 23px;\r\n    border-radius: 50%;\r\n    box-shadow: 0 3.9000000000000004px 0 0 #e15b64;\r\n    transform-origin: 27px 28.95px;\r\n}\r\n.remove {\r\n    float: right;\r\n}\r\n.loader {\r\n    width: 98px;\r\n    height: 98px;\r\n    overflow: hidden;\r\n    background: none;\r\n}\r\n.ldio-6cpvji16g73 {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    transform: translateZ(0) scale(0.98);\r\n    backface-visibility: hidden;\r\n    transform-origin: 0 0; /* see note above */\r\n}\r\n.ldio-6cpvji16g73 div {\r\n    box-sizing: content-box;\r\n}\r\n/* generated by https://loading.io/ */\r\n/* form not mine */\r\n\r\n.form {\r\n    max-width: 95%;\r\n    margin: 50px auto;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    background: var(--font-color);\r\n    border-radius: 7px;\r\n    padding: 30px;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n.form h1 {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0;\r\n    margin: 0px 0px 20px 0px;\r\n    color: #5c5c5c;\r\n    font-size: x-large;\r\n}\r\n.form ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.form li {\r\n    display: block;\r\n    padding: 9px;\r\n    border: 1px solid var(--color-secondary);\r\n    margin-bottom: 4px;\r\n    border-radius: 3px;\r\n}\r\n.form li:last-child {\r\n    border: none;\r\n    margin-bottom: 0px;\r\n    text-align: center;\r\n}\r\n.form li > label {\r\n    display: block;\r\n    float: left;\r\n    margin-top: -19px;\r\n    background: var(--font-color);\r\n    height: 14px;\r\n    padding: 2px 5px 2px 5px;\r\n    color: black;\r\n    font-size: 14px;\r\n    overflow: hidden;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n.form input[type='text'],\r\n.form input[type='date'],\r\n.form input[type='datetime'],\r\n.form input[type='email'],\r\n.form input[type='number'],\r\n.form input[type='search'],\r\n.form input[type='time'],\r\n.form input[type='url'],\r\n.form input[type='password'],\r\n.form textarea,\r\n.form select {\r\n    box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    width: 100%;\r\n    display: block;\r\n    outline: none;\r\n    border: none;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 16px;\r\n    padding: 0;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n.form li > span {\r\n    background: var(--font-color);\r\n    display: block;\r\n    padding: 3px;\r\n    margin: 0 -9px -9px -9px;\r\n    text-align: center;\r\n    color: black;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 15;\r\n}\r\n.form textarea {\r\n    resize: none;\r\n}\r\n.form input[type='submit'],\r\n.form input[type='button'] {\r\n    background: var(--font-color);\r\n    border: none;\r\n    padding: 10px 20px 10px 20px;\r\n    border-bottom: 3px solid var(--font-color);\r\n    border-radius: 3px;\r\n    color: var(--color-secondary);\r\n}\r\n.form input[type='submit']:hover,\r\n.form input[type='button']:hover {\r\n    background: var(--font-color);\r\n    color: var(--color-secondary);\r\n}\r\n\r\n/* the gouge */\r\n/* GAUGE   (I DIDNT WROTE THAT CODE)*/\r\n\r\n.gauge {\r\n    position: relative;\r\n}\r\n\r\n.gauge__container {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    left: 50%;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    -webkit-transform: translateX(-50%);\r\n    -moz-transform: translateX(-50%);\r\n    -ms-transform: translateX(-50%);\r\n    -o-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.gauge__background {\r\n    z-index: 0;\r\n    position: absolute;\r\n    background-color: var(--color-secondary);\r\n    top: 0;\r\n    border-radius: 300px 300px 0 0;\r\n}\r\n\r\n.gauge__data {\r\n    z-index: 1;\r\n    position: absolute;\r\n    background-color: var(--color-primary);\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-radius: 300px 300px 0 0;\r\n    -webkit-transform-origin: center bottom;\r\n    -moz-transform-origin: center bottom;\r\n    -ms-transform-origin: center bottom;\r\n    -o-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n}\r\n\r\n.gauge__center {\r\n    z-index: 2;\r\n    position: absolute;\r\n    background-color: rgba(255, 255, 255, 0.705);\r\n    margin-right: auto;\r\n    border-radius: 300px 300px 0 0;\r\n}\r\n\r\n.gauge__marker {\r\n    z-index: 3;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    width: 1px;\r\n}\r\n\r\n.gauge__needle {\r\n    z-index: 4;\r\n    background-color: var(--color-third);\r\n    height: 3px;\r\n    position: absolute;\r\n    -webkit-transform-origin: left center;\r\n    -moz-transform-origin: left center;\r\n    -ms-transform-origin: left center;\r\n    -o-transform-origin: left center;\r\n    transform-origin: left center;\r\n}\r\n\r\n.gauge__labels {\r\n    display: table;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.gauge__label--low {\r\n    display: table-cell;\r\n    text-align: center;\r\n}\r\n\r\n.gauge__label--spacer {\r\n    display: table-cell;\r\n}\r\n\r\n.gauge__label--high {\r\n    display: table-cell;\r\n    text-align: center;\r\n}\r\n\r\n.gauge {\r\n    height: calc(120px + 3em);\r\n}\r\n.gauge__container {\r\n    width: 240px;\r\n    height: 120px;\r\n}\r\n.gauge__marker {\r\n    height: 120px;\r\n    left: 119.5px;\r\n}\r\n.gauge__background {\r\n    width: 240px;\r\n    height: 120px;\r\n}\r\n.gauge__center {\r\n    width: 144px;\r\n    height: 72px;\r\n    top: 48px;\r\n    margin-left: 48px;\r\n}\r\n.gauge__data {\r\n    width: 240px;\r\n    height: 120px;\r\n}\r\n.gauge__needle {\r\n    left: 120px;\r\n    top: 117px;\r\n    width: 120px;\r\n}\r\n.gauge__labels {\r\n    top: 120px;\r\n    width: 240px;\r\n}\r\n.gauge__label--low {\r\n    width: 48px;\r\n}\r\n.gauge__label--spacer {\r\n    width: 144px;\r\n}\r\n.gauge__label--high {\r\n    width: 48px;\r\n}\r\n\r\n@media only screen and (min-width: 400px) {\r\n    .gauge {\r\n        height: calc(150px + 3em);\r\n    }\r\n    .gauge__container {\r\n        width: 300px;\r\n        height: 150px;\r\n    }\r\n    .gauge__marker {\r\n        height: 150px;\r\n        left: 149.5px;\r\n    }\r\n    .gauge__background {\r\n        width: 300px;\r\n        height: 150px;\r\n    }\r\n    .gauge__center {\r\n        width: 180px;\r\n        height: 90px;\r\n        top: 60px;\r\n        margin-left: 60px;\r\n    }\r\n    .gauge__data {\r\n        width: 300px;\r\n        height: 150px;\r\n    }\r\n    .gauge__needle {\r\n        left: 150px;\r\n        top: 147px;\r\n        width: 150px;\r\n    }\r\n    .gauge__labels {\r\n        top: 150px;\r\n        width: 300px;\r\n    }\r\n    .gauge__label--low {\r\n        width: 60px;\r\n    }\r\n    .gauge__label--spacer {\r\n        width: 180px;\r\n    }\r\n    .gauge__label--high {\r\n        width: 60px;\r\n    }\r\n}\r\n\r\n.gauge--liveupdate .gauge__data,\r\n.gauge--liveupdate .gauge__needle {\r\n    -webkit-transition: all 5s ease-in-out;\r\n    -moz-transition: all 5s ease-in-out;\r\n    -ms-transition: all 5s ease-in-out;\r\n    -o-transition: all 5s ease-in-out;\r\n    transition: all 5s ease-in-out;\r\n}\r\n\r\n/*\r\n * For a given gauge value, x, ranging from 0.0 to 1.0, set\r\n * the `transform: rotate()` property according to the\r\n * following equation: `-0.5 + 0.5x turns` The default\r\n * properties below represent an x value of 0.\r\n */\r\n\r\n.gauge__data {\r\n    -webkit-transform: rotate(-0.5turn);\r\n    -moz-transform: rotate(-0.5turn);\r\n    -ms-transform: rotate(-0.5turn);\r\n    -o-transform: rotate(-0.5turn);\r\n    transform: rotate(-0.5turn);\r\n}\r\n.gauge__needle {\r\n    -webkit-transform: rotate(-0.5turn);\r\n    -moz-transform: rotate(-0.5turn);\r\n    -ms-transform: rotate(-0.5turn);\r\n    -o-transform: rotate(-0.5turn);\r\n    transform: rotate(-0.5turn);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./solution/styles.css":
/*!*****************************!*\
  !*** ./solution/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./solution/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./solution/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./solution/styles.css");

;

//

//DATA STRUCTURES-

//***"tasks" :
//will handle all of the tasks data structure and the work with the local storage and api */
//each array contains string's- the titles of the tasks.
//EVERY TITLE IS UNIQE! - the solution blocks the user from adding 2 same titles.

//

let tasks = {
    todo: [],
    'in-progress': [],
    done: [],
}

//***"taskExtraInfo":
//will handle all of the extra tasks data structure and the work with local storage
//EACH "tasks" TITLE IS A KEY TO ITS DATA IN "taskExtraInfo".
//FOR EXSAMPLE:
//
//   "laundry": {

//      description: "I have to do laundry because
//      it's already hard fo…et into a room with too
//      many clothes on the floor",

//      priority: '7',

//      deadline: '2021-09-27',

//      timeEstimated: '1',

//      parentTask: 'Housework'}

//each of the Fields can be null. this is nom mandatory to add in info.
//the Fields:

//description : for caricurize more spesific the task.

//priority(1-10):WHEN :
//              1- if i fill board and have nothin else important to do.
//              10- its a matter of life and death !

//deadline: when does this task have to be done.

//timeEstimated: Cumulative work days planned for this task

//parentTask:This task is a subtask of the given parent task.

let taskExtraInfo = {}

//THE WORK WITH LOCAL STORAGE:

//I USE IT FOR 3 DIFFERANT PARAMETERS TO SAVE:

//"tasks"

//"taskExtraInfo"

//"theme"

//all the workflows with localstorage are the same :

//-INIITALIZE THE EMPTY OBJECT

//-IF THERE IS DATA OF THIS PARAMETER IN LOCAL STORAGE, USE IT

//-ELSE SEND THE BASE STRUCTURE TO LOCAL STORAGE AND CONTINUE WITH EMPTY DATA.

if (!localStorage.tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
} else tasks = JSON.parse(localStorage.getItem('tasks'))

if (!localStorage.taskExtraInfo) {
    let itemToSend = Object.assign({}, taskExtraInfo) //cloning taskExtraInfo
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend)) //sending clone to local
} else {
    let itemFromLocal = JSON.parse(localStorage.getItem('taskExtraInfo')) //get the item.
    taskExtraInfo = Object.assign({}, itemFromLocal)
}
if (!localStorage.theme) setTheme('theme-inviting')
document.documentElement.className = localStorage.theme

//initialize page:

displayElements()

//bottons events handaling installation

document.getElementById('submit-add-to-do').addEventListener('click', handleAddToDoTask)
document.getElementById('submit-add-in-progress').addEventListener('click', handleaddInProgressTask)
document.getElementById('submit-add-done').addEventListener('click', handleaddDoneTask)
document.getElementById('todoAddInfo').addEventListener('click', showExtraTodo)
document.getElementById('inProgressAddInfo').addEventListener('click', showExtraInProgress)
document.getElementById('doneAddInfo').addEventListener('click', showExtraDone)
document.getElementById('inProgressTasks').addEventListener('click', handleRemove)
document.getElementById('toDoTasks').addEventListener('click', handleRemove)
document.getElementById('doneTasks').addEventListener('click', handleRemove)
document.getElementById('save-btn').addEventListener('click', handleSave)
document.getElementById('load-btn').addEventListener('click', handleLoad)

// task events handaling installation

document.getElementById('search').addEventListener('keyup', handleSearchKeyup)
document.getElementById('toDoTasks').addEventListener('mouseover', mouseOverParent)
document.getElementById('inProgressTasks').addEventListener('mouseover', mouseOverParent)
document.getElementById('doneTasks').addEventListener('mouseover', mouseOverParent)
document.getElementById('toDoTasks').addEventListener('mouseleave', mouseleaveParent)
document.getElementById('inProgressTasks').addEventListener('mouseleave', mouseleaveParent)
document.getElementById('doneTasks').addEventListener('mouseleave', mouseleaveParent)
document.getElementById('toDoTasks').addEventListener('dblclick', handleDubleClick)
document.getElementById('inProgressTasks').addEventListener('dblclick', handleDubleClick)
document.getElementById('doneTasks').addEventListener('dblclick', handleDubleClick)

//FUNCTIONS

//EXTRA-Data processing functions:

function daysleft(title) {
    //Parameters:tasks title
    //returns:days left till deadline

    if (taskExtraInfo.hasOwnProperty(title)) {
        const deadline = new Date(taskExtraInfo[title].deadline)
        const presentDate = new Date()
        const oneDay = 1000 * 60 * 60 * 24 //milliseconds in 1 day.
        let result = Math.round(deadline.getTime() - presentDate.getTime()) / oneDay
        return result.toFixed(0)
    }
    return
}
function importance(title) {
    //Parameters:tasks title
    //calculate the importance of evey task now:
    //
    //importance =  (timeEstimated / timeleft) * priority
    //
    //SO AS THE DEADLINE GETTING CLOSE, THE TASK GET HIGHER IMPORTANCE
    //
    //importance can be a number between 0 and 1
    //
    //1- means you are for sure late.(according to your time estimation.)
    //
    //it is different from priority!, it is dynamic and get change with time.
    //
    //
    //returns:importance

    if (taskExtraInfo.hasOwnProperty(title)) {
        const timeleft = daysleft(title)
        const timeEstimated = taskExtraInfo[title].timeEstimated
        const priority = taskExtraInfo[title].priority
        let importance = (timeEstimated / timeleft) * priority
        if (importance < 0) return 0
        if (importance > 10) return 1
        return importance / 10
    }
    return
}

function howBusy() {
    //return the sum of your tasks importance
    //min : 0
    //max : 1

    let howBusy = 0
    for (let state in tasks) {
        for (let title of tasks[state]) {
            if (taskExtraInfo.hasOwnProperty(title) && importance(title) && state !== 'done') {
                howBusy += importance(title)
            }
        }
    }
    if (howBusy < 0) return 0
    if (howBusy > 10) return 1
    return howBusy / 10
}
function colorFromImportance(importance) {
    //generates rgb color from given importance.
    //as said , when importance is more than 1 , you are for sure late.
    //red = 0.7-1 so it will be red.
    //green is between 0.3-0.7
    //gray will be the most none important-0.1-0.3.

    //this color will pe presented as the extra-info-bar back-ground color

    const r = importance * 120 + 135
    const g = (1 - importance) * 120 + 100
    return `rgb(${r},${g},120)`
}

//databases

function sendToLocal() {
    //sending "tasks" & "taskExtraInfo" to local storage

    localStorage.setItem('tasks', JSON.stringify(tasks))
    let itemToSend = Object.assign({}, taskExtraInfo)
    localStorage.setItem('taskExtraInfo', JSON.stringify(itemToSend))
}

//"tasks" processing functions

function stringToKabab(str) {
    //Parameters:string with spaces
    //returns:kabab structued string("-" insted of space)

    let kabab = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            kabab += str[i]
        } else {
            kabab += '-'
        }
    }

    return kabab
}

function kababToString(kabab) {
    //Parameters:kabab structued string("-" insted of space)
    //returns:string with spaces

    let str = ''

    for (let i = 0; i < kabab.length; i++) {
        if (kabab[i] !== '-') {
            str += kabab[i]
        } else {
            str += ' '
        }
    }
    return str
}

//add data to "tasks" & "taskExtraInfo"

function getExtraInput(state) {
    //gets data from input

    let extraInfo = {}
    extraInfo.description = document.getElementById('description' + state).value
    extraInfo.priority = document.getElementById('priority' + state).value
    extraInfo.deadline = document.getElementById('deadline' + state).value
    extraInfo.timeEstimated = document.getElementById('timeEstimated' + state).value
    extraInfo.parentTask = document.getElementById('parentTask' + state).value
    return extraInfo
}

function addTask(title, state) {
    //Parameters:task title, state:"todo"/"in-progress"/"done"
    //adds a task to "tasks"
    //updates local storage.
    //updates DOM.

    tasks[state].unshift(title)
    sendToLocal()
    displayElements()
}

function addExtra(title, state) {
    //Parameters:task title, state:"todo"/"in-progress"/"done"
    //adds a task to "tasks"
    //updates local storage.
    taskExtraInfo[title] = Object.assign({}, getExtraInput(state))
    sendToLocal()
}

function handleAddToDoTask() {
    //when "add todo task" button is pressed:
    //take the relavant input value
    //send it to addTask() &  addExtra()

    const title = document.getElementById('add-to-do-task').value
    if (!document.getElementById('extraTodo').classList.contains('')) document.getElementById('extraTodo').classList.add('hide')
    if (inputCheck(title)) {
        addExtra(title, 'Todo')
        addTask(title, 'todo')
    }
}

function handleaddInProgressTask() {
    //when "add In-Progress task" button is pressed:
    //take the relavant input value
    //send it to addTask() &  addExtra()

    const title = document.getElementById('add-in-progress-task').value
    if (!document.getElementById('extraInProgress').classList.contains('')) document.getElementById('extraInProgress').classList.add('hide')
    if (inputCheck(title)) {
        addExtra(title, 'InProgress')
        addTask(title, 'in-progress')
    }
}

function handleaddDoneTask() {
    //when "add done task" button is pressed:
    //take the relavant input value
    //send it to addTask() &  addExtra()

    const title = document.getElementById('add-done-task').value
    if (!document.getElementById('extraDone').classList.contains('')) document.getElementById('extraDone').classList.add('hide')
    if (inputCheck(title)) {
        addExtra(title, 'Done')
        addTask(title, 'done')
    }
}

function inputCheck(input) {
    //checks if "input" is valid.

    if (input === '' || howManyTasksHaveThatName(input) > 0 || input.includes('\n') || input.includes('  ')) {
        alert('invalid input')
        return false
    }
    return true
}

function howManyTasksHaveThatName(title) {
    //Parameters:title
    //returns:the number of times "title" apper in "tasks"

    let i = 0
    for (let state in tasks) {
        for (let task of tasks[state]) {
            if (task === title) {
                i++
            }
        }
    }
    return i
}

//task manipulation

function moveTask(title, target) {
    //Parameters:tasks title, wanted target state.("todo"/"in-progress"/"done")
    //moves the task.

    removeTask(title)
    addTask(title, target)
}

function rename(oldName, newName) {
    //Parameters:tasks oldName, and newName(titles)
    //renames the task.
    //updates localstorage and DOM

    for (let state in tasks) {
        let i = 0
        for (let task of tasks[state]) {
            if (task === oldName) {
                tasks[state].splice(i, 1, newName)
            }
            i++
        }
    }
    taskExtraInfo[newName] = Object.assign({}, taskExtraInfo[oldName])
    sendToLocal()
    displayElements()
}

function removeTask(title) {
    //Parameters:tasks title.
    //removes this task from "tasks"
    //updates localstorage and DOM

    for (let state in tasks) {
        let i = 0
        for (let task of tasks[state]) {
            if (task === title) {
                tasks[state].splice(i, 1)
            }
            i++
        }
    }
    sendToLocal()
    displayElements()
}

//DOM

function createElement(tagname, children = [], classes = [], attributes, events) {
    //the most generic element builder.
    //we will build all the elements here.

    let element = document.createElement(tagname)

    //children

    for (let child of children) {
        if (typeof child === 'string' || typeof child === 'number') {
            child = document.createTextNode(child)
        }
        element.appendChild(child)
    }

    //classes

    for (const cls of classes) {
        element.classList.add(cls)
    }

    //attrubutes

    for (const attr in attributes) {
        element.setAttribute(attr, attributes[attr])
    }

    //attrubutes

    for (const event in events) {
        element.addEventListener(event, events[event])
    }

    return element
}

function createExtraElement(title) {
    //Parameters:tasks title.
    //TAKES INFORMATION FROM taskExtraInfo (IF IT EXSIST)
    //BUILDS A DOM ELEMNT OUT OF THIS DATA
    //APPENDS IT AFTER THE RELEVANT TASK ELEMNT
    //THIS FUNCTION Starts working ONLY when the user clicks the relevant task(openExtraInfo())
    //on the next click on the same task element, this element will be removed.

    title = kababToString(title)
    const removeBtn = createElement('button', ['remove task❌'], ['remove'], {
        name: 'remove',
        'data-title': stringToKabab(title),
    })
    let extraInfoElement = createElement('div', [removeBtn], ['info'], {
        'data-title-exstra': stringToKabab(title),
    })
    extraInfoElement.appendChild(createElement('b', [title], [], {}))
    extraInfoElement.style.backgroundColor = colorFromImportance(importance(title))

    if (taskExtraInfo.hasOwnProperty(title)) {
        let days = createElement(
            'div',
            ['days left (Estimated time):' + daysleft(title) + '(' + taskExtraInfo[title].timeEstimated] + ')',
            ['coldInfo'],
            {}
        )
        let deadline = createElement('div', ['deadline:' + taskExtraInfo[title]['deadline']], ['coldInfo'], {})
        let calcPriority = createElement('div', ['calculated priority:' + importance(title) * 10], ['coldInfo'], {})
        let right = createElement('div', [deadline, days, calcPriority], ['right'], {})
        let description = createElement('div', [taskExtraInfo[title].description], ['description'], {})
        let infoSec = createElement('div', [description, right], ['infoSec'], {})
        extraInfoElement.appendChild(infoSec)
    } else extraInfoElement.appendChild(createElement('div', [`no extra information for ${title}`], [], {}))

    let kababTitle = stringToKabab(title)
    const parentGuest = document.querySelectorAll(`[data-title~="${kababTitle}"]`)[0]
    parentGuest.parentNode.insertBefore(extraInfoElement, parentGuest.nextSibling)
}

function openExtraInfo(event) {
    //adds a relevant extra info element after the task element
    //if its exsist already, removes it.(basiclly toggiling)
    setTimeout(function () {
        if (dblClicked === true) return
        const title = stringToKabab(event.target.firstChild.wholeText)
        if (event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0])
            event.target.parentElement.querySelectorAll(`[data-title-exstra~="${title}"]`)[0].remove()
        else {
            createExtraElement(title)
        }
    }, 300)
}

function createTaskElement(title, state) {
    //uses createElement to creat an task elment
    //appends it to the matching <ul>

    let newTaskElement = createElement('li', [title], ['task', 'draggable'], { 'data-title': stringToKabab(title) }, {})
    newTaskElement.addEventListener('click', openExtraInfo)
    newTaskElement.addEventListener('mousedown', clickDrugAndDropHandler)

    if (state === 'todo') appendElement('toDoTasks', newTaskElement)
    if (state === 'in-progress') appendElement('inProgressTasks', newTaskElement)
    if (state === 'done') appendElement('doneTasks', newTaskElement)
}

function appendElement(parentId, element) {
    //appends element child to parent

    document.getElementById(parentId).appendChild(element)
}

function generateTasks() {
    //uses createTaskElement to create (and append to matching parent) an element for each "tasks" object.

    for (let state in tasks) {
        for (let task of tasks[state]) {
            createTaskElement(task, state)
        }
    }
}

function removeAllchildrens(parentId) {
    //remove all the childrens from parant

    let parent = document.getElementById(parentId)
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

function removeAllTasksElements() {
    //remove all tasks from the tasks <ul> elemnts.

    removeAllchildrens('toDoTasks')
    removeAllchildrens('inProgressTasks')
    removeAllchildrens('doneTasks')
}

function displayElements() {
    //itialization the DOM PAGE:
    //sets the gauge according to howBusy().
    //remove parents from all childrens
    //fill them again from "tasks"

    nitialization(howBusy())
    removeAllTasksElements()
    generateTasks()
}

function setTheme() {
    //get theme from selector.
    //set it to the page
    //send it to local storege.

    const themeName = document.getElementById('theme').value
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

//SEARCH

function searchByQuery(query) {
    //Parameters:QUERY WORD OR SENTNCE.
    //Returns:TASKS THAT CONTAINS IT.

    if (query === '') return tasks

    let lowerCasedQuery = query.toLowerCase() //for case-insensitively

    //creates "found" : replica of "tasks" contain only the matching tasks.

    let found = {
        todo: [],
        'in-progress': [],
        done: [],
    }
    for (let state in tasks) {
        for (let task of tasks[state]) {
            if (task.toLowerCase().includes(lowerCasedQuery)) {
                found[state].push(task)
            }
        }
    }
    return found
}

function displayFounds(found) {
    //simulate generate tasks but with the found.

    removeAllTasksElements()
    for (let state in found) {
        for (let task of found[state]) {
            createTaskElement(task, state)
        }
    }
}

//EVENT HANDALING FUNCTIONS

function handleSearchKeyup() {
    //when the user releses a key in the searchbar:

    displayFounds(searchByQuery(document.getElementById('search').value))
}

//toggle the extra information-adding section for each state:

function showExtraTodo() {
    document.getElementById('extraTodo').classList.toggle('hide')
}

function showExtraInProgress() {
    document.getElementById('extraInProgress').classList.toggle('hide')
}

function showExtraDone() {
    document.getElementById('extraDone').classList.toggle('hide')
}

function handleRemove(event) {
    //handles remove a task

    const title = kababToString(event.target.parentElement.firstChild.dataset.title)
    if (event.target.name === 'remove') {
        removeTask(title)
        sendToLocal()
        displayElements()
    }
}

//move task by alt+(1-3) & rename by doubleclick :

let correntTaskBelow = null //an real-time updated variable indicates the task name below mouse
let correntTaskElementBelow = null //an real-time updated object that indicates the the tops element below mouse
let wasJustFocused = null //a variable to save the last focused element.
let wasJustFocusedOldName = null //a variable to save the last focused element oldName.

function mouseOverParent(e) {
    //when the mouse over parent
    //-->update corrent element below(if its LI)
    //-->start listen to keydown.

    document.addEventListener('keydown', handleKeyDown)
    correntTaskElementBelow = null
    correntTaskBelow = null
    if (e.target.tagName === 'LI') {
        correntTaskBelow = e.target.innerText
        correntTaskElementBelow = e.target
    }
}

function handleDubleClick() {
    //when a task <li> is double clicked:
    //-->start listen to the corrent task <li> below's blur.
    //-->make the  task <li> "contentEditable"
    //-->focus on the task <li>
    //--> update wasJustFocused to the task <li>(will be used soon in handleBlur())

    correntTaskElementBelow.addEventListener('blur', handleBlur)
    correntTaskElementBelow.contentEditable = true
    wasJustFocusedOldName = correntTaskElementBelow.innerText
    correntTaskElementBelow.focus()
    wasJustFocused = correntTaskElementBelow

    const range = document.createRange()
    const sel = window.getSelection()
    const length = correntTaskElementBelow.innerText.length
    correntTaskElementBelow.innerText = ''
    range.setStart(correntTaskElementBelow.firstChild, length)
    range.collapse(true)
    sel.removeAllRanges()
    sel.addRange(range)
}

function handleBlur() {
    //-->remove the  task <li> "contentEditable" attribute
    //-->check the new name, if its valid rename the task and updated DOM & local storage.

    wasJustFocused.contentEditable = false

    if (wasJustFocused.innerText === '') {
        alert('empty input')
        displayElements()
        return null
    }
    if (wasJustFocused.innerText === wasJustFocusedOldName) {
        return null
    }
    if (howManyTasksHaveThatName(wasJustFocused.innerText) >= 1) {
        alert('there is already a task named like that')
        displayElements()
        return null
    }

    if (wasJustFocused.innerText.includes('\n') || wasJustFocused.innerText.includes('  ')) {
        alert('invalid title')
        displayElements()
        return null
    }
    rename(wasJustFocusedOldName, wasJustFocused.innerText)
    sendToLocal()
    displayElements()
}

function handleKeyDown(keyDownEvent) {
    //when hovering above task <li> and pressing down the keys alt+1/2/3:
    //move the task to the wanted state.

    if (keyDownEvent.altKey) {
        if (keyDownEvent.key === '1') {
            moveTask(correntTaskBelow, 'todo')
        }
        if (keyDownEvent.key === '2') {
            moveTask(correntTaskBelow, 'in-progress')
        }
        if (keyDownEvent.key === '3') {
            moveTask(correntTaskBelow, 'done')
        }
    }
}
function mouseleaveParent() {
    //when the mouse leave task <li> elemnt:
    //stop listening to key down.

    document.removeEventListener('keydown', handleKeyDown) //stop listen to keydown.
}

//API

async function handleLoad() {
    //when "load" button is pressed:
    //-->create a loader spinner animation
    //-->send (GET) requset to api
    //-->set tasks to the answer.
    //-->updates the DOM & local storage.
    //-->remove the loader spinner animation

    loader('create')
    let response = await loadData()
    tasks = response.tasks
    sendToLocal()
    displayElements()
    loader('remove')
}
async function handleSave() {
    //when "save" button is pressed:
    //-->create a loader spinner animation
    //-->send "tasks" as (PUT) requset to api
    //-->remove the loader spinner animation

    loader('create')
    await saveData()
    loader('remove')
}

function loader(state) {
    //create or remove loader spinner animation

    if (state === 'create') {
        let wrapper = createElement('section', [], ['loader'], { id: 'spinner' }, {})
        let loader = createElement('div', [], ['ldio-6cpvji16g73'], {}, {})
        let spinner = createElement('div', [], [], {}, {})
        loader.appendChild(spinner)
        wrapper.appendChild(loader)
        document.getElementById('loader').appendChild(wrapper)
    }
    if (state === 'remove') {
        document.getElementById('spinner').remove()
    }
}

async function loadData() {
    //-->sends GET to api.
    //-->stets the errorbar element to the "loaded!" if succses , and to the error massage if not.
    //-->try converting it to an object using json.
    //-->if succsed, return the converted object.

    let response = await fetch('https://json-bins.herokuapp.com/bin/614b11e14021ac0e6c080cdf')
    if (response.status > 400) {
        document.getElementById('errorBar').innerText = response.status + ':' + response.statusText
    } else document.getElementById('errorBar').innerText = 'loaded!'
    try {
        return response.json()
    } catch {
        return null
    }
}

async function saveData() {
    //-->convert tasks to json format
    //-->sends it via PUT request to api.
    //-->stets the errorbar element to the "saved!" if succses , and to the error massage if not.

    let tasksTosend = {}
    tasksTosend.tasks = tasks
    let response = await fetch('https://json-bins.herokuapp.com/bin/614b11e14021ac0e6c080cdf', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tasksTosend),
    })

    if (response.status > 400) {
        //response is having a kind of problem.
        document.getElementById('errorBar').innerText = response.status + ':' + response.statusText
    } else document.getElementById('errorBar').innerText = 'saved!'
}

let dblClicked = false // later used to determine if to start drag and drop
let mouseDown = false // later used to determine if to start drag and drop

function clickDrugAndDropHandler(event) {
    const target = event.target

    event.preventDefault() // to prevent the selecting action of click

    mouseDown = true

    function onMouseUp(event) {
        if (event.target === target) {
            mouseDown = false
        }
    }

    document.addEventListener('mouseup', onMouseUp)

    // the main drag and drop section!
    // we set a time out so the user can make a dblclick without starting to drag
    // I found that the best time is 300 ms. microsoft says its 500 ms ;)

    setTimeout(() => {
        if (dblClicked === true || mouseDown === false) return

        event.preventDefault()

        target.classList.add('taskOnTheMove')

        let shiftX = event.clientX - target.getBoundingClientRect().left
        let shiftY = event.clientY - target.getBoundingClientRect().top

        target.style.position = 'absolute'
        target.style.zIndex = 1000
        document.body.append(target)

        moveAt(event.pageX, event.pageY)

        // moves the task at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
            target.style.left = pageX - shiftX + 'px'
            target.style.top = pageY - shiftY - 5 + 'px' // small adjustment for better performance
        }

        let currentDroppable = null

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY)

            target.style.display = 'none'
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
            target.style.display = ''

            // mousemove events may trigger out of the window (when the ball is dragged off-screen)
            // if clientX/clientY are out of the window, then elementFromPoint returns null
            if (!elemBelow) return

            // potential droppable are labeled with the class "droppable" (can be other logic)
            let droppableBelow = elemBelow.closest('.droppable')

            if (currentDroppable != droppableBelow) {
                // we're flying in or out...
                // note: both values can be null
                //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
                //   droppableBelow=null if we're not over a droppable now, during this event

                if (currentDroppable) {
                    // the logic to process "flying out" of the droppable (remove highlight)
                    leaveDroppable(currentDroppable)
                }
                currentDroppable = droppableBelow
                if (currentDroppable) {
                    // the logic to process "flying in" of the droppable
                    enterDroppable(currentDroppable)
                }
            }
        }

        // move the task on mousemove
        document.addEventListener('mousemove', onMouseMove)

        // drop the task, remove unneeded handlers

        // drop the task, remove unneeded handlers
        target.onmouseup = function () {
            if (currentDroppable) {
                moveTask(kababToString(target.dataset.title), currentDroppable.dataset.state)
                currentDroppable.classList.remove('waitingForDrop')
                document.removeEventListener('mousemove', onMouseMove)
                target.onmouseup = null
                target.remove()
                displayElements()
            } else {
                document.removeEventListener('mousemove', onMouseMove)
                target.onmouseup = null
                target.remove()
                displayElements()
                return
            }
        }
    }, 300)
}

function enterDroppable(droppableElement) {
    if (droppableElement.tagName === 'LI') {
        droppableElement.classList.add('below-drag')
    }
}

function leaveDroppable(droppableElement) {
    if (droppableElement.tagName === 'LI') {
        droppableElement.classList.remove('below-drag')
    }
}
// The Gauge-- not my writing! its imported and modified to my needs

function Gauge(el) {
    //Private Properties and Attributes

    let element, // Containing element for the info component
        data, // `.gauge__data` element
        needle, // `.gauge__needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop // Style for transform

    //Private Methods and Functions

    let setElement = function (el) {
        // Keep a reference to the various elements and sub-elements
        element = el
        data = element.querySelector('.gauge__data')
        needle = element.querySelector('.gauge__needle')
    }

    let setValue = function (x) {
        value = x
        let turns = -0.5 + x * 0.5
        data.style[prop] = 'rotate(' + turns + 'turn)'
        needle.style[prop] = 'rotate(' + turns + 'turn)'
    }

    //Object to be Returned

    function exports() {}

    //Public API Methods

    exports.element = function (el) {
        if (!arguments.length) {
            return element
        }
        setElement(el)
        return this
    }

    exports.value = function (x) {
        if (!arguments.length) {
            return value
        }
        setValue(x)
        return this
    }

    //nitialization

    let body = document.getElementsByTagName('body')[0]
    ;['webkitTransform', 'mozTransform', 'msTransform', 'oTransform', 'transform'].forEach(function (p) {
        if (typeof body.style[p] !== 'undefined') {
            prop = p
        }
    })

    if (arguments.length) {
        setElement(el)
    }

    return exports
}

function nitialization(howBusy) {
    let gauge = new Gauge(document.getElementById('gauge'))
    gauge.value(howBusy)
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsY0FBYyxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEseUJBQXlCLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxlQUFlLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsT0FBTyxVQUFVLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0s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Q0EsbUVBQW1FLFdBQVc7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLE1BQU07QUFDdEYsZ0ZBQWdGLE1BQU07QUFDdEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxvQ0FBb0MsSUFBSTtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxlQUFlLElBQUk7QUFDcEYsc0VBQXNFLElBQUk7QUFDMUUscURBQXFELElBQUk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbi1maW5hbC8uL3NvbHV0aW9uL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8va2FuYmFuLWZpbmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZmluYWwvLi9zb2x1dGlvbi9zdHlsZXMuY3NzPzU5Y2YiLCJ3ZWJwYWNrOi8va2FuYmFuLWZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2thbmJhbi1maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuLWZpbmFsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2thbmJhbi1maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rYW5iYW4tZmluYWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2FuYmFuLWZpbmFsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2thbmJhbi1maW5hbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2FuYmFuLWZpbmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2FuYmFuLWZpbmFsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2FuYmFuLWZpbmFsLy4vc29sdXRpb24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaXR0ZXI6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAycztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG4ud2FpdGluZ0ZvckRyb3Age1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aGlyZCk7XFxyXFxufVxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5saSB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDgwcHg7XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8ge1xcclxcbiAgICBib3gtc2hhZG93OiAxNXB4IDVweCAzMHB4ICMwMDAwMDA7XFxyXFxufSAvKlxcclxcbi5pbmZvU2VjID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZsZXg6IDEgMTAwJTtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5pbmZvU2VjIHtcXHJcXG4gICAgZmxleDogMyAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2xkSW5mbyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoaXJkKTtcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxufSAqL1xcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTUlO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Yk1haW5TZWMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IHZhcigtLWNvbG9yLXRoaXJkKTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG4uaW5mbyB7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG59XFxyXFxuLm1haW5TZWMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbnNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG59XFxyXFxuI3BhZ2UtdGl0bGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3NlYXJjaFNlYyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDElO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbiN0b2RvU2VjIHtcXHJcXG4gICAgd2lkdGg6IDMxJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbiNpblByb2dyZXNzU2VjIHtcXHJcXG4gICAgd2lkdGg6IDMxJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbiNkb25lU2VjIHtcXHJcXG4gICAgd2lkdGg6IDMxJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbiNhZGRzZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbG9ycyAqL1xcclxcblxcclxcbi50aGVtZS1wdXJwbGUge1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICM1MDFiMWQ7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjODM2NzdiO1xcclxcbiAgICAtLWNvbG9yLXRoaXJkOiAjNjQ0ODVjO1xcclxcbiAgICAtLWNvbG9yLWFjY2VudDogIzJlMTExNDtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjYWRhZGFkO1xcclxcbn1cXHJcXG4udGhlbWUtY3JlYXRpdmUge1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNkNzk5MjI7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjZWZlMmJhO1xcclxcbiAgICAtLWNvbG9yLXRoaXJkOiAjZjEzYzIwO1xcclxcbiAgICAtLWNvbG9yLWFjY2VudDogIzQwNTZhMTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjYzVjYmUzO1xcclxcbn1cXHJcXG4udGhlbWUtaW52aXRpbmcge1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNlNzcxN2Q7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjYzJjYWQwO1xcclxcbiAgICAtLWNvbG9yLXRoaXJkOiAjYzJiOWIwO1xcclxcbiAgICAtLWNvbG9yLWFjY2VudDogIzdlNjg1YTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjYWZkMjc1O1xcclxcbn1cXHJcXG4udGhlbWUtc2xlZWsge1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMyYzM1MzE7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjMTE2NDY2O1xcclxcbiAgICAtLWNvbG9yLXRoaXJkOiAjZDliMDhjO1xcclxcbiAgICAtLWNvbG9yLWFjY2VudDogI2ZmY2I5YTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjZDFlOGUyO1xcclxcbn1cXHJcXG4udGhlbWUtYXVkYWNpb3VzIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMjcyNzI3O1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogIzc0NzQ3NDtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogI2ZmNjUyZjtcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICNmZmU0MDA7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogIzE0YTc2YztcXHJcXG59XFxyXFxuLnRoZW1lLXRyYWRpdGlvbmFsIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjODhiZGJjO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogIzI1NGU1ODtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogIzExMmQzMjtcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICM0ZjRhNDE7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogIzZlNjY1ODtcXHJcXG59XFxyXFxuLnRoZW1lLWxvdmUge1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICNhMWMzZDE7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjYjM5YmM4O1xcclxcbiAgICAtLWNvbG9yLXRoaXJkOiAjZjBlYmY0O1xcclxcbiAgICAtLWNvbG9yLWFjY2VudDogI2YxNzJhMTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjZTY0Mzk4O1xcclxcbn1cXHJcXG4udGhlbWUtc3RyaWtpbmcge1xcclxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMxNzI2MDU7XFxyXFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjMTc2NTIxO1xcclxcbiAgICAtLWNvbG9yLXRoaXJkOiAjNTM5MDBmO1xcclxcbiAgICAtLWNvbG9yLWFjY2VudDogI2E0YTcxZTtcXHJcXG4gICAgLS1mb250LWNvbG9yOiAjZDZjZTE1O1xcclxcbn1cXHJcXG4vKiBidXR0b24gKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VsZWN0IG9wdGlvbiAqL1xcclxcbi5zZWxlY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAyNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogMCAzMHB4IDAgMTBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzMzMztcXHJcXG4gICAgYm9yZGVyLXRvcDogIzIyMiBzb2xpZCAxcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0OmZvY3VzIC5vcHRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxyXFxuICAgIG9yZGVyOiAxO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB0b3A6IGNhbGMoNTAlIC0gMi41cHgpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xcclxcbn1cXHJcXG4vKiBsb2FkaW5nIHNwaW5uZXIgKi9cXHJcXG5Aa2V5ZnJhbWVzIGxkaW8tNmNwdmppMTZnNzMge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICA1MCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxkaW8tNmNwdmppMTZnNzMgZGl2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBhbmltYXRpb246IGxkaW8tNmNwdmppMTZnNzMgMS4xNTAwMDAwMDAwMDAwMDAxcyBsaW5lYXIgaW5maW5pdGU7XFxyXFxuICAgIHdpZHRoOiA1NHB4O1xcclxcbiAgICBoZWlnaHQ6IDU0cHg7XFxyXFxuICAgIHRvcDogMjNweDtcXHJcXG4gICAgbGVmdDogMjNweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDMuOTAwMDAwMDAwMDAwMDAwNHB4IDAgMCAjZTE1YjY0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyN3B4IDI4Ljk1cHg7XFxyXFxufVxcclxcbi5yZW1vdmUge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbi5sb2FkZXIge1xcclxcbiAgICB3aWR0aDogOThweDtcXHJcXG4gICAgaGVpZ2h0OiA5OHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG4ubGRpby02Y3B2amkxNmc3MyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDAuOTgpO1xcclxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDsgLyogc2VlIG5vdGUgYWJvdmUgKi9cXHJcXG59XFxyXFxuLmxkaW8tNmNwdmppMTZnNzMgZGl2IHtcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcbi8qIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vICovXFxyXFxuLyogZm9ybSBub3QgbWluZSAqL1xcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5NSU7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuLmZvcm0gaDEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxyXFxuICAgIGNvbG9yOiAjNWM1YzVjO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcbi5mb3JtIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uZm9ybSBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG4uZm9ybSBsaTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvcm0gbGkgPiBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTE5cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDE0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0nZGF0ZSddLFxcclxcbi5mb3JtIGlucHV0W3R5cGU9J2RhdGV0aW1lJ10sXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0nZW1haWwnXSxcXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSdudW1iZXInXSxcXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSdzZWFyY2gnXSxcXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSd0aW1lJ10sXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0ndXJsJ10sXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcXHJcXG4uZm9ybSB0ZXh0YXJlYSxcXHJcXG4uZm9ybSBzZWxlY3Qge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGxpID4gc3BhbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogM3B4O1xcclxcbiAgICBtYXJnaW46IDAgLTlweCAtOXB4IC05cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNTtcXHJcXG59XFxyXFxuLmZvcm0gdGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcbi5mb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddLFxcclxcbi5mb3JtIGlucHV0W3R5cGU9J2J1dHRvbiddIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlcixcXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSdidXR0b24nXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGhlIGdvdWdlICovXFxyXFxuLyogR0FVR0UgICAoSSBESUROVCBXUk9URSBUSEFUIENPREUpKi9cXHJcXG5cXHJcXG4uZ2F1Z2Uge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZV9fY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2VfX2JhY2tncm91bmQge1xcclxcbiAgICB6LWluZGV4OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHggMzAwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2VfX2RhdGEge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweCAzMDBweCAwIDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19jZW50ZXIge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4IDMwMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19tYXJrZXIge1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZV9fbmVlZGxlIHtcXHJcXG4gICAgei1pbmRleDogNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhpcmQpO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxyXFxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19sYWJlbHMge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19sYWJlbC0tbG93IHtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2VfX2xhYmVsLS1zcGFjZXIge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2VfX2xhYmVsLS1oaWdoIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2Uge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTIwcHggKyAzZW0pO1xcclxcbn1cXHJcXG4uZ2F1Z2VfX2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuLmdhdWdlX19tYXJrZXIge1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICBsZWZ0OiAxMTkuNXB4O1xcclxcbn1cXHJcXG4uZ2F1Z2VfX2JhY2tncm91bmQge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcbi5nYXVnZV9fY2VudGVyIHtcXHJcXG4gICAgd2lkdGg6IDE0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDcycHg7XFxyXFxuICAgIHRvcDogNDhweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDQ4cHg7XFxyXFxufVxcclxcbi5nYXVnZV9fZGF0YSB7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuLmdhdWdlX19uZWVkbGUge1xcclxcbiAgICBsZWZ0OiAxMjBweDtcXHJcXG4gICAgdG9wOiAxMTdweDtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG4uZ2F1Z2VfX2xhYmVscyB7XFxyXFxuICAgIHRvcDogMTIwcHg7XFxyXFxuICAgIHdpZHRoOiAyNDBweDtcXHJcXG59XFxyXFxuLmdhdWdlX19sYWJlbC0tbG93IHtcXHJcXG4gICAgd2lkdGg6IDQ4cHg7XFxyXFxufVxcclxcbi5nYXVnZV9fbGFiZWwtLXNwYWNlciB7XFxyXFxuICAgIHdpZHRoOiAxNDRweDtcXHJcXG59XFxyXFxuLmdhdWdlX19sYWJlbC0taGlnaCB7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XFxyXFxuICAgIC5nYXVnZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTUwcHggKyAzZW0pO1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhdWdlX19tYXJrZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgIGxlZnQ6IDE0OS41cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhdWdlX19iYWNrZ3JvdW5kIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhdWdlX19jZW50ZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgICAgICAgdG9wOiA2MHB4O1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhdWdlX19kYXRhIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhdWdlX19uZWVkbGUge1xcclxcbiAgICAgICAgbGVmdDogMTUwcHg7XFxyXFxuICAgICAgICB0b3A6IDE0N3B4O1xcclxcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fbGFiZWxzIHtcXHJcXG4gICAgICAgIHRvcDogMTUwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhdWdlX19sYWJlbC0tbG93IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fbGFiZWwtLXNwYWNlciB7XFxyXFxuICAgICAgICB3aWR0aDogMTgwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhdWdlX19sYWJlbC0taGlnaCB7XFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2UtLWxpdmV1cGRhdGUgLmdhdWdlX19kYXRhLFxcclxcbi5nYXVnZS0tbGl2ZXVwZGF0ZSAuZ2F1Z2VfX25lZWRsZSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogRm9yIGEgZ2l2ZW4gZ2F1Z2UgdmFsdWUsIHgsIHJhbmdpbmcgZnJvbSAwLjAgdG8gMS4wLCBzZXRcXHJcXG4gKiB0aGUgYHRyYW5zZm9ybTogcm90YXRlKClgIHByb3BlcnR5IGFjY29yZGluZyB0byB0aGVcXHJcXG4gKiBmb2xsb3dpbmcgZXF1YXRpb246IGAtMC41ICsgMC41eCB0dXJuc2AgVGhlIGRlZmF1bHRcXHJcXG4gKiBwcm9wZXJ0aWVzIGJlbG93IHJlcHJlc2VudCBhbiB4IHZhbHVlIG9mIDAuXFxyXFxuICovXFxyXFxuXFxyXFxuLmdhdWdlX19kYXRhIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMC41dHVybik7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTAuNXR1cm4pO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTAuNXR1cm4pO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMC41dHVybik7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0wLjV0dXJuKTtcXHJcXG59XFxyXFxuLmdhdWdlX19uZWVkbGUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0wLjV0dXJuKTtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMC41dHVybik7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMC41dHVybik7XFxyXFxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC0wLjV0dXJuKTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTAuNXR1cm4pO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zb2x1dGlvbi9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVDOztBQUVIO0lBQ0ksd0NBQXdDO0lBQ3hD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akI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO1FBQ1osU0FBUztRQUNULGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxVQUFVO1FBQ1YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7O0lBRUksc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtJQUNJLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Qml0dGVyOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMnM7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuLndhaXRpbmdGb3JEcm9wIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhpcmQpO1xcclxcbn1cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWluLWhlaWdodDogODBweDtcXHJcXG59XFxyXFxubGkge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbn1cXHJcXG5oMiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMTVweCA1cHggMzBweCAjMDAwMDAwO1xcclxcbn0gLypcXHJcXG4uaW5mb1NlYyA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmbGV4OiAxIDEwMCU7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uaW5mb1NlYyB7XFxyXFxuICAgIGZsZXg6IDMgMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sZEluZm8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aGlyZCk7XFxyXFxuICAgIG1hcmdpbjogM3B4O1xcclxcbn0gKi9cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgd2lkdGg6IDE1JTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4uaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5zdWJNYWluU2VjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1jb2xvci10aGlyZCk7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG59XFxyXFxuLmluZm8ge1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxufVxcclxcbi5tYWluU2VjIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMiU7XFxyXFxufVxcclxcbiNwYWdlLXRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNzZWFyY2hTZWMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxJTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG4jdG9kb1NlYyB7XFxyXFxuICAgIHdpZHRoOiAzMSU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4jaW5Qcm9ncmVzc1NlYyB7XFxyXFxuICAgIHdpZHRoOiAzMSU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4jZG9uZVNlYyB7XFxyXFxuICAgIHdpZHRoOiAzMSU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG4jYWRkc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb2xvcnMgKi9cXHJcXG5cXHJcXG4udGhlbWUtcHVycGxlIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjNTAxYjFkO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogIzgzNjc3YjtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogIzY0NDg1YztcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICMyZTExMTQ7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogI2FkYWRhZDtcXHJcXG59XFxyXFxuLnRoZW1lLWNyZWF0aXZlIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjZDc5OTIyO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogI2VmZTJiYTtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogI2YxM2MyMDtcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICM0MDU2YTE7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogI2M1Y2JlMztcXHJcXG59XFxyXFxuLnRoZW1lLWludml0aW5nIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjZTc3MTdkO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogI2MyY2FkMDtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogI2MyYjliMDtcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICM3ZTY4NWE7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogI2FmZDI3NTtcXHJcXG59XFxyXFxuLnRoZW1lLXNsZWVrIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMmMzNTMxO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogIzExNjQ2NjtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogI2Q5YjA4YztcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICNmZmNiOWE7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogI2QxZThlMjtcXHJcXG59XFxyXFxuLnRoZW1lLWF1ZGFjaW91cyB7XFxyXFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzI3MjcyNztcXHJcXG4gICAgLS1jb2xvci1zZWNvbmRhcnk6ICM3NDc0NzQ7XFxyXFxuICAgIC0tY29sb3ItdGhpcmQ6ICNmZjY1MmY7XFxyXFxuICAgIC0tY29sb3ItYWNjZW50OiAjZmZlNDAwO1xcclxcbiAgICAtLWZvbnQtY29sb3I6ICMxNGE3NmM7XFxyXFxufVxcclxcbi50aGVtZS10cmFkaXRpb25hbCB7XFxyXFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzg4YmRiYztcXHJcXG4gICAgLS1jb2xvci1zZWNvbmRhcnk6ICMyNTRlNTg7XFxyXFxuICAgIC0tY29sb3ItdGhpcmQ6ICMxMTJkMzI7XFxyXFxuICAgIC0tY29sb3ItYWNjZW50OiAjNGY0YTQxO1xcclxcbiAgICAtLWZvbnQtY29sb3I6ICM2ZTY2NTg7XFxyXFxufVxcclxcbi50aGVtZS1sb3ZlIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjYTFjM2QxO1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogI2IzOWJjODtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogI2YwZWJmNDtcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICNmMTcyYTE7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogI2U2NDM5ODtcXHJcXG59XFxyXFxuLnRoZW1lLXN0cmlraW5nIHtcXHJcXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMTcyNjA1O1xcclxcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogIzE3NjUyMTtcXHJcXG4gICAgLS1jb2xvci10aGlyZDogIzUzOTAwZjtcXHJcXG4gICAgLS1jb2xvci1hY2NlbnQ6ICNhNGE3MWU7XFxyXFxuICAgIC0tZm9udC1jb2xvcjogI2Q2Y2UxNTtcXHJcXG59XFxyXFxuLyogYnV0dG9uICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi8qIHNlbGVjdCBvcHRpb24gKi9cXHJcXG4uc2VsZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMzBweCAwIDEwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzMzM7XFxyXFxuICAgIGJvcmRlci10b3A6ICMyMjIgc29saWQgMXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdDpmb2N1cyAub3B0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgbGFiZWwge1xcclxcbiAgICBvcmRlcjogMTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYmFja2dyb3VuZDogIzY2NjtcXHJcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDIuNXB4KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgYmFja2dyb3VuZDogIzY2NjtcXHJcXG59XFxyXFxuLyogbG9hZGluZyBzcGlubmVyICovXFxyXFxuQGtleWZyYW1lcyBsZGlvLTZjcHZqaTE2ZzczIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5sZGlvLTZjcHZqaTE2ZzczIGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBsZGlvLTZjcHZqaTE2ZzczIDEuMTUwMDAwMDAwMDAwMDAwMXMgbGluZWFyIGluZmluaXRlO1xcclxcbiAgICB3aWR0aDogNTRweDtcXHJcXG4gICAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgICB0b3A6IDIzcHg7XFxyXFxuICAgIGxlZnQ6IDIzcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAzLjkwMDAwMDAwMDAwMDAwMDRweCAwIDAgI2UxNWI2NDtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMjdweCAyOC45NXB4O1xcclxcbn1cXHJcXG4ucmVtb3ZlIHtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG4ubG9hZGVyIHtcXHJcXG4gICAgd2lkdGg6IDk4cHg7XFxyXFxuICAgIGhlaWdodDogOThweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuLmxkaW8tNmNwdmppMTZnNzMge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgwLjk4KTtcXHJcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IC8qIHNlZSBub3RlIGFib3ZlICovXFxyXFxufVxcclxcbi5sZGlvLTZjcHZqaTE2ZzczIGRpdiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbn1cXHJcXG4vKiBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAqL1xcclxcbi8qIGZvcm0gbm90IG1pbmUgKi9cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIG1heC13aWR0aDogOTUlO1xcclxcbiAgICBtYXJnaW46IDUwcHggYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcbi5mb3JtIGgxIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcclxcbiAgICBjb2xvcjogIzVjNWM1YztcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbn1cXHJcXG4uZm9ybSB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmZvcm0gbGkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogOXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuLmZvcm0gbGk6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb3JtIGxpID4gbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xOXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLFxcclxcbi5mb3JtIGlucHV0W3R5cGU9J2RhdGUnXSxcXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSdkYXRldGltZSddLFxcclxcbi5mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0nbnVtYmVyJ10sXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0nc2VhcmNoJ10sXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0ndGltZSddLFxcclxcbi5mb3JtIGlucHV0W3R5cGU9J3VybCddLFxcclxcbi5mb3JtIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXFxyXFxuLmZvcm0gdGV4dGFyZWEsXFxyXFxuLmZvcm0gc2VsZWN0IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBsaSA+IHNwYW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgbWFyZ2luOiAwIC05cHggLTlweCAtOXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTU7XFxyXFxufVxcclxcbi5mb3JtIHRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSxcXHJcXG4uZm9ybSBpbnB1dFt0eXBlPSdidXR0b24nXSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J106aG92ZXIsXFxyXFxuLmZvcm0gaW5wdXRbdHlwZT0nYnV0dG9uJ106aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi8qIHRoZSBnb3VnZSAqL1xcclxcbi8qIEdBVUdFICAgKEkgRElETlQgV1JPVEUgVEhBVCBDT0RFKSovXFxyXFxuXFxyXFxuLmdhdWdlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2VfX2NvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19iYWNrZ3JvdW5kIHtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4IDMwMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19kYXRhIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHggMzAwcHggMCAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxyXFxuICAgIC1vLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5nYXVnZV9fY2VudGVyIHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweCAzMDBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZV9fbWFya2VyIHtcXHJcXG4gICAgei1pbmRleDogMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2F1Z2VfX25lZWRsZSB7XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoaXJkKTtcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXHJcXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xcclxcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZV9fbGFiZWxzIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5nYXVnZV9fbGFiZWwtLWxvdyB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19sYWJlbC0tc3BhY2VyIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlX19sYWJlbC0taGlnaCB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEyMHB4ICsgM2VtKTtcXHJcXG59XFxyXFxuLmdhdWdlX19jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcbi5nYXVnZV9fbWFya2VyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgbGVmdDogMTE5LjVweDtcXHJcXG59XFxyXFxuLmdhdWdlX19iYWNrZ3JvdW5kIHtcXHJcXG4gICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbn1cXHJcXG4uZ2F1Z2VfX2NlbnRlciB7XFxyXFxuICAgIHdpZHRoOiAxNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA3MnB4O1xcclxcbiAgICB0b3A6IDQ4cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0OHB4O1xcclxcbn1cXHJcXG4uZ2F1Z2VfX2RhdGEge1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcbi5nYXVnZV9fbmVlZGxlIHtcXHJcXG4gICAgbGVmdDogMTIwcHg7XFxyXFxuICAgIHRvcDogMTE3cHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuLmdhdWdlX19sYWJlbHMge1xcclxcbiAgICB0b3A6IDEyMHB4O1xcclxcbiAgICB3aWR0aDogMjQwcHg7XFxyXFxufVxcclxcbi5nYXVnZV9fbGFiZWwtLWxvdyB7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbn1cXHJcXG4uZ2F1Z2VfX2xhYmVsLS1zcGFjZXIge1xcclxcbiAgICB3aWR0aDogMTQ0cHg7XFxyXFxufVxcclxcbi5nYXVnZV9fbGFiZWwtLWhpZ2gge1xcclxcbiAgICB3aWR0aDogNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAuZ2F1Z2Uge1xcclxcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDE1MHB4ICsgM2VtKTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2F1Z2VfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fbWFya2VyIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAxNDkuNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fYmFja2dyb3VuZCB7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fY2VudGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxODBweDtcXHJcXG4gICAgICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgICAgIHRvcDogNjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fZGF0YSB7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fbmVlZGxlIHtcXHJcXG4gICAgICAgIGxlZnQ6IDE1MHB4O1xcclxcbiAgICAgICAgdG9wOiAxNDdweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2F1Z2VfX2xhYmVscyB7XFxyXFxuICAgICAgICB0b3A6IDE1MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fbGFiZWwtLWxvdyB7XFxyXFxuICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2F1Z2VfX2xhYmVsLS1zcGFjZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5nYXVnZV9fbGFiZWwtLWhpZ2gge1xcclxcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhdWdlLS1saXZldXBkYXRlIC5nYXVnZV9fZGF0YSxcXHJcXG4uZ2F1Z2UtLWxpdmV1cGRhdGUgLmdhdWdlX19uZWVkbGUge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEZvciBhIGdpdmVuIGdhdWdlIHZhbHVlLCB4LCByYW5naW5nIGZyb20gMC4wIHRvIDEuMCwgc2V0XFxyXFxuICogdGhlIGB0cmFuc2Zvcm06IHJvdGF0ZSgpYCBwcm9wZXJ0eSBhY2NvcmRpbmcgdG8gdGhlXFxyXFxuICogZm9sbG93aW5nIGVxdWF0aW9uOiBgLTAuNSArIDAuNXggdHVybnNgIFRoZSBkZWZhdWx0XFxyXFxuICogcHJvcGVydGllcyBiZWxvdyByZXByZXNlbnQgYW4geCB2YWx1ZSBvZiAwLlxcclxcbiAqL1xcclxcblxcclxcbi5nYXVnZV9fZGF0YSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTAuNXR1cm4pO1xcclxcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0wLjV0dXJuKTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0wLjV0dXJuKTtcXHJcXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTAuNXR1cm4pO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMC41dHVybik7XFxyXFxufVxcclxcbi5nYXVnZV9fbmVlZGxlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMC41dHVybik7XFxyXFxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTAuNXR1cm4pO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTAuNXR1cm4pO1xcclxcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtMC41dHVybik7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0wLjV0dXJuKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZXMuY3NzJ1xyXG5cclxuLy9cclxuXHJcbi8vREFUQSBTVFJVQ1RVUkVTLVxyXG5cclxuLy8qKipcInRhc2tzXCIgOlxyXG4vL3dpbGwgaGFuZGxlIGFsbCBvZiB0aGUgdGFza3MgZGF0YSBzdHJ1Y3R1cmUgYW5kIHRoZSB3b3JrIHdpdGggdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIGFwaSAqL1xyXG4vL2VhY2ggYXJyYXkgY29udGFpbnMgc3RyaW5nJ3MtIHRoZSB0aXRsZXMgb2YgdGhlIHRhc2tzLlxyXG4vL0VWRVJZIFRJVExFIElTIFVOSVFFISAtIHRoZSBzb2x1dGlvbiBibG9ja3MgdGhlIHVzZXIgZnJvbSBhZGRpbmcgMiBzYW1lIHRpdGxlcy5cclxuXHJcbi8vXHJcblxyXG5sZXQgdGFza3MgPSB7XHJcbiAgICB0b2RvOiBbXSxcclxuICAgICdpbi1wcm9ncmVzcyc6IFtdLFxyXG4gICAgZG9uZTogW10sXHJcbn1cclxuXHJcbi8vKioqXCJ0YXNrRXh0cmFJbmZvXCI6XHJcbi8vd2lsbCBoYW5kbGUgYWxsIG9mIHRoZSBleHRyYSB0YXNrcyBkYXRhIHN0cnVjdHVyZSBhbmQgdGhlIHdvcmsgd2l0aCBsb2NhbCBzdG9yYWdlXHJcbi8vRUFDSCBcInRhc2tzXCIgVElUTEUgSVMgQSBLRVkgVE8gSVRTIERBVEEgSU4gXCJ0YXNrRXh0cmFJbmZvXCIuXHJcbi8vRk9SIEVYU0FNUExFOlxyXG4vL1xyXG4vLyAgIFwibGF1bmRyeVwiOiB7XHJcblxyXG4vLyAgICAgIGRlc2NyaXB0aW9uOiBcIkkgaGF2ZSB0byBkbyBsYXVuZHJ5IGJlY2F1c2VcclxuLy8gICAgICBpdCdzIGFscmVhZHkgaGFyZCBmb+KApmV0IGludG8gYSByb29tIHdpdGggdG9vXHJcbi8vICAgICAgbWFueSBjbG90aGVzIG9uIHRoZSBmbG9vclwiLFxyXG5cclxuLy8gICAgICBwcmlvcml0eTogJzcnLFxyXG5cclxuLy8gICAgICBkZWFkbGluZTogJzIwMjEtMDktMjcnLFxyXG5cclxuLy8gICAgICB0aW1lRXN0aW1hdGVkOiAnMScsXHJcblxyXG4vLyAgICAgIHBhcmVudFRhc2s6ICdIb3VzZXdvcmsnfVxyXG5cclxuLy9lYWNoIG9mIHRoZSBGaWVsZHMgY2FuIGJlIG51bGwuIHRoaXMgaXMgbm9tIG1hbmRhdG9yeSB0byBhZGQgaW4gaW5mby5cclxuLy90aGUgRmllbGRzOlxyXG5cclxuLy9kZXNjcmlwdGlvbiA6IGZvciBjYXJpY3VyaXplIG1vcmUgc3Blc2lmaWMgdGhlIHRhc2suXHJcblxyXG4vL3ByaW9yaXR5KDEtMTApOldIRU4gOlxyXG4vLyAgICAgICAgICAgICAgMS0gaWYgaSBmaWxsIGJvYXJkIGFuZCBoYXZlIG5vdGhpbiBlbHNlIGltcG9ydGFudCB0byBkby5cclxuLy8gICAgICAgICAgICAgIDEwLSBpdHMgYSBtYXR0ZXIgb2YgbGlmZSBhbmQgZGVhdGggIVxyXG5cclxuLy9kZWFkbGluZTogd2hlbiBkb2VzIHRoaXMgdGFzayBoYXZlIHRvIGJlIGRvbmUuXHJcblxyXG4vL3RpbWVFc3RpbWF0ZWQ6IEN1bXVsYXRpdmUgd29yayBkYXlzIHBsYW5uZWQgZm9yIHRoaXMgdGFza1xyXG5cclxuLy9wYXJlbnRUYXNrOlRoaXMgdGFzayBpcyBhIHN1YnRhc2sgb2YgdGhlIGdpdmVuIHBhcmVudCB0YXNrLlxyXG5cclxubGV0IHRhc2tFeHRyYUluZm8gPSB7fVxyXG5cclxuLy9USEUgV09SSyBXSVRIIExPQ0FMIFNUT1JBR0U6XHJcblxyXG4vL0kgVVNFIElUIEZPUiAzIERJRkZFUkFOVCBQQVJBTUVURVJTIFRPIFNBVkU6XHJcblxyXG4vL1widGFza3NcIlxyXG5cclxuLy9cInRhc2tFeHRyYUluZm9cIlxyXG5cclxuLy9cInRoZW1lXCJcclxuXHJcbi8vYWxsIHRoZSB3b3JrZmxvd3Mgd2l0aCBsb2NhbHN0b3JhZ2UgYXJlIHRoZSBzYW1lIDpcclxuXHJcbi8vLUlOSUlUQUxJWkUgVEhFIEVNUFRZIE9CSkVDVFxyXG5cclxuLy8tSUYgVEhFUkUgSVMgREFUQSBPRiBUSElTIFBBUkFNRVRFUiBJTiBMT0NBTCBTVE9SQUdFLCBVU0UgSVRcclxuXHJcbi8vLUVMU0UgU0VORCBUSEUgQkFTRSBTVFJVQ1RVUkUgVE8gTE9DQUwgU1RPUkFHRSBBTkQgQ09OVElOVUUgV0lUSCBFTVBUWSBEQVRBLlxyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2UudGFza3MpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcclxufSBlbHNlIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSlcclxuXHJcbmlmICghbG9jYWxTdG9yYWdlLnRhc2tFeHRyYUluZm8pIHtcclxuICAgIGxldCBpdGVtVG9TZW5kID0gT2JqZWN0LmFzc2lnbih7fSwgdGFza0V4dHJhSW5mbykgLy9jbG9uaW5nIHRhc2tFeHRyYUluZm9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrRXh0cmFJbmZvJywgSlNPTi5zdHJpbmdpZnkoaXRlbVRvU2VuZCkpIC8vc2VuZGluZyBjbG9uZSB0byBsb2NhbFxyXG59IGVsc2Uge1xyXG4gICAgbGV0IGl0ZW1Gcm9tTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrRXh0cmFJbmZvJykpIC8vZ2V0IHRoZSBpdGVtLlxyXG4gICAgdGFza0V4dHJhSW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW1Gcm9tTG9jYWwpXHJcbn1cclxuaWYgKCFsb2NhbFN0b3JhZ2UudGhlbWUpIHNldFRoZW1lKCd0aGVtZS1pbnZpdGluZycpXHJcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSBsb2NhbFN0b3JhZ2UudGhlbWVcclxuXHJcbi8vaW5pdGlhbGl6ZSBwYWdlOlxyXG5cclxuZGlzcGxheUVsZW1lbnRzKClcclxuXHJcbi8vYm90dG9ucyBldmVudHMgaGFuZGFsaW5nIGluc3RhbGxhdGlvblxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1hZGQtdG8tZG8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZFRvRG9UYXNrKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWFkZC1pbi1wcm9ncmVzcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlYWRkSW5Qcm9ncmVzc1Rhc2spXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYWRkLWRvbmUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZWFkZERvbmVUYXNrKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0FkZEluZm8nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dFeHRyYVRvZG8pXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpblByb2dyZXNzQWRkSW5mbycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0V4dHJhSW5Qcm9ncmVzcylcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVBZGRJbmZvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RXh0cmFEb25lKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5Qcm9ncmVzc1Rhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZW1vdmUpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b0RvVGFza3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlbW92ZSlcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVUYXNrcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUmVtb3ZlKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNhdmUpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTG9hZClcclxuXHJcbi8vIHRhc2sgZXZlbnRzIGhhbmRhbGluZyBpbnN0YWxsYXRpb25cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZVNlYXJjaEtleXVwKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1Rhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVyUGFyZW50KVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5Qcm9ncmVzc1Rhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVyUGFyZW50KVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZVRhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbW91c2VPdmVyUGFyZW50KVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1Rhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1vdXNlbGVhdmVQYXJlbnQpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpblByb2dyZXNzVGFza3MnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VsZWF2ZVBhcmVudClcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmVUYXNrcycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlUGFyZW50KVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9Eb1Rhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBoYW5kbGVEdWJsZUNsaWNrKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5Qcm9ncmVzc1Rhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBoYW5kbGVEdWJsZUNsaWNrKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZVRhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCBoYW5kbGVEdWJsZUNsaWNrKVxyXG5cclxuLy9GVU5DVElPTlNcclxuXHJcbi8vRVhUUkEtRGF0YSBwcm9jZXNzaW5nIGZ1bmN0aW9uczpcclxuXHJcbmZ1bmN0aW9uIGRheXNsZWZ0KHRpdGxlKSB7XHJcbiAgICAvL1BhcmFtZXRlcnM6dGFza3MgdGl0bGVcclxuICAgIC8vcmV0dXJuczpkYXlzIGxlZnQgdGlsbCBkZWFkbGluZVxyXG5cclxuICAgIGlmICh0YXNrRXh0cmFJbmZvLmhhc093blByb3BlcnR5KHRpdGxlKSkge1xyXG4gICAgICAgIGNvbnN0IGRlYWRsaW5lID0gbmV3IERhdGUodGFza0V4dHJhSW5mb1t0aXRsZV0uZGVhZGxpbmUpXHJcbiAgICAgICAgY29uc3QgcHJlc2VudERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgY29uc3Qgb25lRGF5ID0gMTAwMCAqIDYwICogNjAgKiAyNCAvL21pbGxpc2Vjb25kcyBpbiAxIGRheS5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gTWF0aC5yb3VuZChkZWFkbGluZS5nZXRUaW1lKCkgLSBwcmVzZW50RGF0ZS5nZXRUaW1lKCkpIC8gb25lRGF5XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50b0ZpeGVkKDApXHJcbiAgICB9XHJcbiAgICByZXR1cm5cclxufVxyXG5mdW5jdGlvbiBpbXBvcnRhbmNlKHRpdGxlKSB7XHJcbiAgICAvL1BhcmFtZXRlcnM6dGFza3MgdGl0bGVcclxuICAgIC8vY2FsY3VsYXRlIHRoZSBpbXBvcnRhbmNlIG9mIGV2ZXkgdGFzayBub3c6XHJcbiAgICAvL1xyXG4gICAgLy9pbXBvcnRhbmNlID0gICh0aW1lRXN0aW1hdGVkIC8gdGltZWxlZnQpICogcHJpb3JpdHlcclxuICAgIC8vXHJcbiAgICAvL1NPIEFTIFRIRSBERUFETElORSBHRVRUSU5HIENMT1NFLCBUSEUgVEFTSyBHRVQgSElHSEVSIElNUE9SVEFOQ0VcclxuICAgIC8vXHJcbiAgICAvL2ltcG9ydGFuY2UgY2FuIGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMVxyXG4gICAgLy9cclxuICAgIC8vMS0gbWVhbnMgeW91IGFyZSBmb3Igc3VyZSBsYXRlLihhY2NvcmRpbmcgdG8geW91ciB0aW1lIGVzdGltYXRpb24uKVxyXG4gICAgLy9cclxuICAgIC8vaXQgaXMgZGlmZmVyZW50IGZyb20gcHJpb3JpdHkhLCBpdCBpcyBkeW5hbWljIGFuZCBnZXQgY2hhbmdlIHdpdGggdGltZS5cclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy9yZXR1cm5zOmltcG9ydGFuY2VcclxuXHJcbiAgICBpZiAodGFza0V4dHJhSW5mby5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcclxuICAgICAgICBjb25zdCB0aW1lbGVmdCA9IGRheXNsZWZ0KHRpdGxlKVxyXG4gICAgICAgIGNvbnN0IHRpbWVFc3RpbWF0ZWQgPSB0YXNrRXh0cmFJbmZvW3RpdGxlXS50aW1lRXN0aW1hdGVkXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0YXNrRXh0cmFJbmZvW3RpdGxlXS5wcmlvcml0eVxyXG4gICAgICAgIGxldCBpbXBvcnRhbmNlID0gKHRpbWVFc3RpbWF0ZWQgLyB0aW1lbGVmdCkgKiBwcmlvcml0eVxyXG4gICAgICAgIGlmIChpbXBvcnRhbmNlIDwgMCkgcmV0dXJuIDBcclxuICAgICAgICBpZiAoaW1wb3J0YW5jZSA+IDEwKSByZXR1cm4gMVxyXG4gICAgICAgIHJldHVybiBpbXBvcnRhbmNlIC8gMTBcclxuICAgIH1cclxuICAgIHJldHVyblxyXG59XHJcblxyXG5mdW5jdGlvbiBob3dCdXN5KCkge1xyXG4gICAgLy9yZXR1cm4gdGhlIHN1bSBvZiB5b3VyIHRhc2tzIGltcG9ydGFuY2VcclxuICAgIC8vbWluIDogMFxyXG4gICAgLy9tYXggOiAxXHJcblxyXG4gICAgbGV0IGhvd0J1c3kgPSAwXHJcbiAgICBmb3IgKGxldCBzdGF0ZSBpbiB0YXNrcykge1xyXG4gICAgICAgIGZvciAobGV0IHRpdGxlIG9mIHRhc2tzW3N0YXRlXSkge1xyXG4gICAgICAgICAgICBpZiAodGFza0V4dHJhSW5mby5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkgJiYgaW1wb3J0YW5jZSh0aXRsZSkgJiYgc3RhdGUgIT09ICdkb25lJykge1xyXG4gICAgICAgICAgICAgICAgaG93QnVzeSArPSBpbXBvcnRhbmNlKHRpdGxlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGhvd0J1c3kgPCAwKSByZXR1cm4gMFxyXG4gICAgaWYgKGhvd0J1c3kgPiAxMCkgcmV0dXJuIDFcclxuICAgIHJldHVybiBob3dCdXN5IC8gMTBcclxufVxyXG5mdW5jdGlvbiBjb2xvckZyb21JbXBvcnRhbmNlKGltcG9ydGFuY2UpIHtcclxuICAgIC8vZ2VuZXJhdGVzIHJnYiBjb2xvciBmcm9tIGdpdmVuIGltcG9ydGFuY2UuXHJcbiAgICAvL2FzIHNhaWQgLCB3aGVuIGltcG9ydGFuY2UgaXMgbW9yZSB0aGFuIDEgLCB5b3UgYXJlIGZvciBzdXJlIGxhdGUuXHJcbiAgICAvL3JlZCA9IDAuNy0xIHNvIGl0IHdpbGwgYmUgcmVkLlxyXG4gICAgLy9ncmVlbiBpcyBiZXR3ZWVuIDAuMy0wLjdcclxuICAgIC8vZ3JheSB3aWxsIGJlIHRoZSBtb3N0IG5vbmUgaW1wb3J0YW50LTAuMS0wLjMuXHJcblxyXG4gICAgLy90aGlzIGNvbG9yIHdpbGwgcGUgcHJlc2VudGVkIGFzIHRoZSBleHRyYS1pbmZvLWJhciBiYWNrLWdyb3VuZCBjb2xvclxyXG5cclxuICAgIGNvbnN0IHIgPSBpbXBvcnRhbmNlICogMTIwICsgMTM1XHJcbiAgICBjb25zdCBnID0gKDEgLSBpbXBvcnRhbmNlKSAqIDEyMCArIDEwMFxyXG4gICAgcmV0dXJuIGByZ2IoJHtyfSwke2d9LDEyMClgXHJcbn1cclxuXHJcbi8vZGF0YWJhc2VzXHJcblxyXG5mdW5jdGlvbiBzZW5kVG9Mb2NhbCgpIHtcclxuICAgIC8vc2VuZGluZyBcInRhc2tzXCIgJiBcInRhc2tFeHRyYUluZm9cIiB0byBsb2NhbCBzdG9yYWdlXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxyXG4gICAgbGV0IGl0ZW1Ub1NlbmQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXNrRXh0cmFJbmZvKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tFeHRyYUluZm8nLCBKU09OLnN0cmluZ2lmeShpdGVtVG9TZW5kKSlcclxufVxyXG5cclxuLy9cInRhc2tzXCIgcHJvY2Vzc2luZyBmdW5jdGlvbnNcclxuXHJcbmZ1bmN0aW9uIHN0cmluZ1RvS2FiYWIoc3RyKSB7XHJcbiAgICAvL1BhcmFtZXRlcnM6c3RyaW5nIHdpdGggc3BhY2VzXHJcbiAgICAvL3JldHVybnM6a2FiYWIgc3RydWN0dWVkIHN0cmluZyhcIi1cIiBpbnN0ZWQgb2Ygc3BhY2UpXHJcblxyXG4gICAgbGV0IGthYmFiID0gJydcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzdHJbaV0gIT09ICcgJykge1xyXG4gICAgICAgICAgICBrYWJhYiArPSBzdHJbaV1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBrYWJhYiArPSAnLSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGthYmFiXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGthYmFiVG9TdHJpbmcoa2FiYWIpIHtcclxuICAgIC8vUGFyYW1ldGVyczprYWJhYiBzdHJ1Y3R1ZWQgc3RyaW5nKFwiLVwiIGluc3RlZCBvZiBzcGFjZSlcclxuICAgIC8vcmV0dXJuczpzdHJpbmcgd2l0aCBzcGFjZXNcclxuXHJcbiAgICBsZXQgc3RyID0gJydcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGthYmFiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGthYmFiW2ldICE9PSAnLScpIHtcclxuICAgICAgICAgICAgc3RyICs9IGthYmFiW2ldXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyICs9ICcgJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxufVxyXG5cclxuLy9hZGQgZGF0YSB0byBcInRhc2tzXCIgJiBcInRhc2tFeHRyYUluZm9cIlxyXG5cclxuZnVuY3Rpb24gZ2V0RXh0cmFJbnB1dChzdGF0ZSkge1xyXG4gICAgLy9nZXRzIGRhdGEgZnJvbSBpbnB1dFxyXG5cclxuICAgIGxldCBleHRyYUluZm8gPSB7fVxyXG4gICAgZXh0cmFJbmZvLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyArIHN0YXRlKS52YWx1ZVxyXG4gICAgZXh0cmFJbmZvLnByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JyArIHN0YXRlKS52YWx1ZVxyXG4gICAgZXh0cmFJbmZvLmRlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYWRsaW5lJyArIHN0YXRlKS52YWx1ZVxyXG4gICAgZXh0cmFJbmZvLnRpbWVFc3RpbWF0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZUVzdGltYXRlZCcgKyBzdGF0ZSkudmFsdWVcclxuICAgIGV4dHJhSW5mby5wYXJlbnRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudFRhc2snICsgc3RhdGUpLnZhbHVlXHJcbiAgICByZXR1cm4gZXh0cmFJbmZvXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2sodGl0bGUsIHN0YXRlKSB7XHJcbiAgICAvL1BhcmFtZXRlcnM6dGFzayB0aXRsZSwgc3RhdGU6XCJ0b2RvXCIvXCJpbi1wcm9ncmVzc1wiL1wiZG9uZVwiXHJcbiAgICAvL2FkZHMgYSB0YXNrIHRvIFwidGFza3NcIlxyXG4gICAgLy91cGRhdGVzIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAvL3VwZGF0ZXMgRE9NLlxyXG5cclxuICAgIHRhc2tzW3N0YXRlXS51bnNoaWZ0KHRpdGxlKVxyXG4gICAgc2VuZFRvTG9jYWwoKVxyXG4gICAgZGlzcGxheUVsZW1lbnRzKClcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXh0cmEodGl0bGUsIHN0YXRlKSB7XHJcbiAgICAvL1BhcmFtZXRlcnM6dGFzayB0aXRsZSwgc3RhdGU6XCJ0b2RvXCIvXCJpbi1wcm9ncmVzc1wiL1wiZG9uZVwiXHJcbiAgICAvL2FkZHMgYSB0YXNrIHRvIFwidGFza3NcIlxyXG4gICAgLy91cGRhdGVzIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICB0YXNrRXh0cmFJbmZvW3RpdGxlXSA9IE9iamVjdC5hc3NpZ24oe30sIGdldEV4dHJhSW5wdXQoc3RhdGUpKVxyXG4gICAgc2VuZFRvTG9jYWwoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVBZGRUb0RvVGFzaygpIHtcclxuICAgIC8vd2hlbiBcImFkZCB0b2RvIHRhc2tcIiBidXR0b24gaXMgcHJlc3NlZDpcclxuICAgIC8vdGFrZSB0aGUgcmVsYXZhbnQgaW5wdXQgdmFsdWVcclxuICAgIC8vc2VuZCBpdCB0byBhZGRUYXNrKCkgJiAgYWRkRXh0cmEoKVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1kby10YXNrJykudmFsdWVcclxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4dHJhVG9kbycpLmNsYXNzTGlzdC5jb250YWlucygnJykpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYVRvZG8nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIGlmIChpbnB1dENoZWNrKHRpdGxlKSkge1xyXG4gICAgICAgIGFkZEV4dHJhKHRpdGxlLCAnVG9kbycpXHJcbiAgICAgICAgYWRkVGFzayh0aXRsZSwgJ3RvZG8nKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVhZGRJblByb2dyZXNzVGFzaygpIHtcclxuICAgIC8vd2hlbiBcImFkZCBJbi1Qcm9ncmVzcyB0YXNrXCIgYnV0dG9uIGlzIHByZXNzZWQ6XHJcbiAgICAvL3Rha2UgdGhlIHJlbGF2YW50IGlucHV0IHZhbHVlXHJcbiAgICAvL3NlbmQgaXQgdG8gYWRkVGFzaygpICYgIGFkZEV4dHJhKClcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtaW4tcHJvZ3Jlc3MtdGFzaycpLnZhbHVlXHJcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYUluUHJvZ3Jlc3MnKS5jbGFzc0xpc3QuY29udGFpbnMoJycpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXh0cmFJblByb2dyZXNzJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBpZiAoaW5wdXRDaGVjayh0aXRsZSkpIHtcclxuICAgICAgICBhZGRFeHRyYSh0aXRsZSwgJ0luUHJvZ3Jlc3MnKVxyXG4gICAgICAgIGFkZFRhc2sodGl0bGUsICdpbi1wcm9ncmVzcycpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZWFkZERvbmVUYXNrKCkge1xyXG4gICAgLy93aGVuIFwiYWRkIGRvbmUgdGFza1wiIGJ1dHRvbiBpcyBwcmVzc2VkOlxyXG4gICAgLy90YWtlIHRoZSByZWxhdmFudCBpbnB1dCB2YWx1ZVxyXG4gICAgLy9zZW5kIGl0IHRvIGFkZFRhc2soKSAmICBhZGRFeHRyYSgpXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWRvbmUtdGFzaycpLnZhbHVlXHJcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYURvbmUnKS5jbGFzc0xpc3QuY29udGFpbnMoJycpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXh0cmFEb25lJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICBpZiAoaW5wdXRDaGVjayh0aXRsZSkpIHtcclxuICAgICAgICBhZGRFeHRyYSh0aXRsZSwgJ0RvbmUnKVxyXG4gICAgICAgIGFkZFRhc2sodGl0bGUsICdkb25lJylcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5wdXRDaGVjayhpbnB1dCkge1xyXG4gICAgLy9jaGVja3MgaWYgXCJpbnB1dFwiIGlzIHZhbGlkLlxyXG5cclxuICAgIGlmIChpbnB1dCA9PT0gJycgfHwgaG93TWFueVRhc2tzSGF2ZVRoYXROYW1lKGlucHV0KSA+IDAgfHwgaW5wdXQuaW5jbHVkZXMoJ1xcbicpIHx8IGlucHV0LmluY2x1ZGVzKCcgICcpKSB7XHJcbiAgICAgICAgYWxlcnQoJ2ludmFsaWQgaW5wdXQnKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gaG93TWFueVRhc2tzSGF2ZVRoYXROYW1lKHRpdGxlKSB7XHJcbiAgICAvL1BhcmFtZXRlcnM6dGl0bGVcclxuICAgIC8vcmV0dXJuczp0aGUgbnVtYmVyIG9mIHRpbWVzIFwidGl0bGVcIiBhcHBlciBpbiBcInRhc2tzXCJcclxuXHJcbiAgICBsZXQgaSA9IDBcclxuICAgIGZvciAobGV0IHN0YXRlIGluIHRhc2tzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrc1tzdGF0ZV0pIHtcclxuICAgICAgICAgICAgaWYgKHRhc2sgPT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpXHJcbn1cclxuXHJcbi8vdGFzayBtYW5pcHVsYXRpb25cclxuXHJcbmZ1bmN0aW9uIG1vdmVUYXNrKHRpdGxlLCB0YXJnZXQpIHtcclxuICAgIC8vUGFyYW1ldGVyczp0YXNrcyB0aXRsZSwgd2FudGVkIHRhcmdldCBzdGF0ZS4oXCJ0b2RvXCIvXCJpbi1wcm9ncmVzc1wiL1wiZG9uZVwiKVxyXG4gICAgLy9tb3ZlcyB0aGUgdGFzay5cclxuXHJcbiAgICByZW1vdmVUYXNrKHRpdGxlKVxyXG4gICAgYWRkVGFzayh0aXRsZSwgdGFyZ2V0KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5hbWUob2xkTmFtZSwgbmV3TmFtZSkge1xyXG4gICAgLy9QYXJhbWV0ZXJzOnRhc2tzIG9sZE5hbWUsIGFuZCBuZXdOYW1lKHRpdGxlcylcclxuICAgIC8vcmVuYW1lcyB0aGUgdGFzay5cclxuICAgIC8vdXBkYXRlcyBsb2NhbHN0b3JhZ2UgYW5kIERPTVxyXG5cclxuICAgIGZvciAobGV0IHN0YXRlIGluIHRhc2tzKSB7XHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrc1tzdGF0ZV0pIHtcclxuICAgICAgICAgICAgaWYgKHRhc2sgPT09IG9sZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tzW3N0YXRlXS5zcGxpY2UoaSwgMSwgbmV3TmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0YXNrRXh0cmFJbmZvW25ld05hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgdGFza0V4dHJhSW5mb1tvbGROYW1lXSlcclxuICAgIHNlbmRUb0xvY2FsKClcclxuICAgIGRpc3BsYXlFbGVtZW50cygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGl0bGUpIHtcclxuICAgIC8vUGFyYW1ldGVyczp0YXNrcyB0aXRsZS5cclxuICAgIC8vcmVtb3ZlcyB0aGlzIHRhc2sgZnJvbSBcInRhc2tzXCJcclxuICAgIC8vdXBkYXRlcyBsb2NhbHN0b3JhZ2UgYW5kIERPTVxyXG5cclxuICAgIGZvciAobGV0IHN0YXRlIGluIHRhc2tzKSB7XHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrc1tzdGF0ZV0pIHtcclxuICAgICAgICAgICAgaWYgKHRhc2sgPT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrc1tzdGF0ZV0uc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VuZFRvTG9jYWwoKVxyXG4gICAgZGlzcGxheUVsZW1lbnRzKClcclxufVxyXG5cclxuLy9ET01cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnbmFtZSwgY2hpbGRyZW4gPSBbXSwgY2xhc3NlcyA9IFtdLCBhdHRyaWJ1dGVzLCBldmVudHMpIHtcclxuICAgIC8vdGhlIG1vc3QgZ2VuZXJpYyBlbGVtZW50IGJ1aWxkZXIuXHJcbiAgICAvL3dlIHdpbGwgYnVpbGQgYWxsIHRoZSBlbGVtZW50cyBoZXJlLlxyXG5cclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWduYW1lKVxyXG5cclxuICAgIC8vY2hpbGRyZW5cclxuXHJcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgIH1cclxuXHJcbiAgICAvL2NsYXNzZXNcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNscyBvZiBjbGFzc2VzKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscylcclxuICAgIH1cclxuXHJcbiAgICAvL2F0dHJ1YnV0ZXNcclxuXHJcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJpYnV0ZXNbYXR0cl0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9hdHRydWJ1dGVzXHJcblxyXG4gICAgZm9yIChjb25zdCBldmVudCBpbiBldmVudHMpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGV2ZW50c1tldmVudF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRXh0cmFFbGVtZW50KHRpdGxlKSB7XHJcbiAgICAvL1BhcmFtZXRlcnM6dGFza3MgdGl0bGUuXHJcbiAgICAvL1RBS0VTIElORk9STUFUSU9OIEZST00gdGFza0V4dHJhSW5mbyAoSUYgSVQgRVhTSVNUKVxyXG4gICAgLy9CVUlMRFMgQSBET00gRUxFTU5UIE9VVCBPRiBUSElTIERBVEFcclxuICAgIC8vQVBQRU5EUyBJVCBBRlRFUiBUSEUgUkVMRVZBTlQgVEFTSyBFTEVNTlRcclxuICAgIC8vVEhJUyBGVU5DVElPTiBTdGFydHMgd29ya2luZyBPTkxZIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHRoZSByZWxldmFudCB0YXNrKG9wZW5FeHRyYUluZm8oKSlcclxuICAgIC8vb24gdGhlIG5leHQgY2xpY2sgb24gdGhlIHNhbWUgdGFzayBlbGVtZW50LCB0aGlzIGVsZW1lbnQgd2lsbCBiZSByZW1vdmVkLlxyXG5cclxuICAgIHRpdGxlID0ga2FiYWJUb1N0cmluZyh0aXRsZSlcclxuICAgIGNvbnN0IHJlbW92ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsncmVtb3ZlIHRhc2vinYwnXSwgWydyZW1vdmUnXSwge1xyXG4gICAgICAgIG5hbWU6ICdyZW1vdmUnLFxyXG4gICAgICAgICdkYXRhLXRpdGxlJzogc3RyaW5nVG9LYWJhYih0aXRsZSksXHJcbiAgICB9KVxyXG4gICAgbGV0IGV4dHJhSW5mb0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbcmVtb3ZlQnRuXSwgWydpbmZvJ10sIHtcclxuICAgICAgICAnZGF0YS10aXRsZS1leHN0cmEnOiBzdHJpbmdUb0thYmFiKHRpdGxlKSxcclxuICAgIH0pXHJcbiAgICBleHRyYUluZm9FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2InLCBbdGl0bGVdLCBbXSwge30pKVxyXG4gICAgZXh0cmFJbmZvRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvckZyb21JbXBvcnRhbmNlKGltcG9ydGFuY2UodGl0bGUpKVxyXG5cclxuICAgIGlmICh0YXNrRXh0cmFJbmZvLmhhc093blByb3BlcnR5KHRpdGxlKSkge1xyXG4gICAgICAgIGxldCBkYXlzID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsXHJcbiAgICAgICAgICAgIFsnZGF5cyBsZWZ0IChFc3RpbWF0ZWQgdGltZSk6JyArIGRheXNsZWZ0KHRpdGxlKSArICcoJyArIHRhc2tFeHRyYUluZm9bdGl0bGVdLnRpbWVFc3RpbWF0ZWRdICsgJyknLFxyXG4gICAgICAgICAgICBbJ2NvbGRJbmZvJ10sXHJcbiAgICAgICAgICAgIHt9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIGxldCBkZWFkbGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZGVhZGxpbmU6JyArIHRhc2tFeHRyYUluZm9bdGl0bGVdWydkZWFkbGluZSddXSwgWydjb2xkSW5mbyddLCB7fSlcclxuICAgICAgICBsZXQgY2FsY1ByaW9yaXR5ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydjYWxjdWxhdGVkIHByaW9yaXR5OicgKyBpbXBvcnRhbmNlKHRpdGxlKSAqIDEwXSwgWydjb2xkSW5mbyddLCB7fSlcclxuICAgICAgICBsZXQgcmlnaHQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbZGVhZGxpbmUsIGRheXMsIGNhbGNQcmlvcml0eV0sIFsncmlnaHQnXSwge30pXHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgW3Rhc2tFeHRyYUluZm9bdGl0bGVdLmRlc2NyaXB0aW9uXSwgWydkZXNjcmlwdGlvbiddLCB7fSlcclxuICAgICAgICBsZXQgaW5mb1NlYyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtkZXNjcmlwdGlvbiwgcmlnaHRdLCBbJ2luZm9TZWMnXSwge30pXHJcbiAgICAgICAgZXh0cmFJbmZvRWxlbWVudC5hcHBlbmRDaGlsZChpbmZvU2VjKVxyXG4gICAgfSBlbHNlIGV4dHJhSW5mb0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgW2BubyBleHRyYSBpbmZvcm1hdGlvbiBmb3IgJHt0aXRsZX1gXSwgW10sIHt9KSlcclxuXHJcbiAgICBsZXQga2FiYWJUaXRsZSA9IHN0cmluZ1RvS2FiYWIodGl0bGUpXHJcbiAgICBjb25zdCBwYXJlbnRHdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRpdGxlfj1cIiR7a2FiYWJUaXRsZX1cIl1gKVswXVxyXG4gICAgcGFyZW50R3Vlc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZXh0cmFJbmZvRWxlbWVudCwgcGFyZW50R3Vlc3QubmV4dFNpYmxpbmcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5FeHRyYUluZm8oZXZlbnQpIHtcclxuICAgIC8vYWRkcyBhIHJlbGV2YW50IGV4dHJhIGluZm8gZWxlbWVudCBhZnRlciB0aGUgdGFzayBlbGVtZW50XHJcbiAgICAvL2lmIGl0cyBleHNpc3QgYWxyZWFkeSwgcmVtb3ZlcyBpdC4oYmFzaWNsbHkgdG9nZ2lsaW5nKVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGRibENsaWNrZWQgPT09IHRydWUpIHJldHVyblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gc3RyaW5nVG9LYWJhYihldmVudC50YXJnZXQuZmlyc3RDaGlsZC53aG9sZVRleHQpXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRpdGxlLWV4c3RyYX49XCIke3RpdGxlfVwiXWApWzBdKVxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10aXRsZS1leHN0cmF+PVwiJHt0aXRsZX1cIl1gKVswXS5yZW1vdmUoKVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjcmVhdGVFeHRyYUVsZW1lbnQodGl0bGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMzAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0aXRsZSwgc3RhdGUpIHtcclxuICAgIC8vdXNlcyBjcmVhdGVFbGVtZW50IHRvIGNyZWF0IGFuIHRhc2sgZWxtZW50XHJcbiAgICAvL2FwcGVuZHMgaXQgdG8gdGhlIG1hdGNoaW5nIDx1bD5cclxuXHJcbiAgICBsZXQgbmV3VGFza0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdsaScsIFt0aXRsZV0sIFsndGFzaycsICdkcmFnZ2FibGUnXSwgeyAnZGF0YS10aXRsZSc6IHN0cmluZ1RvS2FiYWIodGl0bGUpIH0sIHt9KVxyXG4gICAgbmV3VGFza0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRXh0cmFJbmZvKVxyXG4gICAgbmV3VGFza0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xpY2tEcnVnQW5kRHJvcEhhbmRsZXIpXHJcblxyXG4gICAgaWYgKHN0YXRlID09PSAndG9kbycpIGFwcGVuZEVsZW1lbnQoJ3RvRG9UYXNrcycsIG5ld1Rhc2tFbGVtZW50KVxyXG4gICAgaWYgKHN0YXRlID09PSAnaW4tcHJvZ3Jlc3MnKSBhcHBlbmRFbGVtZW50KCdpblByb2dyZXNzVGFza3MnLCBuZXdUYXNrRWxlbWVudClcclxuICAgIGlmIChzdGF0ZSA9PT0gJ2RvbmUnKSBhcHBlbmRFbGVtZW50KCdkb25lVGFza3MnLCBuZXdUYXNrRWxlbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChwYXJlbnRJZCwgZWxlbWVudCkge1xyXG4gICAgLy9hcHBlbmRzIGVsZW1lbnQgY2hpbGQgdG8gcGFyZW50XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50SWQpLmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFza3MoKSB7XHJcbiAgICAvL3VzZXMgY3JlYXRlVGFza0VsZW1lbnQgdG8gY3JlYXRlIChhbmQgYXBwZW5kIHRvIG1hdGNoaW5nIHBhcmVudCkgYW4gZWxlbWVudCBmb3IgZWFjaCBcInRhc2tzXCIgb2JqZWN0LlxyXG5cclxuICAgIGZvciAobGV0IHN0YXRlIGluIHRhc2tzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrc1tzdGF0ZV0pIHtcclxuICAgICAgICAgICAgY3JlYXRlVGFza0VsZW1lbnQodGFzaywgc3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxjaGlsZHJlbnMocGFyZW50SWQpIHtcclxuICAgIC8vcmVtb3ZlIGFsbCB0aGUgY2hpbGRyZW5zIGZyb20gcGFyYW50XHJcblxyXG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElkKVxyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0Q2hpbGQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbFRhc2tzRWxlbWVudHMoKSB7XHJcbiAgICAvL3JlbW92ZSBhbGwgdGFza3MgZnJvbSB0aGUgdGFza3MgPHVsPiBlbGVtbnRzLlxyXG5cclxuICAgIHJlbW92ZUFsbGNoaWxkcmVucygndG9Eb1Rhc2tzJylcclxuICAgIHJlbW92ZUFsbGNoaWxkcmVucygnaW5Qcm9ncmVzc1Rhc2tzJylcclxuICAgIHJlbW92ZUFsbGNoaWxkcmVucygnZG9uZVRhc2tzJylcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUVsZW1lbnRzKCkge1xyXG4gICAgLy9pdGlhbGl6YXRpb24gdGhlIERPTSBQQUdFOlxyXG4gICAgLy9zZXRzIHRoZSBnYXVnZSBhY2NvcmRpbmcgdG8gaG93QnVzeSgpLlxyXG4gICAgLy9yZW1vdmUgcGFyZW50cyBmcm9tIGFsbCBjaGlsZHJlbnNcclxuICAgIC8vZmlsbCB0aGVtIGFnYWluIGZyb20gXCJ0YXNrc1wiXHJcblxyXG4gICAgbml0aWFsaXphdGlvbihob3dCdXN5KCkpXHJcbiAgICByZW1vdmVBbGxUYXNrc0VsZW1lbnRzKClcclxuICAgIGdlbmVyYXRlVGFza3MoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcclxuICAgIC8vZ2V0IHRoZW1lIGZyb20gc2VsZWN0b3IuXHJcbiAgICAvL3NldCBpdCB0byB0aGUgcGFnZVxyXG4gICAgLy9zZW5kIGl0IHRvIGxvY2FsIHN0b3JlZ2UuXHJcblxyXG4gICAgY29uc3QgdGhlbWVOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJykudmFsdWVcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lTmFtZSlcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZU5hbWVcclxufVxyXG5cclxuLy9TRUFSQ0hcclxuXHJcbmZ1bmN0aW9uIHNlYXJjaEJ5UXVlcnkocXVlcnkpIHtcclxuICAgIC8vUGFyYW1ldGVyczpRVUVSWSBXT1JEIE9SIFNFTlROQ0UuXHJcbiAgICAvL1JldHVybnM6VEFTS1MgVEhBVCBDT05UQUlOUyBJVC5cclxuXHJcbiAgICBpZiAocXVlcnkgPT09ICcnKSByZXR1cm4gdGFza3NcclxuXHJcbiAgICBsZXQgbG93ZXJDYXNlZFF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKSAvL2ZvciBjYXNlLWluc2Vuc2l0aXZlbHlcclxuXHJcbiAgICAvL2NyZWF0ZXMgXCJmb3VuZFwiIDogcmVwbGljYSBvZiBcInRhc2tzXCIgY29udGFpbiBvbmx5IHRoZSBtYXRjaGluZyB0YXNrcy5cclxuXHJcbiAgICBsZXQgZm91bmQgPSB7XHJcbiAgICAgICAgdG9kbzogW10sXHJcbiAgICAgICAgJ2luLXByb2dyZXNzJzogW10sXHJcbiAgICAgICAgZG9uZTogW10sXHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBzdGF0ZSBpbiB0YXNrcykge1xyXG4gICAgICAgIGZvciAobGV0IHRhc2sgb2YgdGFza3Nbc3RhdGVdKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJDYXNlZFF1ZXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRbc3RhdGVdLnB1c2godGFzaylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmb3VuZFxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Rm91bmRzKGZvdW5kKSB7XHJcbiAgICAvL3NpbXVsYXRlIGdlbmVyYXRlIHRhc2tzIGJ1dCB3aXRoIHRoZSBmb3VuZC5cclxuXHJcbiAgICByZW1vdmVBbGxUYXNrc0VsZW1lbnRzKClcclxuICAgIGZvciAobGV0IHN0YXRlIGluIGZvdW5kKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBmb3VuZFtzdGF0ZV0pIHtcclxuICAgICAgICAgICAgY3JlYXRlVGFza0VsZW1lbnQodGFzaywgc3RhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0VWRU5UIEhBTkRBTElORyBGVU5DVElPTlNcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNlYXJjaEtleXVwKCkge1xyXG4gICAgLy93aGVuIHRoZSB1c2VyIHJlbGVzZXMgYSBrZXkgaW4gdGhlIHNlYXJjaGJhcjpcclxuXHJcbiAgICBkaXNwbGF5Rm91bmRzKHNlYXJjaEJ5UXVlcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlKSlcclxufVxyXG5cclxuLy90b2dnbGUgdGhlIGV4dHJhIGluZm9ybWF0aW9uLWFkZGluZyBzZWN0aW9uIGZvciBlYWNoIHN0YXRlOlxyXG5cclxuZnVuY3Rpb24gc2hvd0V4dHJhVG9kbygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYVRvZG8nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0V4dHJhSW5Qcm9ncmVzcygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYUluUHJvZ3Jlc3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJylcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0V4dHJhRG9uZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHRyYURvbmUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJylcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGV2ZW50KSB7XHJcbiAgICAvL2hhbmRsZXMgcmVtb3ZlIGEgdGFza1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0ga2FiYWJUb1N0cmluZyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmRhdGFzZXQudGl0bGUpXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgcmVtb3ZlVGFzayh0aXRsZSlcclxuICAgICAgICBzZW5kVG9Mb2NhbCgpXHJcbiAgICAgICAgZGlzcGxheUVsZW1lbnRzKClcclxuICAgIH1cclxufVxyXG5cclxuLy9tb3ZlIHRhc2sgYnkgYWx0KygxLTMpICYgcmVuYW1lIGJ5IGRvdWJsZWNsaWNrIDpcclxuXHJcbmxldCBjb3JyZW50VGFza0JlbG93ID0gbnVsbCAvL2FuIHJlYWwtdGltZSB1cGRhdGVkIHZhcmlhYmxlIGluZGljYXRlcyB0aGUgdGFzayBuYW1lIGJlbG93IG1vdXNlXHJcbmxldCBjb3JyZW50VGFza0VsZW1lbnRCZWxvdyA9IG51bGwgLy9hbiByZWFsLXRpbWUgdXBkYXRlZCBvYmplY3QgdGhhdCBpbmRpY2F0ZXMgdGhlIHRoZSB0b3BzIGVsZW1lbnQgYmVsb3cgbW91c2VcclxubGV0IHdhc0p1c3RGb2N1c2VkID0gbnVsbCAvL2EgdmFyaWFibGUgdG8gc2F2ZSB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQuXHJcbmxldCB3YXNKdXN0Rm9jdXNlZE9sZE5hbWUgPSBudWxsIC8vYSB2YXJpYWJsZSB0byBzYXZlIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCBvbGROYW1lLlxyXG5cclxuZnVuY3Rpb24gbW91c2VPdmVyUGFyZW50KGUpIHtcclxuICAgIC8vd2hlbiB0aGUgbW91c2Ugb3ZlciBwYXJlbnRcclxuICAgIC8vLS0+dXBkYXRlIGNvcnJlbnQgZWxlbWVudCBiZWxvdyhpZiBpdHMgTEkpXHJcbiAgICAvLy0tPnN0YXJ0IGxpc3RlbiB0byBrZXlkb3duLlxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKVxyXG4gICAgY29ycmVudFRhc2tFbGVtZW50QmVsb3cgPSBudWxsXHJcbiAgICBjb3JyZW50VGFza0JlbG93ID0gbnVsbFxyXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpIHtcclxuICAgICAgICBjb3JyZW50VGFza0JlbG93ID0gZS50YXJnZXQuaW5uZXJUZXh0XHJcbiAgICAgICAgY29ycmVudFRhc2tFbGVtZW50QmVsb3cgPSBlLnRhcmdldFxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEdWJsZUNsaWNrKCkge1xyXG4gICAgLy93aGVuIGEgdGFzayA8bGk+IGlzIGRvdWJsZSBjbGlja2VkOlxyXG4gICAgLy8tLT5zdGFydCBsaXN0ZW4gdG8gdGhlIGNvcnJlbnQgdGFzayA8bGk+IGJlbG93J3MgYmx1ci5cclxuICAgIC8vLS0+bWFrZSB0aGUgIHRhc2sgPGxpPiBcImNvbnRlbnRFZGl0YWJsZVwiXHJcbiAgICAvLy0tPmZvY3VzIG9uIHRoZSB0YXNrIDxsaT5cclxuICAgIC8vLS0+IHVwZGF0ZSB3YXNKdXN0Rm9jdXNlZCB0byB0aGUgdGFzayA8bGk+KHdpbGwgYmUgdXNlZCBzb29uIGluIGhhbmRsZUJsdXIoKSlcclxuXHJcbiAgICBjb3JyZW50VGFza0VsZW1lbnRCZWxvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlQmx1cilcclxuICAgIGNvcnJlbnRUYXNrRWxlbWVudEJlbG93LmNvbnRlbnRFZGl0YWJsZSA9IHRydWVcclxuICAgIHdhc0p1c3RGb2N1c2VkT2xkTmFtZSA9IGNvcnJlbnRUYXNrRWxlbWVudEJlbG93LmlubmVyVGV4dFxyXG4gICAgY29ycmVudFRhc2tFbGVtZW50QmVsb3cuZm9jdXMoKVxyXG4gICAgd2FzSnVzdEZvY3VzZWQgPSBjb3JyZW50VGFza0VsZW1lbnRCZWxvd1xyXG5cclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxyXG4gICAgY29uc3Qgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpXHJcbiAgICBjb25zdCBsZW5ndGggPSBjb3JyZW50VGFza0VsZW1lbnRCZWxvdy5pbm5lclRleHQubGVuZ3RoXHJcbiAgICBjb3JyZW50VGFza0VsZW1lbnRCZWxvdy5pbm5lclRleHQgPSAnJ1xyXG4gICAgcmFuZ2Uuc2V0U3RhcnQoY29ycmVudFRhc2tFbGVtZW50QmVsb3cuZmlyc3RDaGlsZCwgbGVuZ3RoKVxyXG4gICAgcmFuZ2UuY29sbGFwc2UodHJ1ZSlcclxuICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKVxyXG4gICAgc2VsLmFkZFJhbmdlKHJhbmdlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVCbHVyKCkge1xyXG4gICAgLy8tLT5yZW1vdmUgdGhlICB0YXNrIDxsaT4gXCJjb250ZW50RWRpdGFibGVcIiBhdHRyaWJ1dGVcclxuICAgIC8vLS0+Y2hlY2sgdGhlIG5ldyBuYW1lLCBpZiBpdHMgdmFsaWQgcmVuYW1lIHRoZSB0YXNrIGFuZCB1cGRhdGVkIERPTSAmIGxvY2FsIHN0b3JhZ2UuXHJcblxyXG4gICAgd2FzSnVzdEZvY3VzZWQuY29udGVudEVkaXRhYmxlID0gZmFsc2VcclxuXHJcbiAgICBpZiAod2FzSnVzdEZvY3VzZWQuaW5uZXJUZXh0ID09PSAnJykge1xyXG4gICAgICAgIGFsZXJ0KCdlbXB0eSBpbnB1dCcpXHJcbiAgICAgICAgZGlzcGxheUVsZW1lbnRzKClcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gICAgaWYgKHdhc0p1c3RGb2N1c2VkLmlubmVyVGV4dCA9PT0gd2FzSnVzdEZvY3VzZWRPbGROYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIGlmIChob3dNYW55VGFza3NIYXZlVGhhdE5hbWUod2FzSnVzdEZvY3VzZWQuaW5uZXJUZXh0KSA+PSAxKSB7XHJcbiAgICAgICAgYWxlcnQoJ3RoZXJlIGlzIGFscmVhZHkgYSB0YXNrIG5hbWVkIGxpa2UgdGhhdCcpXHJcbiAgICAgICAgZGlzcGxheUVsZW1lbnRzKClcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGlmICh3YXNKdXN0Rm9jdXNlZC5pbm5lclRleHQuaW5jbHVkZXMoJ1xcbicpIHx8IHdhc0p1c3RGb2N1c2VkLmlubmVyVGV4dC5pbmNsdWRlcygnICAnKSkge1xyXG4gICAgICAgIGFsZXJ0KCdpbnZhbGlkIHRpdGxlJylcclxuICAgICAgICBkaXNwbGF5RWxlbWVudHMoKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZW5hbWUod2FzSnVzdEZvY3VzZWRPbGROYW1lLCB3YXNKdXN0Rm9jdXNlZC5pbm5lclRleHQpXHJcbiAgICBzZW5kVG9Mb2NhbCgpXHJcbiAgICBkaXNwbGF5RWxlbWVudHMoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVLZXlEb3duKGtleURvd25FdmVudCkge1xyXG4gICAgLy93aGVuIGhvdmVyaW5nIGFib3ZlIHRhc2sgPGxpPiBhbmQgcHJlc3NpbmcgZG93biB0aGUga2V5cyBhbHQrMS8yLzM6XHJcbiAgICAvL21vdmUgdGhlIHRhc2sgdG8gdGhlIHdhbnRlZCBzdGF0ZS5cclxuXHJcbiAgICBpZiAoa2V5RG93bkV2ZW50LmFsdEtleSkge1xyXG4gICAgICAgIGlmIChrZXlEb3duRXZlbnQua2V5ID09PSAnMScpIHtcclxuICAgICAgICAgICAgbW92ZVRhc2soY29ycmVudFRhc2tCZWxvdywgJ3RvZG8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5RG93bkV2ZW50LmtleSA9PT0gJzInKSB7XHJcbiAgICAgICAgICAgIG1vdmVUYXNrKGNvcnJlbnRUYXNrQmVsb3csICdpbi1wcm9ncmVzcycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrZXlEb3duRXZlbnQua2V5ID09PSAnMycpIHtcclxuICAgICAgICAgICAgbW92ZVRhc2soY29ycmVudFRhc2tCZWxvdywgJ2RvbmUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBtb3VzZWxlYXZlUGFyZW50KCkge1xyXG4gICAgLy93aGVuIHRoZSBtb3VzZSBsZWF2ZSB0YXNrIDxsaT4gZWxlbW50OlxyXG4gICAgLy9zdG9wIGxpc3RlbmluZyB0byBrZXkgZG93bi5cclxuXHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bikgLy9zdG9wIGxpc3RlbiB0byBrZXlkb3duLlxyXG59XHJcblxyXG4vL0FQSVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcclxuICAgIC8vd2hlbiBcImxvYWRcIiBidXR0b24gaXMgcHJlc3NlZDpcclxuICAgIC8vLS0+Y3JlYXRlIGEgbG9hZGVyIHNwaW5uZXIgYW5pbWF0aW9uXHJcbiAgICAvLy0tPnNlbmQgKEdFVCkgcmVxdXNldCB0byBhcGlcclxuICAgIC8vLS0+c2V0IHRhc2tzIHRvIHRoZSBhbnN3ZXIuXHJcbiAgICAvLy0tPnVwZGF0ZXMgdGhlIERPTSAmIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAvLy0tPnJlbW92ZSB0aGUgbG9hZGVyIHNwaW5uZXIgYW5pbWF0aW9uXHJcblxyXG4gICAgbG9hZGVyKCdjcmVhdGUnKVxyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgbG9hZERhdGEoKVxyXG4gICAgdGFza3MgPSByZXNwb25zZS50YXNrc1xyXG4gICAgc2VuZFRvTG9jYWwoKVxyXG4gICAgZGlzcGxheUVsZW1lbnRzKClcclxuICAgIGxvYWRlcigncmVtb3ZlJylcclxufVxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVTYXZlKCkge1xyXG4gICAgLy93aGVuIFwic2F2ZVwiIGJ1dHRvbiBpcyBwcmVzc2VkOlxyXG4gICAgLy8tLT5jcmVhdGUgYSBsb2FkZXIgc3Bpbm5lciBhbmltYXRpb25cclxuICAgIC8vLS0+c2VuZCBcInRhc2tzXCIgYXMgKFBVVCkgcmVxdXNldCB0byBhcGlcclxuICAgIC8vLS0+cmVtb3ZlIHRoZSBsb2FkZXIgc3Bpbm5lciBhbmltYXRpb25cclxuXHJcbiAgICBsb2FkZXIoJ2NyZWF0ZScpXHJcbiAgICBhd2FpdCBzYXZlRGF0YSgpXHJcbiAgICBsb2FkZXIoJ3JlbW92ZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRlcihzdGF0ZSkge1xyXG4gICAgLy9jcmVhdGUgb3IgcmVtb3ZlIGxvYWRlciBzcGlubmVyIGFuaW1hdGlvblxyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICBsZXQgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCBbXSwgWydsb2FkZXInXSwgeyBpZDogJ3NwaW5uZXInIH0sIHt9KVxyXG4gICAgICAgIGxldCBsb2FkZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbXSwgWydsZGlvLTZjcHZqaTE2ZzczJ10sIHt9LCB7fSlcclxuICAgICAgICBsZXQgc3Bpbm5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFtdLCBbXSwge30sIHt9KVxyXG4gICAgICAgIGxvYWRlci5hcHBlbmRDaGlsZChzcGlubmVyKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobG9hZGVyKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5hcHBlbmRDaGlsZCh3cmFwcGVyKVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXRlID09PSAncmVtb3ZlJykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJykucmVtb3ZlKClcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERhdGEoKSB7XHJcbiAgICAvLy0tPnNlbmRzIEdFVCB0byBhcGkuXHJcbiAgICAvLy0tPnN0ZXRzIHRoZSBlcnJvcmJhciBlbGVtZW50IHRvIHRoZSBcImxvYWRlZCFcIiBpZiBzdWNjc2VzICwgYW5kIHRvIHRoZSBlcnJvciBtYXNzYWdlIGlmIG5vdC5cclxuICAgIC8vLS0+dHJ5IGNvbnZlcnRpbmcgaXQgdG8gYW4gb2JqZWN0IHVzaW5nIGpzb24uXHJcbiAgICAvLy0tPmlmIHN1Y2NzZWQsIHJldHVybiB0aGUgY29udmVydGVkIG9iamVjdC5cclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29uLWJpbnMuaGVyb2t1YXBwLmNvbS9iaW4vNjE0YjExZTE0MDIxYWMwZTZjMDgwY2RmJylcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JCYXInKS5pbm5lclRleHQgPSByZXNwb25zZS5zdGF0dXMgKyAnOicgKyByZXNwb25zZS5zdGF0dXNUZXh0XHJcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yQmFyJykuaW5uZXJUZXh0ID0gJ2xvYWRlZCEnXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVEYXRhKCkge1xyXG4gICAgLy8tLT5jb252ZXJ0IHRhc2tzIHRvIGpzb24gZm9ybWF0XHJcbiAgICAvLy0tPnNlbmRzIGl0IHZpYSBQVVQgcmVxdWVzdCB0byBhcGkuXHJcbiAgICAvLy0tPnN0ZXRzIHRoZSBlcnJvcmJhciBlbGVtZW50IHRvIHRoZSBcInNhdmVkIVwiIGlmIHN1Y2NzZXMgLCBhbmQgdG8gdGhlIGVycm9yIG1hc3NhZ2UgaWYgbm90LlxyXG5cclxuICAgIGxldCB0YXNrc1Rvc2VuZCA9IHt9XHJcbiAgICB0YXNrc1Rvc2VuZC50YXNrcyA9IHRhc2tzXHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29uLWJpbnMuaGVyb2t1YXBwLmNvbS9iaW4vNjE0YjExZTE0MDIxYWMwZTZjMDgwY2RmJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2tzVG9zZW5kKSxcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDQwMCkge1xyXG4gICAgICAgIC8vcmVzcG9uc2UgaXMgaGF2aW5nIGEga2luZCBvZiBwcm9ibGVtLlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvckJhcicpLmlubmVyVGV4dCA9IHJlc3BvbnNlLnN0YXR1cyArICc6JyArIHJlc3BvbnNlLnN0YXR1c1RleHRcclxuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JCYXInKS5pbm5lclRleHQgPSAnc2F2ZWQhJ1xyXG59XHJcblxyXG5sZXQgZGJsQ2xpY2tlZCA9IGZhbHNlIC8vIGxhdGVyIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRvIHN0YXJ0IGRyYWcgYW5kIGRyb3BcclxubGV0IG1vdXNlRG93biA9IGZhbHNlIC8vIGxhdGVyIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRvIHN0YXJ0IGRyYWcgYW5kIGRyb3BcclxuXHJcbmZ1bmN0aW9uIGNsaWNrRHJ1Z0FuZERyb3BIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXRcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHRvIHByZXZlbnQgdGhlIHNlbGVjdGluZyBhY3Rpb24gb2YgY2xpY2tcclxuXHJcbiAgICBtb3VzZURvd24gPSB0cnVlXHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApXHJcblxyXG4gICAgLy8gdGhlIG1haW4gZHJhZyBhbmQgZHJvcCBzZWN0aW9uIVxyXG4gICAgLy8gd2Ugc2V0IGEgdGltZSBvdXQgc28gdGhlIHVzZXIgY2FuIG1ha2UgYSBkYmxjbGljayB3aXRob3V0IHN0YXJ0aW5nIHRvIGRyYWdcclxuICAgIC8vIEkgZm91bmQgdGhhdCB0aGUgYmVzdCB0aW1lIGlzIDMwMCBtcy4gbWljcm9zb2Z0IHNheXMgaXRzIDUwMCBtcyA7KVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkYmxDbGlja2VkID09PSB0cnVlIHx8IG1vdXNlRG93biA9PT0gZmFsc2UpIHJldHVyblxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCd0YXNrT25UaGVNb3ZlJylcclxuXHJcbiAgICAgICAgbGV0IHNoaWZ0WCA9IGV2ZW50LmNsaWVudFggLSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4gICAgICAgIGxldCBzaGlmdFkgPSBldmVudC5jbGllbnRZIC0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxyXG5cclxuICAgICAgICB0YXJnZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnpJbmRleCA9IDEwMDBcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpXHJcblxyXG4gICAgICAgIC8vIG1vdmVzIHRoZSB0YXNrIGF0IChwYWdlWCwgcGFnZVkpIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgLy8gdGFraW5nIGluaXRpYWwgc2hpZnRzIGludG8gYWNjb3VudFxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVBdChwYWdlWCwgcGFnZVkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBwYWdlWCAtIHNoaWZ0WCArICdweCdcclxuICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IHBhZ2VZIC0gc2hpZnRZIC0gNSArICdweCcgLy8gc21hbGwgYWRqdXN0bWVudCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3VycmVudERyb3BwYWJsZSA9IG51bGxcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgICAgICAgbW92ZUF0KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSlcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIGxldCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXHJcbiAgICAgICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJydcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdXNlbW92ZSBldmVudHMgbWF5IHRyaWdnZXIgb3V0IG9mIHRoZSB3aW5kb3cgKHdoZW4gdGhlIGJhbGwgaXMgZHJhZ2dlZCBvZmYtc2NyZWVuKVxyXG4gICAgICAgICAgICAvLyBpZiBjbGllbnRYL2NsaWVudFkgYXJlIG91dCBvZiB0aGUgd2luZG93LCB0aGVuIGVsZW1lbnRGcm9tUG9pbnQgcmV0dXJucyBudWxsXHJcbiAgICAgICAgICAgIGlmICghZWxlbUJlbG93KSByZXR1cm5cclxuXHJcbiAgICAgICAgICAgIC8vIHBvdGVudGlhbCBkcm9wcGFibGUgYXJlIGxhYmVsZWQgd2l0aCB0aGUgY2xhc3MgXCJkcm9wcGFibGVcIiAoY2FuIGJlIG90aGVyIGxvZ2ljKVxyXG4gICAgICAgICAgICBsZXQgZHJvcHBhYmxlQmVsb3cgPSBlbGVtQmVsb3cuY2xvc2VzdCgnLmRyb3BwYWJsZScpXHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudERyb3BwYWJsZSAhPSBkcm9wcGFibGVCZWxvdykge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UncmUgZmx5aW5nIGluIG9yIG91dC4uLlxyXG4gICAgICAgICAgICAgICAgLy8gbm90ZTogYm90aCB2YWx1ZXMgY2FuIGJlIG51bGxcclxuICAgICAgICAgICAgICAgIC8vICAgY3VycmVudERyb3BwYWJsZT1udWxsIGlmIHdlIHdlcmUgbm90IG92ZXIgYSBkcm9wcGFibGUgYmVmb3JlIHRoaXMgZXZlbnQgKGUuZyBvdmVyIGFuIGVtcHR5IHNwYWNlKVxyXG4gICAgICAgICAgICAgICAgLy8gICBkcm9wcGFibGVCZWxvdz1udWxsIGlmIHdlJ3JlIG5vdCBvdmVyIGEgZHJvcHBhYmxlIG5vdywgZHVyaW5nIHRoaXMgZXZlbnRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyb3BwYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBsb2dpYyB0byBwcm9jZXNzIFwiZmx5aW5nIG91dFwiIG9mIHRoZSBkcm9wcGFibGUgKHJlbW92ZSBoaWdobGlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhdmVEcm9wcGFibGUoY3VycmVudERyb3BwYWJsZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnREcm9wcGFibGUgPSBkcm9wcGFibGVCZWxvd1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbG9naWMgdG8gcHJvY2VzcyBcImZseWluZyBpblwiIG9mIHRoZSBkcm9wcGFibGVcclxuICAgICAgICAgICAgICAgICAgICBlbnRlckRyb3BwYWJsZShjdXJyZW50RHJvcHBhYmxlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBtb3ZlIHRoZSB0YXNrIG9uIG1vdXNlbW92ZVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxyXG5cclxuICAgICAgICAvLyBkcm9wIHRoZSB0YXNrLCByZW1vdmUgdW5uZWVkZWQgaGFuZGxlcnNcclxuXHJcbiAgICAgICAgLy8gZHJvcCB0aGUgdGFzaywgcmVtb3ZlIHVubmVlZGVkIGhhbmRsZXJzXHJcbiAgICAgICAgdGFyZ2V0Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcclxuICAgICAgICAgICAgICAgIG1vdmVUYXNrKGthYmFiVG9TdHJpbmcodGFyZ2V0LmRhdGFzZXQudGl0bGUpLCBjdXJyZW50RHJvcHBhYmxlLmRhdGFzZXQuc3RhdGUpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RHJvcHBhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ3dhaXRpbmdGb3JEcm9wJylcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Lm9ubW91c2V1cCA9IG51bGxcclxuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnRzKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Lm9ubW91c2V1cCA9IG51bGxcclxuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUVsZW1lbnRzKClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMzAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRlckRyb3BwYWJsZShkcm9wcGFibGVFbGVtZW50KSB7XHJcbiAgICBpZiAoZHJvcHBhYmxlRWxlbWVudC50YWdOYW1lID09PSAnTEknKSB7XHJcbiAgICAgICAgZHJvcHBhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiZWxvdy1kcmFnJylcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGVhdmVEcm9wcGFibGUoZHJvcHBhYmxlRWxlbWVudCkge1xyXG4gICAgaWYgKGRyb3BwYWJsZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0xJJykge1xyXG4gICAgICAgIGRyb3BwYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmVsb3ctZHJhZycpXHJcbiAgICB9XHJcbn1cclxuLy8gVGhlIEdhdWdlLS0gbm90IG15IHdyaXRpbmchIGl0cyBpbXBvcnRlZCBhbmQgbW9kaWZpZWQgdG8gbXkgbmVlZHNcclxuXHJcbmZ1bmN0aW9uIEdhdWdlKGVsKSB7XHJcbiAgICAvL1ByaXZhdGUgUHJvcGVydGllcyBhbmQgQXR0cmlidXRlc1xyXG5cclxuICAgIGxldCBlbGVtZW50LCAvLyBDb250YWluaW5nIGVsZW1lbnQgZm9yIHRoZSBpbmZvIGNvbXBvbmVudFxyXG4gICAgICAgIGRhdGEsIC8vIGAuZ2F1Z2VfX2RhdGFgIGVsZW1lbnRcclxuICAgICAgICBuZWVkbGUsIC8vIGAuZ2F1Z2VfX25lZWRsZWAgZWxlbWVudFxyXG4gICAgICAgIHZhbHVlID0gMC4wLCAvLyBDdXJyZW50IGdhdWdlIHZhbHVlIGZyb20gMCB0byAxXHJcbiAgICAgICAgcHJvcCAvLyBTdHlsZSBmb3IgdHJhbnNmb3JtXHJcblxyXG4gICAgLy9Qcml2YXRlIE1ldGhvZHMgYW5kIEZ1bmN0aW9uc1xyXG5cclxuICAgIGxldCBzZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgdmFyaW91cyBlbGVtZW50cyBhbmQgc3ViLWVsZW1lbnRzXHJcbiAgICAgICAgZWxlbWVudCA9IGVsXHJcbiAgICAgICAgZGF0YSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmdhdWdlX19kYXRhJylcclxuICAgICAgICBuZWVkbGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXVnZV9fbmVlZGxlJylcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2V0VmFsdWUgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIHZhbHVlID0geFxyXG4gICAgICAgIGxldCB0dXJucyA9IC0wLjUgKyB4ICogMC41XHJcbiAgICAgICAgZGF0YS5zdHlsZVtwcm9wXSA9ICdyb3RhdGUoJyArIHR1cm5zICsgJ3R1cm4pJ1xyXG4gICAgICAgIG5lZWRsZS5zdHlsZVtwcm9wXSA9ICdyb3RhdGUoJyArIHR1cm5zICsgJ3R1cm4pJ1xyXG4gICAgfVxyXG5cclxuICAgIC8vT2JqZWN0IHRvIGJlIFJldHVybmVkXHJcblxyXG4gICAgZnVuY3Rpb24gZXhwb3J0cygpIHt9XHJcblxyXG4gICAgLy9QdWJsaWMgQVBJIE1ldGhvZHNcclxuXHJcbiAgICBleHBvcnRzLmVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RWxlbWVudChlbClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydHMudmFsdWUgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VmFsdWUoeClcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8vbml0aWFsaXphdGlvblxyXG5cclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXVxyXG4gICAgO1snd2Via2l0VHJhbnNmb3JtJywgJ21velRyYW5zZm9ybScsICdtc1RyYW5zZm9ybScsICdvVHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddLmZvckVhY2goZnVuY3Rpb24gKHApIHtcclxuICAgICAgICBpZiAodHlwZW9mIGJvZHkuc3R5bGVbcF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHByb3AgPSBwXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgIHNldEVsZW1lbnQoZWwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGV4cG9ydHNcclxufVxyXG5cclxuZnVuY3Rpb24gbml0aWFsaXphdGlvbihob3dCdXN5KSB7XHJcbiAgICBsZXQgZ2F1Z2UgPSBuZXcgR2F1Z2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhdWdlJykpXHJcbiAgICBnYXVnZS52YWx1ZShob3dCdXN5KVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==