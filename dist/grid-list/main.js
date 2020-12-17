(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\workspace\December\grid-list\src\main.ts */"zUnb");


/***/ }),

/***/ "2SFI":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "+qE3");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProductComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ePack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductComponent {
    constructor() {
        this.itemClick = new events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    clickItem(product) {
        console.log('here');
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["product"]], inputs: { product: "product" }, outputs: { itemClick: "itemClick" }, decls: 39, vars: 8, consts: [[1, "rank"], [1, "rank-txt"], [1, "image"], [1, "image-content", 3, "src"], [1, "content", 3, "click"], [1, "product-detail"], [1, "product-sub-detail"], [1, "product-title"], [1, "tags", "check"], ["src", "../assets/images/check.png"], [1, "day-ago", "tags"], [1, "dropship", "tags"], [1, "cloud", "tags"], ["src", "../assets/images/cloud.png"], [1, "eye", "tags"], ["src", "../assets/images/eye.png"], [1, "setting", "tags"], ["src", "../assets/images/setting.png"], [1, "product-statistics"], [1, "icon-pin"], [1, "icon-star"], [1, "icon-shield"], ["class", "icon-epack", 4, "ngIf"], [1, "product-price"], [1, "product-action"], [1, "icon-eye"], [1, "icon-heart"], [1, "icon-add"], [1, "icon-epack"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_Template_div_click_5_listener() { return ctx.clickItem(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dropship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProductComponent_div_32_Template, 3, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.productId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.percentage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.ePacket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.product.price, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".rank[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 130px;\n  height: 130px;\n  border-radius: 14px;\n  display: flex;\n  margin-right: 6px;\n}\n\n.rank-txt[_ngcontent-%COMP%] {\n  color: #888ca9;\n  font-size: 35px;\n  margin: auto;\n  font-weight: 900;\n  font-family: \"Avenir\";\n}\n\n.image[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 130px;\n  height: 130px;\n  border-radius: 14px;\n  display: flex;\n  margin-right: 6px;\n}\n\n.image-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 14px;\n}\n\n.content[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 790px;\n  border-radius: 14px;\n  display: flex;\n  margin-right: 6px;\n  padding: 31px 40px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.product-sub-detail[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.product-sub-detail[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.product-sub-detail[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  height: 19px;\n  font-size: 8px;\n  font-weight: 800;\n  font-family: \"Avenir\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 3px;\n  border-radius: 30px;\n}\n\n.product-sub-detail[_ngcontent-%COMP%]   .day-ago[_ngcontent-%COMP%] {\n  background-color: #f1f2f6;\n  width: 62px;\n  color: #a9b0be;\n}\n\n.product-sub-detail[_ngcontent-%COMP%]   .dropship[_ngcontent-%COMP%] {\n  background-color: #f2e6ff;\n  width: 56px;\n  color: #8f23fe;\n}\n\n.product-sub-detail[_ngcontent-%COMP%]   .cloud[_ngcontent-%COMP%] {\n  background-color: #f7e1e1;\n  width: 28px;\n}\n\n.product-sub-detail[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  background-color: #f4eebd;\n  width: 28px;\n}\n\n.product-sub-detail[_ngcontent-%COMP%]   .setting[_ngcontent-%COMP%] {\n  background-color: #dbfaff;\n  width: 28px;\n}\n\n.product-title[_ngcontent-%COMP%] {\n  color: #3f4457;\n  font-weight: 900;\n  font-size: 22px;\n  font-family: \"Avenir\";\n  line-height: 30px;\n  align-items: center;\n}\n\n.product-statistics[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 20px;\n  font-weight: 800;\n  font-family: \"Avenir\";\n  color: #d3d6dc;\n  margin-top: 11px;\n  align-items: center;\n  line-height: 27px;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  font-family: \"Avenir\";\n  font-weight: 900;\n  font-size: 26px;\n  color: #0fcb5a;\n  line-height: 36px;\n}\n\n.product-action[_ngcontent-%COMP%] {\n  display: flex;\n  color: #dfe1e6;\n}\n\n.product-action[_ngcontent-%COMP%]   [class*=icon-][_ngcontent-%COMP%] {\n  margin-left: 16px;\n  margin-right: 0px;\n  font-size: 20px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0UsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLnJhbmstdHh0IHtcclxuICBjb2xvcjogIzg4OGNhOTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCI7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNzkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIHBhZGRpbmc6IDMxcHggNDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2R1Y3Qtc3ViLWRldGFpbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5jaGVjayB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnRhZ3Mge1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIH1cclxuICAuZGF5LWFnbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY2O1xyXG4gICAgd2lkdGg6IDYycHg7XHJcbiAgICBjb2xvcjogI2E5YjBiZTtcclxuICB9XHJcbiAgLmRyb3BzaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmU2ZmY7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGNvbG9yOiAjOGYyM2ZlO1xyXG4gIH1cclxuICAuY2xvdWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZTFlMTtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gIH1cclxuICAuZXllIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGVlYmQ7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICB9XHJcbiAgLnNldHRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZmFmZjtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3QtdGl0bGUge1xyXG4gIGNvbG9yOiAjM2Y0NDU3O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkF2ZW5pclwiO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXN0YXRpc3RpY3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCI7XHJcbiAgY29sb3I6ICNkM2Q2ZGM7XHJcbiAgbWFyZ2luLXRvcDogMTFweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXZlbmlyXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgY29sb3I6ICMwZmNiNWE7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWFjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogI2RmZTFlNjtcclxuICBbY2xhc3MqPVwiaWNvbi1cIl0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.scss']
            }]
    }], null, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");




function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "product", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", item_r1);
} }
// import * as data from '../db.json';
class AppComponent {
    constructor() {
        this.title = 'grid-list';
        this.products = [
            {
                "productId": "1",
                "imagePath": "https://picsum.photos/300",
                "rating": "4.9",
                "percentage": "99",
                "tags": "1.2K",
                "title": "Xiamoi Wifi Extender",
                "price": 12.0,
                "ePacket": true,
                "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
            },
            {
                "productId": "2",
                "imagePath": "https://picsum.photos/300",
                "rating": "4.9",
                "percentage": "99",
                "tags": "1.2K",
                "title": "Xiamoi Wifi Extender",
                "price": 12.0,
                "ePacket": true,
                "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
            },
            {
                "productId": "3",
                "imagePath": "https://picsum.photos/300",
                "rating": "4.9",
                "percentage": "99",
                "tags": "1.2K",
                "title": "Xiamoi Wifi Extender",
                "price": 12.0,
                "ePacket": true,
                "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
            },
            {
                "productId": "4",
                "imagePath": "https://picsum.photos/300",
                "rating": "4.9",
                "percentage": "99",
                "tags": "1.2K",
                "title": "Xiamoi Wifi Extender",
                "price": 12.0,
                "ePacket": true,
                "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
            },
            {
                "productId": "5",
                "imagePath": "https://picsum.photos/300",
                "rating": "4.9",
                "percentage": "99",
                "tags": "1.2K",
                "title": "Xiamoi Wifi Extender",
                "price": 12.0,
                "ePacket": true,
                "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
            },
            {
                "productId": "6",
                "imagePath": "https://picsum.photos/300",
                "rating": "4.9",
                "percentage": "99",
                "tags": "1.2K",
                "title": "Xiamoi Wifi Extender",
                "price": 12.0,
                "ePacket": true,
                "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
            },
            {
                "productId": "7",
                "imagePath": "https://picsum.photos/300",
                "rating": "4.9",
                "percentage": "99",
                "tags": "1.2K",
                "title": "Xiamoi Wifi Extender",
                "price": 12.0,
                "ePacket": true,
                "createdAt": "October 6, 2020 at 9:17:15 AM UTC-4"
            }
        ];
    }
    ngOnInit() {
        // this.products = data.default.products;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "row", 3, "product"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #e5e5e5;\n  margin: -8px;\n  padding: 5px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gIG1hcmdpbjogLThweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "2SFI");




class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
                exports: [_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map