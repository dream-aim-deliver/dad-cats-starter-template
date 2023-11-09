"use strict";(self.webpackChunkwebsat_planckster=self.webpackChunkwebsat_planckster||[]).push([[284],{"./src/lib/infrastructure/stories/design-system/color.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Brand:()=>Brand,default:()=>color_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),theme=__webpack_require__("./src/lib/common/theme.ts"),__jsx=react.createElement,Color=function Color(_ref){var _ref$name=_ref.name,name=void 0===_ref$name?"color":_ref$name,_ref$h=_ref.h,h=void 0===_ref$h?0:_ref$h,_ref$s=_ref.s,s=void 0===_ref$s?0:_ref$s,_ref$b=_ref.b,b=void 0===_ref$b?0:_ref$b,backgroundColor=new theme.o(name,h,s,b).toHex();return __jsx("div",{className:"flex box-border h-32 w-32 p-4 border-4 items-center justify-between",style:{backgroundColor}},__jsx("div",{className:"text-slate-800 self-start"},name),__jsx("div",{className:"text-slate-800 self-end"},backgroundColor))};Color.displayName="Color",Color.__docgenInfo={description:"",methods:[],displayName:"Color",props:{name:{defaultValue:{value:"'color'",computed:!1},required:!1,tsType:{name:"string"},description:""},h:{defaultValue:{value:"0",computed:!1},required:!1,tsType:{name:"number"},description:""},s:{defaultValue:{value:"0",computed:!1},required:!1,tsType:{name:"number"},description:""},b:{defaultValue:{value:"0",computed:!1},required:!1,tsType:{name:"number"},description:""}}};try{Color.displayName="Color",Color.__docgenInfo={description:"",displayName:"Color",props:{name:{defaultValue:{value:"color"},description:"",name:"name",required:!1,type:{name:"string"}},h:{defaultValue:{value:"0"},description:"",name:"h",required:!1,type:{name:"number"}},s:{defaultValue:{value:"0"},description:"",name:"s",required:!1,type:{name:"number"}},b:{defaultValue:{value:"0"},description:"",name:"b",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/lib/infrastructure/component-library/design-system/color.tsx#Color"]={docgenInfo:Color.__docgenInfo,name:"Color",path:"src/lib/infrastructure/component-library/design-system/color.tsx#Color"})}catch(__react_docgen_typescript_loader_error){}var _Brand$parameters,_Brand$parameters2,BrandColor=new theme.o("Brand",251,87,67);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const color_stories={title:"Design System/Colors",component:Color};var Brand={args:{name:"Brand Primary",h:BrandColor.h,s:BrandColor.s,b:BrandColor.b}};Brand.parameters=_objectSpread(_objectSpread({},Brand.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Brand$parameters=Brand.parameters)||void 0===_Brand$parameters?void 0:_Brand$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    name: 'Brand Primary',\n    h: BrandColor.h,\n    s: BrandColor.s,\n    b: BrandColor.b\n  }\n}"},null===(_Brand$parameters2=Brand.parameters)||void 0===_Brand$parameters2||null===(_Brand$parameters2=_Brand$parameters2.docs)||void 0===_Brand$parameters2?void 0:_Brand$parameters2.source)})})},"./src/lib/common/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Mode,o:()=>BaseColor});var _home_runner_work_dad_cats_starter_template_dad_cats_starter_template_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_dad_cats_starter_template_dad_cats_starter_template_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),color__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/color/index.js"),color__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_2__),Mode=function(Mode){return Mode.LIGHT="light",Mode.DARK="dark",Mode}({}),BaseColor=function(){function BaseColor(name,h,s,b){(0,_home_runner_work_dad_cats_starter_template_dad_cats_starter_template_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__.Z)(this,BaseColor),this.name=name,this.h=h,this.s=s,this.b=b,this.name=name,this.h=h,this.s=s,this.b=b}return(0,_home_runner_work_dad_cats_starter_template_dad_cats_starter_template_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__.Z)(BaseColor,[{key:"toHex",value:function toHex(){var h=Math.max(0,Math.min(360,this.h)),s=Math.max(0,Math.min(100,this.s)),b=Math.max(0,Math.min(100,this.b));return color__WEBPACK_IMPORTED_MODULE_2___default().hsl(h,s,b).hex()}}]),BaseColor}()}}]);