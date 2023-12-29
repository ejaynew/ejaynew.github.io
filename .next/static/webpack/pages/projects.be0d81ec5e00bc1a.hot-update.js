"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ProjectsPage.js":
/*!************************************!*\
  !*** ./components/ProjectsPage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _public_projectsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/projectsData */ \"./public/projectsData.js\");\n/* harmony import */ var _DarkModeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DarkModeContext */ \"./components/DarkModeContext.js\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Projects.module.css */ \"./styles/Projects.module.css\");\n/* harmony import */ var _styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ProjectsPage() {\n    _s();\n    const { darkMode } = (0,_DarkModeContext__WEBPACK_IMPORTED_MODULE_5__.useDarkMode)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: darkMode ? \"\".concat((_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().container), \" \").concat((_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().darkMode)) : (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            maxWidth: \"md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    variant: \"h4\",\n                    gutterBottom: true,\n                    sx: {\n                        paddingTop: 5\n                    },\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    container: true,\n                    spacing: 3,\n                    children: _public_projectsData__WEBPACK_IMPORTED_MODULE_4__.projectsData.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            sm: 6,\n                            md: 4,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                className: darkMode ? \"\".concat((_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().card), \" \").concat((_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().darkCard)) : (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: project.imageUrl,\n                                            alt: project.title,\n                                            style: {\n                                                maxWidth: \"100%\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            variant: \"h6\",\n                                            gutterBottom: true,\n                                            children: project.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            variant: \"body2\",\n                                            children: project.description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Projects_module_css__WEBPACK_IMPORTED_MODULE_6___default().card) - links,\n                                            style: {\n                                                marginTop: \"10px\"\n                                            },\n                                            children: project.links.map((link, linkIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: Object.values(link)[0],\n                                                    target: \"_blank\",\n                                                    rel: \"noopener noreferrer\",\n                                                    style: {\n                                                        marginRight: \"10px\"\n                                                    },\n                                                    children: Object.keys(link)[0]\n                                                }, linkIndex, false, {\n                                                    fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 23\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\emmaj\\\\Documents\\\\react-homepage\\\\components\\\\ProjectsPage.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectsPage, \"HvlUGfrb1+gsCIZD1j97B64/TGM=\", false, function() {\n    return [\n        _DarkModeContext__WEBPACK_IMPORTED_MODULE_5__.useDarkMode\n    ];\n});\n_c = ProjectsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsPage);\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDZ0I7QUFDRjtBQUNhO0FBQ0w7QUFDRTtBQUNaO0FBQ0E7QUFDYztBQUNFO0FBQ047QUFDRztBQUVuRCxTQUFTWTs7SUFDUCxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHSCw2REFBV0E7SUFDaEMscUJBQ0UsOERBQUNJO1FBQ0NDLFdBQ0VGLFdBQVcsR0FBdUJGLE9BQXBCQSw4RUFBZ0IsRUFBQyxLQUFtQixPQUFoQkEsNkVBQWUsSUFBS0EsOEVBQWdCO2tCQUd4RSw0RUFBQ1AsK0RBQVNBO1lBQUNhLFVBQVM7OzhCQUNsQiw4REFBQ1osZ0VBQVVBO29CQUFDYSxTQUFRO29CQUFLQyxZQUFZO29CQUFDQyxJQUFJO3dCQUFFQyxZQUFZO29CQUFFOzhCQUFHOzs7Ozs7OEJBRzdELDhEQUFDZiwwREFBSUE7b0JBQUNVLFNBQVM7b0JBQUNNLFNBQVM7OEJBQ3RCYiw4REFBWUEsQ0FBQ2MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUMxQiw4REFBQ25CLDBEQUFJQTs0QkFBQ29CLElBQUk7NEJBQUNDLElBQUk7NEJBQUlDLElBQUk7NEJBQUdDLElBQUk7c0NBQzVCLDRFQUFDdEIsMkRBQUlBO2dDQUNIUSxXQUNFRixXQUFXLEdBQWtCRixPQUFmQSx5RUFBVyxFQUFDLEtBQW1CLE9BQWhCQSw2RUFBZSxJQUFLQSx5RUFBVzswQ0FHOUQsNEVBQUNILGtFQUFXQTs7c0RBQ1YsOERBQUN3Qjs0Q0FDQ0MsS0FBS1QsUUFBUVUsUUFBUTs0Q0FDckJDLEtBQUtYLFFBQVFZLEtBQUs7NENBQ2xCQyxPQUFPO2dEQUFFcEIsVUFBVTs0Q0FBTzs7Ozs7O3NEQUU1Qiw4REFBQ1osZ0VBQVVBOzRDQUFDYSxTQUFROzRDQUFLQyxZQUFZO3NEQUNsQ0ssUUFBUVksS0FBSzs7Ozs7O3NEQUVoQiw4REFBQy9CLGdFQUFVQTs0Q0FBQ2EsU0FBUTtzREFBU00sUUFBUWMsV0FBVzs7Ozs7O3NEQUNoRCw4REFBQ3hCOzRDQUFJQyxXQUFXSix5RUFBVyxHQUFDNEI7NENBQU9GLE9BQU87Z0RBQUVHLFdBQVc7NENBQU87c0RBQzNEaEIsUUFBUWUsS0FBSyxDQUFDaEIsR0FBRyxDQUFDLENBQUNrQixNQUFNQywwQkFDeEIsOERBQUNDO29EQUVDQyxNQUFNQyxPQUFPQyxNQUFNLENBQUNMLEtBQUssQ0FBQyxFQUFFO29EQUM1Qk0sUUFBTztvREFDUEMsS0FBSTtvREFDSlgsT0FBTzt3REFBRVksYUFBYTtvREFBTzs4REFFNUJKLE9BQU9LLElBQUksQ0FBQ1QsS0FBSyxDQUFDLEVBQUU7bURBTmhCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQW5CcUJqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNsRDtHQW5EU2I7O1FBQ2NGLHlEQUFXQTs7O0tBRHpCRTtBQXFEVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RzUGFnZS5qcz83ZmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Db250YWluZXJcIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7IHByb2plY3RzRGF0YSB9IGZyb20gXCIuLi9wdWJsaWMvcHJvamVjdHNEYXRhXCI7XHJcbmltcG9ydCB7IHVzZURhcmtNb2RlIH0gZnJvbSBcIi4vRGFya01vZGVDb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qcm9qZWN0cy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0c1BhZ2UoKSB7XHJcbiAgY29uc3QgeyBkYXJrTW9kZSB9ID0gdXNlRGFya01vZGUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIGRhcmtNb2RlID8gYCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtzdHlsZXMuZGFya01vZGV9YCA6IHN0eWxlcy5jb250YWluZXJcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20gc3g9e3sgcGFkZGluZ1RvcDogNSB9fT5cclxuICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgIHtwcm9qZWN0c0RhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgZGFya01vZGUgPyBgJHtzdHlsZXMuY2FyZH0gJHtzdHlsZXMuZGFya0NhcmR9YCA6IHN0eWxlcy5jYXJkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkLWxpbmtzfSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmxpbmtzLm1hcCgobGluaywgbGlua0luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xpbmtJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17T2JqZWN0LnZhbHVlcyhsaW5rKVswXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMobGluaylbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsInRoZW1lIiwiVGhlbWVQcm92aWRlciIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJHcmlkIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwicHJvamVjdHNEYXRhIiwidXNlRGFya01vZGUiLCJzdHlsZXMiLCJQcm9qZWN0c1BhZ2UiLCJkYXJrTW9kZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsInN4IiwicGFkZGluZ1RvcCIsInNwYWNpbmciLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJpdGVtIiwieHMiLCJzbSIsIm1kIiwiY2FyZCIsImRhcmtDYXJkIiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJ0aXRsZSIsInN0eWxlIiwiZGVzY3JpcHRpb24iLCJsaW5rcyIsIm1hcmdpblRvcCIsImxpbmsiLCJsaW5rSW5kZXgiLCJhIiwiaHJlZiIsIk9iamVjdCIsInZhbHVlcyIsInRhcmdldCIsInJlbCIsIm1hcmdpblJpZ2h0Iiwia2V5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectsPage.js\n"));

/***/ })

});