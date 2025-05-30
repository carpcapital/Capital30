/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2019 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=t():e["pdfjs-dist/build/pdf"]=e.pdfjsLib=t()})(this,(function(){return function(e){var t={}
function r(n){if(t[n])return t[n].exports
var i=t[n]={i:n,l:!1,exports:{}}
return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var n=Object.create(null)
if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i))
return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict"
var n=r(1),i=r(184),a=r(199),o=r(200),s=r(188),u=r(201),l=r(193),c=r(190)
if(r(48).isNodeJS){var h=r(202).PDFNodeStream
i.setPDFNetworkStreamFactory((function(e){return new h(e)}))}else{var f,d=r(205).PDFNetworkStream
s.isFetchSupported()&&(f=r(206).PDFFetchStream),i.setPDFNetworkStreamFactory((function(e){return f&&s.isValidFetchUrl(e.url)?new f(e):new d(e)}))}t.build=i.build,t.version=i.version,t.getDocument=i.getDocument,t.LoopbackPort=i.LoopbackPort,t.PDFDataRangeTransport=i.PDFDataRangeTransport,t.PDFWorker=i.PDFWorker,t.renderTextLayer=a.renderTextLayer,t.AnnotationLayer=o.AnnotationLayer,t.createPromiseCapability=n.createPromiseCapability,t.PasswordResponses=n.PasswordResponses,t.InvalidPDFException=n.InvalidPDFException,t.MissingPDFException=n.MissingPDFException,t.SVGGraphics=u.SVGGraphics,t.NativeImageDecoding=n.NativeImageDecoding,t.CMapCompressionType=n.CMapCompressionType,t.PermissionFlag=n.PermissionFlag,t.UnexpectedResponseException=n.UnexpectedResponseException,t.OPS=n.OPS,t.VerbosityLevel=n.VerbosityLevel,t.UNSUPPORTED_FEATURES=n.UNSUPPORTED_FEATURES,t.createValidAbsoluteUrl=n.createValidAbsoluteUrl,t.createObjectURL=n.createObjectURL,t.removeNullCharacters=n.removeNullCharacters,t.shadow=n.shadow,t.Util=n.Util,t.RenderingCancelledException=s.RenderingCancelledException,t.getFilenameFromUrl=s.getFilenameFromUrl,t.LinkTarget=s.LinkTarget,t.addLinkAttributes=s.addLinkAttributes,t.loadScript=s.loadScript
t.PDFDateString=s.PDFDateString,t.GlobalWorkerOptions=l.GlobalWorkerOptions,t.apiCompatibilityParams=c.apiCompatibilityParams},function(e,t,r){"use strict"
function n(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.arrayByteLength=x,t.arraysToBytes=function(e){var t=e.length
if(1===t&&e[0]instanceof Uint8Array)return e[0]
for(var r=0,n=0;n<t;n++)r+=x(e[n])
for(var i=0,a=new Uint8Array(r),o=0;o<t;o++){var s=e[o]
s instanceof Uint8Array||(s="string"==typeof s?k(s):new Uint8Array(s))
var u=s.byteLength
a.set(s,i),i+=u}return a},t.assert=p,t.bytesToString=function(e){p(null!==e&&"object"===i(e)&&void 0!==e.length,"Invalid argument for bytesToString")
var t=e.length
if(t<8192)return String.fromCharCode.apply(null,e)
for(var r=[],n=0;n<t;n+=8192){var a=Math.min(n+8192,t),o=e.subarray(n,a)
r.push(String.fromCharCode.apply(null,o))}return r.join("")},t.createPromiseCapability=function(){var e=Object.create(null),t=!1
return Object.defineProperty(e,"settled",{get:function(){return t}}),e.promise=new Promise((function(r,n){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,n(e)}})),e},t.getVerbosityLevel=function(){return h},t.info=function(e){h>=c.INFOS&&console.log("Info: ".concat(e))},t.isArrayBuffer=function(e){return"object"===i(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function(e,t){if(e.length!==t.length)return!1
return e.every((function(e,r){return e===t[r]}))},t.isBool=function(e){return"boolean"==typeof e},t.isEmptyObj=function(e){for(var t in e)return!1
return!0},t.isNum=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSpace=function(e){return 32===e||9===e||13===e||10===e},t.isSameOrigin=function(e,t){var r
try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(i){return!1}var n=new URL(t,r)
return r.origin===n.origin},t.createValidAbsoluteUrl=function(e,t){if(!e)return null
try{var r=t?new URL(e,t):new URL(e)
if(function(e){if(!e)return!1
switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}(r))return r}catch(n){}return null},t.isLittleEndian=function(){var e=new Uint8Array(4)
return e[0]=1,1===new Uint32Array(e.buffer,0,1)[0]},t.isEvalSupported=function(){try{return new Function(""),!0}catch(e){return!1}},t.log2=function(e){if(e<=0)return 0
return Math.ceil(Math.log2(e))},t.readInt8=function(e,t){return e[t]<<24>>24},t.readUint16=function(e,t){return e[t]<<8|e[t+1]},t.readUint32=function(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0},t.removeNullCharacters=function(e){if("string"!=typeof e)return f("The argument for removeNullCharacters must be a string."),e
return e.replace(w,"")},t.setVerbosityLevel=function(e){Number.isInteger(e)&&(h=e)},t.shadow=function(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r},t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=k,t.stringToPDFString=function(e){var t=e.length,r=[]
if("þ"===e[0]&&"ÿ"===e[1])for(var n=2;n<t;n+=2)r.push(String.fromCharCode(e.charCodeAt(n)<<8|e.charCodeAt(n+1)))
else if("ÿ"===e[0]&&"þ"===e[1])for(var i=2;i<t;i+=2)r.push(String.fromCharCode(e.charCodeAt(i+1)<<8|e.charCodeAt(i)))
else for(var a=0;a<t;++a){var o=P[e.charCodeAt(a)]
r.push(o?String.fromCharCode(o):e.charAt(a))}return r.join("")},t.stringToUTF8String=function(e){return decodeURIComponent(escape(e))}
t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=f,t.unreachable=d,t.createObjectURL=t.FormatError=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.NativeImageDecoding=t.MissingPDFException=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VerbosityLevel=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=t.BaseException=void 0,r(2)
t.IDENTITY_MATRIX=[1,0,0,1,0,0]
t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0]
t.NativeImageDecoding={NONE:"none",DECODE:"decode",DISPLAY:"display"}
t.PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048}
t.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4}
t.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3}
t.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26}
t.AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"}
t.AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"}
t.AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"}
t.AnnotationReplyType={GROUP:"Group",REPLY:"R"}
t.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512}
t.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864}
t.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5}
t.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"}
t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"}
var c={ERRORS:0,WARNINGS:1,INFOS:5}
t.VerbosityLevel=c
t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2}
t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91}
t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"}
t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2}
var h=c.WARNINGS
function f(e){h>=c.WARNINGS&&console.log("Warning: ".concat(e))}function d(e){throw new Error(e)}function p(e,t){e||d(t)}var v=function(){function e(t){this.constructor===e&&d("Cannot initialize BaseException."),this.message=t,this.name=this.constructor.name}return e.prototype=new Error,e.constructor=e,e}()
t.BaseException=v
var g=function(e){function t(e,r){var n
return a(this,t),(n=o(this,s(t).call(this,e))).code=r,n}return u(t,e),t}(v)
t.PasswordException=g
var y=function(e){function t(e,r){var n
return a(this,t),(n=o(this,s(t).call(this,e))).details=r,n}return u(t,e),t}(v)
t.UnknownErrorException=y
var m=function(e){function t(){return a(this,t),o(this,s(t).apply(this,arguments))}return u(t,e),t}(v)
t.InvalidPDFException=m
var b=function(e){function t(){return a(this,t),o(this,s(t).apply(this,arguments))}return u(t,e),t}(v)
t.MissingPDFException=b
var _=function(e){function t(e,r){var n
return a(this,t),(n=o(this,s(t).call(this,e))).status=r,n}return u(t,e),t}(v)
t.UnexpectedResponseException=_
var A=function(e){function t(){return a(this,t),o(this,s(t).apply(this,arguments))}return u(t,e),t}(v)
t.FormatError=A
var S=function(e){function t(){return a(this,t),o(this,s(t).apply(this,arguments))}return u(t,e),t}(v)
t.AbortException=S
var w=/\x00/g
function k(e){p("string"==typeof e,"Invalid argument for stringToBytes")
for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n)
return r}function x(e){return void 0!==e.length?e.length:(p(void 0!==e.byteLength),e.byteLength)}var C=["rgb(",0,",",0,",",0,")"],R=function(){function e(){a(this,e)}var t,r,i
return t=e,i=[{key:"makeCssRgb",value:function(e,t,r){return C[1]=e,C[3]=t,C[5]=r,C.join("")}},{key:"transform",value:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function(e,t){var r=t[0]*t[3]-t[1]*t[2]
return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function(t,r){var n=e.applyTransform(t,r),i=e.applyTransform(t.slice(2,4),r),a=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r)
return[Math.min(n[0],i[0],a[0],o[0]),Math.min(n[1],i[1],a[1],o[1]),Math.max(n[0],i[0],a[0],o[0]),Math.max(n[1],i[1],a[1],o[1])]}},{key:"inverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2]
return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],a=e[2]*t[1]+e[3]*t[3],o=(r+a)/2,s=Math.sqrt((r+a)*(r+a)-4*(r*a-i*n))/2,u=o+s||1,l=o-s||1
return[Math.sqrt(u),Math.sqrt(l)]}},{key:"normalizeRect",value:function(e){var t=e.slice(0)
return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function(t,r){function n(e,t){return e-t}var i=[t[0],t[2],r[0],r[2]].sort(n),a=[t[1],t[3],r[1],r[3]].sort(n),o=[]
return t=e.normalizeRect(t),r=e.normalizeRect(r),i[0]===t[0]&&i[1]===r[0]||i[0]===r[0]&&i[1]===t[0]?(o[0]=i[1],o[2]=i[2],a[0]===t[1]&&a[1]===r[1]||a[0]===r[1]&&a[1]===t[1]?(o[1]=a[1],o[3]=a[2],o):null):null}}],(r=null)&&n(t.prototype,r),i&&n(t,i),e}()
t.Util=R
var P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
var T,E=(T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if(!r&&URL.createObjectURL){var n=new Blob([e],{type:t})
return URL.createObjectURL(n)}for(var i="data:".concat(t,";base64,"),a=0,o=e.length;a<o;a+=3){var s=255&e[a],u=255&e[a+1],l=255&e[a+2],c=s>>2,h=(3&s)<<4|u>>4,f=a+1<o?(15&u)<<2|l>>6:64,d=a+2<o?63&l:64
i+=T[c]+T[h]+T[f]+T[d]}return i})
t.createObjectURL=E},function(e,t,r){"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if("undefined"==typeof globalThis||!globalThis._pdfjsCompatibilityChecked){"undefined"!=typeof globalThis&&globalThis.Math===Math||(globalThis=r(3)),globalThis._pdfjsCompatibilityChecked=!0
var i=r(48).isNodeJS,a="object"===("undefined"==typeof window?"undefined":n(window))&&"object"===("undefined"==typeof document?"undefined":n(document)),o="undefined"!=typeof navigator&&navigator.userAgent||"",s=/Trident/.test(o)
!globalThis.btoa&&i&&(globalThis.btoa=function(e){return Buffer.from(e,"binary").toString("base64")}),!globalThis.atob&&i&&(globalThis.atob=function(e){return Buffer.from(e,"base64").toString("binary")}),a&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),function(){if(a&&!i){var e=document.createElement("div")
if(e.classList.add("testOne","testTwo"),!0!==e.classList.contains("testOne")||!0!==e.classList.contains("testTwo")){var t=DOMTokenList.prototype.add,r=DOMTokenList.prototype.remove
DOMTokenList.prototype.add=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n]
for(var i=0,a=r;i<a.length;i++){var o=a[i]
t.call(this,o)}},DOMTokenList.prototype.remove=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
for(var i=0,a=t;i<a.length;i++){var o=a[i]
r.call(this,o)}}}}}(),a&&!i&&!1!==document.createElement("div").classList.toggle("test",0)&&(DOMTokenList.prototype.toggle=function(e){var t=arguments.length>1?!!arguments[1]:!this.contains(e)
return this[t?"add":"remove"](e),t}),function(){if(a&&s){var e=window.history.pushState,t=window.history.replaceState
window.history.pushState=function(t,r,n){var i=void 0===n?[t,r]:[t,r,n]
e.apply(this,i)},window.history.replaceState=function(e,r,n){var i=void 0===n?[e,r]:[e,r,n]
t.apply(this,i)}}}(),String.prototype.startsWith||r(49),String.prototype.endsWith||r(60),String.prototype.includes||r(62),Array.prototype.includes||r(64),Array.from||r(71),Object.assign||r(93),Math.log2||(Math.log2=r(96)),Number.isNaN||(Number.isNaN=r(98)),Number.isInteger||(Number.isInteger=r(100)),globalThis.Promise&&globalThis.Promise.prototype&&globalThis.Promise.prototype.finally||(globalThis.Promise=r(103)),globalThis.URL=r(127),function(){var e=!1
if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),e=!0}catch(t){}e||(globalThis.ReadableStream=r(134).ReadableStream)}(),globalThis.WeakMap||(globalThis.WeakMap=r(135)),globalThis.WeakSet||(globalThis.WeakSet=r(145)),String.prototype.codePointAt||r(147),String.fromCodePoint||(String.fromCodePoint=r(149)),globalThis.Symbol||r(151),String.prototype.padStart||r(174),String.prototype.padEnd||r(179),Object.values||(Object.values=r(181))}},function(e,t,r){r(4),e.exports=r(6)},function(e,t,r){r(5)({global:!0},{globalThis:r(6)})},function(e,t,r){var n=r(6),i=r(7).f,a=r(21),o=r(24),s=r(25),u=r(35),l=r(47)
e.exports=function(e,t){var r,c,h,f,d,p=e.target,v=e.global,g=e.stat
if(r=v?n:g?n[p]||s(p,{}):(n[p]||{}).prototype)for(c in t){if(f=t[c],h=e.noTargetGet?(d=i(r,c))&&d.value:r[c],!l(v?c:p+(g?".":"#")+c,e.forced)&&void 0!==h){if(typeof f==typeof h)continue
u(f,h)}(e.sham||h&&h.sham)&&a(f,"sham",!0),o(r,c,f,e)}}},function(e,t){var r=function(e){return e&&e.Math==Math&&e}
e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof global&&global)||Function("return this")()},function(e,t,r){var n=r(8),i=r(10),a=r(11),o=r(12),s=r(16),u=r(18),l=r(19),c=Object.getOwnPropertyDescriptor
t.f=n?c:function(e,t){if(e=o(e),t=s(t,!0),l)try{return c(e,t)}catch(r){}if(u(e,t))return a(!i.f.call(e,t),e[t])}},function(e,t,r){var n=r(9)
e.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,r){"use strict"
var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!n.call({1:2},1)
t.f=a?function(e){var t=i(this,e)
return!!t&&t.enumerable}:n},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(13),i=r(15)
e.exports=function(e){return n(i(e))}},function(e,t,r){var n=r(9),i=r(14),a="".split
e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a.call(e,""):Object(e)}:Object},function(e,t){var r={}.toString
e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e)
return e}},function(e,t,r){var n=r(17)
e.exports=function(e,t){if(!n(e))return e
var r,i
if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i
if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i
if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i
throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r={}.hasOwnProperty
e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(8),i=r(9),a=r(20)
e.exports=!n&&!i((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(6),i=r(17),a=n.document,o=i(a)&&i(a.createElement)
e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,r){var n=r(8),i=r(22),a=r(11)
e.exports=n?function(e,t,r){return i.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(8),i=r(19),a=r(23),o=r(16),s=Object.defineProperty
t.f=n?s:function(e,t,r){if(a(e),t=o(t,!0),a(r),i)try{return s(e,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(17)
e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object")
return e}},function(e,t,r){var n=r(6),i=r(21),a=r(18),o=r(25),s=r(26),u=r(28),l=u.get,c=u.enforce,h=String(String).split("String");(e.exports=function(e,t,r,s){var u=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,f=!!s&&!!s.noTargetGet
"function"==typeof r&&("string"!=typeof t||a(r,"name")||i(r,"name",t),c(r).source=h.join("string"==typeof t?t:"")),e!==n?(u?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=r:i(e,t,r)):l?e[t]=r:o(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},function(e,t,r){var n=r(6),i=r(21)
e.exports=function(e,t){try{i(n,e,t)}catch(r){n[e]=t}return t}},function(e,t,r){var n=r(27),i=Function.toString
"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return i.call(e)}),e.exports=n.inspectSource},function(e,t,r){var n=r(6),i=r(25),a=n["__core-js_shared__"]||i("__core-js_shared__",{})
e.exports=a},function(e,t,r){var n,i,a,o=r(29),s=r(6),u=r(17),l=r(21),c=r(18),h=r(30),f=r(34),d=s.WeakMap
if(o){var p=new d,v=p.get,g=p.has,y=p.set
n=function(e,t){return y.call(p,e,t),t},i=function(e){return v.call(p,e)||{}},a=function(e){return g.call(p,e)}}else{var m=h("state")
f[m]=!0,n=function(e,t){return l(e,m,t),t},i=function(e){return c(e,m)?e[m]:{}},a=function(e){return c(e,m)}}e.exports={set:n,get:i,has:a,enforce:function(e){return a(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var r
if(!u(t)||(r=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required")
return r}}}},function(e,t,r){var n=r(6),i=r(26),a=n.WeakMap
e.exports="function"==typeof a&&/native code/.test(i(a))},function(e,t,r){var n=r(31),i=r(33),a=n("keys")
e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t,r){var n=r(32),i=r(27);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.0",mode:n?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t){var r=0,n=Math.random()
e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},function(e,t){e.exports={}},function(e,t,r){var n=r(18),i=r(36),a=r(7),o=r(22)
e.exports=function(e,t){for(var r=i(t),s=o.f,u=a.f,l=0;l<r.length;l++){var c=r[l]
n(e,c)||s(e,c,u(t,c))}}},function(e,t,r){var n=r(37),i=r(39),a=r(46),o=r(23)
e.exports=n("Reflect","ownKeys")||function(e){var t=i.f(o(e)),r=a.f
return r?t.concat(r(e)):t}},function(e,t,r){var n=r(38),i=r(6),a=function(e){return"function"==typeof e?e:void 0}
e.exports=function(e,t){return arguments.length<2?a(n[e])||a(i[e]):n[e]&&n[e][t]||i[e]&&i[e][t]}},function(e,t,r){var n=r(6)
e.exports=n},function(e,t,r){var n=r(40),i=r(45).concat("length","prototype")
t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},function(e,t,r){var n=r(18),i=r(12),a=r(41).indexOf,o=r(34)
e.exports=function(e,t){var r,s=i(e),u=0,l=[]
for(r in s)!n(o,r)&&n(s,r)&&l.push(r)
for(;t.length>u;)n(s,r=t[u++])&&(~a(l,r)||l.push(r))
return l}},function(e,t,r){var n=r(12),i=r(42),a=r(44),o=function(e){return function(t,r,o){var s,u=n(t),l=i(u.length),c=a(o,l)
if(e&&r!=r){for(;l>c;)if((s=u[c++])!=s)return!0}else for(;l>c;c++)if((e||c in u)&&u[c]===r)return e||c||0
return!e&&-1}}
e.exports={includes:o(!0),indexOf:o(!1)}},function(e,t,r){var n=r(43),i=Math.min
e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t){var r=Math.ceil,n=Math.floor
e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(43),i=Math.max,a=Math.min
e.exports=function(e,t){var r=n(e)
return r<0?i(r+t,0):a(r,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(9),i=/#|\.prototype\./,a=function(e,t){var r=s[o(e)]
return r==l||r!=u&&("function"==typeof t?n(t):!!t)},o=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},s=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P"
e.exports=a},function(e,t,r){"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isNodeJS=void 0
var i="object"===("undefined"==typeof process?"undefined":n(process))&&process+""=="[object process]"&&!process.versions.nw&&!process.versions.electron
t.isNodeJS=i},function(e,t,r){r(50)
var n=r(57)
e.exports=n("String","startsWith")},function(e,t,r){"use strict"
var n,i=r(5),a=r(7).f,o=r(42),s=r(51),u=r(15),l=r(56),c=r(32),h="".startsWith,f=Math.min,d=l("startsWith")
i({target:"String",proto:!0,forced:!!(c||d||(n=a(String.prototype,"startsWith"),!n||n.writable))&&!d},{startsWith:function(e){var t=String(u(this))
s(e)
var r=o(f(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e)
return h?h.call(t,n,r):t.slice(r,r+n.length)===n}})},function(e,t,r){var n=r(52)
e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions")
return e}},function(e,t,r){var n=r(17),i=r(14),a=r(53)("match")
e.exports=function(e){var t
return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},function(e,t,r){var n=r(6),i=r(31),a=r(18),o=r(33),s=r(54),u=r(55),l=i("wks"),c=n.Symbol,h=u?c:o
e.exports=function(e){return a(l,e)||(s&&a(c,e)?l[e]=c[e]:l[e]=h("Symbol."+e)),l[e]}},function(e,t,r){var n=r(9)
e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(e,t,r){var n=r(54)
e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol()},function(e,t,r){var n=r(53)("match")
e.exports=function(e){var t=/./
try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(i){}}return!1}},function(e,t,r){var n=r(6),i=r(58),a=Function.call
e.exports=function(e,t,r){return i(a,n[e].prototype[t],r)}},function(e,t,r){var n=r(59)
e.exports=function(e,t,r){if(n(e),void 0===t)return e
switch(r){case 0:return function(){return e.call(t)}
case 1:return function(r){return e.call(t,r)}
case 2:return function(r,n){return e.call(t,r,n)}
case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")
return e}},function(e,t,r){r(61)
var n=r(57)
e.exports=n("String","endsWith")},function(e,t,r){"use strict"
var n,i=r(5),a=r(7).f,o=r(42),s=r(51),u=r(15),l=r(56),c=r(32),h="".endsWith,f=Math.min,d=l("endsWith")
i({target:"String",proto:!0,forced:!!(c||d||(n=a(String.prototype,"endsWith"),!n||n.writable))&&!d},{endsWith:function(e){var t=String(u(this))
s(e)
var r=arguments.length>1?arguments[1]:void 0,n=o(t.length),i=void 0===r?n:f(o(r),n),a=String(e)
return h?h.call(t,a,i):t.slice(i-a.length,i)===a}})},function(e,t,r){r(63)
var n=r(57)
e.exports=n("String","includes")},function(e,t,r){"use strict"
var n=r(5),i=r(51),a=r(15)
n({target:"String",proto:!0,forced:!r(56)("includes")},{includes:function(e){return!!~String(a(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(65)
var n=r(57)
e.exports=n("Array","includes")},function(e,t,r){"use strict"
var n=r(5),i=r(41).includes,a=r(66)
n({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},function(e,t,r){var n=r(53),i=r(67),a=r(22),o=n("unscopables"),s=Array.prototype
null==s[o]&&a.f(s,o,{configurable:!0,value:i(null)}),e.exports=function(e){s[o][e]=!0}},function(e,t,r){var n,i=r(23),a=r(68),o=r(45),s=r(34),u=r(70),l=r(20),c=r(30),h=c("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"<\/script>"},p=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(i){}var e,t
p=n?function(e){e.write(d("")),e.close()
var t=e.parentWindow.Object
return e=null,t}(n):((t=l("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F)
for(var r=o.length;r--;)delete p.prototype[o[r]]
return p()}
s[h]=!0,e.exports=Object.create||function(e,t){var r
return null!==e?(f.prototype=i(e),r=new f,f.prototype=null,r[h]=e):r=p(),void 0===t?r:a(r,t)}},function(e,t,r){var n=r(8),i=r(22),a=r(23),o=r(69)
e.exports=n?Object.defineProperties:function(e,t){a(e)
for(var r,n=o(t),s=n.length,u=0;s>u;)i.f(e,r=n[u++],t[r])
return e}},function(e,t,r){var n=r(40),i=r(45)
e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,r){var n=r(37)
e.exports=n("document","documentElement")},function(e,t,r){r(72),r(84)
var n=r(38)
e.exports=n.Array.from},function(e,t,r){"use strict"
var n=r(73).charAt,i=r(28),a=r(74),o=i.set,s=i.getterFor("String Iterator")
a(String,"String",(function(e){o(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=s(this),r=t.string,i=t.index
return i>=r.length?{value:void 0,done:!0}:(e=n(r,i),t.index+=e.length,{value:e,done:!1})}))},function(e,t,r){var n=r(43),i=r(15),a=function(e){return function(t,r){var a,o,s=String(i(t)),u=n(r),l=s.length
return u<0||u>=l?e?"":void 0:(a=s.charCodeAt(u))<55296||a>56319||u+1===l||(o=s.charCodeAt(u+1))<56320||o>57343?e?s.charAt(u):a:e?s.slice(u,u+2):o-56320+(a-55296<<10)+65536}}
e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,r){"use strict"
var n=r(5),i=r(75),a=r(77),o=r(82),s=r(80),u=r(21),l=r(24),c=r(53),h=r(32),f=r(81),d=r(76),p=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,g=c("iterator"),y=function(){return this}
e.exports=function(e,t,r,c,d,m,b){i(r,t,c)
var _,A,S,w=function(e){if(e===d&&P)return P
if(!v&&e in C)return C[e]
switch(e){case"keys":case"values":case"entries":return function(){return new r(this,e)}}return function(){return new r(this)}},k=t+" Iterator",x=!1,C=e.prototype,R=C[g]||C["@@iterator"]||d&&C[d],P=!v&&R||w(d),T="Array"==t&&C.entries||R
if(T&&(_=a(T.call(new e)),p!==Object.prototype&&_.next&&(h||a(_)===p||(o?o(_,p):"function"!=typeof _[g]&&u(_,g,y)),s(_,k,!0,!0),h&&(f[k]=y))),"values"==d&&R&&"values"!==R.name&&(x=!0,P=function(){return R.call(this)}),h&&!b||C[g]===P||u(C,g,P),f[t]=P,d)if(A={values:w("values"),keys:m?P:w("keys"),entries:w("entries")},b)for(S in A)(v||x||!(S in C))&&l(C,S,A[S])
else n({target:t,proto:!0,forced:v||x},A)
return A}},function(e,t,r){"use strict"
var n=r(76).IteratorPrototype,i=r(67),a=r(11),o=r(80),s=r(81),u=function(){return this}
e.exports=function(e,t,r){var l=t+" Iterator"
return e.prototype=i(n,{next:a(1,r)}),o(e,l,!1,!0),s[l]=u,e}},function(e,t,r){"use strict"
var n,i,a,o=r(77),s=r(21),u=r(18),l=r(53),c=r(32),h=l("iterator"),f=!1;[].keys&&("next"in(a=[].keys())?(i=o(o(a)))!==Object.prototype&&(n=i):f=!0),null==n&&(n={}),c||u(n,h)||s(n,h,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:f}},function(e,t,r){var n=r(18),i=r(78),a=r(30),o=r(79),s=a("IE_PROTO"),u=Object.prototype
e.exports=o?Object.getPrototypeOf:function(e){return e=i(e),n(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,r){var n=r(15)
e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(9)
e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,r){var n=r(22).f,i=r(18),a=r(53)("toStringTag")
e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t){e.exports={}},function(e,t,r){var n=r(23),i=r(83)
e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={}
try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(a){}return function(r,a){return n(r),i(a),t?e.call(r,a):r.__proto__=a,r}}():void 0)},function(e,t,r){var n=r(17)
e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")
return e}},function(e,t,r){var n=r(5),i=r(85)
n({target:"Array",stat:!0,forced:!r(92)((function(e){Array.from(e)}))},{from:i})},function(e,t,r){"use strict"
var n=r(58),i=r(78),a=r(86),o=r(87),s=r(42),u=r(88),l=r(89)
e.exports=function(e){var t,r,c,h,f,d=i(e),p="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,y=void 0!==g,m=0,b=l(d)
if(y&&(g=n(g,v>2?arguments[2]:void 0,2)),null==b||p==Array&&o(b))for(r=new p(t=s(d.length));t>m;m++)u(r,m,y?g(d[m],m):d[m])
else for(f=(h=b.call(d)).next,r=new p;!(c=f.call(h)).done;m++)u(r,m,y?a(h,g,[c.value,m],!0):c.value)
return r.length=m,r}},function(e,t,r){var n=r(23)
e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(o){var a=e.return
throw void 0!==a&&n(a.call(e)),o}}},function(e,t,r){var n=r(53),i=r(81),a=n("iterator"),o=Array.prototype
e.exports=function(e){return void 0!==e&&(i.Array===e||o[a]===e)}},function(e,t,r){"use strict"
var n=r(16),i=r(22),a=r(11)
e.exports=function(e,t,r){var o=n(t)
o in e?i.f(e,o,a(0,r)):e[o]=r}},function(e,t,r){var n=r(90),i=r(81),a=r(53)("iterator")
e.exports=function(e){if(null!=e)return e[a]||e["@@iterator"]||i[n(e)]}},function(e,t,r){var n=r(91),i=r(14),a=r(53)("toStringTag"),o="Arguments"==i(function(){return arguments}())
e.exports=n?i:function(e){var t,r,n
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),a))?r:o?i(t):"Object"==(n=i(t))&&"function"==typeof t.callee?"Arguments":n}},function(e,t,r){var n={}
n[r(53)("toStringTag")]="z",e.exports="[object z]"===String(n)},function(e,t,r){var n=r(53)("iterator"),i=!1
try{var a=0,o={next:function(){return{done:!!a++}},return:function(){i=!0}}
o[n]=function(){return this},Array.from(o,(function(){throw 2}))}catch(s){}e.exports=function(e,t){if(!t&&!i)return!1
var r=!1
try{var a={}
a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(s){}return r}},function(e,t,r){r(94)
var n=r(38)
e.exports=n.Object.assign},function(e,t,r){var n=r(5),i=r(95)
n({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},function(e,t,r){"use strict"
var n=r(8),i=r(9),a=r(69),o=r(46),s=r(10),u=r(78),l=r(13),c=Object.assign,h=Object.defineProperty
e.exports=!c||i((function(){if(n&&1!==c({b:1},c(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0
var e={},t={},r=Symbol()
return e[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=c({},e)[r]||"abcdefghijklmnopqrst"!=a(c({},t)).join("")}))?function(e,t){for(var r=u(e),i=arguments.length,c=1,h=o.f,f=s.f;i>c;)for(var d,p=l(arguments[c++]),v=h?a(p).concat(h(p)):a(p),g=v.length,y=0;g>y;)d=v[y++],n&&!f.call(p,d)||(r[d]=p[d])
return r}:c},function(e,t,r){r(97)
var n=r(38)
e.exports=n.Math.log2},function(e,t,r){var n=r(5),i=Math.log,a=Math.LN2
n({target:"Math",stat:!0},{log2:function(e){return i(e)/a}})},function(e,t,r){r(99)
var n=r(38)
e.exports=n.Number.isNaN},function(e,t,r){r(5)({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},function(e,t,r){r(101)
var n=r(38)
e.exports=n.Number.isInteger},function(e,t,r){r(5)({target:"Number",stat:!0},{isInteger:r(102)})},function(e,t,r){var n=r(17),i=Math.floor
e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},function(e,t,r){r(104),r(72),r(106),r(109),r(125),r(126)
var n=r(38)
e.exports=n.Promise},function(e,t,r){var n=r(91),i=r(24),a=r(105)
n||i(Object.prototype,"toString",a,{unsafe:!0})},function(e,t,r){"use strict"
var n=r(91),i=r(90)
e.exports=n?{}.toString:function(){return"[object "+i(this)+"]"}},function(e,t,r){var n=r(6),i=r(107),a=r(108),o=r(21),s=r(53),u=s("iterator"),l=s("toStringTag"),c=a.values
for(var h in i){var f=n[h],d=f&&f.prototype
if(d){if(d[u]!==c)try{o(d,u,c)}catch(v){d[u]=c}if(d[l]||o(d,l,h),i[h])for(var p in a)if(d[p]!==a[p])try{o(d,p,a[p])}catch(v){d[p]=a[p]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict"
var n=r(12),i=r(66),a=r(81),o=r(28),s=r(74),u=o.set,l=o.getterFor("Array Iterator")
e.exports=s(Array,"Array",(function(e,t){u(this,{type:"Array Iterator",target:n(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,r=e.kind,n=e.index++
return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")},function(e,t,r){"use strict"
var n,i,a,o,s=r(5),u=r(32),l=r(6),c=r(37),h=r(110),f=r(24),d=r(111),p=r(80),v=r(112),g=r(17),y=r(59),m=r(113),b=r(14),_=r(26),A=r(114),S=r(92),w=r(115),k=r(116).set,x=r(119),C=r(120),R=r(122),P=r(121),T=r(123),E=r(28),O=r(47),L=r(53),F=r(124),I=L("species"),M="Promise",j=E.get,N=E.set,D=E.getterFor(M),q=h,U=l.TypeError,W=l.document,B=l.process,G=c("fetch"),z=P.f,H=z,X="process"==b(B),Y=!!(W&&W.createEvent&&l.dispatchEvent),V=O(M,(function(){if(!(_(q)!==String(q))){if(66===F)return!0
if(!X&&"function"!=typeof PromiseRejectionEvent)return!0}if(u&&!q.prototype.finally)return!0
if(F>=51&&/native code/.test(q))return!1
var e=q.resolve(1),t=function(e){e((function(){}),(function(){}))}
return(e.constructor={})[I]=t,!(e.then((function(){}))instanceof t)})),Q=V||!S((function(e){q.all(e).catch((function(){}))})),K=function(e){var t
return!(!g(e)||"function"!=typeof(t=e.then))&&t},J=function(e,t,r){if(!t.notified){t.notified=!0
var n=t.reactions
x((function(){for(var i=t.value,a=1==t.state,o=0;n.length>o;){var s,u,l,c=n[o++],h=a?c.ok:c.fail,f=c.resolve,d=c.reject,p=c.domain
try{h?(a||(2===t.rejection&&te(e,t),t.rejection=1),!0===h?s=i:(p&&p.enter(),s=h(i),p&&(p.exit(),l=!0)),s===c.promise?d(U("Promise-chain cycle")):(u=K(s))?u.call(s,f,d):f(s)):d(i)}catch(v){p&&!l&&p.exit(),d(v)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&$(e,t)}))}},Z=function(e,t,r){var n,i
Y?((n=W.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),l.dispatchEvent(n)):n={promise:t,reason:r},(i=l["on"+e])?i(n):"unhandledrejection"===e&&R("Unhandled promise rejection",r)},$=function(e,t){k.call(l,(function(){var r,n=t.value
if(ee(t)&&(r=T((function(){X?B.emit("unhandledRejection",n,e):Z("unhandledrejection",e,n)})),t.rejection=X||ee(t)?2:1,r.error))throw r.value}))},ee=function(e){return 1!==e.rejection&&!e.parent},te=function(e,t){k.call(l,(function(){X?B.emit("rejectionHandled",e):Z("rejectionhandled",e,t.value)}))},re=function(e,t,r,n){return function(i){e(t,r,i,n)}},ne=function(e,t,r,n){t.done||(t.done=!0,n&&(t=n),t.value=r,t.state=2,J(e,t,!0))},ie=function(e,t,r,n){if(!t.done){t.done=!0,n&&(t=n)
try{if(e===r)throw U("Promise can't be resolved itself")
var i=K(r)
i?x((function(){var n={done:!1}
try{i.call(r,re(ie,e,n,t),re(ne,e,n,t))}catch(a){ne(e,n,a,t)}})):(t.value=r,t.state=1,J(e,t,!1))}catch(a){ne(e,{done:!1},a,t)}}}
V&&(q=function(e){m(this,q,M),y(e),n.call(this)
var t=j(this)
try{e(re(ie,this,t),re(ne,this,t))}catch(r){ne(this,t,r)}},(n=function(e){N(this,{type:M,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(q.prototype,{then:function(e,t){var r=D(this),n=z(w(this,q))
return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=X?B.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&J(this,r,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new n,t=j(e)
this.promise=e,this.resolve=re(ie,e,t),this.reject=re(ne,e,t)},P.f=z=function(e){return e===q||e===a?new i(e):H(e)},u||"function"!=typeof h||(o=h.prototype.then,f(h.prototype,"then",(function(e,t){var r=this
return new q((function(e,t){o.call(r,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof G&&s({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return C(q,G.apply(l,arguments))}}))),s({global:!0,wrap:!0,forced:V},{Promise:q}),p(q,M,!1,!0),v(M),a=c(M),s({target:M,stat:!0,forced:V},{reject:function(e){var t=z(this)
return t.reject.call(void 0,e),t.promise}}),s({target:M,stat:!0,forced:u||V},{resolve:function(e){return C(u&&this===a?q:this,e)}}),s({target:M,stat:!0,forced:Q},{all:function(e){var t=this,r=z(t),n=r.resolve,i=r.reject,a=T((function(){var r=y(t.resolve),a=[],o=0,s=1
A(e,(function(e){var u=o++,l=!1
a.push(void 0),s++,r.call(t,e).then((function(e){l||(l=!0,a[u]=e,--s||n(a))}),i)})),--s||n(a)}))
return a.error&&i(a.value),r.promise},race:function(e){var t=this,r=z(t),n=r.reject,i=T((function(){var i=y(t.resolve)
A(e,(function(e){i.call(t,e).then(r.resolve,n)}))}))
return i.error&&n(i.value),r.promise}})},function(e,t,r){var n=r(6)
e.exports=n.Promise},function(e,t,r){var n=r(24)
e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r)
return e}},function(e,t,r){"use strict"
var n=r(37),i=r(22),a=r(53),o=r(8),s=a("species")
e.exports=function(e){var t=n(e),r=i.f
o&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation")
return e}},function(e,t,r){var n=r(23),i=r(87),a=r(42),o=r(58),s=r(89),u=r(86),l=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,r,c,h){var f,d,p,v,g,y,m,b=o(t,r,c?2:1)
if(h)f=e
else{if("function"!=typeof(d=s(e)))throw TypeError("Target is not iterable")
if(i(d)){for(p=0,v=a(e.length);v>p;p++)if((g=c?b(n(m=e[p])[0],m[1]):b(e[p]))&&g instanceof l)return g
return new l(!1)}f=d.call(e)}for(y=f.next;!(m=y.call(f)).done;)if("object"==typeof(g=u(f,b,m.value,c))&&g&&g instanceof l)return g
return new l(!1)}).stop=function(e){return new l(!0,e)}},function(e,t,r){var n=r(23),i=r(59),a=r(53)("species")
e.exports=function(e,t){var r,o=n(e).constructor
return void 0===o||null==(r=n(o)[a])?t:i(r)}},function(e,t,r){var n,i,a,o=r(6),s=r(9),u=r(14),l=r(58),c=r(70),h=r(20),f=r(117),d=o.location,p=o.setImmediate,v=o.clearImmediate,g=o.process,y=o.MessageChannel,m=o.Dispatch,b=0,_={},A=function(e){if(_.hasOwnProperty(e)){var t=_[e]
delete _[e],t()}},S=function(e){return function(){A(e)}},w=function(e){A(e.data)},k=function(e){o.postMessage(e+"",d.protocol+"//"+d.host)}
p&&v||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++])
return _[++b]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},n(b),b},v=function(e){delete _[e]},"process"==u(g)?n=function(e){g.nextTick(S(e))}:m&&m.now?n=function(e){m.now(S(e))}:y&&!f?(a=(i=new y).port2,i.port1.onmessage=w,n=l(a.postMessage,a,1)):!o.addEventListener||"function"!=typeof postMessage||o.importScripts||s(k)?n="onreadystatechange"in h("script")?function(e){c.appendChild(h("script")).onreadystatechange=function(){c.removeChild(this),A(e)}}:function(e){setTimeout(S(e),0)}:(n=k,o.addEventListener("message",w,!1))),e.exports={set:p,clear:v}},function(e,t,r){var n=r(118)
e.exports=/(iphone|ipod|ipad).*applewebkit/i.test(n)},function(e,t,r){var n=r(37)
e.exports=n("navigator","userAgent")||""},function(e,t,r){var n,i,a,o,s,u,l,c,h=r(6),f=r(7).f,d=r(14),p=r(116).set,v=r(117),g=h.MutationObserver||h.WebKitMutationObserver,y=h.process,m=h.Promise,b="process"==d(y),_=f(h,"queueMicrotask"),A=_&&_.value
A||(n=function(){var e,t
for(b&&(e=y.domain)&&e.exit();i;){t=i.fn,i=i.next
try{t()}catch(r){throw i?o():a=void 0,r}}a=void 0,e&&e.enter()},b?o=function(){y.nextTick(n)}:g&&!v?(s=!0,u=document.createTextNode(""),new g(n).observe(u,{characterData:!0}),o=function(){u.data=s=!s}):m&&m.resolve?(l=m.resolve(void 0),c=l.then,o=function(){c.call(l,n)}):o=function(){p.call(h,n)}),e.exports=A||function(e){var t={fn:e,next:void 0}
a&&(a.next=t),i||(i=t,o()),a=t}},function(e,t,r){var n=r(23),i=r(17),a=r(121)
e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t
var r=a.f(e)
return(0,r.resolve)(t),r.promise}},function(e,t,r){"use strict"
var n=r(59),i=function(e){var t,r
this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor")
t=e,r=n})),this.resolve=n(t),this.reject=n(r)}
e.exports.f=function(e){return new i(e)}},function(e,t,r){var n=r(6)
e.exports=function(e,t){var r=n.console
r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},function(e,t,r){var n,i,a=r(6),o=r(118),s=a.process,u=s&&s.versions,l=u&&u.v8
l?i=(n=l.split("."))[0]+n[1]:o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(i=n[1]),e.exports=i&&+i},function(e,t,r){"use strict"
var n=r(5),i=r(59),a=r(121),o=r(123),s=r(114)
n({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=a.f(t),n=r.resolve,u=r.reject,l=o((function(){var r=i(t.resolve),a=[],o=0,u=1
s(e,(function(e){var i=o++,s=!1
a.push(void 0),u++,r.call(t,e).then((function(e){s||(s=!0,a[i]={status:"fulfilled",value:e},--u||n(a))}),(function(e){s||(s=!0,a[i]={status:"rejected",reason:e},--u||n(a))}))})),--u||n(a)}))
return l.error&&u(l.value),r.promise}})},function(e,t,r){"use strict"
var n=r(5),i=r(32),a=r(110),o=r(9),s=r(37),u=r(115),l=r(120),c=r(24)
n({target:"Promise",proto:!0,real:!0,forced:!!a&&o((function(){a.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=u(this,s("Promise")),r="function"==typeof e
return this.then(r?function(r){return l(t,e()).then((function(){return r}))}:e,r?function(r){return l(t,e()).then((function(){throw r}))}:e)}}),i||"function"!=typeof a||a.prototype.finally||c(a.prototype,"finally",s("Promise").prototype.finally)},function(e,t,r){r(128),r(133),r(131)
var n=r(38)
e.exports=n.URL},function(e,t,r){"use strict"
r(72)
var n,i=r(5),a=r(8),o=r(129),s=r(6),u=r(68),l=r(24),c=r(113),h=r(18),f=r(95),d=r(85),p=r(73).codeAt,v=r(130),g=r(80),y=r(131),m=r(28),b=s.URL,_=y.URLSearchParams,A=y.getState,S=m.set,w=m.getterFor("URL"),k=Math.floor,x=Math.pow,C=/[A-Za-z]/,R=/[\d+\-.A-Za-z]/,P=/\d/,T=/^(0x|0X)/,E=/^[0-7]+$/,O=/^\d+$/,L=/^[\dA-Fa-f]+$/,F=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,I=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,M=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,j=/[\u0009\u000A\u000D]/g,N=function(e,t){var r,n,i
if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host"
if(!(r=q(t.slice(1,-1))))return"Invalid host"
e.host=r}else if(Y(e)){if(t=v(t),F.test(t))return"Invalid host"
if(null===(r=D(t)))return"Invalid host"
e.host=r}else{if(I.test(t))return"Invalid host"
for(r="",n=d(t),i=0;i<n.length;i++)r+=H(n[i],W)
e.host=r}},D=function(e){var t,r,n,i,a,o,s,u=e.split(".")
if(u.length&&""==u[u.length-1]&&u.pop(),(t=u.length)>4)return e
for(r=[],n=0;n<t;n++){if(""==(i=u[n]))return e
if(a=10,i.length>1&&"0"==i.charAt(0)&&(a=T.test(i)?16:8,i=i.slice(8==a?1:2)),""===i)o=0
else{if(!(10==a?O:8==a?E:L).test(i))return e
o=parseInt(i,a)}r.push(o)}for(n=0;n<t;n++)if(o=r[n],n==t-1){if(o>=x(256,5-t))return null}else if(o>255)return null
for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*x(256,3-n)
return s},q=function(e){var t,r,n,i,a,o,s,u=[0,0,0,0,0,0,0,0],l=0,c=null,h=0,f=function(){return e.charAt(h)}
if(":"==f()){if(":"!=e.charAt(1))return
h+=2,c=++l}for(;f();){if(8==l)return
if(":"!=f()){for(t=r=0;r<4&&L.test(f());)t=16*t+parseInt(f(),16),h++,r++
if("."==f()){if(0==r)return
if(h-=r,l>6)return
for(n=0;f();){if(i=null,n>0){if(!("."==f()&&n<4))return
h++}if(!P.test(f()))return
for(;P.test(f());){if(a=parseInt(f(),10),null===i)i=a
else{if(0==i)return
i=10*i+a}if(i>255)return
h++}u[l]=256*u[l]+i,2!=++n&&4!=n||l++}if(4!=n)return
break}if(":"==f()){if(h++,!f())return}else if(f())return
u[l++]=t}else{if(null!==c)return
h++,c=++l}}if(null!==c)for(o=l-c,l=7;0!=l&&o>0;)s=u[l],u[l--]=u[c+o-1],u[c+--o]=s
else if(8!=l)return
return u},U=function(e){var t,r,n,i
if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=k(e/256)
return t.join(".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,r=1,n=null,i=0,a=0;a<8;a++)0!==e[a]?(i>r&&(t=n,r=i),n=null,i=0):(null===n&&(n=a),++i)
return i>r&&(t=n,r=i),t}(e),r=0;r<8;r++)i&&0===e[r]||(i&&(i=!1),n===r?(t+=r?":":"::",i=!0):(t+=e[r].toString(16),r<7&&(t+=":")))
return"["+t+"]"}return e},W={},B=f({},W,{" ":1,'"':1,"<":1,">":1,"`":1}),G=f({},B,{"#":1,"?":1,"{":1,"}":1}),z=f({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),H=function(e,t){var r=p(e,0)
return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},X={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Y=function(e){return h(X,e.scheme)},V=function(e){return""!=e.username||""!=e.password},Q=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},K=function(e,t){var r
return 2==e.length&&C.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},J=function(e){var t
return e.length>1&&K(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Z=function(e){var t=e.path,r=t.length
!r||"file"==e.scheme&&1==r&&K(t[0],!0)||t.pop()},$=function(e){return"."===e||"%2e"===e.toLowerCase()},ee={},te={},re={},ne={},ie={},ae={},oe={},se={},ue={},le={},ce={},he={},fe={},de={},pe={},ve={},ge={},ye={},me={},be={},_e={},Ae=function(e,t,r,i){var a,o,s,u,l,c=r||ee,f=0,p="",v=!1,g=!1,y=!1
for(r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(M,"")),t=t.replace(j,""),a=d(t);f<=a.length;){switch(o=a[f],c){case ee:if(!o||!C.test(o)){if(r)return"Invalid scheme"
c=re
continue}p+=o.toLowerCase(),c=te
break
case te:if(o&&(R.test(o)||"+"==o||"-"==o||"."==o))p+=o.toLowerCase()
else{if(":"!=o){if(r)return"Invalid scheme"
p="",c=re,f=0
continue}if(r&&(Y(e)!=h(X,p)||"file"==p&&(V(e)||null!==e.port)||"file"==e.scheme&&!e.host))return
if(e.scheme=p,r)return void(Y(e)&&X[e.scheme]==e.port&&(e.port=null))
p="","file"==e.scheme?c=de:Y(e)&&i&&i.scheme==e.scheme?c=ne:Y(e)?c=se:"/"==a[f+1]?(c=ie,f++):(e.cannotBeABaseURL=!0,e.path.push(""),c=me)}break
case re:if(!i||i.cannotBeABaseURL&&"#"!=o)return"Invalid scheme"
if(i.cannotBeABaseURL&&"#"==o){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,c=_e
break}c="file"==i.scheme?de:ae
continue
case ne:if("/"!=o||"/"!=a[f+1]){c=ae
continue}c=ue,f++
break
case ie:if("/"==o){c=le
break}c=ye
continue
case ae:if(e.scheme=i.scheme,o==n)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query
else if("/"==o||"\\"==o&&Y(e))c=oe
else if("?"==o)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",c=be
else{if("#"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),c=ye
continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=_e}break
case oe:if(!Y(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,c=ye
continue}c=le}else c=ue
break
case se:if(c=ue,"/"!=o||"/"!=p.charAt(f+1))continue
f++
break
case ue:if("/"!=o&&"\\"!=o){c=le
continue}break
case le:if("@"==o){v&&(p="%40"+p),v=!0,s=d(p)
for(var m=0;m<s.length;m++){var b=s[m]
if(":"!=b||y){var _=H(b,z)
y?e.password+=_:e.username+=_}else y=!0}p=""}else if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Y(e)){if(v&&""==p)return"Invalid authority"
f-=d(p).length+1,p="",c=ce}else p+=o
break
case ce:case he:if(r&&"file"==e.scheme){c=ve
continue}if(":"!=o||g){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Y(e)){if(Y(e)&&""==p)return"Invalid host"
if(r&&""==p&&(V(e)||null!==e.port))return
if(u=N(e,p))return u
if(p="",c=ge,r)return
continue}"["==o?g=!0:"]"==o&&(g=!1),p+=o}else{if(""==p)return"Invalid host"
if(u=N(e,p))return u
if(p="",c=fe,r==he)return}break
case fe:if(!P.test(o)){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Y(e)||r){if(""!=p){var A=parseInt(p,10)
if(A>65535)return"Invalid port"
e.port=Y(e)&&A===X[e.scheme]?null:A,p=""}if(r)return
c=ge
continue}return"Invalid port"}p+=o
break
case de:if(e.scheme="file","/"==o||"\\"==o)c=pe
else{if(!i||"file"!=i.scheme){c=ye
continue}if(o==n)e.host=i.host,e.path=i.path.slice(),e.query=i.query
else if("?"==o)e.host=i.host,e.path=i.path.slice(),e.query="",c=be
else{if("#"!=o){J(a.slice(f).join(""))||(e.host=i.host,e.path=i.path.slice(),Z(e)),c=ye
continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=_e}}break
case pe:if("/"==o||"\\"==o){c=ve
break}i&&"file"==i.scheme&&!J(a.slice(f).join(""))&&(K(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),c=ye
continue
case ve:if(o==n||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&K(p))c=ye
else if(""==p){if(e.host="",r)return
c=ge}else{if(u=N(e,p))return u
if("localhost"==e.host&&(e.host=""),r)return
p="",c=ge}continue}p+=o
break
case ge:if(Y(e)){if(c=ye,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=n&&(c=ye,"/"!=o))continue}else e.fragment="",c=_e
else e.query="",c=be
break
case ye:if(o==n||"/"==o||"\\"==o&&Y(e)||!r&&("?"==o||"#"==o)){if(".."===(l=(l=p).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(Z(e),"/"==o||"\\"==o&&Y(e)||e.path.push("")):$(p)?"/"==o||"\\"==o&&Y(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&K(p)&&(e.host&&(e.host=""),p=p.charAt(0)+":"),e.path.push(p)),p="","file"==e.scheme&&(o==n||"?"==o||"#"==o))for(;e.path.length>1&&""===e.path[0];)e.path.shift()
"?"==o?(e.query="",c=be):"#"==o&&(e.fragment="",c=_e)}else p+=H(o,G)
break
case me:"?"==o?(e.query="",c=be):"#"==o?(e.fragment="",c=_e):o!=n&&(e.path[0]+=H(o,W))
break
case be:r||"#"!=o?o!=n&&("'"==o&&Y(e)?e.query+="%27":e.query+="#"==o?"%23":H(o,W)):(e.fragment="",c=_e)
break
case _e:o!=n&&(e.fragment+=H(o,B))}f++}},Se=function(e){var t,r,n=c(this,Se,"URL"),i=arguments.length>1?arguments[1]:void 0,o=String(e),s=S(n,{type:"URL"})
if(void 0!==i)if(i instanceof Se)t=w(i)
else if(r=Ae(t={},String(i)))throw TypeError(r)
if(r=Ae(s,o,null,t))throw TypeError(r)
var u=s.searchParams=new _,l=A(u)
l.updateSearchParams(s.query),l.updateURL=function(){s.query=String(u)||null},a||(n.href=ke.call(n),n.origin=xe.call(n),n.protocol=Ce.call(n),n.username=Re.call(n),n.password=Pe.call(n),n.host=Te.call(n),n.hostname=Ee.call(n),n.port=Oe.call(n),n.pathname=Le.call(n),n.search=Fe.call(n),n.searchParams=Ie.call(n),n.hash=Me.call(n))},we=Se.prototype,ke=function(){var e=w(this),t=e.scheme,r=e.username,n=e.password,i=e.host,a=e.port,o=e.path,s=e.query,u=e.fragment,l=t+":"
return null!==i?(l+="//",V(e)&&(l+=r+(n?":"+n:"")+"@"),l+=U(i),null!==a&&(l+=":"+a)):"file"==t&&(l+="//"),l+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(l+="?"+s),null!==u&&(l+="#"+u),l},xe=function(){var e=w(this),t=e.scheme,r=e.port
if("blob"==t)try{return new URL(t.path[0]).origin}catch(n){return"null"}return"file"!=t&&Y(e)?t+"://"+U(e.host)+(null!==r?":"+r:""):"null"},Ce=function(){return w(this).scheme+":"},Re=function(){return w(this).username},Pe=function(){return w(this).password},Te=function(){var e=w(this),t=e.host,r=e.port
return null===t?"":null===r?U(t):U(t)+":"+r},Ee=function(){var e=w(this).host
return null===e?"":U(e)},Oe=function(){var e=w(this).port
return null===e?"":String(e)},Le=function(){var e=w(this),t=e.path
return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Fe=function(){var e=w(this).query
return e?"?"+e:""},Ie=function(){return w(this).searchParams},Me=function(){var e=w(this).fragment
return e?"#"+e:""},je=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}}
if(a&&u(we,{href:je(ke,(function(e){var t=w(this),r=String(e),n=Ae(t,r)
if(n)throw TypeError(n)
A(t.searchParams).updateSearchParams(t.query)})),origin:je(xe),protocol:je(Ce,(function(e){var t=w(this)
Ae(t,String(e)+":",ee)})),username:je(Re,(function(e){var t=w(this),r=d(String(e))
if(!Q(t)){t.username=""
for(var n=0;n<r.length;n++)t.username+=H(r[n],z)}})),password:je(Pe,(function(e){var t=w(this),r=d(String(e))
if(!Q(t)){t.password=""
for(var n=0;n<r.length;n++)t.password+=H(r[n],z)}})),host:je(Te,(function(e){var t=w(this)
t.cannotBeABaseURL||Ae(t,String(e),ce)})),hostname:je(Ee,(function(e){var t=w(this)
t.cannotBeABaseURL||Ae(t,String(e),he)})),port:je(Oe,(function(e){var t=w(this)
Q(t)||(""==(e=String(e))?t.port=null:Ae(t,e,fe))})),pathname:je(Le,(function(e){var t=w(this)
t.cannotBeABaseURL||(t.path=[],Ae(t,e+"",ge))})),search:je(Fe,(function(e){var t=w(this)
""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ae(t,e,be)),A(t.searchParams).updateSearchParams(t.query)})),searchParams:je(Ie),hash:je(Me,(function(e){var t=w(this)
""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ae(t,e,_e)):t.fragment=null}))}),l(we,"toJSON",(function(){return ke.call(this)}),{enumerable:!0}),l(we,"toString",(function(){return ke.call(this)}),{enumerable:!0}),b){var Ne=b.createObjectURL,De=b.revokeObjectURL
Ne&&l(Se,"createObjectURL",(function(e){return Ne.apply(b,arguments)})),De&&l(Se,"revokeObjectURL",(function(e){return De.apply(b,arguments)}))}g(Se,"URL"),i({global:!0,forced:!o,sham:!a},{URL:Se})},function(e,t,r){var n=r(9),i=r(53),a=r(32),o=i("iterator")
e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,r=""
return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),r+=n+e})),a&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host}))},function(e,t,r){"use strict"
var n=/[^\0-\u007E]/,i=/[.\u3002\uFF0E\uFF61]/g,a="Overflow: input needs wider integers to process",o=Math.floor,s=String.fromCharCode,u=function(e){return e+22+75*(e<26)},l=function(e,t,r){var n=0
for(e=r?o(e/700):e>>1,e+=o(e/t);e>455;n+=36)e=o(e/35)
return o(n+36*e/(e+38))},c=function(e){var t,r,n=[],i=(e=function(e){for(var t=[],r=0,n=e.length;r<n;){var i=e.charCodeAt(r++)
if(i>=55296&&i<=56319&&r<n){var a=e.charCodeAt(r++)
56320==(64512&a)?t.push(((1023&i)<<10)+(1023&a)+65536):(t.push(i),r--)}else t.push(i)}return t}(e)).length,c=128,h=0,f=72
for(t=0;t<e.length;t++)(r=e[t])<128&&n.push(s(r))
var d=n.length,p=d
for(d&&n.push("-");p<i;){var v=2147483647
for(t=0;t<e.length;t++)(r=e[t])>=c&&r<v&&(v=r)
var g=p+1
if(v-c>o((2147483647-h)/g))throw RangeError(a)
for(h+=(v-c)*g,c=v,t=0;t<e.length;t++){if((r=e[t])<c&&++h>2147483647)throw RangeError(a)
if(r==c){for(var y=h,m=36;;m+=36){var b=m<=f?1:m>=f+26?26:m-f
if(y<b)break
var _=y-b,A=36-b
n.push(s(u(b+_%A))),y=o(_/A)}n.push(s(u(y))),f=l(h,g,p==d),h=0,++p}}++h,++c}return n.join("")}
e.exports=function(e){var t,r,a=[],o=e.toLowerCase().replace(i,".").split(".")
for(t=0;t<o.length;t++)r=o[t],a.push(n.test(r)?"xn--"+c(r):r)
return a.join(".")}},function(e,t,r){"use strict"
r(108)
var n=r(5),i=r(37),a=r(129),o=r(24),s=r(111),u=r(80),l=r(75),c=r(28),h=r(113),f=r(18),d=r(58),p=r(90),v=r(23),g=r(17),y=r(67),m=r(11),b=r(132),_=r(89),A=r(53),S=i("fetch"),w=i("Headers"),k=A("iterator"),x=c.set,C=c.getterFor("URLSearchParams"),R=c.getterFor("URLSearchParamsIterator"),P=/\+/g,T=Array(4),E=function(e){return T[e-1]||(T[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},O=function(e){try{return decodeURIComponent(e)}catch(t){return e}},L=function(e){var t=e.replace(P," "),r=4
try{return decodeURIComponent(t)}catch(n){for(;r;)t=t.replace(E(r--),O)
return t}},F=/[!'()~]|%20/g,I={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},M=function(e){return I[e]},j=function(e){return encodeURIComponent(e).replace(F,M)},N=function(e,t){if(t)for(var r,n,i=t.split("&"),a=0;a<i.length;)(r=i[a++]).length&&(n=r.split("="),e.push({key:L(n.shift()),value:L(n.join("="))}))},D=function(e){this.entries.length=0,N(this.entries,e)},q=function(e,t){if(e<t)throw TypeError("Not enough arguments")},U=l((function(e,t){x(this,{type:"URLSearchParamsIterator",iterator:b(C(e).entries),kind:t})}),"Iterator",(function(){var e=R(this),t=e.kind,r=e.iterator.next(),n=r.value
return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),W=function(){h(this,W,"URLSearchParams")
var e,t,r,n,i,a,o,s,u,l=arguments.length>0?arguments[0]:void 0,c=this,d=[]
if(x(c,{type:"URLSearchParams",entries:d,updateURL:function(){},updateSearchParams:D}),void 0!==l)if(g(l))if("function"==typeof(e=_(l)))for(r=(t=e.call(l)).next;!(n=r.call(t)).done;){if((o=(a=(i=b(v(n.value))).next).call(i)).done||(s=a.call(i)).done||!a.call(i).done)throw TypeError("Expected sequence with length 2")
d.push({key:o.value+"",value:s.value+""})}else for(u in l)f(l,u)&&d.push({key:u,value:l[u]+""})
else N(d,"string"==typeof l?"?"===l.charAt(0)?l.slice(1):l:l+"")},B=W.prototype
s(B,{append:function(e,t){q(arguments.length,2)
var r=C(this)
r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){q(arguments.length,1)
for(var t=C(this),r=t.entries,n=e+"",i=0;i<r.length;)r[i].key===n?r.splice(i,1):i++
t.updateURL()},get:function(e){q(arguments.length,1)
for(var t=C(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value
return null},getAll:function(e){q(arguments.length,1)
for(var t=C(this).entries,r=e+"",n=[],i=0;i<t.length;i++)t[i].key===r&&n.push(t[i].value)
return n},has:function(e){q(arguments.length,1)
for(var t=C(this).entries,r=e+"",n=0;n<t.length;)if(t[n++].key===r)return!0
return!1},set:function(e,t){q(arguments.length,1)
for(var r,n=C(this),i=n.entries,a=!1,o=e+"",s=t+"",u=0;u<i.length;u++)(r=i[u]).key===o&&(a?i.splice(u--,1):(a=!0,r.value=s))
a||i.push({key:o,value:s}),n.updateURL()},sort:function(){var e,t,r,n=C(this),i=n.entries,a=i.slice()
for(i.length=0,r=0;r<a.length;r++){for(e=a[r],t=0;t<r;t++)if(i[t].key>e.key){i.splice(t,0,e)
break}t===r&&i.push(e)}n.updateURL()},forEach:function(e){for(var t,r=C(this).entries,n=d(e,arguments.length>1?arguments[1]:void 0,3),i=0;i<r.length;)n((t=r[i++]).value,t.key,this)},keys:function(){return new U(this,"keys")},values:function(){return new U(this,"values")},entries:function(){return new U(this,"entries")}},{enumerable:!0}),o(B,k,B.entries),o(B,"toString",(function(){for(var e,t=C(this).entries,r=[],n=0;n<t.length;)e=t[n++],r.push(j(e.key)+"="+j(e.value))
return r.join("&")}),{enumerable:!0}),u(W,"URLSearchParams"),n({global:!0,forced:!a},{URLSearchParams:W}),a||"function"!=typeof S||"function"!=typeof w||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,r,n,i=[e]
return arguments.length>1&&(g(t=arguments[1])&&(r=t.body,"URLSearchParams"===p(r)&&((n=t.headers?new w(t.headers):new w).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=y(t,{body:m(0,String(r)),headers:m(0,n)}))),i.push(t)),S.apply(this,i)}}),e.exports={URLSearchParams:W,getState:C}},function(e,t,r){var n=r(23),i=r(89)
e.exports=function(e){var t=i(e)
if("function"!=typeof t)throw TypeError(String(e)+" is not iterable")
return n(t.call(e))}},function(e,t,r){"use strict"
r(5)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t,r){"use strict"
r.r(t),r.d(t,"ByteLengthQueuingStrategy",(function(){return Ht})),r.d(t,"CountQueuingStrategy",(function(){return Xt})),r.d(t,"ReadableStream",(function(){return jt})),r.d(t,"TransformStream",(function(){return Yt})),r.d(t,"WritableStream",(function(){return oe}))
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(e){return"Symbol("+e+")"}
function i(){}var a=Number.isNaN||function(e){return e!=e},o=i
function s(e){return"object"==typeof e&&null!==e||"function"==typeof e}function u(e){return e.slice()}function l(e){return!1!==function(e){if("number"!=typeof e)return!1
if(a(e))return!1
if(e<0)return!1
return!0}(e)&&e!==1/0}function c(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function")
return Function.prototype.apply.call(e,t,r)}function h(e,t,r,n){var i=e[t]
if(void 0!==i){if("function"!=typeof i)throw new TypeError(i+" is not a method")
switch(r){case 0:return function(){return d(i,e,n)}
case 1:return function(t){var r=[t].concat(n)
return d(i,e,r)}}}return function(){return A(void 0)}}function f(e,t,r){var n=e[t]
if(void 0!==n)return c(n,e,r)}function d(e,t,r){try{return A(c(e,t,r))}catch(n){return S(n)}}function p(e){if(e=Number(e),a(e)||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN")
return e}function v(e){if(void 0===e)return function(){return 1}
if("function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function")
return function(t){return e(t)}}var g=Promise,y=Promise.prototype.then,m=Promise.resolve.bind(g),b=Promise.reject.bind(g)
function _(e){return new g(e)}function A(e){return m(e)}function S(e){return b(e)}function w(e,t,r){return y.call(e,t,r)}function k(e,t,r){w(w(e,t,r),void 0,o)}function x(e,t){k(e,t)}function C(e,t){k(e,void 0,t)}function R(e,t,r){return w(e,t,r)}function P(e){w(e,void 0,o)}var T=function(){function e(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}return Object.defineProperty(e.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0}),e.prototype.push=function(e){var t=this._back,r=t
16383===t._elements.length&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size},e.prototype.shift=function(){var e=this._front,t=e,r=this._cursor,n=r+1,i=e._elements,a=i[r]
return 16384===n&&(t=e._next,n=0),--this._size,this._cursor=n,e!==t&&(this._front=t),i[r]=void 0,a},e.prototype.forEach=function(e){for(var t=this._cursor,r=this._front,n=r._elements;!(t===n.length&&void 0===r._next||t===n.length&&(t=0,0===(n=(r=r._next)._elements).length));)e(n[t]),++t},e.prototype.peek=function(){var e=this._front,t=this._cursor
return e._elements[t]},e}()
function E(e,t,r){var n=null
!0===r&&(n=Object.prototype)
var i=Object.create(n)
return i.value=e,i.done=t,i}function O(e,t){e._forAuthorCode=!0,e._ownerReadableStream=t,t._reader=e,"readable"===t._state?M(e):"closed"===t._state?function(e){M(e),D(e)}(e):j(e,t._storedError)}function L(e,t){return Wt(e._ownerReadableStream,t)}function F(e){"readable"===e._ownerReadableStream._state?N(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function(e,t){j(e,t)}(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function I(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function M(e){e._closedPromise=_((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r}))}function j(e,t){M(e),N(e,t)}function N(e,t){P(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function D(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}var q=n("[[CancelSteps]]"),U=n("[[PullSteps]]")
function W(e,t){void 0===t&&(t=!1)
var r=new V(e)
return r._forAuthorCode=t,r}function B(e){return _((function(t,r){var n={_resolve:t,_reject:r}
e._reader._readRequests.push(n)}))}function G(e,t,r){var n=e._reader
n._readRequests.shift()._resolve(E(t,r,n._forAuthorCode))}function z(e){return e._reader._readRequests.length}function H(e){var t=e._reader
return void 0!==t&&!!Q(t)}var X,Y,V=function(){function e(e){if(!1===qt(e))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance")
if(!0===Ut(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
O(this,e),this._readRequests=new T}return Object.defineProperty(e.prototype,"closed",{get:function(){return Q(this)?this._closedPromise:S(J("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return Q(this)?void 0===this._ownerReadableStream?S(I("cancel")):L(this,e):S(J("cancel"))},e.prototype.read=function(){return Q(this)?void 0===this._ownerReadableStream?S(I("read from")):K(this):S(J("read"))},e.prototype.releaseLock=function(){if(!Q(this))throw J("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
F(this)}},e}()
function Q(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function K(e){var t=e._ownerReadableStream
return t._disturbed=!0,"closed"===t._state?A(E(void 0,!0,e._forAuthorCode)):"errored"===t._state?S(t._storedError):t._readableStreamController[U]()}function J(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}"symbol"==typeof n.asyncIterator&&((X={})[n.asyncIterator]=function(){return this},Y=X,Object.defineProperty(Y,n.asyncIterator,{enumerable:!1}))
var Z={next:function(){if(!1===$(this))return S(ee("next"))
var e=this._asyncIteratorReader
return void 0===e._ownerReadableStream?S(I("iterate")):R(K(e),(function(t){var r=t.done
return r&&F(e),E(t.value,r,!0)}))},return:function(e){if(!1===$(this))return S(ee("next"))
var t=this._asyncIteratorReader
if(void 0===t._ownerReadableStream)return S(I("finish iterating"))
if(t._readRequests.length>0)return S(new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled"))
if(!1===this._preventCancel){var r=L(t,e)
return F(t),R(r,(function(){return E(e,!0,!0)}))}return F(t),A(E(e,!0,!0))}}
function $(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorReader")}function ee(e){return new TypeError("ReadableStreamAsyncIterator."+e+" can only be used on a ReadableSteamAsyncIterator")}function te(e){var t=e._queue.shift()
return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function re(e,t,r){if(!l(r=Number(r)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.")
e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function ne(e){e._queue=new T,e._queueTotalSize=0}void 0!==Y&&Object.setPrototypeOf(Z,Y),Object.defineProperty(Z,"next",{enumerable:!1}),Object.defineProperty(Z,"return",{enumerable:!1})
var ie=n("[[AbortSteps]]"),ae=n("[[ErrorSteps]]"),oe=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),ue(this)
var r=t.size,n=t.highWaterMark
if(void 0!==e.type)throw new RangeError("Invalid type is specified")
var i=v(r)
void 0===n&&(n=1),function(e,t,r,n){var i=Object.create(xe.prototype)
var a=h(t,"write",1,[i]),o=h(t,"close",0,[]),s=h(t,"abort",1,[])
Ce(e,i,(function(){return f(t,"start",[i])}),a,o,s,r,n)}(this,e,n=p(n),i)}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===le(this))throw Fe("locked")
return ce(this)},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===le(this)?S(Fe("abort")):!0===ce(this)?S(new TypeError("Cannot abort a stream that already has a writer")):he(this,e)},e.prototype.getWriter=function(){if(!1===le(this))throw Fe("getWriter")
return se(this)},e}()
function se(e){return new me(e)}function ue(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new T,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function le(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function ce(e){return void 0!==e._writer}function he(e,t){var r=e._state
if("closed"===r||"errored"===r)return A(void 0)
if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise
var n=!1
"erroring"===r&&(n=!0,t=void 0)
var i=_((function(r,i){e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:i,_reason:t,_wasAlreadyErroring:n}}))
return e._pendingAbortRequest._promise=i,!1===n&&de(e,t),i}function fe(e,t){"writable"!==e._state?pe(e):de(e,t)}function de(e,t){var r=e._writableStreamController
e._state="erroring",e._storedError=t
var n=e._writer
void 0!==n&&Se(n,t),!1===function(e){if(void 0===e._inFlightWriteRequest&&void 0===e._inFlightCloseRequest)return!1
return!0}(e)&&!0===r._started&&pe(e)}function pe(e){e._state="errored",e._writableStreamController[ae]()
var t=e._storedError
if(e._writeRequests.forEach((function(e){e._reject(t)})),e._writeRequests=new T,void 0!==e._pendingAbortRequest){var r=e._pendingAbortRequest
if(e._pendingAbortRequest=void 0,!0===r._wasAlreadyErroring)return r._reject(t),void ge(e)
k(e._writableStreamController[ie](r._reason),(function(){r._resolve(),ge(e)}),(function(t){r._reject(t),ge(e)}))}else ge(e)}function ve(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function ge(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0)
var t=e._writer
void 0!==t&&De(t,e._storedError)}function ye(e,t){var r=e._writer
void 0!==r&&t!==e._backpressure&&(!0===t?function(e){Ue(e)}(r):ze(r)),e._backpressure=t}var me=function(){function e(e){if(!1===le(e))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance")
if(!0===ce(e))throw new TypeError("This stream has already been locked for exclusive writing by another writer")
this._ownerWritableStream=e,e._writer=this
var t,r=e._state
if("writable"===r)!1===ve(e)&&!0===e._backpressure?Ue(this):Be(this),je(this)
else if("erroring"===r)We(this,e._storedError),je(this)
else if("closed"===r)Be(this),je(t=this),qe(t)
else{var n=e._storedError
We(this,n),Ne(this,n)}}return Object.defineProperty(e.prototype,"closed",{get:function(){return!1===be(this)?S(Ie("closed")):this._closedPromise},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===be(this))throw Ie("desiredSize")
if(void 0===this._ownerWritableStream)throw Me("desiredSize")
return function(e){var t=e._ownerWritableStream,r=t._state
if("errored"===r||"erroring"===r)return null
if("closed"===r)return 0
return Pe(t._writableStreamController)}(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return!1===be(this)?S(Ie("ready")):this._readyPromise},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===be(this)?S(Ie("abort")):void 0===this._ownerWritableStream?S(Me("abort")):function(e,t){return he(e._ownerWritableStream,t)}(this,e)},e.prototype.close=function(){if(!1===be(this))return S(Ie("close"))
var e=this._ownerWritableStream
return void 0===e?S(Me("close")):!0===ve(e)?S(new TypeError("cannot close an already-closing stream")):_e(this)},e.prototype.releaseLock=function(){if(!1===be(this))throw Ie("releaseLock")
void 0!==this._ownerWritableStream&&we(this)},e.prototype.write=function(e){return!1===be(this)?S(Ie("write")):void 0===this._ownerWritableStream?S(Me("write to")):ke(this,e)},e}()
function be(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function _e(e){var t=e._ownerWritableStream,r=t._state
if("closed"===r||"errored"===r)return S(new TypeError("The stream (in "+r+" state) is not in the writable state and cannot be closed"))
var n,i=_((function(e,r){var n={_resolve:e,_reject:r}
t._closeRequest=n}))
return!0===t._backpressure&&"writable"===r&&ze(e),re(n=t._writableStreamController,"close",0),Te(n),i}function Ae(e,t){"pending"===e._closedPromiseState?De(e,t):function(e,t){Ne(e,t)}(e,t)}function Se(e,t){"pending"===e._readyPromiseState?Ge(e,t):function(e,t){We(e,t)}(e,t)}function we(e){var t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness")
Se(e,r),Ae(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function ke(e,t){var r=e._ownerWritableStream,n=r._writableStreamController,i=function(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return Ee(e,r),1}}(n,t)
if(r!==e._ownerWritableStream)return S(Me("write to"))
var a=r._state
if("errored"===a)return S(r._storedError)
if(!0===ve(r)||"closed"===a)return S(new TypeError("The stream is closing or closed and cannot be written to"))
if("erroring"===a)return S(r._storedError)
var o=function(e){return _((function(t,r){var n={_resolve:t,_reject:r}
e._writeRequests.push(n)}))}(r)
return function(e,t,r){var n={chunk:t}
try{re(e,n,r)}catch(o){return void Ee(e,o)}var i=e._controlledWritableStream
if(!1===ve(i)&&"writable"===i._state){var a=Oe(e)
ye(i,a)}Te(e)}(n,t,i),o}var xe=function(){function e(){throw new TypeError("WritableStreamDefaultController cannot be constructed explicitly")}return e.prototype.error=function(e){if(!1===function(e){if(!s(e))return!1
if(!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream"))return!1
return!0}(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController")
"writable"===this._controlledWritableStream._state&&Le(this,e)},e.prototype[ie]=function(e){var t=this._abortAlgorithm(e)
return Re(this),t},e.prototype[ae]=function(){ne(this)},e}()
function Ce(e,t,r,n,i,a,o,s){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,ne(t),t._started=!1,t._strategySizeAlgorithm=s,t._strategyHWM=o,t._writeAlgorithm=n,t._closeAlgorithm=i,t._abortAlgorithm=a
var u=Oe(t)
ye(e,u),k(A(r()),(function(){t._started=!0,Te(t)}),(function(r){t._started=!0,fe(e,r)}))}function Re(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function Pe(e){return e._strategyHWM-e._queueTotalSize}function Te(e){var t=e._controlledWritableStream
if(!1!==e._started&&void 0===t._inFlightWriteRequest)if("erroring"!==t._state){if(0!==e._queue.length){var r=e._queue.peek().value
"close"===r?function(e){var t=e._controlledWritableStream;(function(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0})(t),te(e)
var r=e._closeAlgorithm()
Re(e),k(r,(function(){(function(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,"erroring"===e._state&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed"
var t=e._writer
void 0!==t&&qe(t)})(t)}),(function(e){(function(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),fe(e,t)})(t,e)}))}(e):function(e,t){var r=e._controlledWritableStream;(function(e){e._inFlightWriteRequest=e._writeRequests.shift()})(r),k(e._writeAlgorithm(t),(function(){(function(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0})(r)
var t=r._state
if(te(e),!1===ve(r)&&"writable"===t){var n=Oe(e)
ye(r,n)}Te(e)}),(function(t){"writable"===r._state&&Re(e),function(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,fe(e,t)}(r,t)}))}(e,r.chunk)}}else pe(t)}function Ee(e,t){"writable"===e._controlledWritableStream._state&&Le(e,t)}function Oe(e){return Pe(e)<=0}function Le(e,t){var r=e._controlledWritableStream
Re(e),de(r,t)}function Fe(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function Ie(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function Me(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function je(e){e._closedPromise=_((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"}))}function Ne(e,t){je(e),De(e,t)}function De(e,t){P(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function qe(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function Ue(e){e._readyPromise=_((function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r})),e._readyPromiseState="pending"}function We(e,t){Ue(e),Ge(e,t)}function Be(e){Ue(e),ze(e)}function Ge(e,t){P(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function ze(e){e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function He(e){if("object"!=typeof e||null===e)return!1
try{return"boolean"==typeof e.aborted}catch(X){return!1}}var Xe="undefined"!=typeof DOMException?DOMException:void 0
var Ye,Ve=function(e){if("function"!=typeof e&&"object"!=typeof e)return!1
try{return new e,!0}catch(X){return!1}}(Xe)?Xe:((Ye=function(e,t){this.message=e||"",this.name=t||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}).prototype=Object.create(Error.prototype),Object.defineProperty(Ye.prototype,"constructor",{value:Ye,writable:!0,configurable:!0}),Ye)
function Qe(e,t,r,n,a,o){var s=W(e),u=se(t),l=!1,c=A(void 0)
return _((function(h,f){var d,p,v,g
if(void 0!==o){if(d=function(){var r=new Ve("Aborted","AbortError"),i=[]
!1===n&&i.push((function(){return"writable"===t._state?he(t,r):A(void 0)})),!1===a&&i.push((function(){return"readable"===e._state?Wt(e,r):A(void 0)})),R((function(){return Promise.all(i.map((function(e){return e()})))}),!0,r)},!0===o.aborted)return void d()
o.addEventListener("abort",d)}if(b(e,s._closedPromise,(function(e){!1===n?R((function(){return he(t,e)}),!0,e):T(!0,e)})),b(t,u._closedPromise,(function(t){!1===a?R((function(){return Wt(e,t)}),!0,t):T(!0,t)})),p=e,v=s._closedPromise,g=function(){!1===r?R((function(){return function(e){var t=e._ownerWritableStream,r=t._state
return!0===ve(t)||"closed"===r?A(void 0):"errored"===r?S(t._storedError):_e(e)}(u)})):T()},"closed"===p._state?g():x(v,g),!0===ve(t)||"closed"===t._state){var y=new TypeError("the destination writable stream closed before all data could be piped to it")
!1===a?R((function(){return Wt(e,y)}),!0,y):T(!0,y)}function m(){var e=c
return w(c,(function(){return e!==c?m():void 0}))}function b(e,t,r){"errored"===e._state?r(e._storedError):C(t,r)}function R(e,r,n){function i(){k(e(),(function(){return E(r,n)}),(function(e){return E(!0,e)}))}!0!==l&&(l=!0,"writable"===t._state&&!1===ve(t)?x(m(),i):i())}function T(e,r){!0!==l&&(l=!0,"writable"===t._state&&!1===ve(t)?x(m(),(function(){return E(e,r)})):E(e,r))}function E(e,t){we(u),F(s),void 0!==o&&o.removeEventListener("abort",d),e?f(t):h(void 0)}P(_((function(e,t){(function r(n){n?e():w(!0===l?A(!0):w(u._readyPromise,(function(){return w(K(s),(function(e){var t=e.value
return!0===e.done||(c=w(ke(u,t),void 0,i),!1)}))})),r,t)})(!1)})))}))}var Ke=function(){function e(){throw new TypeError}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Je(this))throw st("desiredSize")
return it(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===Je(this))throw st("close")
if(!1===at(this))throw new TypeError("The stream is not in a state that permits close")
tt(this)},e.prototype.enqueue=function(e){if(!1===Je(this))throw st("enqueue")
if(!1===at(this))throw new TypeError("The stream is not in a state that permits enqueue")
return rt(this,e)},e.prototype.error=function(e){if(!1===Je(this))throw st("error")
nt(this,e)},e.prototype[q]=function(e){ne(this)
var t=this._cancelAlgorithm(e)
return et(this),t},e.prototype[U]=function(){var e=this._controlledReadableStream
if(this._queue.length>0){var t=te(this)
return!0===this._closeRequested&&0===this._queue.length?(et(this),Bt(e)):Ze(this),A(E(t,!1,e._reader._forAuthorCode))}var r=B(e)
return Ze(this),r},e}()
function Je(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")}function Ze(e){!1!==$e(e)&&(!0!==e._pulling?(e._pulling=!0,k(e._pullAlgorithm(),(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Ze(e))}),(function(t){nt(e,t)}))):e._pullAgain=!0)}function $e(e){var t=e._controlledReadableStream
return!1!==at(e)&&(!1!==e._started&&(!0===Ut(t)&&z(t)>0||it(e)>0))}function et(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function tt(e){var t=e._controlledReadableStream
e._closeRequested=!0,0===e._queue.length&&(et(e),Bt(t))}function rt(e,t){var r=e._controlledReadableStream
if(!0===Ut(r)&&z(r)>0)G(r,t,!1)
else{var n=void 0
try{n=e._strategySizeAlgorithm(t)}catch(i){throw nt(e,i),i}try{re(e,t,n)}catch(a){throw nt(e,a),a}}Ze(e)}function nt(e,t){var r=e._controlledReadableStream
"readable"===r._state&&(ne(e),et(e),Gt(r,t))}function it(e){var t=e._controlledReadableStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function at(e){var t=e._controlledReadableStream._state
return!1===e._closeRequested&&"readable"===t}function ot(e,t,r,n,i,a,o){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,ne(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=o,t._strategyHWM=a,t._pullAlgorithm=n,t._cancelAlgorithm=i,e._readableStreamController=t,k(A(r()),(function(){t._started=!0,Ze(t)}),(function(e){nt(t,e)}))}function st(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}var ut=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},lt=function(){function e(){throw new TypeError("ReadableStreamBYOBRequest cannot be used directly")}return Object.defineProperty(e.prototype,"view",{get:function(){if(!1===ft(this))throw Pt("view")
return this._view},enumerable:!0,configurable:!0}),e.prototype.respond=function(e){if(!1===ft(this))throw Pt("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
this._view.buffer,function(e,t){if(!1===l(t=Number(t)))throw new RangeError("bytesWritten must be a finite")
St(e,t)}(this._associatedReadableByteStreamController,e)},e.prototype.respondWithNewView=function(e){if(!1===ft(this))throw Pt("respond")
if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views")
e.buffer,function(e,t){var r=e._pendingPullIntos.peek()
if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest")
if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest")
r.buffer=t.buffer,St(e,t.byteLength)}(this._associatedReadableByteStreamController,e)},e}(),ct=function(){function e(){throw new TypeError("ReadableByteStreamController constructor cannot be used directly")}return Object.defineProperty(e.prototype,"byobRequest",{get:function(){if(!1===ht(this))throw Tt("byobRequest")
if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos.peek(),t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled),r=Object.create(lt.prototype);(function(e,t,r){e._associatedReadableByteStreamController=t,e._view=r})(r,this,t),this._byobRequest=r}return this._byobRequest},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===ht(this))throw Tt("desiredSize")
return Ct(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===ht(this))throw Tt("close")
if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!")
var e=this._controlledReadableByteStream._state
if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed");(function(e){var t=e._controlledReadableByteStream
if(e._queueTotalSize>0)return void(e._closeRequested=!0)
if(e._pendingPullIntos.length>0){if(e._pendingPullIntos.peek().bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer")
throw xt(e,r),r}}kt(e),Bt(t)})(this)},e.prototype.enqueue=function(e){if(!1===ht(this))throw Tt("enqueue")
if(!0===this._closeRequested)throw new TypeError("stream is closed or draining")
var t=this._controlledReadableByteStream._state
if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to")
if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController")
e.buffer,function(e,t){var r=e._controlledReadableByteStream,n=t.buffer,i=t.byteOffset,a=t.byteLength,o=n
if(!0===H(r))if(0===z(r))gt(e,o,i,a)
else{var s=new Uint8Array(o,i,a)
G(r,s,!1)}else!0===Lt(r)?(gt(e,o,i,a),At(e)):gt(e,o,i,a)
dt(e)}(this,e)},e.prototype.error=function(e){if(!1===ht(this))throw Tt("error")
xt(this,e)},e.prototype[q]=function(e){this._pendingPullIntos.length>0&&(this._pendingPullIntos.peek().bytesFilled=0)
ne(this)
var t=this._cancelAlgorithm(e)
return kt(this),t},e.prototype[U]=function(){var e=this._controlledReadableByteStream
if(this._queueTotalSize>0){var t=this._queue.shift()
this._queueTotalSize-=t.byteLength,bt(this)
var r=void 0
try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(s){return S(s)}return A(E(r,!1,e._reader._forAuthorCode))}var n=this._autoAllocateChunkSize
if(void 0!==n){var i=void 0
try{i=new ArrayBuffer(n)}catch(u){return S(u)}var a={buffer:i,byteOffset:0,byteLength:n,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"}
this._pendingPullIntos.push(a)}var o=B(e)
return dt(this),o},e}()
function ht(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")}function ft(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function dt(e){!1!==function(e){var t=e._controlledReadableByteStream
if("readable"!==t._state)return!1
if(!0===e._closeRequested)return!1
if(!1===e._started)return!1
if(!0===H(t)&&z(t)>0)return!0
if(!0===Lt(t)&&Ot(t)>0)return!0
if(Ct(e)>0)return!0
return!1}(e)&&(!0!==e._pulling?(e._pulling=!0,k(e._pullAlgorithm(),(function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,dt(e))}),(function(t){xt(e,t)}))):e._pullAgain=!0)}function pt(e,t){var r=!1
"closed"===e._state&&(r=!0)
var n=vt(t)
"default"===t.readerType?G(e,n,r):function(e,t,r){var n=e._reader
n._readIntoRequests.shift()._resolve(E(t,r,n._forAuthorCode))}(e,n,r)}function vt(e){var t=e.bytesFilled,r=e.elementSize
return new e.ctor(e.buffer,e.byteOffset,t/r)}function gt(e,t,r,n){e._queue.push({buffer:t,byteOffset:r,byteLength:n}),e._queueTotalSize+=n}function yt(e,t){var r=t.elementSize,n=t.bytesFilled-t.bytesFilled%r,i=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),a=t.bytesFilled+i,o=a-a%r,s=i,u=!1
o>n&&(s=o-t.bytesFilled,u=!0)
for(var l,c,h,f,d,p=e._queue;s>0;){var v=p.peek(),g=Math.min(s,v.byteLength),y=t.byteOffset+t.bytesFilled
l=t.buffer,c=y,h=v.buffer,f=v.byteOffset,d=g,new Uint8Array(l).set(new Uint8Array(h,f,d),c),v.byteLength===g?p.shift():(v.byteOffset+=g,v.byteLength-=g),e._queueTotalSize-=g,mt(e,g,t),s-=g}return u}function mt(e,t,r){_t(e),r.bytesFilled+=t}function bt(e){0===e._queueTotalSize&&!0===e._closeRequested?(kt(e),Bt(e._controlledReadableByteStream)):dt(e)}function _t(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function At(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return
var t=e._pendingPullIntos.peek()
!0===yt(e,t)&&(wt(e),pt(e._controlledReadableByteStream,t))}}function St(e,t){var r=e._pendingPullIntos.peek()
if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");(function(e,t){t.buffer=t.buffer
var r=e._controlledReadableByteStream
if(!0===Lt(r))for(;Ot(r)>0;){pt(r,wt(e))}})(e,r)}else(function(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")
if(mt(e,t,r),!(r.bytesFilled<r.elementSize)){wt(e)
var n=r.bytesFilled%r.elementSize
if(n>0){var i=r.byteOffset+r.bytesFilled,a=r.buffer.slice(i-n,i)
gt(e,a,0,a.byteLength)}r.buffer=r.buffer,r.bytesFilled-=n,pt(e._controlledReadableByteStream,r),At(e)}})(e,t,r)
dt(e)}function wt(e){var t=e._pendingPullIntos.shift()
return _t(e),t}function kt(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function xt(e,t){var r=e._controlledReadableByteStream
"readable"===r._state&&(function(e){_t(e),e._pendingPullIntos=new T}(e),ne(e),kt(e),Gt(r,t))}function Ct(e){var t=e._controlledReadableByteStream._state
return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function Rt(e,t,r){var n=Object.create(ct.prototype)
var i=h(t,"pull",0,[n]),a=h(t,"cancel",1,[]),o=t.autoAllocateChunkSize
if(void 0!==o&&(o=Number(o),!1===ut(o)||o<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer");(function(e,t,r,n,i,a,o){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=void 0,t._queue=t._queueTotalSize=void 0,ne(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=p(a),t._pullAlgorithm=n,t._cancelAlgorithm=i,t._autoAllocateChunkSize=o,t._pendingPullIntos=new T,e._readableStreamController=t,k(A(r()),(function(){t._started=!0,dt(t)}),(function(e){xt(t,e)}))})(e,n,(function(){return f(t,"start",[n])}),i,a,r,o)}function Pt(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function Tt(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function Et(e){return _((function(t,r){var n={_resolve:t,_reject:r}
e._reader._readIntoRequests.push(n)}))}function Ot(e){return e._reader._readIntoRequests.length}function Lt(e){var t=e._reader
return void 0!==t&&!!It(t)}var Ft=function(){function e(e){if(!qt(e))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source")
if(!1===ht(e._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source")
if(Ut(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader")
O(this,e),this._readIntoRequests=new T}return Object.defineProperty(e.prototype,"closed",{get:function(){return It(this)?this._closedPromise:S(Mt("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return It(this)?void 0===this._ownerReadableStream?S(I("cancel")):L(this,e):S(Mt("cancel"))},e.prototype.read=function(e){return It(this)?void 0===this._ownerReadableStream?S(I("read from")):ArrayBuffer.isView(e)?(e.buffer,0===e.byteLength?S(new TypeError("view must have non-zero byteLength")):function(e,t){var r=e._ownerReadableStream
if(r._disturbed=!0,"errored"===r._state)return S(r._storedError)
return function(e,t){var r=e._controlledReadableByteStream,n=1
t.constructor!==DataView&&(n=t.constructor.BYTES_PER_ELEMENT)
var i=t.constructor,a={buffer:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:n,ctor:i,readerType:"byob"}
if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(a),Et(r)
if("closed"===r._state)return A(E(new i(a.buffer,a.byteOffset,0),!0,r._reader._forAuthorCode))
if(e._queueTotalSize>0){if(!0===yt(e,a)){var o=vt(a)
return bt(e),A(E(o,!1,r._reader._forAuthorCode))}if(!0===e._closeRequested){var s=new TypeError("Insufficient bytes to fill elements in the given buffer")
return xt(e,s),S(s)}}e._pendingPullIntos.push(a)
var u=Et(r)
return dt(e),u}(r._readableStreamController,t)}(this,e)):S(new TypeError("view must be an array buffer view")):S(Mt("read"))},e.prototype.releaseLock=function(){if(!It(this))throw Mt("releaseLock")
if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled")
F(this)}},e}()
function It(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function Mt(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}var jt=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),Dt(this)
var r=t.size,n=t.highWaterMark,i=e.type
if("bytes"===String(i)){if(void 0!==r)throw new RangeError("The strategy for a byte stream cannot have a size function")
void 0===n&&(n=0),Rt(this,e,n=p(n))}else{if(void 0!==i)throw new RangeError("Invalid type is specified")
var a=v(r)
void 0===n&&(n=1),function(e,t,r,n){var i=Object.create(Ke.prototype),a=h(t,"pull",0,[i]),o=h(t,"cancel",1,[])
ot(e,i,(function(){return f(t,"start",[i])}),a,o,r,n)}(this,e,n=p(n),a)}}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===qt(this))throw zt("locked")
return Ut(this)},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return!1===qt(this)?S(zt("cancel")):!0===Ut(this)?S(new TypeError("Cannot cancel a stream that already has a reader")):Wt(this,e)},e.prototype.getReader=function(e){var t=(void 0===e?{}:e).mode
if(!1===qt(this))throw zt("getReader")
if(void 0===t)return W(this,!0)
if("byob"===(t=String(t)))return function(e,t){void 0===t&&(t=!1)
var r=new Ft(e)
return r._forAuthorCode=t,r}(this,!0)
throw new RangeError("Invalid mode is specified")},e.prototype.pipeThrough=function(e,t){var r=e.writable,n=e.readable,i=void 0===t?{}:t,a=i.preventClose,o=i.preventAbort,s=i.preventCancel,u=i.signal
if(!1===qt(this))throw zt("pipeThrough")
if(!1===le(r))throw new TypeError("writable argument to pipeThrough must be a WritableStream")
if(!1===qt(n))throw new TypeError("readable argument to pipeThrough must be a ReadableStream")
if(a=Boolean(a),o=Boolean(o),s=Boolean(s),void 0!==u&&!He(u))throw new TypeError("ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal")
if(!0===Ut(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream")
if(!0===ce(r))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream")
return P(Qe(this,r,a,o,s,u)),n},e.prototype.pipeTo=function(e,t){var r=void 0===t?{}:t,n=r.preventClose,i=r.preventAbort,a=r.preventCancel,o=r.signal
return!1===qt(this)?S(zt("pipeTo")):!1===le(e)?S(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream")):(n=Boolean(n),i=Boolean(i),a=Boolean(a),void 0===o||He(o)?!0===Ut(this)?S(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):!0===ce(e)?S(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Qe(this,e,n,i,a,o):S(new TypeError("ReadableStream.prototype.pipeTo's signal option must be an AbortSignal")))},e.prototype.tee=function(){if(!1===qt(this))throw zt("tee")
var e=function(e,t){var r,n,i,a,o,s=W(e),l=!1,c=!1,h=!1,f=_((function(e){o=e}))
function d(){return!0===l||(l=!0,P(R(K(s),(function(e){if(l=!1,!0===e.done)return!1===c&&tt(i._readableStreamController),void(!1===h&&tt(a._readableStreamController))
var t=e.value,r=t,n=t
!1===c&&rt(i._readableStreamController,r),!1===h&&rt(a._readableStreamController,n)})))),A(void 0)}function p(){}return i=Nt(p,d,(function(t){if(c=!0,r=t,!0===h){var i=u([r,n]),a=Wt(e,i)
o(a)}return f})),a=Nt(p,d,(function(t){if(h=!0,n=t,!0===c){var i=u([r,n]),a=Wt(e,i)
o(a)}return f})),C(s._closedPromise,(function(e){nt(i._readableStreamController,e),nt(a._readableStreamController,e)})),[i,a]}(this)
return u(e)},e.prototype.getIterator=function(e){var t=(void 0===e?{}:e).preventCancel,r=void 0!==t&&t
if(!1===qt(this))throw zt("getIterator")
return function(e,t){void 0===t&&(t=!1)
var r=W(e),n=Object.create(Z)
return n._asyncIteratorReader=r,n._preventCancel=Boolean(t),n}(this,r)},e}()
function Nt(e,t,r,n,i){void 0===n&&(n=1),void 0===i&&(i=function(){return 1})
var a=Object.create(jt.prototype)
return Dt(a),ot(a,Object.create(Ke.prototype),e,t,r,n,i),a}function Dt(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function qt(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function Ut(e){return void 0!==e._reader}function Wt(e,t){return e._disturbed=!0,"closed"===e._state?A(void 0):"errored"===e._state?S(e._storedError):(Bt(e),R(e._readableStreamController[q](t),i))}function Bt(e){e._state="closed"
var t=e._reader
void 0!==t&&(Q(t)&&(t._readRequests.forEach((function(e){e._resolve(E(void 0,!0,t._forAuthorCode))})),t._readRequests=new T),D(t))}function Gt(e,t){e._state="errored",e._storedError=t
var r=e._reader
void 0!==r&&(Q(r)?(r._readRequests.forEach((function(e){e._reject(t)})),r._readRequests=new T):(r._readIntoRequests.forEach((function(e){e._reject(t)})),r._readIntoRequests=new T),N(r,t))}function zt(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}"symbol"==typeof n.asyncIterator&&Object.defineProperty(jt.prototype,n.asyncIterator,{value:jt.prototype.getIterator,enumerable:!1,writable:!0,configurable:!0})
var Ht=function(){function e(e){var t=e.highWaterMark
this.highWaterMark=t}return e.prototype.size=function(e){return e.byteLength},e}(),Xt=function(){function e(e){var t=e.highWaterMark
this.highWaterMark=t}return e.prototype.size=function(){return 1},e}(),Yt=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t={}),void 0===r&&(r={})
var n=t.size,i=t.highWaterMark,a=r.size,o=r.highWaterMark
if(void 0!==e.writableType)throw new RangeError("Invalid writable type specified")
var s=v(n)
if(void 0===i&&(i=1),i=p(i),void 0!==e.readableType)throw new RangeError("Invalid readable type specified")
var u,l=v(a)
void 0===o&&(o=0),o=p(o),function(e,t,r,n,i,a){function o(){return t}e._writable=function(e,t,r,n,i,a){void 0===i&&(i=1),void 0===a&&(a=function(){return 1})
var o=Object.create(oe.prototype)
return ue(o),Ce(o,Object.create(xe.prototype),e,t,r,n,i,a),o}(o,(function(t){return function(e,t){var r=e._transformStreamController
if(!0===e._backpressure){return R(e._backpressureChangePromise,(function(){var n=e._writable
if("erroring"===n._state)throw n._storedError
return rr(r,t)}))}return rr(r,t)}(e,t)}),(function(){return function(e){var t=e._readable,r=e._transformStreamController,n=r._flushAlgorithm()
return er(r),R(n,(function(){if("errored"===t._state)throw t._storedError
var e=t._readableStreamController
!0===at(e)&&tt(e)}),(function(r){throw Qt(e,r),t._storedError}))}(e)}),(function(t){return function(e,t){return Qt(e,t),A(void 0)}(e,t)}),r,n),e._readable=Nt(o,(function(){return function(e){return Jt(e,!1),e._backpressureChangePromise}(e)}),(function(t){return Kt(e,t),A(void 0)}),i,a),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,Jt(e,!0),e._transformStreamController=void 0}(this,_((function(e){u=e})),i,s,o,l),function(e,t){var r=Object.create(Zt.prototype),n=function(e){try{return tr(r,e),A(void 0)}catch(t){return S(t)}},i=t.transform
if(void 0!==i){if("function"!=typeof i)throw new TypeError("transform is not a method")
n=function(e){return d(i,t,[e,r])}}var a=h(t,"flush",0,[r]);(function(e,t,r,n){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=n})(e,r,n,a)}(this,e)
var c=f(e,"start",[this._transformStreamController])
u(c)}return Object.defineProperty(e.prototype,"readable",{get:function(){if(!1===Vt(this))throw ir("readable")
return this._readable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"writable",{get:function(){if(!1===Vt(this))throw ir("writable")
return this._writable},enumerable:!0,configurable:!0}),e}()
function Vt(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function Qt(e,t){nt(e._readable._readableStreamController,t),Kt(e,t)}function Kt(e,t){er(e._transformStreamController),Ee(e._writable._writableStreamController,t),!0===e._backpressure&&Jt(e,!1)}function Jt(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=_((function(t){e._backpressureChangePromise_resolve=t})),e._backpressure=t}var Zt=function(){function e(){throw new TypeError("TransformStreamDefaultController instances cannot be created directly")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===$t(this))throw nr("desiredSize")
return it(this._controlledTransformStream._readable._readableStreamController)},enumerable:!0,configurable:!0}),e.prototype.enqueue=function(e){if(!1===$t(this))throw nr("enqueue")
tr(this,e)},e.prototype.error=function(e){if(!1===$t(this))throw nr("error")
var t
t=e,Qt(this._controlledTransformStream,t)},e.prototype.terminate=function(){if(!1===$t(this))throw nr("terminate");(function(e){var t=e._controlledTransformStream,r=t._readable._readableStreamController
!0===at(r)&&tt(r)
var n=new TypeError("TransformStream terminated")
Kt(t,n)})(this)},e}()
function $t(e){return!!s(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function er(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function tr(e,t){var r=e._controlledTransformStream,n=r._readable._readableStreamController
if(!1===at(n))throw new TypeError("Readable side is not in a state that permits enqueue")
try{rt(n,t)}catch(i){throw Kt(r,i),r._readable._storedError}(function(e){return!0!==$e(e)})(n)!==r._backpressure&&Jt(r,!0)}function rr(e,t){return R(e._transformAlgorithm(t),void 0,(function(t){throw Qt(e._controlledTransformStream,t),t}))}function nr(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function ir(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}},function(e,t,r){r(104),r(136),r(106)
var n=r(38)
e.exports=n.WeakMap},function(e,t,r){"use strict"
var n,i=r(6),a=r(111),o=r(137),s=r(139),u=r(141),l=r(17),c=r(28).enforce,h=r(29),f=!i.ActiveXObject&&"ActiveXObject"in i,d=Object.isExtensible,p=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},v=e.exports=s("WeakMap",p,u)
if(h&&f){n=u.getConstructor(p,"WeakMap",!0),o.REQUIRED=!0
var g=v.prototype,y=g.delete,m=g.has,b=g.get,_=g.set
a(g,{delete:function(e){if(l(e)&&!d(e)){var t=c(this)
return t.frozen||(t.frozen=new n),y.call(this,e)||t.frozen.delete(e)}return y.call(this,e)},has:function(e){if(l(e)&&!d(e)){var t=c(this)
return t.frozen||(t.frozen=new n),m.call(this,e)||t.frozen.has(e)}return m.call(this,e)},get:function(e){if(l(e)&&!d(e)){var t=c(this)
return t.frozen||(t.frozen=new n),m.call(this,e)?b.call(this,e):t.frozen.get(e)}return b.call(this,e)},set:function(e,t){if(l(e)&&!d(e)){var r=c(this)
r.frozen||(r.frozen=new n),m.call(this,e)?_.call(this,e,t):r.frozen.set(e,t)}else _.call(this,e,t)
return this}})}},function(e,t,r){var n=r(34),i=r(17),a=r(18),o=r(22).f,s=r(33),u=r(138),l=s("meta"),c=0,h=Object.isExtensible||function(){return!0},f=function(e){o(e,l,{value:{objectID:"O"+ ++c,weakData:{}}})},d=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e
if(!a(e,l)){if(!h(e))return"F"
if(!t)return"E"
f(e)}return e[l].objectID},getWeakData:function(e,t){if(!a(e,l)){if(!h(e))return!0
if(!t)return!1
f(e)}return e[l].weakData},onFreeze:function(e){return u&&d.REQUIRED&&h(e)&&!a(e,l)&&f(e),e}}
n[l]=!0},function(e,t,r){var n=r(9)
e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,r){"use strict"
var n=r(5),i=r(6),a=r(47),o=r(24),s=r(137),u=r(114),l=r(113),c=r(17),h=r(9),f=r(92),d=r(80),p=r(140)
e.exports=function(e,t,r){var v=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),y=v?"set":"add",m=i[e],b=m&&m.prototype,_=m,A={},S=function(e){var t=b[e]
o(b,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!c(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!c(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!c(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})}
if(a(e,"function"!=typeof m||!(g||b.forEach&&!h((function(){(new m).entries().next()})))))_=r.getConstructor(t,e,v,y),s.REQUIRED=!0
else if(a(e,!0)){var w=new _,k=w[y](g?{}:-0,1)!=w,x=h((function(){w.has(1)})),C=f((function(e){new m(e)})),R=!g&&h((function(){for(var e=new m,t=5;t--;)e[y](t,t)
return!e.has(-0)}))
C||((_=t((function(t,r){l(t,_,e)
var n=p(new m,t,_)
return null!=r&&u(r,n[y],n,v),n}))).prototype=b,b.constructor=_),(x||R)&&(S("delete"),S("has"),v&&S("get")),(R||k)&&S(y),g&&b.clear&&delete b.clear}return A[e]=_,n({global:!0,forced:_!=m},A),d(_,e),g||r.setStrong(_,e,v),_}},function(e,t,r){var n=r(17),i=r(82)
e.exports=function(e,t,r){var a,o
return i&&"function"==typeof(a=t.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(e,o),e}},function(e,t,r){"use strict"
var n=r(111),i=r(137).getWeakData,a=r(23),o=r(17),s=r(113),u=r(114),l=r(142),c=r(18),h=r(28),f=h.set,d=h.getterFor,p=l.find,v=l.findIndex,g=0,y=function(e){return e.frozen||(e.frozen=new m)},m=function(){this.entries=[]},b=function(e,t){return p(e.entries,(function(e){return e[0]===t}))}
m.prototype={get:function(e){var t=b(this,e)
if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var r=b(this,e)
r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=v(this.entries,(function(t){return t[0]===e}))
return~t&&this.entries.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,l){var h=e((function(e,n){s(e,h,t),f(e,{type:t,id:g++,frozen:void 0}),null!=n&&u(n,e[l],e,r)})),p=d(t),v=function(e,t,r){var n=p(e),o=i(a(t),!0)
return!0===o?y(n).set(t,r):o[n.id]=r,e}
return n(h.prototype,{delete:function(e){var t=p(this)
if(!o(e))return!1
var r=i(e)
return!0===r?y(t).delete(e):r&&c(r,t.id)&&delete r[t.id]},has:function(e){var t=p(this)
if(!o(e))return!1
var r=i(e)
return!0===r?y(t).has(e):r&&c(r,t.id)}}),n(h.prototype,r?{get:function(e){var t=p(this)
if(o(e)){var r=i(e)
return!0===r?y(t).get(e):r?r[t.id]:void 0}},set:function(e,t){return v(this,e,t)}}:{add:function(e){return v(this,e,!0)}}),h}}},function(e,t,r){var n=r(58),i=r(13),a=r(78),o=r(42),s=r(143),u=[].push,l=function(e){var t=1==e,r=2==e,l=3==e,c=4==e,h=6==e,f=5==e||h
return function(d,p,v,g){for(var y,m,b=a(d),_=i(b),A=n(p,v,3),S=o(_.length),w=0,k=g||s,x=t?k(d,S):r?k(d,0):void 0;S>w;w++)if((f||w in _)&&(m=A(y=_[w],w,b),e))if(t)x[w]=m
else if(m)switch(e){case 3:return!0
case 5:return y
case 6:return w
case 2:u.call(x,y)}else if(c)return!1
return h?-1:l||c?c:x}}
e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},function(e,t,r){var n=r(17),i=r(144),a=r(53)("species")
e.exports=function(e,t){var r
return i(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!i(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){var n=r(14)
e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){r(104),r(146),r(106)
var n=r(38)
e.exports=n.WeakSet},function(e,t,r){"use strict"
r(139)("WeakSet",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(141))},function(e,t,r){r(148)
var n=r(57)
e.exports=n("String","codePointAt")},function(e,t,r){"use strict"
var n=r(5),i=r(73).codeAt
n({target:"String",proto:!0},{codePointAt:function(e){return i(this,e)}})},function(e,t,r){r(150)
var n=r(38)
e.exports=n.String.fromCodePoint},function(e,t,r){var n=r(5),i=r(44),a=String.fromCharCode,o=String.fromCodePoint
n({target:"String",stat:!0,forced:!!o&&1!=o.length},{fromCodePoint:function(e){for(var t,r=[],n=arguments.length,o=0;n>o;){if(t=+arguments[o++],i(t,1114111)!==t)throw RangeError(t+" is not a valid code point")
r.push(t<65536?a(t):a(55296+((t-=65536)>>10),t%1024+56320))}return r.join("")}})},function(e,t,r){r(152),r(104),r(154),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173)
var n=r(38)
e.exports=n.Symbol},function(e,t,r){"use strict"
var n=r(5),i=r(9),a=r(144),o=r(17),s=r(78),u=r(42),l=r(88),c=r(143),h=r(153),f=r(53),d=r(124),p=f("isConcatSpreadable"),v=d>=51||!i((function(){var e=[]
return e[p]=!1,e.concat()[0]!==e})),g=h("concat"),y=function(e){if(!o(e))return!1
var t=e[p]
return void 0!==t?!!t:a(e)}
n({target:"Array",proto:!0,forced:!v||!g},{concat:function(e){var t,r,n,i,a,o=s(this),h=c(o,0),f=0
for(t=-1,n=arguments.length;t<n;t++)if(y(a=-1===t?o:arguments[t])){if(f+(i=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded")
for(r=0;r<i;r++,f++)r in a&&l(h,f,a[r])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded")
l(h,f++,a)}return h.length=f,h}})},function(e,t,r){var n=r(9),i=r(53),a=r(124),o=i("species")
e.exports=function(e){return a>=51||!n((function(){var t=[]
return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,r){"use strict"
var n=r(5),i=r(6),a=r(37),o=r(32),s=r(8),u=r(54),l=r(55),c=r(9),h=r(18),f=r(144),d=r(17),p=r(23),v=r(78),g=r(12),y=r(16),m=r(11),b=r(67),_=r(69),A=r(39),S=r(155),w=r(46),k=r(7),x=r(22),C=r(10),R=r(21),P=r(24),T=r(31),E=r(30),O=r(34),L=r(33),F=r(53),I=r(156),M=r(157),j=r(80),N=r(28),D=r(142).forEach,q=E("hidden"),U=F("toPrimitive"),W=N.set,B=N.getterFor("Symbol"),G=Object.prototype,z=i.Symbol,H=a("JSON","stringify"),X=k.f,Y=x.f,V=S.f,Q=C.f,K=T("symbols"),J=T("op-symbols"),Z=T("string-to-symbol-registry"),$=T("symbol-to-string-registry"),ee=T("wks"),te=i.QObject,re=!te||!te.prototype||!te.prototype.findChild,ne=s&&c((function(){return 7!=b(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=X(G,t)
n&&delete G[t],Y(e,t,r),n&&e!==G&&Y(G,t,n)}:Y,ie=function(e,t){var r=K[e]=b(z.prototype)
return W(r,{type:"Symbol",tag:e,description:t}),s||(r.description=t),r},ae=u&&"symbol"==typeof z.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof z},oe=function(e,t,r){e===G&&oe(J,t,r),p(e)
var n=y(t,!0)
return p(r),h(K,n)?(r.enumerable?(h(e,q)&&e[q][n]&&(e[q][n]=!1),r=b(r,{enumerable:m(0,!1)})):(h(e,q)||Y(e,q,m(1,{})),e[q][n]=!0),ne(e,n,r)):Y(e,n,r)},se=function(e,t){p(e)
var r=g(t),n=_(r).concat(he(r))
return D(n,(function(t){s&&!ue.call(r,t)||oe(e,t,r[t])})),e},ue=function(e){var t=y(e,!0),r=Q.call(this,t)
return!(this===G&&h(K,t)&&!h(J,t))&&(!(r||!h(this,t)||!h(K,t)||h(this,q)&&this[q][t])||r)},le=function(e,t){var r=g(e),n=y(t,!0)
if(r!==G||!h(K,n)||h(J,n)){var i=X(r,n)
return!i||!h(K,n)||h(r,q)&&r[q][n]||(i.enumerable=!0),i}},ce=function(e){var t=V(g(e)),r=[]
return D(t,(function(e){h(K,e)||h(O,e)||r.push(e)})),r},he=function(e){var t=e===G,r=V(t?J:g(e)),n=[]
return D(r,(function(e){!h(K,e)||t&&!h(G,e)||n.push(K[e])})),n};(u||(P((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor")
var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=L(e),r=function(e){this===G&&r.call(J,e),h(this,q)&&h(this[q],t)&&(this[q][t]=!1),ne(this,t,m(1,e))}
return s&&re&&ne(G,t,{configurable:!0,set:r}),ie(t,e)}).prototype,"toString",(function(){return B(this).tag})),C.f=ue,x.f=oe,k.f=le,A.f=S.f=ce,w.f=he,s&&(Y(z.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),o||P(G,"propertyIsEnumerable",ue,{unsafe:!0}))),l||(I.f=function(e){return ie(F(e),e)}),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),D(_(ee),(function(e){M(e)})),n({target:"Symbol",stat:!0,forced:!u},{for:function(e){var t=String(e)
if(h(Z,t))return Z[t]
var r=z(t)
return Z[t]=r,$[r]=t,r},keyFor:function(e){if(!ae(e))throw TypeError(e+" is not a symbol")
if(h($,e))return $[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!s},{create:function(e,t){return void 0===t?b(e):se(b(e),t)},defineProperty:oe,defineProperties:se,getOwnPropertyDescriptor:le}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ce,getOwnPropertySymbols:he}),n({target:"Object",stat:!0,forced:c((function(){w.f(1)}))},{getOwnPropertySymbols:function(e){return w.f(v(e))}}),H)&&n({target:"JSON",stat:!0,forced:!u||c((function(){var e=z()
return"[null]"!=H([e])||"{}"!=H({a:e})||"{}"!=H(Object(e))}))},{stringify:function(e,t,r){for(var n,i=[e],a=1;arguments.length>a;)i.push(arguments[a++])
if(n=t,(d(t)||void 0!==e)&&!ae(e))return f(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!ae(t))return t}),i[1]=t,H.apply(null,i)}})
z.prototype[U]||R(z.prototype,U,z.prototype.valueOf),j(z,"Symbol"),O[q]=!0},function(e,t,r){var n=r(12),i=r(39).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[]
e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?function(e){try{return i(e)}catch(t){return o.slice()}}(e):i(n(e))}},function(e,t,r){var n=r(53)
t.f=n},function(e,t,r){var n=r(38),i=r(18),a=r(156),o=r(22).f
e.exports=function(e){var t=n.Symbol||(n.Symbol={})
i(t,e)||o(t,e,{value:a.f(e)})}},function(e,t,r){r(157)("asyncIterator")},function(e,t,r){"use strict"
var n=r(5),i=r(8),a=r(6),o=r(18),s=r(17),u=r(22).f,l=r(35),c=a.Symbol
if(i&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var h={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new c(e):void 0===e?c():c(e)
return""===e&&(h[t]=!0),t}
l(f,c)
var d=f.prototype=c.prototype
d.constructor=f
var p=d.toString,v="Symbol(test)"==String(c("test")),g=/^Symbol\((.*)\)[^)]+$/
u(d,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e)
if(o(h,e))return""
var r=v?t.slice(7,-1):t.replace(g,"$1")
return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},function(e,t,r){r(157)("hasInstance")},function(e,t,r){r(157)("isConcatSpreadable")},function(e,t,r){r(157)("iterator")},function(e,t,r){r(157)("match")},function(e,t,r){r(157)("matchAll")},function(e,t,r){r(157)("replace")},function(e,t,r){r(157)("search")},function(e,t,r){r(157)("species")},function(e,t,r){r(157)("split")},function(e,t,r){r(157)("toPrimitive")},function(e,t,r){r(157)("toStringTag")},function(e,t,r){r(157)("unscopables")},function(e,t,r){r(80)(Math,"Math",!0)},function(e,t,r){var n=r(6)
r(80)(n.JSON,"JSON",!0)},function(e,t,r){r(175)
var n=r(57)
e.exports=n("String","padStart")},function(e,t,r){"use strict"
var n=r(5),i=r(176).start
n({target:"String",proto:!0,forced:r(178)},{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){var n=r(42),i=r(177),a=r(15),o=Math.ceil,s=function(e){return function(t,r,s){var u,l,c=String(a(t)),h=c.length,f=void 0===s?" ":String(s),d=n(r)
return d<=h||""==f?c:(u=d-h,(l=i.call(f,o(u/f.length))).length>u&&(l=l.slice(0,u)),e?c+l:l+c)}}
e.exports={start:s(!1),end:s(!0)}},function(e,t,r){"use strict"
var n=r(43),i=r(15)
e.exports="".repeat||function(e){var t=String(i(this)),r="",a=n(e)
if(a<0||a==1/0)throw RangeError("Wrong number of repetitions")
for(;a>0;(a>>>=1)&&(t+=t))1&a&&(r+=t)
return r}},function(e,t,r){var n=r(118)
e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},function(e,t,r){r(180)
var n=r(57)
e.exports=n("String","padEnd")},function(e,t,r){"use strict"
var n=r(5),i=r(176).end
n({target:"String",proto:!0,forced:r(178)},{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(182)
var n=r(38)
e.exports=n.Object.values},function(e,t,r){var n=r(5),i=r(183).values
n({target:"Object",stat:!0},{values:function(e){return i(e)}})},function(e,t,r){var n=r(8),i=r(69),a=r(12),o=r(10).f,s=function(e){return function(t){for(var r,s=a(t),u=i(s),l=u.length,c=0,h=[];l>c;)r=u[c++],n&&!o.call(s,r)||h.push(e?[r,s[r]]:s[r])
return h}}
e.exports={entries:s(!0),values:s(!1)}},function(module,exports,__w_pdfjs_require__){"use strict"
Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDocument=getDocument,exports.setPDFNetworkStreamFactory=setPDFNetworkStreamFactory,exports.build=exports.version=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFWorker=exports.PDFDataRangeTransport=exports.LoopbackPort=void 0
var _regenerator=_interopRequireDefault(__w_pdfjs_require__(185)),_util=__w_pdfjs_require__(1),_display_utils=__w_pdfjs_require__(188),_font_loader=__w_pdfjs_require__(189),_api_compatibility=__w_pdfjs_require__(190),_canvas=__w_pdfjs_require__(191),_worker_options=__w_pdfjs_require__(193),_is_node=__w_pdfjs_require__(48),_message_handler=__w_pdfjs_require__(194),_metadata=__w_pdfjs_require__(195),_transport_stream=__w_pdfjs_require__(197),_webgl=__w_pdfjs_require__(198)
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function asyncGeneratorStep(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){asyncGeneratorStep(a,n,i,o,s,"next",e)}function s(e){asyncGeneratorStep(a,n,i,o,s,"throw",e)}o(void 0)}))}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t]
return r}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var DEFAULT_RANGE_CHUNK_SIZE=65536,RENDERING_CANCELLED_TIMEOUT=100,createPDFNetworkStream
function setPDFNetworkStreamFactory(e){createPDFNetworkStream=e}function getDocument(e){var t,r=new PDFDocumentLoadingTask
if("string"==typeof e)t={url:e}
else if((0,_util.isArrayBuffer)(e))t={data:e}
else if(e instanceof PDFDataRangeTransport)t={range:e}
else{if("object"!==_typeof(e))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object")
if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url")
t=e}var n=Object.create(null),i=null,a=null
for(var o in t)if("url"!==o||"undefined"==typeof window)if("range"!==o)if("worker"!==o)if("data"!==o||t[o]instanceof Uint8Array)n[o]=t[o]
else{var s=t[o]
if("string"==typeof s)n[o]=(0,_util.stringToBytes)(s)
else if("object"!==_typeof(s)||null===s||isNaN(s.length)){if(!(0,_util.isArrayBuffer)(s))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.")
n[o]=new Uint8Array(s)}else n[o]=new Uint8Array(s)}else a=t[o]
else i=t[o]
else n[o]=new URL(t[o],window.location).href
n.rangeChunkSize=n.rangeChunkSize||DEFAULT_RANGE_CHUNK_SIZE,n.CMapReaderFactory=n.CMapReaderFactory||_display_utils.DOMCMapReaderFactory,n.ignoreErrors=!0!==n.stopAtErrors,n.pdfBug=!0===n.pdfBug
var u=Object.values(_util.NativeImageDecoding)
if(void 0!==n.nativeImageDecoderSupport&&u.includes(n.nativeImageDecoderSupport)||(n.nativeImageDecoderSupport=_api_compatibility.apiCompatibilityParams.nativeImageDecoderSupport||_util.NativeImageDecoding.DECODE),Number.isInteger(n.maxImageSize)||(n.maxImageSize=-1),"boolean"!=typeof n.isEvalSupported&&(n.isEvalSupported=!0),"boolean"!=typeof n.disableFontFace&&(n.disableFontFace=_api_compatibility.apiCompatibilityParams.disableFontFace||!1),"boolean"!=typeof n.disableRange&&(n.disableRange=!1),"boolean"!=typeof n.disableStream&&(n.disableStream=!1),"boolean"!=typeof n.disableAutoFetch&&(n.disableAutoFetch=!1),"boolean"!=typeof n.disableCreateObjectURL&&(n.disableCreateObjectURL=_api_compatibility.apiCompatibilityParams.disableCreateObjectURL||!1),(0,_util.setVerbosityLevel)(n.verbosity),!a){var l={verbosity:n.verbosity,port:_worker_options.GlobalWorkerOptions.workerPort}
a=l.port?PDFWorker.fromPort(l):new PDFWorker(l),r._worker=a}var c=r.docId
return a.promise.then((function(){if(r.destroyed)throw new Error("Loading aborted")
return _fetchDocument(a,n,i,c).then((function(e){if(r.destroyed)throw new Error("Loading aborted")
var t
i?t=new _transport_stream.PDFDataTransportStream({length:n.length,initialData:n.initialData,progressiveDone:n.progressiveDone,disableRange:n.disableRange,disableStream:n.disableStream},i):n.data||(t=createPDFNetworkStream({url:n.url,length:n.length,httpHeaders:n.httpHeaders,withCredentials:n.withCredentials,rangeChunkSize:n.rangeChunkSize,disableRange:n.disableRange,disableStream:n.disableStream}))
var o=new _message_handler.MessageHandler(c,e,a.port)
o.postMessageTransfers=a.postMessageTransfers
var s=new WorkerTransport(o,r,t,n)
r._transport=s,o.send("Ready",null)}))})).catch(r._capability.reject),r}function _fetchDocument(e,t,r,n){return e.destroyed?Promise.reject(new Error("Worker was destroyed")):(r&&(t.length=r.length,t.initialData=r.initialData,t.progressiveDone=r.progressiveDone),e.messageHandler.sendWithPromise("GetDocRequest",{docId:n,apiVersion:"2.4.199",source:{data:t.data,url:t.url,password:t.password,disableAutoFetch:t.disableAutoFetch,rangeChunkSize:t.rangeChunkSize,length:t.length},maxImageSize:t.maxImageSize,disableFontFace:t.disableFontFace,disableCreateObjectURL:t.disableCreateObjectURL,postMessageTransfers:e.postMessageTransfers,docBaseUrl:t.docBaseUrl,nativeImageDecoderSupport:t.nativeImageDecoderSupport,ignoreErrors:t.ignoreErrors,isEvalSupported:t.isEvalSupported}).then((function(t){if(e.destroyed)throw new Error("Worker was destroyed")
return t})))}var PDFDocumentLoadingTask=(nextDocumentId=0,function(){function e(){_classCallCheck(this,e),this._capability=(0,_util.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d"+nextDocumentId++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}return _createClass(e,[{key:"destroy",value:function(){var e=this
return this.destroyed=!0,(this._transport?this._transport.destroy():Promise.resolve()).then((function(){e._transport=null,e._worker&&(e._worker.destroy(),e._worker=null)}))}},{key:"then",value:function(e,t){throw new Error("Removed API method: PDFDocumentLoadingTask.then, use the `promise` getter instead.")}},{key:"promise",get:function(){return this._capability.promise}}]),e}()),nextDocumentId,PDFDataRangeTransport=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
_classCallCheck(this,e),this.length=t,this.initialData=r,this.progressiveDone=n,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._progressiveDoneListeners=[],this._readyCapability=(0,_util.createPromiseCapability)()}return _createClass(e,[{key:"addRangeListener",value:function(e){this._rangeListeners.push(e)}},{key:"addProgressListener",value:function(e){this._progressListeners.push(e)}},{key:"addProgressiveReadListener",value:function(e){this._progressiveReadListeners.push(e)}},{key:"addProgressiveDoneListener",value:function(e){this._progressiveDoneListeners.push(e)}},{key:"onDataRange",value:function(e,t){var r=!0,n=!1,i=void 0
try{for(var a,o=this._rangeListeners[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){(0,a.value)(e,t)}}catch(s){n=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}},{key:"onDataProgress",value:function(e,t){var r=this
this._readyCapability.promise.then((function(){var n=!0,i=!1,a=void 0
try{for(var o,s=r._progressListeners[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(e,t)}}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}))}},{key:"onDataProgressiveRead",value:function(e){var t=this
this._readyCapability.promise.then((function(){var r=!0,n=!1,i=void 0
try{for(var a,o=t._progressiveReadListeners[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){(0,a.value)(e)}}catch(s){n=!0,i=s}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}))}},{key:"onDataProgressiveDone",value:function(){var e=this
this._readyCapability.promise.then((function(){var t=!0,r=!1,n=void 0
try{for(var i,a=e._progressiveDoneListeners[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){(0,i.value)()}}catch(o){r=!0,n=o}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}))}},{key:"transportReady",value:function(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function(e,t){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function(){}}]),e}()
exports.PDFDataRangeTransport=PDFDataRangeTransport
var PDFDocumentProxy=function(){function e(t,r){_classCallCheck(this,e),this._pdfInfo=t,this._transport=r}return _createClass(e,[{key:"getPage",value:function(e){return this._transport.getPage(e)}},{key:"getPageIndex",value:function(e){return this._transport.getPageIndex(e)}},{key:"getDestinations",value:function(){return this._transport.getDestinations()}},{key:"getDestination",value:function(e){return this._transport.getDestination(e)}},{key:"getPageLabels",value:function(){return this._transport.getPageLabels()}},{key:"getPageLayout",value:function(){return this._transport.getPageLayout()}},{key:"getPageMode",value:function(){return this._transport.getPageMode()}},{key:"getViewerPreferences",value:function(){return this._transport.getViewerPreferences()}},{key:"getOpenActionDestination",value:function(){return this._transport.getOpenActionDestination()}},{key:"getAttachments",value:function(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function(){return this._transport.getJavaScript()}},{key:"getOutline",value:function(){return this._transport.getOutline()}},{key:"getPermissions",value:function(){return this._transport.getPermissions()}},{key:"getMetadata",value:function(){return this._transport.getMetadata()}},{key:"getData",value:function(){return this._transport.getData()}},{key:"getDownloadInfo",value:function(){return this._transport.downloadInfoCapability.promise}},{key:"getStats",value:function(){return this._transport.getStats()}},{key:"cleanup",value:function(){this._transport.startCleanup()}},{key:"destroy",value:function(){return this.loadingTask.destroy()}},{key:"numPages",get:function(){return this._pdfInfo.numPages}},{key:"fingerprint",get:function(){return this._pdfInfo.fingerprint}},{key:"loadingParams",get:function(){return this._transport.loadingParams}},{key:"loadingTask",get:function(){return this._transport.loadingTask}}]),e}()
exports.PDFDocumentProxy=PDFDocumentProxy
var PDFPageProxy=function(){function e(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
_classCallCheck(this,e),this.pageIndex=t,this._pageInfo=r,this._transport=n,this._stats=i?new _display_utils.StatTimer:null,this._pdfBug=i,this.commonObjs=n.commonObjs,this.objs=new PDFObjects,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this.intentStates=Object.create(null),this.destroyed=!1}return _createClass(e,[{key:"getViewport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scale,r=e.rotation,n=void 0===r?this.rotate:r,i=e.offsetX,a=void 0===i?0:i,o=e.offsetY,s=void 0===o?0:o,u=e.dontFlip,l=void 0!==u&&u
if(arguments.length>1||"number"==typeof arguments[0])throw new Error("PDFPageProxy.getViewport is called with obsolete arguments.")
return new _display_utils.PageViewport({viewBox:this.view,scale:t,rotation:n,offsetX:a,offsetY:s,dontFlip:l})}},{key:"getAnnotations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intent,r=void 0===t?null:t
return this.annotationsPromise&&this.annotationsIntent===r||(this.annotationsPromise=this._transport.getAnnotations(this.pageIndex,r),this.annotationsIntent=r),this.annotationsPromise}},{key:"render",value:function(e){var t=this,r=e.canvasContext,n=e.viewport,i=e.intent,a=void 0===i?"display":i,o=e.enableWebGL,s=void 0!==o&&o,u=e.renderInteractiveForms,l=void 0!==u&&u,c=e.transform,h=void 0===c?null:c,f=e.imageLayer,d=void 0===f?null:f,p=e.canvasFactory,v=void 0===p?null:p,g=e.background,y=void 0===g?null:g
this._stats&&this._stats.time("Overall")
var m="print"===a?"print":"display"
this.pendingCleanup=!1,this.intentStates[m]||(this.intentStates[m]=Object.create(null))
var b=this.intentStates[m]
b.streamReaderCancelTimeout&&(clearTimeout(b.streamReaderCancelTimeout),b.streamReaderCancelTimeout=null)
var _=v||new _display_utils.DOMCanvasFactory,A=new _webgl.WebGLContext({enable:s})
b.displayReadyCapability||(b.displayReadyCapability=(0,_util.createPromiseCapability)(),b.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList({pageIndex:this.pageNumber-1,intent:m,renderInteractiveForms:!0===l}))
var S=function(e){var r=b.renderTasks.indexOf(w)
r>=0&&b.renderTasks.splice(r,1),(t.cleanupAfterRender||"print"===m)&&(t.pendingCleanup=!0),t._tryCleanup(),e?(w.capability.reject(e),t._abortOperatorList({intentState:b,reason:e})):w.capability.resolve(),t._stats&&(t._stats.timeEnd("Rendering"),t._stats.timeEnd("Overall"))},w=new InternalRenderTask({callback:S,params:{canvasContext:r,viewport:n,transform:h,imageLayer:d,background:y},objs:this.objs,commonObjs:this.commonObjs,operatorList:b.operatorList,pageNumber:this.pageNumber,canvasFactory:_,webGLContext:A,useRequestAnimationFrame:"print"!==m,pdfBug:this._pdfBug})
b.renderTasks||(b.renderTasks=[]),b.renderTasks.push(w)
var k=w.task
return b.displayReadyCapability.promise.then((function(e){t.pendingCleanup?S():(t._stats&&t._stats.time("Rendering"),w.initializeGraphics(e),w.operatorListChanged())})).catch(S),k}},{key:"getOperatorList",value:function(){this.intentStates.oplist||(this.intentStates.oplist=Object.create(null))
var e,t=this.intentStates.oplist
return t.opListReadCapability||((e={}).operatorListChanged=function(){if(t.operatorList.lastChunk){t.opListReadCapability.resolve(t.operatorList)
var r=t.renderTasks.indexOf(e)
r>=0&&t.renderTasks.splice(r,1)}},t.opListReadCapability=(0,_util.createPromiseCapability)(),t.renderTasks=[],t.renderTasks.push(e),t.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats&&this._stats.time("Page Request"),this._pumpOperatorList({pageIndex:this.pageIndex,intent:"oplist"})),t.opListReadCapability.promise}},{key:"streamTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.normalizeWhitespace,r=void 0!==t&&t,n=e.disableCombineTextItems,i=void 0!==n&&n,a=100
return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this.pageNumber-1,normalizeWhitespace:!0===r,combineTextItems:!0!==i},{highWaterMark:a,size:function(e){return e.items.length}})}},{key:"getTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.streamTextContent(e)
return new Promise((function(e,r){var n=t.getReader(),i={items:[],styles:Object.create(null)};(function t(){n.read().then((function(r){var n,a=r.value
r.done?e(i):(Object.assign(i.styles,a.styles),(n=i.items).push.apply(n,_toConsumableArray(a.items)),t())}),r)})()}))}},{key:"_destroy",value:function(){var e=this
this.destroyed=!0,this._transport.pageCache[this.pageIndex]=null
var t=[]
return Object.keys(this.intentStates).forEach((function(r){var n=e.intentStates[r]
e._abortOperatorList({intentState:n,reason:new Error("Page was destroyed."),force:!0}),"oplist"!==r&&n.renderTasks.forEach((function(e){var r=e.capability.promise.catch((function(){}))
t.push(r),e.cancel()}))})),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1,Promise.all(t)}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
this.pendingCleanup=!0,this._tryCleanup(e)}},{key:"_tryCleanup",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
this.pendingCleanup&&!Object.keys(this.intentStates).some((function(t){var r=e.intentStates[t]
return 0!==r.renderTasks.length||!r.operatorList.lastChunk}))&&(Object.keys(this.intentStates).forEach((function(t){delete e.intentStates[t]})),this.objs.clear(),this.annotationsPromise=null,t&&this._stats&&(this._stats=new _display_utils.StatTimer),this.pendingCleanup=!1)}},{key:"_startRenderPage",value:function(e,t){var r=this.intentStates[t]
r&&(this._stats&&this._stats.timeEnd("Page Request"),r.displayReadyCapability&&r.displayReadyCapability.resolve(e))}},{key:"_renderPageChunk",value:function(e,t){for(var r=0,n=e.length;r<n;r++)t.operatorList.fnArray.push(e.fnArray[r]),t.operatorList.argsArray.push(e.argsArray[r])
t.operatorList.lastChunk=e.lastChunk
for(var i=0;i<t.renderTasks.length;i++)t.renderTasks[i].operatorListChanged()
e.lastChunk&&this._tryCleanup()}},{key:"_pumpOperatorList",value:function(e){var t=this;(0,_util.assert)(e.intent,'PDFPageProxy._pumpOperatorList: Expected "intent" argument.')
var r=this._transport.messageHandler.sendWithStream("GetOperatorList",e).getReader(),n=this.intentStates[e.intent]
n.streamReader=r;(function e(){r.read().then((function(r){var i=r.value
r.done?n.streamReader=null:t._transport.destroyed||(t._renderPageChunk(i,n),e())}),(function(e){if(n.streamReader=null,!t._transport.destroyed){if(n.operatorList){n.operatorList.lastChunk=!0
for(var r=0;r<n.renderTasks.length;r++)n.renderTasks[r].operatorListChanged()
t._tryCleanup()}if(n.displayReadyCapability)n.displayReadyCapability.reject(e)
else{if(!n.opListReadCapability)throw e
n.opListReadCapability.reject(e)}}}))})()}},{key:"_abortOperatorList",value:function(e){var t=this,r=e.intentState,n=e.reason,i=e.force,a=void 0!==i&&i
if((0,_util.assert)(n instanceof Error||"object"===_typeof(n)&&null!==n,'PDFPageProxy._abortOperatorList: Expected "reason" argument.'),r.streamReader){if(!a){if(0!==r.renderTasks.length)return
if(n instanceof _display_utils.RenderingCancelledException)return void(r.streamReaderCancelTimeout=setTimeout((function(){t._abortOperatorList({intentState:r,reason:n,force:!0}),r.streamReaderCancelTimeout=null}),RENDERING_CANCELLED_TIMEOUT))}r.streamReader.cancel(new _util.AbortException(n&&n.message)),r.streamReader=null,this._transport.destroyed||(Object.keys(this.intentStates).some((function(e){return t.intentStates[e]===r&&(delete t.intentStates[e],!0)})),this.cleanup())}}},{key:"pageNumber",get:function(){return this.pageIndex+1}},{key:"rotate",get:function(){return this._pageInfo.rotate}},{key:"ref",get:function(){return this._pageInfo.ref}},{key:"userUnit",get:function(){return this._pageInfo.userUnit}},{key:"view",get:function(){return this._pageInfo.view}},{key:"stats",get:function(){return this._stats}}]),e}()
exports.PDFPageProxy=PDFPageProxy
var LoopbackPort=function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
_classCallCheck(this,e),this._listeners=[],this._defer=t,this._deferred=Promise.resolve(void 0)}return _createClass(e,[{key:"postMessage",value:function(e,t){var r=this
if(this._defer){var n=new WeakMap,i={data:function e(r){if("object"!==_typeof(r)||null===r)return r
if(n.has(r))return n.get(r)
var i,a
if((i=r.buffer)&&(0,_util.isArrayBuffer)(i)){var o=t&&t.includes(i)
return a=r===i?r:o?new r.constructor(i,r.byteOffset,r.byteLength):new r.constructor(r),n.set(r,a),a}for(var s in a=Array.isArray(r)?[]:{},n.set(r,a),r){for(var u=void 0,l=r;!(u=Object.getOwnPropertyDescriptor(l,s));)l=Object.getPrototypeOf(l)
if(void 0!==u.value)if("function"!=typeof u.value)a[s]=e(u.value)
else if(r.hasOwnProperty&&r.hasOwnProperty(s))throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(r[s]))}return a}(e)}
this._deferred.then((function(){r._listeners.forEach((function(e){e.call(r,i)}))}))}else this._listeners.forEach((function(t){t.call(r,{data:e})}))}},{key:"addEventListener",value:function(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function(e,t){var r=this._listeners.indexOf(t)
this._listeners.splice(r,1)}},{key:"terminate",value:function(){this._listeners.length=0}}]),e}()
exports.LoopbackPort=LoopbackPort
var PDFWorker=function PDFWorkerClosure(){var pdfWorkerPorts=new WeakMap,isWorkerDisabled=!1,fallbackWorkerSrc,nextFakeWorkerId=0,fakeWorkerCapability
if(_is_node.isNodeJS&&"function"==typeof require)isWorkerDisabled=!0,fallbackWorkerSrc="./pdf.worker-20250115143118.js"
else if("object"===("undefined"==typeof document?"undefined":_typeof(document))&&"currentScript"in document){var pdfjsFilePath=document.currentScript&&document.currentScript.src
pdfjsFilePath&&(fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}function _getWorkerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc
if(void 0!==fallbackWorkerSrc)return _is_node.isNodeJS||(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'),fallbackWorkerSrc
throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}function getMainThreadWorkerMessageHandler(){var e
try{e=globalThis.pdfjsWorker&&globalThis.pdfjsWorker.WorkerMessageHandler}catch(t){}return e||null}function setupFakeWorkerGlobal(){if(fakeWorkerCapability)return fakeWorkerCapability.promise
fakeWorkerCapability=(0,_util.createPromiseCapability)()
var loader=function(){var _ref8=_asyncToGenerator(_regenerator.default.mark((function _callee(){var mainWorkerMessageHandler,worker
return _regenerator.default.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(mainWorkerMessageHandler=getMainThreadWorkerMessageHandler(),!mainWorkerMessageHandler){_context.next=3
break}return _context.abrupt("return",mainWorkerMessageHandler)
case 3:if(!_is_node.isNodeJS||"function"!=typeof require){_context.next=6
break}return worker=eval("require")(_getWorkerSrc()),_context.abrupt("return",worker.WorkerMessageHandler)
case 6:return _context.next=8,(0,_display_utils.loadScript)(_getWorkerSrc())
case 8:return _context.abrupt("return",window.pdfjsWorker.WorkerMessageHandler)
case 9:case"end":return _context.stop()}}),_callee)})))
return function(){return _ref8.apply(this,arguments)}}()
return loader().then(fakeWorkerCapability.resolve,fakeWorkerCapability.reject),fakeWorkerCapability.promise}function createCDNWrapper(e){var t="importScripts('"+e+"');"
return URL.createObjectURL(new Blob([t]))}var PDFWorker=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?null:r,i=t.port,a=void 0===i?null:i,o=t.verbosity,s=void 0===o?(0,_util.getVerbosityLevel)():o
if(_classCallCheck(this,e),a&&pdfWorkerPorts.has(a))throw new Error("Cannot use more than one PDFWorker per port")
if(this.name=n,this.destroyed=!1,this.postMessageTransfers=!0,this.verbosity=s,this._readyCapability=(0,_util.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,a)return pdfWorkerPorts.set(a,this),void this._initializeFromPort(a)
this._initialize()}return _createClass(e,[{key:"_initializeFromPort",value:function(e){this._port=e,this._messageHandler=new _message_handler.MessageHandler("main","worker",e),this._messageHandler.on("ready",(function(){})),this._readyCapability.resolve()}},{key:"_initialize",value:function(){var e=this
if("undefined"!=typeof Worker&&!isWorkerDisabled&&!getMainThreadWorkerMessageHandler()){var t=_getWorkerSrc()
try{(0,_util.isSameOrigin)(window.location.href,t)||(t=createCDNWrapper(new URL(t,window.location).href))
var r=new Worker(t),n=new _message_handler.MessageHandler("main","worker",r),i=function(){r.removeEventListener("error",a),n.destroy(),r.terminate(),e.destroyed?e._readyCapability.reject(new Error("Worker was destroyed")):e._setupFakeWorker()},a=function(){e._webWorker||i()}
r.addEventListener("error",a),n.on("test",(function(t){r.removeEventListener("error",a),e.destroyed?i():t?(e._messageHandler=n,e._port=r,e._webWorker=r,t.supportTransfers||(e.postMessageTransfers=!1),e._readyCapability.resolve(),n.send("configure",{verbosity:e.verbosity})):(e._setupFakeWorker(),n.destroy(),r.terminate())})),n.on("ready",(function(t){if(r.removeEventListener("error",a),e.destroyed)i()
else try{o()}catch(n){e._setupFakeWorker()}}))
var o=function(){var t=new Uint8Array([e.postMessageTransfers?255:0])
try{n.send("test",t,[t.buffer])}catch(r){(0,_util.warn)("Cannot use postMessage transfers."),t[0]=0,n.send("test",t)}}
return void o()}catch(s){(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function(){var e=this
isWorkerDisabled||((0,_util.warn)("Setting up fake worker."),isWorkerDisabled=!0),setupFakeWorkerGlobal().then((function(t){if(e.destroyed)e._readyCapability.reject(new Error("Worker was destroyed"))
else{var r=new LoopbackPort
e._port=r
var n="fake"+nextFakeWorkerId++,i=new _message_handler.MessageHandler(n+"_worker",n,r)
t.setup(i,r)
var a=new _message_handler.MessageHandler(n,n+"_worker",r)
e._messageHandler=a,e._readyCapability.resolve()}})).catch((function(t){e._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(t.message,'".')))}))}},{key:"destroy",value:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),pdfWorkerPorts.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},{key:"promise",get:function(){return this._readyCapability.promise}},{key:"port",get:function(){return this._port}},{key:"messageHandler",get:function(){return this._messageHandler}}],[{key:"fromPort",value:function(t){if(!t||!t.port)throw new Error("PDFWorker.fromPort - invalid method signature.")
return pdfWorkerPorts.has(t.port)?pdfWorkerPorts.get(t.port):new e(t)}},{key:"getWorkerSrc",value:function(){return _getWorkerSrc()}}]),e}()
return PDFWorker}()
exports.PDFWorker=PDFWorker
var WorkerTransport=function(){function e(t,r,n,i){_classCallCheck(this,e),this.messageHandler=t,this.loadingTask=r,this.commonObjs=new PDFObjects,this.fontLoader=new _font_loader.FontLoader({docId:r.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this)}),this._params=i,this.CMapReaderFactory=new i.CMapReaderFactory({baseUrl:i.cMapUrl,isCompressed:i.cMapPacked}),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=n,this._fullReader=null,this._lastProgress=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=(0,_util.createPromiseCapability)(),this.setupMessageHandler()}return _createClass(e,[{key:"destroy",value:function(){var e=this
if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=(0,_util.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var t=[]
this.pageCache.forEach((function(e){e&&t.push(e._destroy())})),this.pageCache.length=0,this.pagePromises.length=0
var r=this.messageHandler.sendWithPromise("Terminate",null)
return t.push(r),Promise.all(t).then((function(){e.fontLoader.clear(),e._networkStream&&e._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated.")),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()}),this.destroyCapability.reject),this.destroyCapability.promise}},{key:"setupMessageHandler",value:function(){var e=this,t=this.messageHandler,r=this.loadingTask
t.on("GetReader",(function(t,r){(0,_util.assert)(e._networkStream),e._fullReader=e._networkStream.getFullReader(),e._fullReader.onProgress=function(t){e._lastProgress={loaded:t.loaded,total:t.total}},r.onPull=function(){e._fullReader.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t)),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){e._fullReader.cancel(t)}})),t.on("ReaderHeadersReady",(function(t){var n=(0,_util.createPromiseCapability)(),i=e._fullReader
return i.headersReady.then((function(){i.isStreamingSupported&&i.isRangeSupported||(e._lastProgress&&r.onProgress&&r.onProgress(e._lastProgress),i.onProgress=function(e){r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}),n.resolve({isStreamingSupported:i.isStreamingSupported,isRangeSupported:i.isRangeSupported,contentLength:i.contentLength})}),n.reject),n.promise})),t.on("GetRangeReader",(function(t,r){(0,_util.assert)(e._networkStream)
var n=e._networkStream.getRangeReader(t.begin,t.end)
n?(r.onPull=function(){n.read().then((function(e){var t=e.value
e.done?r.close():((0,_util.assert)((0,_util.isArrayBuffer)(t)),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(e){n.cancel(e)}):r.close()})),t.on("GetDoc",(function(t){var n=t.pdfInfo
e._numPages=n.numPages,r._capability.resolve(new PDFDocumentProxy(n,e))})),t.on("DocException",(function(e){var t
switch(e.name){case"PasswordException":t=new _util.PasswordException(e.message,e.code)
break
case"InvalidPDFException":t=new _util.InvalidPDFException(e.message)
break
case"MissingPDFException":t=new _util.MissingPDFException(e.message)
break
case"UnexpectedResponseException":t=new _util.UnexpectedResponseException(e.message,e.status)
break
case"UnknownErrorException":t=new _util.UnknownErrorException(e.message,e.details)}r._capability.reject(t)})),t.on("PasswordRequest",(function(t){if(e._passwordCapability=(0,_util.createPromiseCapability)(),r.onPassword){try{r.onPassword((function(t){e._passwordCapability.resolve({password:t})}),t.code)}catch(n){e._passwordCapability.reject(n)}}else e._passwordCapability.reject(new _util.PasswordException(t.message,t.code))
return e._passwordCapability.promise})),t.on("DataLoaded",(function(t){r.onProgress&&r.onProgress({loaded:t.length,total:t.length}),e.downloadInfoCapability.resolve(t)})),t.on("StartRenderPage",(function(t){e.destroyed||e.pageCache[t.pageIndex]._startRenderPage(t.transparency,t.intent)})),t.on("commonobj",(function(r){if(!e.destroyed){var n=_slicedToArray(r,3),i=n[0],a=n[1],o=n[2]
if(!e.commonObjs.has(i))switch(a){case"Font":var s=e._params
if("error"in o){var u=o.error;(0,_util.warn)("Error during font loading: ".concat(u)),e.commonObjs.resolve(i,u)
break}var l=null
s.pdfBug&&globalThis.FontInspector&&globalThis.FontInspector.enabled&&(l={registerFont:function(e,t){globalThis.FontInspector.fontAdded(e,t)}})
var c=new _font_loader.FontFaceObject(o,{isEvalSupported:s.isEvalSupported,disableFontFace:s.disableFontFace,ignoreErrors:s.ignoreErrors,onUnsupportedFeature:e._onUnsupportedFeature.bind(e),fontRegistry:l})
e.fontLoader.bind(c).then((function(){e.commonObjs.resolve(i,c)}),(function(r){t.sendWithPromise("FontFallback",{id:i}).finally((function(){e.commonObjs.resolve(i,c)}))}))
break
case"FontPath":case"FontType3Res":e.commonObjs.resolve(i,o)
break
default:throw new Error("Got unknown common object type ".concat(a))}}})),t.on("obj",(function(t){if(!e.destroyed){var r=_slicedToArray(t,4),n=r[0],i=r[1],a=r[2],o=r[3],s=e.pageCache[i]
if(!s.objs.has(n))switch(a){case"JpegStream":return new Promise((function(e,t){var r=new Image
r.onload=function(){e(r)},r.onerror=function(){t(new Error("Error during JPEG image loading")),(0,_display_utils.releaseImageResources)(r)},r.src=o})).then((function(e){s.objs.resolve(n,e)}))
case"Image":s.objs.resolve(n,o)
o&&"data"in o&&o.data.length>8e6&&(s.cleanupAfterRender=!0)
break
default:throw new Error("Got unknown object type ".concat(a))}}})),t.on("DocProgress",(function(t){e.destroyed||r.onProgress&&r.onProgress({loaded:t.loaded,total:t.total})})),t.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this)),t.on("JpegDecode",(function(t){if(e.destroyed)return Promise.reject(new Error("Worker was destroyed"))
if("undefined"==typeof document)return Promise.reject(new Error('"document" is not defined.'))
var r=_slicedToArray(t,2),n=r[0],i=r[1]
return 3!==i&&1!==i?Promise.reject(new Error("Only 3 components or 1 component can be returned")):new Promise((function(e,t){var r=new Image
r.onload=function(){var t=r.width,n=r.height,a=t*n,o=4*a,s=new Uint8ClampedArray(a*i),u=document.createElement("canvas")
u.width=t,u.height=n
var l=u.getContext("2d")
l.drawImage(r,0,0)
var c=l.getImageData(0,0,t,n).data
if(3===i)for(var h=0,f=0;h<o;h+=4,f+=3)s[f]=c[h],s[f+1]=c[h+1],s[f+2]=c[h+2]
else if(1===i)for(var d=0,p=0;d<o;d+=4,p++)s[p]=c[d]
e({data:s,width:t,height:n}),(0,_display_utils.releaseImageResources)(r),u.width=0,u.height=0,u=null,l=null},r.onerror=function(){t(new Error("JpegDecode failed to load image")),(0,_display_utils.releaseImageResources)(r)},r.src=n}))})),t.on("FetchBuiltInCMap",(function(t,r){if(e.destroyed)r.error(new Error("Worker was destroyed"))
else{var n=!1
r.onPull=function(){n?r.close():(n=!0,e.CMapReaderFactory.fetch(t).then((function(e){r.enqueue(e,1,[e.cMapData.buffer])})).catch((function(e){r.error(e)})))}}}))}},{key:"_onUnsupportedFeature",value:function(e){var t=e.featureId
this.destroyed||this.loadingTask.onUnsupportedFeature&&this.loadingTask.onUnsupportedFeature(t)}},{key:"getData",value:function(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function(e){var t=this
if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request"))
var r=e-1
if(r in this.pagePromises)return this.pagePromises[r]
var n=this.messageHandler.sendWithPromise("GetPage",{pageIndex:r}).then((function(e){if(t.destroyed)throw new Error("Transport destroyed")
var n=new PDFPageProxy(r,e,t,t._params.pdfBug)
return t.pageCache[r]=n,n}))
return this.pagePromises[r]=n,n}},{key:"getPageIndex",value:function(e){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:e}).catch((function(e){return Promise.reject(new Error(e))}))}},{key:"getAnnotations",value:function(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}},{key:"getDestinations",value:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function(e){return"string"!=typeof e?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}},{key:"getPageLabels",value:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageLayout",value:function(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}},{key:"getPageMode",value:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getViewerPreferences",value:function(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}},{key:"getOpenActionDestination",value:function(){return this.messageHandler.sendWithPromise("GetOpenActionDestination",null)}},{key:"getAttachments",value:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getOutline",value:function(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getPermissions",value:function(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function(){var e=this
return this.messageHandler.sendWithPromise("GetMetadata",null).then((function(t){return{info:t[0],metadata:t[1]?new _metadata.Metadata(t[1]):null,contentDispositionFilename:e._fullReader?e._fullReader.filename:null}}))}},{key:"getStats",value:function(){return this.messageHandler.sendWithPromise("GetStats",null)}},{key:"startCleanup",value:function(){var e=this
this.messageHandler.sendWithPromise("Cleanup",null).then((function(){for(var t=0,r=e.pageCache.length;t<r;t++){var n=e.pageCache[t]
n&&n.cleanup()}e.commonObjs.clear(),e.fontLoader.clear()}))}},{key:"loadingParams",get:function(){var e=this._params
return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:e.disableAutoFetch,disableCreateObjectURL:e.disableCreateObjectURL,disableFontFace:e.disableFontFace,nativeImageDecoderSupport:e.nativeImageDecoderSupport})}}]),e}(),PDFObjects=function(){function e(){_classCallCheck(this,e),this._objs=Object.create(null)}return _createClass(e,[{key:"_ensureObj",value:function(e){return this._objs[e]?this._objs[e]:this._objs[e]={capability:(0,_util.createPromiseCapability)(),data:null,resolved:!1}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(t)return this._ensureObj(e).capability.promise.then(t),null
var r=this._objs[e]
if(!r||!r.resolved)throw new Error("Requesting object that isn't resolved yet ".concat(e,"."))
return r.data}},{key:"has",value:function(e){var t=this._objs[e]
return!!t&&t.resolved}},{key:"resolve",value:function(e,t){var r=this._ensureObj(e)
r.resolved=!0,r.data=t,r.capability.resolve(t)}},{key:"clear",value:function(){for(var e in this._objs){var t=this._objs[e].data
"undefined"!=typeof Image&&t instanceof Image&&(0,_display_utils.releaseImageResources)(t)}this._objs=Object.create(null)}}]),e}(),RenderTask=function(){function e(t){_classCallCheck(this,e),this._internalRenderTask=t,this.onContinue=null}return _createClass(e,[{key:"cancel",value:function(){this._internalRenderTask.cancel()}},{key:"then",value:function(e,t){throw new Error("Removed API method: RenderTask.then, use the `promise` getter instead.")}},{key:"promise",get:function(){return this._internalRenderTask.capability.promise}}]),e}(),InternalRenderTask=(canvasInRendering=new WeakSet,function(){function e(t){var r=t.callback,n=t.params,i=t.objs,a=t.commonObjs,o=t.operatorList,s=t.pageNumber,u=t.canvasFactory,l=t.webGLContext,c=t.useRequestAnimationFrame,h=void 0!==c&&c,f=t.pdfBug,d=void 0!==f&&f
_classCallCheck(this,e),this.callback=r,this.params=n,this.objs=i,this.commonObjs=a,this.operatorListIdx=null,this.operatorList=o,this.pageNumber=s,this.canvasFactory=u,this.webGLContext=l,this._pdfBug=d,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=!0===h&&"undefined"!=typeof window,this.cancelled=!1,this.capability=(0,_util.createPromiseCapability)(),this.task=new RenderTask(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=n.canvasContext.canvas}var t
return _createClass(e,[{key:"initializeGraphics",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this.cancelled){if(this._canvas){if(canvasInRendering.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.")
canvasInRendering.add(this._canvas)}this._pdfBug&&globalThis.StepperManager&&globalThis.StepperManager.enabled&&(this.stepper=globalThis.StepperManager.create(this.pageNumber-1),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var t=this.params,r=t.canvasContext,n=t.viewport,i=t.transform,a=t.imageLayer,o=t.background
this.gfx=new _canvas.CanvasGraphics(r,this.commonObjs,this.objs,this.canvasFactory,this.webGLContext,a),this.gfx.beginDrawing({transform:i,viewport:n,transparency:e,background:o}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
this.running=!1,this.cancelled=!0,this.gfx&&this.gfx.endDrawing(),this._canvas&&canvasInRendering.delete(this._canvas),this.callback(e||new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this.pageNumber),"canvas"))}},{key:"operatorListChanged",value:function(){this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()):this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function(){var e=this
this._useRequestAnimationFrame?window.requestAnimationFrame((function(){e._nextBound().catch(e.cancel.bind(e))})):Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this))}},{key:"_next",value:(t=_asyncToGenerator(_regenerator.default.mark((function e(){return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cancelled){e.next=2
break}return e.abrupt("return")
case 2:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&canvasInRendering.delete(this._canvas),this.callback()))
case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}()),canvasInRendering,version="2.4.199"
exports.version=version
var build="6316b2a1"
exports.build=build},function(e,t,r){"use strict"
e.exports=r(186)},function(e,t,r){"use strict";(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag"
function u(e,t,r,n){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),o=new w(n||[])
return a._invoke=function(e,t,r){var n="suspendedStart"
return function(i,a){if("executing"===n)throw new Error("Generator is already running")
if("completed"===n){if("throw"===i)throw a
return x()}for(r.method=i,r.arg=a;;){var o=r.delegate
if(o){var s=_(o,r)
if(s){if(s===c)continue
return s}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
n="executing"
var u=l(e,t,r)
if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===c)continue
return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=u
var c={}
function h(){}function f(){}function d(){}var p={}
p[a]=function(){return this}
var v=Object.getPrototypeOf,g=v&&v(v(k([])))
g&&g!==r&&n.call(g,a)&&(p=g)
var y=d.prototype=h.prototype=Object.create(p)
function m(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e){var r
this._invoke=function(i,a){function o(){return new Promise((function(r,o){(function r(i,a,o,s){var u=l(e[i],e,a)
if("throw"!==u.type){var c=u.arg,h=c.value
return h&&"object"===t(h)&&n.call(h,"__await")?Promise.resolve(h.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):Promise.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)})(i,a,r,o)}))}return r=r?r.then(o,o):o()}}function _(e,t){var r=e.iterator[t.method]
if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method))return c
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=l(r,e.iterator,t.arg)
if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c
var i=n.arg
return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function A(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function k(e){if(e){var t=e[a]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t
return t.value=void 0,t.done=!0,t}
return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=y.constructor=d,d.constructor=f,d[s]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},m(b.prototype),b.prototype[o]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,i){var a=new b(u(t,r,n,i))
return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},m(y),y[s]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var r in e)t.push(r)
return t.reverse(),function r(){for(;t.length;){var n=t.pop()
if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function r(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion
if("root"===a.tryLoc)return r("end")
if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc")
if(s&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)
if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally")
if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r]
if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i
break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null)
var o=a?a.completion:{}
return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===e){var n=r.completion
if("throw"===n.type){var i=n.arg
S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}("object"===t(e)?e.exports:{})
try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(187)(e))},function(e,t,r){"use strict"
e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.addLinkAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,n=t.target,i=t.rel,o=t.enabled,s=void 0===o||o;(0,a.assert)(r&&"string"==typeof r,'addLinkAttributes: A valid "url" parameter must provided.')
var u=(0,a.removeNullCharacters)(r)
s?e.href=e.title=u:(e.href="",e.title="Disabled: ".concat(u),e.onclick=function(){return!1})
var l=""
switch(n){case A.NONE:break
case A.SELF:l="_self"
break
case A.BLANK:l="_blank"
break
case A.PARENT:l="_parent"
break
case A.TOP:l="_top"}e.target=l,e.rel="string"==typeof i?i:"noopener noreferrer nofollow"},t.getFilenameFromUrl=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length)
return e.substring(e.lastIndexOf("/",n)+1,n)},t.isFetchSupported=k,t.isValidFetchUrl=x,t.loadScript=function(e){return new Promise((function(t,r){var n=document.createElement("script")
n.src=e,n.onload=t,n.onerror=function(){r(new Error("Cannot load script at: ".concat(n.src)))},(document.head||document.documentElement).appendChild(n)}))},t.deprecated=function(e){console.log("Deprecated API usage: "+e)},t.releaseImageResources=function(e){(0,a.assert)(e instanceof Image,"Invalid `img` parameter.")
var t=e.src
"string"==typeof t&&t.startsWith("blob:")&&URL.revokeObjectURL&&URL.revokeObjectURL(t)
e.removeAttribute("src")},t.PDFDateString=t.StatTimer=t.DOMSVGFactory=t.DOMCMapReaderFactory=t.DOMCanvasFactory=t.DEFAULT_LINK_REL=t.LinkTarget=t.RenderingCancelledException=t.PageViewport=void 0
var n,i=(n=r(185))&&n.__esModule?n:{default:n},a=r(1)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function h(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){c(a,n,i,o,s,"next",e)}function s(e){c(a,n,i,o,s,"throw",e)}o(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}t.DEFAULT_LINK_REL="noopener noreferrer nofollow"
var v="http://www.w3.org/2000/svg",g=function(){function e(){f(this,e)}return p(e,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size")
var r=document.createElement("canvas"),n=r.getContext("2d")
return r.width=e,r.height=t,{canvas:r,context:n}}},{key:"reset",value:function(e,t,r){if(!e.canvas)throw new Error("Canvas is not specified")
if(t<=0||r<=0)throw new Error("Invalid canvas size")
e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function(e){if(!e.canvas)throw new Error("Canvas is not specified")
e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}}]),e}()
t.DOMCanvasFactory=g
var y=function(){function e(t){var r=t.baseUrl,n=void 0===r?null:r,i=t.isCompressed,a=void 0!==i&&i
f(this,e),this.baseUrl=n,this.isCompressed=a}return p(e,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=h(i.default.mark((function e(t){var r,n,o,s=this
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,this.baseUrl){e.next=3
break}throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.')
case 3:if(r){e.next=5
break}throw new Error("CMap name must be specified.")
case 5:if(n=this.baseUrl+r+(this.isCompressed?".bcmap":""),o=this.isCompressed?a.CMapCompressionType.BINARY:a.CMapCompressionType.NONE,!k()||!x(n,document.baseURI)){e.next=9
break}return e.abrupt("return",fetch(n).then(function(){var e=h(i.default.mark((function e(t){var r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2
break}throw new Error(t.statusText)
case 2:if(!s.isCompressed){e.next=10
break}return e.t0=Uint8Array,e.next=6,t.arrayBuffer()
case 6:e.t1=e.sent,r=new e.t0(e.t1),e.next=15
break
case 10:return e.t2=a.stringToBytes,e.next=13,t.text()
case 13:e.t3=e.sent,r=(0,e.t2)(e.t3)
case 15:return e.abrupt("return",{cMapData:r,compressionType:o})
case 16:case"end":return e.stop()}}),e)})))
return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw new Error("Unable to load ".concat(s.isCompressed?"binary ":"")+"CMap at: ".concat(n))})))
case 9:return e.abrupt("return",new Promise((function(e,t){var r=new XMLHttpRequest
r.open("GET",n,!0),s.isCompressed&&(r.responseType="arraybuffer"),r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){var n
if(200===r.status||0===r.status)if(s.isCompressed&&r.response?n=new Uint8Array(r.response):!s.isCompressed&&r.responseText&&(n=(0,a.stringToBytes)(r.responseText)),n)return void e({cMapData:n,compressionType:o})
t(new Error(r.statusText))}},r.send(null)})).catch((function(e){throw new Error("Unable to load ".concat(s.isCompressed?"binary ":"")+"CMap at: ".concat(n))})))
case 10:case"end":return e.stop()}}),e,this)})))
return function(t){return e.apply(this,arguments)}}())}]),e}()
t.DOMCMapReaderFactory=y
var m=function(){function e(){f(this,e)}return p(e,[{key:"create",value:function(e,t){(0,a.assert)(e>0&&t>0,"Invalid SVG dimensions")
var r=document.createElementNS(v,"svg:svg")
return r.setAttribute("version","1.1"),r.setAttribute("width",e+"px"),r.setAttribute("height",t+"px"),r.setAttribute("preserveAspectRatio","none"),r.setAttribute("viewBox","0 0 "+e+" "+t),r}},{key:"createElement",value:function(e){return(0,a.assert)("string"==typeof e,"Invalid SVG element type"),document.createElementNS(v,e)}}]),e}()
t.DOMSVGFactory=m
var b=function(){function e(t){var r=t.viewBox,n=t.scale,i=t.rotation,a=t.offsetX,o=void 0===a?0:a,s=t.offsetY,u=void 0===s?0:s,l=t.dontFlip,c=void 0!==l&&l
f(this,e),this.viewBox=r,this.scale=n,this.rotation=i,this.offsetX=o,this.offsetY=u
var h,d,p,v,g,y,m,b,_=(r[2]+r[0])/2,A=(r[3]+r[1])/2
switch(i=(i%=360)<0?i+360:i){case 180:h=-1,d=0,p=0,v=1
break
case 90:h=0,d=1,p=1,v=0
break
case 270:h=0,d=-1,p=-1,v=0
break
default:h=1,d=0,p=0,v=-1}c&&(p=-p,v=-v),0===h?(g=Math.abs(A-r[1])*n+o,y=Math.abs(_-r[0])*n+u,m=Math.abs(r[3]-r[1])*n,b=Math.abs(r[2]-r[0])*n):(g=Math.abs(_-r[0])*n+o,y=Math.abs(A-r[1])*n+u,m=Math.abs(r[2]-r[0])*n,b=Math.abs(r[3]-r[1])*n),this.transform=[h*n,d*n,p*n,v*n,g-h*n*_-p*n*A,y-d*n*_-v*n*A],this.width=m,this.height=b}return p(e,[{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.scale,n=void 0===r?this.scale:r,i=t.rotation,a=void 0===i?this.rotation:i,o=t.offsetX,s=void 0===o?this.offsetX:o,u=t.offsetY,l=void 0===u?this.offsetY:u,c=t.dontFlip,h=void 0!==c&&c
return new e({viewBox:this.viewBox.slice(),scale:n,rotation:a,offsetX:s,offsetY:l,dontFlip:h})}},{key:"convertToViewportPoint",value:function(e,t){return a.Util.applyTransform([e,t],this.transform)}},{key:"convertToViewportRectangle",value:function(e){var t=a.Util.applyTransform([e[0],e[1]],this.transform),r=a.Util.applyTransform([e[2],e[3]],this.transform)
return[t[0],t[1],r[0],r[1]]}},{key:"convertToPdfPoint",value:function(e,t){return a.Util.applyInverseTransform([e,t],this.transform)}}]),e}()
t.PageViewport=b
var _=function(e){function t(e,r){var n
return f(this,t),(n=s(this,u(t).call(this,e))).type=r,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),t}(a.BaseException)
t.RenderingCancelledException=_
var A={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4}
t.LinkTarget=A
var S,w=function(){function e(){f(this,e),this.started=Object.create(null),this.times=[]}return p(e,[{key:"time",value:function(e){e in this.started&&(0,a.warn)("Timer is already running for ".concat(e)),this.started[e]=Date.now()}},{key:"timeEnd",value:function(e){e in this.started||(0,a.warn)("Timer has not been started for ".concat(e)),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e]}},{key:"toString",value:function(){var e=[],t=0,r=!0,n=!1,i=void 0
try{for(var a,o=this.times[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value.name
s.length>t&&(t=s.length)}}catch(v){n=!0,i=v}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}var u=!0,l=!1,c=void 0
try{for(var h,f=this.times[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value,p=d.end-d.start
e.push("".concat(d.name.padEnd(t)," ").concat(p,"ms\n"))}}catch(v){l=!0,c=v}finally{try{u||null==f.return||f.return()}finally{if(l)throw c}}return e.join("")}}]),e}()
function k(){return"undefined"!=typeof fetch&&"undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream}function x(e,t){try{var r=(t?new URL(e,t):new URL(e)).protocol
return"http:"===r||"https:"===r}catch(n){return!1}}t.StatTimer=w
var C=function(){function e(){f(this,e)}return p(e,null,[{key:"toDateObject",value:function(e){if(!e||!(0,a.isString)(e))return null
S||(S=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"))
var t=S.exec(e)
if(!t)return null
var r=parseInt(t[1],10),n=parseInt(t[2],10)
n=n>=1&&n<=12?n-1:0
var i=parseInt(t[3],10)
i=i>=1&&i<=31?i:1
var o=parseInt(t[4],10)
o=o>=0&&o<=23?o:0
var s=parseInt(t[5],10)
s=s>=0&&s<=59?s:0
var u=parseInt(t[6],10)
u=u>=0&&u<=59?u:0
var l=t[7]||"Z",c=parseInt(t[8],10)
c=c>=0&&c<=23?c:0
var h=parseInt(t[9],10)||0
return h=h>=0&&h<=59?h:0,"-"===l?(o+=c,s+=h):"+"===l&&(o-=c,s-=h),new Date(Date.UTC(r,n,i,o,s,u))}}]),e}()
t.PDFDateString=C},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0
var n,i=(n=r(185))&&n.__esModule?n:{default:n},a=r(1)
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var p,v=function(){function e(t){var r=t.docId,n=t.onUnsupportedFeature
h(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize BaseFontLoader."),this.docId=r,this._onUnsupportedFeature=n,this.nativeFontFaces=[],this.styleElement=null}var t,r
return d(e,[{key:"addNativeFontFace",value:function(e){this.nativeFontFaces.push(e),document.fonts.add(e)}},{key:"insertRule",value:function(e){var t=this.styleElement
t||((t=this.styleElement=document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId),document.documentElement.getElementsByTagName("head")[0].appendChild(t))
var r=t.sheet
r.insertRule(e,r.cssRules.length)}},{key:"clear",value:function(){this.nativeFontFaces.forEach((function(e){document.fonts.delete(e)})),this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}},{key:"bind",value:(t=i.default.mark((function e(t){var r,n,o=this
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.attached&&!t.missingFile){e.next=2
break}return e.abrupt("return",void 0)
case 2:if(t.attached=!0,!this.isFontLoadingAPISupported){e.next=19
break}if(!(r=t.createNativeFontFace())){e.next=18
break}return this.addNativeFontFace(r),e.prev=7,e.next=10,r.loaded
case 10:e.next=18
break
case 12:throw e.prev=12,e.t0=e.catch(7),this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.font}),(0,a.warn)("Failed to load font '".concat(r.family,"': '").concat(e.t0,"'.")),t.disableFontFace=!0,e.t0
case 18:return e.abrupt("return",void 0)
case 19:if(!(n=t.createFontFaceRule())){e.next=25
break}if(this.insertRule(n),!this.isSyncFontLoadingSupported){e.next=24
break}return e.abrupt("return",void 0)
case 24:return e.abrupt("return",new Promise((function(e){var r=o._queueLoadingCallback(e)
o._prepareFontLoadEvent([n],[t],r)})))
case 25:return e.abrupt("return",void 0)
case 26:case"end":return e.stop()}}),e,this,[[7,12]])})),r=function(){var e=this,r=arguments
return new Promise((function(n,i){var a=t.apply(e,r)
function o(e){c(a,n,i,o,s,"next",e)}function s(e){c(a,n,i,o,s,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"_queueLoadingCallback",value:function(e){(0,a.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"_prepareFontLoadEvent",value:function(e,t,r){(0,a.unreachable)("Abstract method `_prepareFontLoadEvent`.")}},{key:"isFontLoadingAPISupported",get:function(){(0,a.unreachable)("Abstract method `isFontLoadingAPISupported`.")}},{key:"isSyncFontLoadingSupported",get:function(){(0,a.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function(){(0,a.unreachable)("Abstract method `_loadTestFont`.")}}]),e}()
t.FontLoader=p,t.FontLoader=p=function(e){function t(e){var r
return h(this,t),(r=s(this,u(t).call(this,e))).loadingContext={requests:[],nextRequestId:0},r.loadTestFontId=0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),d(t,[{key:"_queueLoadingCallback",value:function(e){var t=this.loadingContext,r={id:"pdfjs-font-loading-".concat(t.nextRequestId++),done:!1,complete:function(){for((0,a.assert)(!r.done,"completeRequest() cannot be called twice."),r.done=!0;t.requests.length>0&&t.requests[0].done;){var e=t.requests.shift()
setTimeout(e.callback,0)}},callback:e}
return t.requests.push(r),r}},{key:"_prepareFontLoadEvent",value:function(e,t,r){function n(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function i(e,t,r,n){return e.substring(0,t)+n+e.substring(t+r)}var o,s,u=document.createElement("canvas")
u.width=1,u.height=1
var l=u.getContext("2d"),c=0
var h="lt".concat(Date.now()).concat(this.loadTestFontId++),f=this._loadTestFont,d=n(f=i(f,976,h.length,h),16)
for(o=0,s=h.length-3;o<s;o+=4)d=d-1482184792+n(h,o)|0
o<h.length&&(d=d-1482184792+n(h+"XXX",o)|0),f=i(f,16,4,(0,a.string32)(d))
var p="url(data:font/opentype;base64,".concat(btoa(f),");"),v='@font-face {font-family:"'.concat(h,'";src:').concat(p,"}")
this.insertRule(v)
var g=[]
for(o=0,s=t.length;o<s;o++)g.push(t[o].loadedName)
g.push(h)
var y=document.createElement("div")
for(y.setAttribute("style","visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),o=0,s=g.length;o<s;++o){var m=document.createElement("span")
m.textContent="Hi",m.style.fontFamily=g[o],y.appendChild(m)}document.body.appendChild(y),function e(t,r){if(++c>30)return(0,a.warn)("Load test font never loaded."),void r()
l.font="30px "+t,l.fillText(".",0,20),l.getImageData(0,0,1,1).data[3]>0?r():setTimeout(e.bind(null,t,r))}(h,(function(){document.body.removeChild(y),r.complete()}))}},{key:"isFontLoadingAPISupported",get:function(){var e="undefined"!=typeof document&&!!document.fonts
if(e&&"undefined"!=typeof navigator){var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
t&&t[1]<63&&(e=!1)}return(0,a.shadow)(this,"isFontLoadingAPISupported",e)}},{key:"isSyncFontLoadingSupported",get:function(){var e=!1
if("undefined"==typeof navigator)e=!0
else{var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
t&&t[1]>=14&&(e=!0)}return(0,a.shadow)(this,"isSyncFontLoadingSupported",e)}},{key:"_loadTestFont",get:function(){return(0,a.shadow)(this,"_loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))}}]),t}(v)
var g={get value(){return(0,a.shadow)(this,"value",(0,a.isEvalSupported)())}},y=function(){function e(t,r){var n=r.isEvalSupported,i=void 0===n||n,a=r.disableFontFace,o=void 0!==a&&a,s=r.ignoreErrors,u=void 0!==s&&s,l=r.onUnsupportedFeature,c=void 0===l?null:l,f=r.fontRegistry,d=void 0===f?null:f
for(var p in h(this,e),this.compiledGlyphs=Object.create(null),t)this[p]=t[p]
this.isEvalSupported=!1!==i,this.disableFontFace=!0===o,this.ignoreErrors=!0===u,this._onUnsupportedFeature=c,this.fontRegistry=d}return d(e,[{key:"createNativeFontFace",value:function(){if(!this.data||this.disableFontFace)return null
var e=new FontFace(this.loadedName,this.data,{})
return this.fontRegistry&&this.fontRegistry.registerFont(this),e}},{key:"createFontFaceRule",value:function(){if(!this.data||this.disableFontFace)return null
var e=(0,a.bytesToString)(new Uint8Array(this.data)),t="url(data:".concat(this.mimetype,";base64,").concat(btoa(e),");"),r='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(t,"}")
return this.fontRegistry&&this.fontRegistry.registerFont(this,t),r}},{key:"getPathGenerator",value:function(e,t){if(void 0!==this.compiledGlyphs[t])return this.compiledGlyphs[t]
var r,n
try{r=e.get(this.loadedName+"_path_"+t)}catch(l){if(!this.ignoreErrors)throw l
return this._onUnsupportedFeature&&this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.font}),(0,a.warn)('getPathGenerator - ignoring character: "'.concat(l,'".')),this.compiledGlyphs[t]=function(e,t){}}if(this.isEvalSupported&&g.value){for(var i,o="",s=0,u=r.length;s<u;s++)i=void 0!==(n=r[s]).args?n.args.join(","):"",o+="c."+n.cmd+"("+i+");\n"
return this.compiledGlyphs[t]=new Function("c","size",o)}return this.compiledGlyphs[t]=function(e,t){for(var i=0,a=r.length;i<a;i++)"scale"===(n=r[i]).cmd&&(n.args=[t,-t]),e[n.cmd].apply(e,n.args)}}}]),e}()
t.FontFaceObject=y},function(e,t,r){"use strict"
var n=Object.create(null),i=r(48).isNodeJS,a="undefined"!=typeof navigator&&navigator.userAgent||"",o=/Trident/.test(a),s=/CriOS/.test(a);(o||s)&&(n.disableCreateObjectURL=!0),i&&(n.disableFontFace=!0,n.nativeImageDecoderSupport="none"),t.apiCompatibilityParams=Object.freeze(n)},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0
var n=r(1),i=r(192),a={get value(){return(0,n.shadow)(a,"value",(0,n.isLittleEndian)())}}
function o(e){e.mozCurrentTransform||(e._originalSave=e.save,e._originalRestore=e.restore,e._originalRotate=e.rotate,e._originalScale=e.scale,e._originalTranslate=e.translate,e._originalTransform=e.transform,e._originalSetTransform=e.setTransform,e._transformMatrix=e._transformMatrix||[1,0,0,1,0,0],e._transformStack=[],Object.defineProperty(e,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(e,"mozCurrentTransformInverse",{get:function(){var e=this._transformMatrix,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=t*i-r*n,u=r*n-t*i
return[i/s,r/u,n/u,t/s,(i*a-n*o)/u,(r*a-t*o)/s]}}),e.save=function(){var e=this._transformMatrix
this._transformStack.push(e),this._transformMatrix=e.slice(0,6),this._originalSave()},e.restore=function(){var e=this._transformStack.pop()
e&&(this._transformMatrix=e,this._originalRestore())},e.translate=function(e,t){var r=this._transformMatrix
r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5],this._originalTranslate(e,t)},e.scale=function(e,t){var r=this._transformMatrix
r[0]=r[0]*e,r[1]=r[1]*e,r[2]=r[2]*t,r[3]=r[3]*t,this._originalScale(e,t)},e.transform=function(t,r,n,i,a,o){var s=this._transformMatrix
this._transformMatrix=[s[0]*t+s[2]*r,s[1]*t+s[3]*r,s[0]*n+s[2]*i,s[1]*n+s[3]*i,s[0]*a+s[2]*o+s[4],s[1]*a+s[3]*o+s[5]],e._originalTransform(t,r,n,i,a,o)},e.setTransform=function(t,r,n,i,a,o){this._transformMatrix=[t,r,n,i,a,o],e._originalSetTransform(t,r,n,i,a,o)},e.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this._transformMatrix
this._transformMatrix=[n[0]*t+n[2]*r,n[1]*t+n[3]*r,n[0]*-r+n[2]*t,n[1]*-r+n[3]*t,n[4],n[5]],this._originalRotate(e)})}var s=function(){function e(e){this.canvasFactory=e,this.cache=Object.create(null)}return e.prototype={getCanvas:function(e,t,r,n){var i
return void 0!==this.cache[e]?(i=this.cache[e],this.canvasFactory.reset(i,t,r),i.context.setTransform(1,0,0,1,0,0)):(i=this.canvasFactory.create(t,r),this.cache[e]=i),n&&o(i.context),i},clear:function(){for(var e in this.cache){var t=this.cache[e]
this.canvasFactory.destroy(t),delete this.cache[e]}}},e}()
var u=function(){function e(){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=n.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=n.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.resumeSMaskCtx=null}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}(),l=function(){function e(e,t,r,n,i,a){this.ctx=e,this.current=new u,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=r,this.canvasFactory=n,this.webGLContext=i,this.imageLayer=a,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.cachedCanvases=new s(this.canvasFactory),e&&o(e),this._cachedGetSinglePixelWidth=null}function t(e,t){if("undefined"!=typeof ImageData&&t instanceof ImageData)e.putImageData(t,0,0)
else{var r,i,o,s,u,l=t.height,c=t.width,h=l%16,f=(l-h)/16,d=0===h?f:f+1,p=e.createImageData(c,16),v=0,g=t.data,y=p.data
if(t.kind===n.ImageKind.GRAYSCALE_1BPP){var m=g.byteLength,b=new Uint32Array(y.buffer,0,y.byteLength>>2),_=b.length,A=c+7>>3,S=4294967295,w=a.value?4278190080:255
for(i=0;i<d;i++){for(s=i<f?16:h,r=0,o=0;o<s;o++){for(var k=m-v,x=0,C=k>A?c:8*k-7,R=-8&C,P=0,T=0;x<R;x+=8)T=g[v++],b[r++]=128&T?S:w,b[r++]=64&T?S:w,b[r++]=32&T?S:w,b[r++]=16&T?S:w,b[r++]=8&T?S:w,b[r++]=4&T?S:w,b[r++]=2&T?S:w,b[r++]=1&T?S:w
for(;x<C;x++)0===P&&(T=g[v++],P=128),b[r++]=T&P?S:w,P>>=1}for(;r<_;)b[r++]=0
e.putImageData(p,0,16*i)}}else if(t.kind===n.ImageKind.RGBA_32BPP){for(o=0,u=16*c*4,i=0;i<f;i++)y.set(g.subarray(v,v+u)),v+=u,e.putImageData(p,0,o),o+=16
i<d&&(u=c*h*4,y.set(g.subarray(v,v+u)),e.putImageData(p,0,o))}else{if(t.kind!==n.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(t.kind))
for(u=c*(s=16),i=0;i<d;i++){for(i>=f&&(u=c*(s=h)),r=0,o=u;o--;)y[r++]=g[v++],y[r++]=g[v++],y[r++]=g[v++],y[r++]=255
e.putImageData(p,0,16*i)}}}}function r(e,t){for(var r=t.height,n=t.width,i=r%16,a=(r-i)/16,o=0===i?a:a+1,s=e.createImageData(n,16),u=0,l=t.data,c=s.data,h=0;h<o;h++){for(var f=h<a?16:i,d=3,p=0;p<f;p++)for(var v=0,g=0;g<n;g++){if(!v){var y=l[u++]
v=128}c[d]=y&v?0:255,d+=4,v>>=1}e.putImageData(s,0,16*h)}}function l(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,i=r.length;n<i;n++){var a=r[n]
void 0!==e[a]&&(t[a]=e[a])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function c(e){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function h(e,t,r,n){for(var i=e.length,a=3;a<i;a+=4){var o=e[a]
if(0===o)e[a-3]=t,e[a-2]=r,e[a-1]=n
else if(o<255){var s=255-o
e[a-3]=e[a-3]*o+t*s>>8,e[a-2]=e[a-2]*o+r*s>>8,e[a-1]=e[a-1]*o+n*s>>8}}}function f(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=r?r[e[i]]:e[i]
t[i]=t[i]*a*(1/255)|0}}function d(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=77*e[i-3]+152*e[i-2]+28*e[i-1]
t[i]=r?t[i]*r[a>>8]>>8:t[i]*a>>16}}function p(e,t,r,n){var i=t.canvas,a=t.context
e.setTransform(t.scaleX,0,0,t.scaleY,t.offsetX,t.offsetY)
var o=t.backdrop||null
if(!t.transferMap&&n.isEnabled){var s=n.composeSMask({layer:r.canvas,mask:i,properties:{subtype:t.subtype,backdrop:o}})
return e.setTransform(1,0,0,1,0,0),void e.drawImage(s,t.offsetX,t.offsetY)}(function(e,t,r,n,i,a,o){var s,u=!!a,l=u?a[0]:0,c=u?a[1]:0,p=u?a[2]:0
s="Luminosity"===i?d:f
for(var v=Math.min(n,Math.ceil(1048576/r)),g=0;g<n;g+=v){var y=Math.min(v,n-g),m=e.getImageData(0,g,r,y),b=t.getImageData(0,g,r,y)
u&&h(m.data,l,c,p),s(m.data,b.data,o),e.putImageData(b,0,g)}})(a,r,i.width,i.height,t.subtype,o,t.transferMap),e.drawImage(i,0,0)}var v=["butt","round","square"],g=["miter","round","bevel"],y={},m={}
for(var b in e.prototype={beginDrawing:function(e){var t=e.transform,r=e.viewport,n=e.transparency,i=void 0!==n&&n,a=e.background,o=void 0===a?null:a,s=this.ctx.canvas.width,u=this.ctx.canvas.height
if(this.ctx.save(),this.ctx.fillStyle=o||"rgb(255, 255, 255)",this.ctx.fillRect(0,0,s,u),this.ctx.restore(),i){var l=this.cachedCanvases.getCanvas("transparent",s,u,!0)
this.compositeCtx=this.ctx,this.transparentCanvas=l.canvas,this.ctx=l.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),c(this.ctx),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,r.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(e,t,r,i){var a=e.argsArray,o=e.fnArray,s=t||0,u=a.length
if(u===s)return s
for(var l,c=u-s>10&&"function"==typeof r,h=c?Date.now()+15:0,f=0,d=this.commonObjs,p=this.objs;;){if(void 0!==i&&s===i.nextBreakPoint)return i.breakIt(s,r),s
if((l=o[s])!==n.OPS.dependency)this[l].apply(this,a[s])
else{var v=!0,g=!1,y=void 0
try{for(var m,b=a[s][Symbol.iterator]();!(v=(m=b.next()).done);v=!0){var _=m.value,A=_.startsWith("g_")?d:p
if(!A.has(_))return A.get(_,r),s}}catch(S){g=!0,y=S}finally{try{v||null==b.return||b.return()}finally{if(g)throw y}}}if(++s===u)return s
if(c&&++f>10){if(Date.now()>h)return r(),s
f=0}}},endDrawing:function(){null!==this.current.activeSMask&&this.endSMaskGroup(),this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),this.webGLContext.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(e){this.current.lineWidth=e,this.ctx.lineWidth=e},setLineCap:function(e){this.ctx.lineCap=v[e]},setLineJoin:function(e){this.ctx.lineJoin=g[e]},setMiterLimit:function(e){this.ctx.miterLimit=e},setDash:function(e,t){var r=this.ctx
void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)},setRenderingIntent:function(e){},setFlatness:function(e){},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],i=n[0],a=n[1]
switch(i){case"LW":this.setLineWidth(a)
break
case"LC":this.setLineCap(a)
break
case"LJ":this.setLineJoin(a)
break
case"ML":this.setMiterLimit(a)
break
case"D":this.setDash(a[0],a[1])
break
case"RI":this.setRenderingIntent(a)
break
case"FL":this.setFlatness(a)
break
case"Font":this.setFont(a[0],a[1])
break
case"CA":this.current.strokeAlpha=n[1]
break
case"ca":this.current.fillAlpha=n[1],this.ctx.globalAlpha=n[1]
break
case"BM":this.ctx.globalCompositeOperation=a
break
case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup()),this.current.activeSMask=a?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null}}},beginSMaskGroup:function(){var e=this.current.activeSMask,t=e.canvas.width,r=e.canvas.height,n="smaskGroupAt"+this.groupLevel,i=this.cachedCanvases.getCanvas(n,t,r,!0),a=this.ctx,o=a.mozCurrentTransform
this.ctx.save()
var s=i.context
s.scale(1/e.scaleX,1/e.scaleY),s.translate(-e.offsetX,-e.offsetY),s.transform.apply(s,o),e.startTransformInverse=s.mozCurrentTransformInverse,l(a,s),this.ctx=s,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(a),this.groupLevel++},suspendSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),p(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),this.ctx.save(),l(e,this.ctx),this.current.resumeSMaskCtx=e
var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.restore()},resumeSMaskGroup:function(){var e=this.current.resumeSMaskCtx,t=this.ctx
this.ctx=e,this.groupStack.push(t),this.groupLevel++},endSMaskGroup:function(){var e=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),p(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),l(e,this.ctx)
var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,t)},save:function(){this.ctx.save()
var e=this.current
this.stateStack.push(e),this.current=e.clone(),this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup(),null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this._cachedGetSinglePixelWidth=null)},transform:function(e,t,r,n,i,a){this.ctx.transform(e,t,r,n,i,a),this._cachedGetSinglePixelWidth=null},constructPath:function(e,t){for(var r=this.ctx,i=this.current,a=i.x,o=i.y,s=0,u=0,l=e.length;s<l;s++)switch(0|e[s]){case n.OPS.rectangle:a=t[u++],o=t[u++]
var c=t[u++],h=t[u++]
0===c&&(c=this.getSinglePixelWidth()),0===h&&(h=this.getSinglePixelWidth())
var f=a+c,d=o+h
this.ctx.moveTo(a,o),this.ctx.lineTo(f,o),this.ctx.lineTo(f,d),this.ctx.lineTo(a,d),this.ctx.lineTo(a,o),this.ctx.closePath()
break
case n.OPS.moveTo:a=t[u++],o=t[u++],r.moveTo(a,o)
break
case n.OPS.lineTo:a=t[u++],o=t[u++],r.lineTo(a,o)
break
case n.OPS.curveTo:a=t[u+4],o=t[u+5],r.bezierCurveTo(t[u],t[u+1],t[u+2],t[u+3],a,o),u+=6
break
case n.OPS.curveTo2:r.bezierCurveTo(a,o,t[u],t[u+1],t[u+2],t[u+3]),a=t[u+2],o=t[u+3],u+=4
break
case n.OPS.curveTo3:a=t[u+2],o=t[u+3],r.bezierCurveTo(t[u],t[u+1],a,o,a,o),u+=4
break
case n.OPS.closePath:r.closePath()}i.setCurrentPoint(a,o)},closePath:function(){this.ctx.closePath()},stroke:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.strokeColor
if(t.globalAlpha=this.current.strokeAlpha,r&&r.hasOwnProperty("type")&&"Pattern"===r.type){t.save()
var i=t.mozCurrentTransform,a=n.Util.singularValueDecompose2dScale(i)[0]
t.strokeStyle=r.getPattern(t,this),t.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth*a),t.stroke(),t.restore()}else t.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth),t.stroke()
e&&this.consumePath(),t.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(e){e=void 0===e||e
var t=this.ctx,r=this.current.fillColor,n=!1
this.current.patternFill&&(t.save(),this.baseTransform&&t.setTransform.apply(t,this.baseTransform),t.fillStyle=r.getPattern(t,this),n=!0),this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill(),n&&t.restore(),e&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=y},eoClip:function(){this.pendingClip=m},beginText:function(){this.current.textMatrix=n.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var e=this.pendingTextPaths,t=this.ctx
if(void 0!==e){t.save(),t.beginPath()
for(var r=0;r<e.length;r++){var n=e[r]
t.setTransform.apply(t,n.transform),t.translate(n.x,n.y),n.addToPath(t,n.fontSize)}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths}else t.beginPath()},setCharSpacing:function(e){this.current.charSpacing=e},setWordSpacing:function(e){this.current.wordSpacing=e},setHScale:function(e){this.current.textHScale=e/100},setLeading:function(e){this.current.leading=-e},setFont:function(e,t){var r=this.commonObjs.get(e),i=this.current
if(!r)throw new Error("Can't find font for ".concat(e))
if(i.fontMatrix=r.fontMatrix?r.fontMatrix:n.FONT_IDENTITY_MATRIX,0!==i.fontMatrix[0]&&0!==i.fontMatrix[3]||(0,n.warn)("Invalid font matrix for font "+e),t<0?(t=-t,i.fontDirection=-1):i.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var a=r.loadedName||"sans-serif",o=r.black?"900":r.bold?"bold":"normal",s=r.italic?"italic":"normal",u='"'.concat(a,'", ').concat(r.fallbackName),l=t<16?16:t>100?100:t
this.current.fontSizeScale=t/l,this.ctx.font="".concat(s," ").concat(o," ").concat(l,"px ").concat(u)}},setTextRenderingMode:function(e){this.current.textRenderingMode=e},setTextRise:function(e){this.current.textRise=e},moveText:function(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},setTextMatrix:function(e,t,r,n,i,a){this.current.textMatrix=[e,t,r,n,i,a],this.current.textMatrixScale=Math.sqrt(e*e+t*t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(e,t,r,i){var a,o=this.ctx,s=this.current,u=s.font,l=s.textRenderingMode,c=s.fontSize/s.fontSizeScale,h=l&n.TextRenderingMode.FILL_STROKE_MASK,f=!!(l&n.TextRenderingMode.ADD_TO_PATH_FLAG),d=s.patternFill&&u.data;((u.disableFontFace||f||d)&&(a=u.getPathGenerator(this.commonObjs,e)),u.disableFontFace||d?(o.save(),o.translate(t,r),o.beginPath(),a(o,c),i&&o.setTransform.apply(o,i),h!==n.TextRenderingMode.FILL&&h!==n.TextRenderingMode.FILL_STROKE||o.fill(),h!==n.TextRenderingMode.STROKE&&h!==n.TextRenderingMode.FILL_STROKE||o.stroke(),o.restore()):(h!==n.TextRenderingMode.FILL&&h!==n.TextRenderingMode.FILL_STROKE||o.fillText(e,t,r),h!==n.TextRenderingMode.STROKE&&h!==n.TextRenderingMode.FILL_STROKE||o.strokeText(e,t,r)),f)&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:o.mozCurrentTransform,x:t,y:r,fontSize:c,addToPath:a})},get isFontSubpixelAAEnabled(){var e=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10).context
e.scale(1.5,1),e.fillText("I",0,10)
for(var t=e.getImageData(0,0,10,10).data,r=!1,i=3;i<t.length;i+=4)if(t[i]>0&&t[i]<255){r=!0
break}return(0,n.shadow)(this,"isFontSubpixelAAEnabled",r)},showText:function(e){var t=this.current,r=t.font
if(r.isType3Font)return this.showType3Text(e)
var i=t.fontSize
if(0!==i){var a,o=this.ctx,s=t.fontSizeScale,u=t.charSpacing,l=t.wordSpacing,c=t.fontDirection,h=t.textHScale*c,f=e.length,d=r.vertical,p=d?1:-1,v=r.defaultVMetrics,g=i*t.fontMatrix[0],y=t.textRenderingMode===n.TextRenderingMode.FILL&&!r.disableFontFace&&!t.patternFill
if(o.save(),t.patternFill){o.save()
var m=t.fillColor.getPattern(o,this)
a=o.mozCurrentTransform,o.restore(),o.fillStyle=m}o.transform.apply(o,t.textMatrix),o.translate(t.x,t.y+t.textRise),c>0?o.scale(h,-1):o.scale(h,1)
var b=t.lineWidth,_=t.textMatrixScale
if(0===_||0===b){var A=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
A!==n.TextRenderingMode.STROKE&&A!==n.TextRenderingMode.FILL_STROKE||(this._cachedGetSinglePixelWidth=null,b=.65*this.getSinglePixelWidth())}else b/=_
1!==s&&(o.scale(s,s),b/=s),o.lineWidth=b
var S,w=0
for(S=0;S<f;++S){var k=e[S]
if((0,n.isNum)(k))w+=p*k*i/1e3
else{var x,C,R,P,T,E,O,L=!1,F=(k.isSpace?l:0)+u,I=k.fontChar,M=k.accent,j=k.width
if(d)T=k.vmetric||v,E=-(E=k.vmetric?T[1]:.5*j)*g,O=T[2]*g,j=T?-T[0]:j,x=E/s,C=(w+O)/s
else x=w/s,C=0
if(r.remeasure&&j>0){var N=1e3*o.measureText(I).width/i*s
if(j<N&&this.isFontSubpixelAAEnabled){var D=j/N
L=!0,o.save(),o.scale(D,1),x/=D}else j!==N&&(x+=(j-N)/2e3*i/s)}(k.isInFont||r.missingFile)&&(y&&!M?o.fillText(I,x,C):(this.paintChar(I,x,C,a),M&&(R=x+M.offset.x/s,P=C-M.offset.y/s,this.paintChar(M.fontChar,R,P,a)))),w+=j*g+F*c,L&&o.restore()}}d?t.y-=w*h:t.x+=w*h,o.restore()}},showType3Text:function(e){var t,r,i,a,o=this.ctx,s=this.current,u=s.font,l=s.fontSize,c=s.fontDirection,h=u.vertical?1:-1,f=s.charSpacing,d=s.wordSpacing,p=s.textHScale*c,v=s.fontMatrix||n.FONT_IDENTITY_MATRIX,g=e.length
if(!(s.textRenderingMode===n.TextRenderingMode.INVISIBLE)&&0!==l){for(this._cachedGetSinglePixelWidth=null,o.save(),o.transform.apply(o,s.textMatrix),o.translate(s.x,s.y),o.scale(p,c),t=0;t<g;++t)if(r=e[t],(0,n.isNum)(r))a=h*r*l/1e3,this.ctx.translate(a,0),s.x+=a*p
else{var y=(r.isSpace?d:0)+f,m=u.charProcOperatorList[r.operatorListId]
if(m)this.processingType3=r,this.save(),o.scale(l,l),o.transform.apply(o,v),this.executeOperatorList(m),this.restore(),i=n.Util.applyTransform([r.width,0],v)[0]*l+y,o.translate(i,0),s.x+=i*p
else(0,n.warn)('Type3 character "'.concat(r.operatorListId,'" is not available.'))}o.restore(),this.processingType3=null}},setCharWidth:function(e,t){},setCharWidthAndBounds:function(e,t,r,n,i,a){this.ctx.rect(r,n,i-r,a-n),this.clip(),this.endPath()},getColorN_Pattern:function(t){var r,n=this
if("TilingPattern"===t[0]){var a=t[1],o=this.baseTransform||this.ctx.mozCurrentTransform.slice(),s={createCanvasGraphics:function(t){return new e(t,n.commonObjs,n.objs,n.canvasFactory,n.webGLContext)}}
r=new i.TilingPattern(t,a,this.ctx,s,o)}else r=(0,i.getShadingPatternFromIR)(t)
return r},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r)
this.ctx.strokeStyle=i,this.current.strokeColor=i},setFillRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r)
this.ctx.fillStyle=i,this.current.fillColor=i,this.current.patternFill=!1},shadingFill:function(e){var t=this.ctx
this.save()
var r=(0,i.getShadingPatternFromIR)(e)
t.fillStyle=r.getPattern(t,this,!0)
var a=t.mozCurrentTransformInverse
if(a){var o=t.canvas,s=o.width,u=o.height,l=n.Util.applyTransform([0,0],a),c=n.Util.applyTransform([0,u],a),h=n.Util.applyTransform([s,0],a),f=n.Util.applyTransform([s,u],a),d=Math.min(l[0],c[0],h[0],f[0]),p=Math.min(l[1],c[1],h[1],f[1]),v=Math.max(l[0],c[0],h[0],f[0]),g=Math.max(l[1],c[1],h[1],f[1])
this.ctx.fillRect(d,p,v-d,g-p)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.restore()},beginInlineImage:function(){(0,n.unreachable)("Should not call beginInlineImage")},beginImageData:function(){(0,n.unreachable)("Should not call beginImageData")},paintFormXObjectBegin:function(e,t){if(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(e)&&6===e.length&&this.transform.apply(this,e),this.baseTransform=this.ctx.mozCurrentTransform,t){var r=t[2]-t[0],n=t[3]-t[1]
this.ctx.rect(t[0],t[1],r,n),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.restore(),this.baseTransform=this.baseTransformStack.pop()},beginGroup:function(e){this.save()
var t=this.ctx
e.isolated||(0,n.info)("TODO: Support non-isolated groups."),e.knockout&&(0,n.warn)("Knockout groups not supported.")
var r=t.mozCurrentTransform
if(e.matrix&&t.transform.apply(t,e.matrix),!e.bbox)throw new Error("Bounding box is required.")
var i=n.Util.getAxialAlignedBoundingBox(e.bbox,t.mozCurrentTransform),a=[0,0,t.canvas.width,t.canvas.height]
i=n.Util.intersect(i,a)||[0,0,0,0]
var o=Math.floor(i[0]),s=Math.floor(i[1]),u=Math.max(Math.ceil(i[2])-o,1),c=Math.max(Math.ceil(i[3])-s,1),h=1,f=1
u>4096&&(h=u/4096,u=4096),c>4096&&(f=c/4096,c=4096)
var d="groupAt"+this.groupLevel
e.smask&&(d+="_smask_"+this.smaskCounter++%2)
var p=this.cachedCanvases.getCanvas(d,u,c,!0),v=p.context
v.scale(1/h,1/f),v.translate(-o,-s),v.transform.apply(v,r),e.smask?this.smaskStack.push({canvas:p.canvas,context:v,offsetX:o,offsetY:s,scaleX:h,scaleY:f,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(o,s),t.scale(h,f)),l(t,v),this.ctx=v,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++,this.current.activeSMask=null},endGroup:function(e){this.groupLevel--
var t=this.ctx
this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,e.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(t.canvas,0,0),this.restore()},beginAnnotations:function(){this.save(),this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(e,t,r){if(this.save(),c(this.ctx),this.current=new u,Array.isArray(e)&&4===e.length){var n=e[2]-e[0],i=e[3]-e[1]
this.ctx.rect(e[0],e[1],n,i),this.clip(),this.endPath()}this.transform.apply(this,t),this.transform.apply(this,r)},endAnnotation:function(){this.restore()},paintJpegXObject:function(e,t,r){var i=this.processingType3?this.commonObjs.get(e):this.objs.get(e)
if(i){this.save()
var a=this.ctx
if(a.scale(1/t,-1/r),a.drawImage(i,0,0,i.width,i.height,0,-r,t,r),this.imageLayer){var o=a.mozCurrentTransformInverse,s=this.getCanvasPosition(0,0)
this.imageLayer.appendImage({objId:e,left:s[0],top:s[1],width:t/o[0],height:r/o[3]})}this.restore()}else(0,n.warn)("Dependent image isn't ready yet")},paintImageMaskXObject:function(e){var t=this.ctx,n=e.width,i=e.height,a=this.current.fillColor,o=this.current.patternFill,s=this.processingType3
if(s&&void 0===s.compiled&&(s.compiled=n<=1e3&&i<=1e3?function(e){var t,r,n,i,a=e.width,o=e.height,s=a+1,u=new Uint8Array(s*(o+1)),l=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),c=a+7&-8,h=e.data,f=new Uint8Array(c*o),d=0
for(t=0,i=h.length;t<i;t++)for(var p=128,v=h[t];p>0;)f[d++]=v&p?0:255,p>>=1
var g=0
for(0!==f[d=0]&&(u[0]=1,++g),r=1;r<a;r++)f[d]!==f[d+1]&&(u[r]=f[d]?2:1,++g),d++
for(0!==f[d]&&(u[r]=2,++g),t=1;t<o;t++){n=t*s,f[(d=t*c)-c]!==f[d]&&(u[n]=f[d]?1:8,++g)
var y=(f[d]?4:0)+(f[d-c]?8:0)
for(r=1;r<a;r++)l[y=(y>>2)+(f[d+1]?4:0)+(f[d-c+1]?8:0)]&&(u[n+r]=l[y],++g),d++
if(f[d-c]!==f[d]&&(u[n+r]=f[d]?2:4,++g),g>1e3)return null}for(n=t*s,0!==f[d=c*(o-1)]&&(u[n]=8,++g),r=1;r<a;r++)f[d]!==f[d+1]&&(u[n+r]=f[d]?4:8,++g),d++
if(0!==f[d]&&(u[n+r]=4,++g),g>1e3)return null
var m=new Int32Array([0,s,-1,0,-s,0,0,0,1]),b=[]
for(t=0;g&&t<=o;t++){for(var _=t*s,A=_+a;_<A&&!u[_];)_++
if(_!==A){var S,w=[_%s,t],k=u[_],x=_
do{var C=m[k]
do{_+=C}while(!u[_])
5!==(S=u[_])&&10!==S?(k=S,u[_]=0):(k=S&51*k>>4,u[_]&=k>>2|k<<2),w.push(_%s),w.push(_/s|0),u[_]||--g}while(x!==_)
b.push(w),--t}}return function(e){e.save(),e.scale(1/a,-1/o),e.translate(0,-o),e.beginPath()
for(var t=0,r=b.length;t<r;t++){var n=b[t]
e.moveTo(n[0],n[1])
for(var i=2,s=n.length;i<s;i+=2)e.lineTo(n[i],n[i+1])}e.fill(),e.beginPath(),e.restore()}}({data:e.data,width:n,height:i}):null),s&&s.compiled)s.compiled(t)
else{var u=this.cachedCanvases.getCanvas("maskCanvas",n,i),l=u.context
l.save(),r(l,e),l.globalCompositeOperation="source-in",l.fillStyle=o?a.getPattern(l,this):a,l.fillRect(0,0,n,i),l.restore(),this.paintInlineImageXObject(u.canvas)}},paintImageMaskXObjectRepeat:function(e,t,n,i){var a=e.width,o=e.height,s=this.current.fillColor,u=this.current.patternFill,l=this.cachedCanvases.getCanvas("maskCanvas",a,o),c=l.context
c.save(),r(c,e),c.globalCompositeOperation="source-in",c.fillStyle=u?s.getPattern(c,this):s,c.fillRect(0,0,a,o),c.restore()
for(var h=this.ctx,f=0,d=i.length;f<d;f+=2)h.save(),h.transform(t,0,0,n,i[f],i[f+1]),h.scale(1,-1),h.drawImage(l.canvas,0,0,a,o,0,-1,1,1),h.restore()},paintImageMaskXObjectGroup:function(e){for(var t=this.ctx,n=this.current.fillColor,i=this.current.patternFill,a=0,o=e.length;a<o;a++){var s=e[a],u=s.width,l=s.height,c=this.cachedCanvases.getCanvas("maskCanvas",u,l),h=c.context
h.save(),r(h,s),h.globalCompositeOperation="source-in",h.fillStyle=i?n.getPattern(h,this):n,h.fillRect(0,0,u,l),h.restore(),t.save(),t.transform.apply(t,s.transform),t.scale(1,-1),t.drawImage(c.canvas,0,0,u,l,0,-1,1,1),t.restore()}},paintImageXObject:function(e){var t=this.processingType3?this.commonObjs.get(e):this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image isn't ready yet")},paintImageXObjectRepeat:function(e,t,r,i){var a=this.processingType3?this.commonObjs.get(e):this.objs.get(e)
if(a){for(var o=a.width,s=a.height,u=[],l=0,c=i.length;l<c;l+=2)u.push({transform:[t,0,0,r,i[l],i[l+1]],x:0,y:0,w:o,h:s})
this.paintInlineImageXObjectGroup(a,u)}else(0,n.warn)("Dependent image isn't ready yet")},paintInlineImageXObject:function(e){var r=e.width,n=e.height,i=this.ctx
this.save(),i.scale(1/r,-1/n)
var a,o,s=i.mozCurrentTransformInverse,u=s[0],l=s[1],c=Math.max(Math.sqrt(u*u+l*l),1),h=s[2],f=s[3],d=Math.max(Math.sqrt(h*h+f*f),1)
if("function"==typeof HTMLElement&&e instanceof HTMLElement||!e.data)a=e
else{var p=(o=this.cachedCanvases.getCanvas("inlineImage",r,n)).context
t(p,e),a=o.canvas}for(var v=r,g=n,y="prescale1";c>2&&v>1||d>2&&g>1;){var m=v,b=g
c>2&&v>1&&(c/=v/(m=Math.ceil(v/2))),d>2&&g>1&&(d/=g/(b=Math.ceil(g/2))),(p=(o=this.cachedCanvases.getCanvas(y,m,b)).context).clearRect(0,0,m,b),p.drawImage(a,0,0,v,g,0,0,m,b),a=o.canvas,v=m,g=b,y="prescale1"===y?"prescale2":"prescale1"}if(i.drawImage(a,0,0,v,g,0,-n,r,n),this.imageLayer){var _=this.getCanvasPosition(0,-n)
this.imageLayer.appendImage({imgData:e,left:_[0],top:_[1],width:r/s[0],height:n/s[3]})}this.restore()},paintInlineImageXObjectGroup:function(e,r){var n=this.ctx,i=e.width,a=e.height,o=this.cachedCanvases.getCanvas("inlineImage",i,a)
t(o.context,e)
for(var s=0,u=r.length;s<u;s++){var l=r[s]
if(n.save(),n.transform.apply(n,l.transform),n.scale(1,-1),n.drawImage(o.canvas,l.x,l.y,l.w,l.h,0,-1,1,1),this.imageLayer){var c=this.getCanvasPosition(l.x,l.y)
this.imageLayer.appendImage({imgData:e,left:c[0],top:c[1],width:i,height:a})}n.restore()}},paintSolidColorImageMask:function(){this.ctx.fillRect(0,0,1,1)},paintXObject:function(){(0,n.warn)("Unsupported 'paintXObject' command.")},markPoint:function(e){},markPointProps:function(e,t){},beginMarkedContent:function(e){},beginMarkedContentProps:function(e,t){},endMarkedContent:function(){},beginCompat:function(){},endCompat:function(){},consumePath:function(){var e=this.ctx
this.pendingClip&&(this.pendingClip===m?e.clip("evenodd"):e.clip(),this.pendingClip=null),e.beginPath()},getSinglePixelWidth:function(e){if(null===this._cachedGetSinglePixelWidth){var t=this.ctx.mozCurrentTransformInverse
this._cachedGetSinglePixelWidth=Math.sqrt(Math.max(t[0]*t[0]+t[1]*t[1],t[2]*t[2]+t[3]*t[3]))}return this._cachedGetSinglePixelWidth},getCanvasPosition:function(e,t){var r=this.ctx.mozCurrentTransform
return[r[0]*e+r[2]*t+r[4],r[1]*e+r[3]*t+r[5]]}},n.OPS)e.prototype[n.OPS[b]]=e.prototype[b]
return e}()
t.CanvasGraphics=l},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getShadingPatternFromIR=function(e){var t=i[e[0]]
if(!t)throw new Error("Unknown IR type: ".concat(e[0]))
return t.fromIR(e)},t.TilingPattern=void 0
var n=r(1),i={}
function a(e,t){if(t&&"undefined"!=typeof Path2D){var r=t[2]-t[0],n=t[3]-t[1],i=new Path2D
i.rect(t[0],t[1],r,n),e.clip(i)}}i.RadialAxial={fromIR:function(e){var t=e[1],r=e[2],n=e[3],i=e[4],o=e[5],s=e[6],u=e[7]
return{type:"Pattern",getPattern:function(e){var l
a(e,r),"axial"===t?l=e.createLinearGradient(i[0],i[1],o[0],o[1]):"radial"===t&&(l=e.createRadialGradient(i[0],i[1],s,o[0],o[1],u))
for(var c=0,h=n.length;c<h;++c){var f=n[c]
l.addColorStop(f[0],f[1])}return l}}}}
var o=function(){function e(e,t,r,n,i,a,o,s){var u,l=t.coords,c=t.colors,h=e.data,f=4*e.width
l[r+1]>l[n+1]&&(u=r,r=n,n=u,u=a,a=o,o=u),l[n+1]>l[i+1]&&(u=n,n=i,i=u,u=o,o=s,s=u),l[r+1]>l[n+1]&&(u=r,r=n,n=u,u=a,a=o,o=u)
var d=(l[r]+t.offsetX)*t.scaleX,p=(l[r+1]+t.offsetY)*t.scaleY,v=(l[n]+t.offsetX)*t.scaleX,g=(l[n+1]+t.offsetY)*t.scaleY,y=(l[i]+t.offsetX)*t.scaleX,m=(l[i+1]+t.offsetY)*t.scaleY
if(!(p>=m))for(var b,_,A,S,w,k,x,C,R,P=c[a],T=c[a+1],E=c[a+2],O=c[o],L=c[o+1],F=c[o+2],I=c[s],M=c[s+1],j=c[s+2],N=Math.round(p),D=Math.round(m),q=N;q<=D;q++){q<g?(b=d-(d-v)*(R=q<p?0:p===g?1:(p-q)/(p-g)),_=P-(P-O)*R,A=T-(T-L)*R,S=E-(E-F)*R):(b=v-(v-y)*(R=q>m?1:g===m?0:(g-q)/(g-m)),_=O-(O-I)*R,A=L-(L-M)*R,S=F-(F-j)*R),w=d-(d-y)*(R=q<p?0:q>m?1:(p-q)/(p-m)),k=P-(P-I)*R,x=T-(T-M)*R,C=E-(E-j)*R
for(var U=Math.round(Math.min(b,w)),W=Math.round(Math.max(b,w)),B=f*q+4*U,G=U;G<=W;G++)R=(R=(b-G)/(b-w))<0?0:R>1?1:R,h[B++]=_-(_-k)*R|0,h[B++]=A-(A-x)*R|0,h[B++]=S-(S-C)*R|0,h[B++]=255}}function t(t,r,n){var i,a,o=r.coords,s=r.colors
switch(r.type){case"lattice":var u=r.verticesPerRow,l=Math.floor(o.length/u)-1,c=u-1
for(i=0;i<l;i++)for(var h=i*u,f=0;f<c;f++,h++)e(t,n,o[h],o[h+1],o[h+u],s[h],s[h+1],s[h+u]),e(t,n,o[h+u+1],o[h+1],o[h+u],s[h+u+1],s[h+1],s[h+u])
break
case"triangles":for(i=0,a=o.length;i<a;i+=3)e(t,n,o[i],o[i+1],o[i+2],s[i],s[i+1],s[i+2])
break
default:throw new Error("illegal figure")}}return function(e,r,n,i,a,o,s,u){var l,c,h,f,d=Math.floor(e[0]),p=Math.floor(e[1]),v=Math.ceil(e[2])-d,g=Math.ceil(e[3])-p,y=Math.min(Math.ceil(Math.abs(v*r[0]*1.1)),3e3),m=Math.min(Math.ceil(Math.abs(g*r[1]*1.1)),3e3),b=v/y,_=g/m,A={coords:n,colors:i,offsetX:-d,offsetY:-p,scaleX:1/b,scaleY:1/_},S=y+4,w=m+4
if(u.isEnabled)l=u.drawFigures({width:y,height:m,backgroundColor:o,figures:a,context:A}),(c=s.getCanvas("mesh",S,w,!1)).context.drawImage(l,2,2),l=c.canvas
else{var k=(c=s.getCanvas("mesh",S,w,!1)).context,x=k.createImageData(y,m)
if(o){var C=x.data
for(h=0,f=C.length;h<f;h+=4)C[h]=o[0],C[h+1]=o[1],C[h+2]=o[2],C[h+3]=255}for(h=0;h<a.length;h++)t(x,a[h],A)
k.putImageData(x,2,2),l=c.canvas}return{canvas:l,offsetX:d-2*b,offsetY:p-2*_,scaleX:b,scaleY:_}}}()
i.Mesh={fromIR:function(e){var t=e[2],r=e[3],i=e[4],s=e[5],u=e[6],l=e[7],c=e[8]
return{type:"Pattern",getPattern:function(e,h,f){var d
if(a(e,l),f)d=n.Util.singularValueDecompose2dScale(e.mozCurrentTransform)
else if(d=n.Util.singularValueDecompose2dScale(h.baseTransform),u){var p=n.Util.singularValueDecompose2dScale(u)
d=[d[0]*p[0],d[1]*p[1]]}var v=o(s,d,t,r,i,f?null:c,h.cachedCanvases,h.webGLContext)
return f||(e.setTransform.apply(e,h.baseTransform),u&&e.transform.apply(e,u)),e.translate(v.offsetX,v.offsetY),e.scale(v.scaleX,v.scaleY),e.createPattern(v.canvas,"no-repeat")}}}},i.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}}
var s=function(){var e=1,t=2
function r(e,t,r,n,i){this.operatorList=e[2],this.matrix=e[3]||[1,0,0,1,0,0],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.color=t,this.canvasGraphicsFactory=n,this.baseTransform=i,this.type="Pattern",this.ctx=r}return r.prototype={createPatternCanvas:function(e){var t=this.operatorList,r=this.bbox,i=this.xstep,a=this.ystep,o=this.paintType,s=this.tilingType,u=this.color,l=this.canvasGraphicsFactory;(0,n.info)("TilingType: "+s)
var c=r[0],h=r[1],f=r[2],d=r[3],p=n.Util.singularValueDecompose2dScale(this.matrix),v=n.Util.singularValueDecompose2dScale(this.baseTransform),g=[p[0]*v[0],p[1]*v[1]],y=this.getSizeAndScale(i,this.ctx.canvas.width,g[0]),m=this.getSizeAndScale(a,this.ctx.canvas.height,g[1]),b=e.cachedCanvases.getCanvas("pattern",y.size,m.size,!0),_=b.context,A=l.createCanvasGraphics(_)
return A.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(A,o,u),A.transform(y.scale,0,0,m.scale,0,0),A.transform(1,0,0,1,-c,-h),this.clipBbox(A,r,c,h,f,d),A.executeOperatorList(t),this.ctx.transform(1,0,0,1,c,h),this.ctx.scale(1/y.scale,1/m.scale),b.canvas},getSizeAndScale:function(e,t,r){e=Math.abs(e)
var n=Math.max(3e3,t),i=Math.ceil(e*r)
return i>=n?i=n:r=i/e,{scale:r,size:i}},clipBbox:function(e,t,r,n,i,a){if(Array.isArray(t)&&4===t.length){var o=i-r,s=a-n
e.ctx.rect(r,n,o,s),e.clip(),e.endPath()}},setFillAndStrokeStyleToContext:function(r,i,a){var o=r.ctx,s=r.current
switch(i){case e:var u=this.ctx
o.fillStyle=u.fillStyle,o.strokeStyle=u.strokeStyle,s.fillColor=u.fillStyle,s.strokeColor=u.strokeStyle
break
case t:var l=n.Util.makeCssRgb(a[0],a[1],a[2])
o.fillStyle=l,o.strokeStyle=l,s.fillColor=l,s.strokeColor=l
break
default:throw new n.FormatError("Unsupported paint type: ".concat(i))}},getPattern:function(e,t){(e=this.ctx).setTransform.apply(e,this.baseTransform),e.transform.apply(e,this.matrix)
var r=this.createPatternCanvas(t)
return e.createPattern(r,"repeat")}},r}()
t.TilingPattern=s},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalWorkerOptions=void 0
var n=Object.create(null)
t.GlobalWorkerOptions=n,n.workerPort=void 0===n.workerPort?null:n.workerPort,n.workerSrc=void 0===n.workerSrc?"":n.workerSrc},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=void 0
var n,i=(n=r(185))&&n.__esModule?n:{default:n},a=r(1)
function o(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=1,c=2,h=1,f=2,d=3,p=4,v=5,g=6,y=7,m=8
function b(e){if("object"!==u(e)||null===e)return e
switch(e.name){case"AbortException":return new a.AbortException(e.message)
case"MissingPDFException":return new a.MissingPDFException(e.message)
case"UnexpectedResponseException":return new a.UnexpectedResponseException(e.message,e.status)
case"UnknownErrorException":return new a.UnknownErrorException(e.message,e.details)
default:return new a.UnknownErrorException(e.message,e.toString())}}var _=function(){function e(t,r,n){var i=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.sourceName=t,this.targetName=r,this.comObj=n,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null),this.callbackCapabilities=Object.create(null),this.actionHandler=Object.create(null),this._onComObjOnMessage=function(e){var t=e.data
if(t.targetName===i.sourceName)if(t.stream)i._processStreamMessage(t)
else if(t.callback){var r=t.callbackId,a=i.callbackCapabilities[r]
if(!a)throw new Error("Cannot resolve callback ".concat(r))
if(delete i.callbackCapabilities[r],t.callback===l)a.resolve(t.data)
else{if(t.callback!==c)throw new Error("Unexpected callback case")
a.reject(b(t.reason))}}else{var o=i.actionHandler[t.action]
if(!o)throw new Error("Unknown action from worker: ".concat(t.action))
if(t.callbackId){var s=i.sourceName,u=t.sourceName
new Promise((function(e){e(o(t.data))})).then((function(e){n.postMessage({sourceName:s,targetName:u,callback:l,callbackId:t.callbackId,data:e})}),(function(e){n.postMessage({sourceName:s,targetName:u,callback:c,callbackId:t.callbackId,reason:b(e)})}))}else t.streamId?i._createStreamSink(t):o(t.data)}},n.addEventListener("message",this._onComObjOnMessage)}var t,r,n,u,_
return t=e,(r=[{key:"on",value:function(e,t){var r=this.actionHandler
if(r[e])throw new Error('There is already an actionName called "'.concat(e,'"'))
r[e]=t}},{key:"send",value:function(e,t,r){this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},r)}},{key:"sendWithPromise",value:function(e,t,r){var n=this.callbackId++,i=(0,a.createPromiseCapability)()
this.callbackCapabilities[n]=i
try{this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:n,data:t},r)}catch(o){i.reject(o)}return i.promise}},{key:"sendWithStream",value:function(e,t,r,n){var i=this,o=this.streamId++,s=this.sourceName,u=this.targetName,l=this.comObj
return new ReadableStream({start:function(r){var l=(0,a.createPromiseCapability)()
return i.streamControllers[o]={controller:r,startCall:l,pullCall:null,cancelCall:null,isClosed:!1},i._postMessage({sourceName:s,targetName:u,action:e,streamId:o,data:t,desiredSize:r.desiredSize},n),l.promise},pull:function(e){var t=(0,a.createPromiseCapability)()
return i.streamControllers[o].pullCall=t,l.postMessage({sourceName:s,targetName:u,stream:g,streamId:o,desiredSize:e.desiredSize}),t.promise},cancel:function(e){(0,a.assert)(e instanceof Error,"cancel must have a valid reason")
var t=(0,a.createPromiseCapability)()
return i.streamControllers[o].cancelCall=t,i.streamControllers[o].isClosed=!0,l.postMessage({sourceName:s,targetName:u,stream:h,streamId:o,reason:b(e)}),t.promise}},r)}},{key:"_createStreamSink",value:function(e){var t=this,r=this.actionHandler[e.action],n=e.streamId,i=this.sourceName,o=e.sourceName,s=this.comObj,u={enqueue:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2?arguments[2]:void 0
if(!this.isCancelled){var u=this.desiredSize
this.desiredSize-=r,u>0&&this.desiredSize<=0&&(this.sinkCapability=(0,a.createPromiseCapability)(),this.ready=this.sinkCapability.promise),t._postMessage({sourceName:i,targetName:o,stream:p,streamId:n,chunk:e},s)}},close:function(){this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:i,targetName:o,stream:d,streamId:n}),delete t.streamSinks[n])},error:function(e){(0,a.assert)(e instanceof Error,"error must have a valid reason"),this.isCancelled||(this.isCancelled=!0,s.postMessage({sourceName:i,targetName:o,stream:v,streamId:n,reason:b(e)}))},sinkCapability:(0,a.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:e.desiredSize,ready:null}
u.sinkCapability.resolve(),u.ready=u.sinkCapability.promise,this.streamSinks[n]=u,new Promise((function(t){t(r(e.data,u))})).then((function(){s.postMessage({sourceName:i,targetName:o,stream:m,streamId:n,success:!0})}),(function(e){s.postMessage({sourceName:i,targetName:o,stream:m,streamId:n,reason:b(e)})}))}},{key:"_processStreamMessage",value:function(e){var t=e.streamId,r=this.sourceName,n=e.sourceName,i=this.comObj
switch(e.stream){case m:e.success?this.streamControllers[t].startCall.resolve():this.streamControllers[t].startCall.reject(b(e.reason))
break
case y:e.success?this.streamControllers[t].pullCall.resolve():this.streamControllers[t].pullCall.reject(b(e.reason))
break
case g:if(!this.streamSinks[t]){i.postMessage({sourceName:r,targetName:n,stream:y,streamId:t,success:!0})
break}this.streamSinks[t].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[t].sinkCapability.resolve(),this.streamSinks[t].desiredSize=e.desiredSize
var o=this.streamSinks[e.streamId].onPull
new Promise((function(e){e(o&&o())})).then((function(){i.postMessage({sourceName:r,targetName:n,stream:y,streamId:t,success:!0})}),(function(e){i.postMessage({sourceName:r,targetName:n,stream:y,streamId:t,reason:b(e)})}))
break
case p:if((0,a.assert)(this.streamControllers[t],"enqueue should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].controller.enqueue(e.chunk)
break
case d:if((0,a.assert)(this.streamControllers[t],"close should have stream controller"),this.streamControllers[t].isClosed)break
this.streamControllers[t].isClosed=!0,this.streamControllers[t].controller.close(),this._deleteStreamController(t)
break
case v:(0,a.assert)(this.streamControllers[t],"error should have stream controller"),this.streamControllers[t].controller.error(b(e.reason)),this._deleteStreamController(t)
break
case f:e.success?this.streamControllers[t].cancelCall.resolve():this.streamControllers[t].cancelCall.reject(b(e.reason)),this._deleteStreamController(t)
break
case h:if(!this.streamSinks[t])break
var s=this.streamSinks[e.streamId].onCancel
new Promise((function(t){t(s&&s(b(e.reason)))})).then((function(){i.postMessage({sourceName:r,targetName:n,stream:f,streamId:t,success:!0})}),(function(e){i.postMessage({sourceName:r,targetName:n,stream:f,streamId:t,reason:b(e)})})),this.streamSinks[t].sinkCapability.reject(b(e.reason)),this.streamSinks[t].isCancelled=!0,delete this.streamSinks[t]
break
default:throw new Error("Unexpected stream case")}}},{key:"_deleteStreamController",value:(u=i.default.mark((function e(t){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.streamControllers[t].startCall,this.streamControllers[t].pullCall,this.streamControllers[t].cancelCall].map((function(e){return e&&e.promise.catch((function(){}))})))
case 2:delete this.streamControllers[t]
case 3:case"end":return e.stop()}}),e,this)})),_=function(){var e=this,t=arguments
return new Promise((function(r,n){var i=u.apply(e,t)
function a(e){o(i,r,n,a,s,"next",e)}function s(e){o(i,r,n,a,s,"throw",e)}a(void 0)}))},function(e){return _.apply(this,arguments)})},{key:"_postMessage",value:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)}},{key:"destroy",value:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}])&&s(t.prototype,r),n&&s(t,n),e}()
t.MessageHandler=_},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0
var n=r(1),i=r(196)
function a(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),(0,n.assert)("string"==typeof t,"Metadata: input is not a string"),t=this._repair(t)
var r=(new i.SimpleXMLParser).parseFromString(t)
this._metadata=Object.create(null),r&&this._parse(r)}var t,r,o
return t=e,(r=[{key:"_repair",value:function(e){return e.replace(/^([^<]+)/,"").replace(/>\\376\\377([^<]+)/g,(function(e,t){for(var r=t.replace(/\\([0-3])([0-7])([0-7])/g,(function(e,t,r,n){return String.fromCharCode(64*t+8*r+1*n)})).replace(/&(amp|apos|gt|lt|quot);/g,(function(e,t){switch(t){case"amp":return"&"
case"apos":return"'"
case"gt":return">"
case"lt":return"<"
case"quot":return'"'}throw new Error("_repair: ".concat(t," isn't defined."))})),n="",i=0,a=r.length;i<a;i+=2){var o=256*r.charCodeAt(i)+r.charCodeAt(i+1)
n+=o>=32&&o<127&&60!==o&&62!==o&&38!==o?String.fromCharCode(o):"&#x"+(65536+o).toString(16).substring(1)+";"}return">"+n}))}},{key:"_parse",value:function(e){var t=e.documentElement
if("rdf:rdf"!==t.nodeName.toLowerCase())for(t=t.firstChild;t&&"rdf:rdf"!==t.nodeName.toLowerCase();)t=t.nextSibling
var r=t?t.nodeName.toLowerCase():null
if(t&&"rdf:rdf"===r&&t.hasChildNodes())for(var n=t.childNodes,i=0,a=n.length;i<a;i++){var o=n[i]
if("rdf:description"===o.nodeName.toLowerCase())for(var s=0,u=o.childNodes.length;s<u;s++)if("#text"!==o.childNodes[s].nodeName.toLowerCase()){var l=o.childNodes[s],c=l.nodeName.toLowerCase()
this._metadata[c]=l.textContent.trim()}}}},{key:"get",value:function(e){var t=this._metadata[e]
return void 0!==t?t:null}},{key:"getAll",value:function(){return this._metadata}},{key:"has",value:function(e){return void 0!==this._metadata[e]}}])&&a(t.prototype,r),o&&a(t,o),e}()
t.Metadata=o},function(e,t,r){"use strict"
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return
var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t)
if(n){var i=Object.getOwnPropertyDescriptor(n,t)
return i.get?i.get.call(r):i.value}})(e,t,r||e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleXMLParser=void 0
var f=0,d=-2,p=-3,v=-4,g=-5,y=-6,m=-9
function b(e,t){var r=e[t]
return" "===r||"\n"===r||"\r"===r||"\t"===r}var _=function(){function e(){l(this,e)}return h(e,[{key:"_resolveEntities",value:function(e){var t=this
return e.replace(/&([^;]+);/g,(function(e,r){if("#x"===r.substring(0,2))return String.fromCharCode(parseInt(r.substring(2),16))
if("#"===r.substring(0,1))return String.fromCharCode(parseInt(r.substring(1),10))
switch(r){case"lt":return"<"
case"gt":return">"
case"amp":return"&"
case"quot":return'"'}return t.onResolveEntity(r)}))}},{key:"_parseContent",value:function(e,t){var r,n=t,i=[]
function a(){for(;n<e.length&&b(e,n);)++n}for(;n<e.length&&!b(e,n)&&">"!==e[n]&&"/"!==e[n];)++n
for(r=e.substring(t,n),a();n<e.length&&">"!==e[n]&&"/"!==e[n]&&"?"!==e[n];){a()
for(var o,s="";n<e.length&&!b(e,n)&&"="!==e[n];)s+=e[n],++n
if(a(),"="!==e[n])return null;++n,a()
var u=e[n]
if('"'!==u&&"'"!==u)return null
var l=e.indexOf(u,++n)
if(l<0)return null
o=e.substring(n,l),i.push({name:s,value:this._resolveEntities(o)}),n=l+1,a()}return{name:r,attributes:i,parsed:n-t}}},{key:"_parseProcessingInstruction",value:function(e,t){var r,n=t
for(;n<e.length&&!b(e,n)&&">"!==e[n]&&"/"!==e[n];)++n
r=e.substring(t,n),function(){for(;n<e.length&&b(e,n);)++n}()
for(var i=n;n<e.length&&("?"!==e[n]||">"!==e[n+1]);)++n
return{name:r,value:e.substring(i,n),parsed:n-t}}},{key:"parseXml",value:function(e){for(var t=0;t<e.length;){var r=t
if("<"===e[t]){var n=void 0
switch(e[++r]){case"/":if(++r,(n=e.indexOf(">",r))<0)return void this.onError(m)
this.onEndElement(e.substring(r,n)),r=n+1
break
case"?":++r
var i=this._parseProcessingInstruction(e,r)
if("?>"!==e.substring(r+i.parsed,r+i.parsed+2))return void this.onError(p)
this.onPi(i.name,i.value),r+=i.parsed+2
break
case"!":if("--"===e.substring(r+1,r+3)){if((n=e.indexOf("--\x3e",r+3))<0)return void this.onError(g)
this.onComment(e.substring(r+3,n)),r=n+3}else if("[CDATA["===e.substring(r+1,r+8)){if((n=e.indexOf("]]>",r+8))<0)return void this.onError(d)
this.onCdata(e.substring(r+8,n)),r=n+3}else{if("DOCTYPE"!==e.substring(r+1,r+8))return void this.onError(y)
var a=e.indexOf("[",r+8),o=!1
if((n=e.indexOf(">",r+8))<0)return void this.onError(v)
if(a>0&&n>a){if((n=e.indexOf("]>",r+8))<0)return void this.onError(v)
o=!0}var s=e.substring(r+8,n+(o?1:0))
this.onDoctype(s),r=n+(o?2:1)}break
default:var u=this._parseContent(e,r)
if(null===u)return void this.onError(y)
var l=!1
if("/>"===e.substring(r+u.parsed,r+u.parsed+2))l=!0
else if(">"!==e.substring(r+u.parsed,r+u.parsed+1))return void this.onError(m)
this.onBeginElement(u.name,u.attributes,l),r+=u.parsed+(l?2:1)}}else{for(;r<e.length&&"<"!==e[r];)r++
var c=e.substring(t,r)
this.onText(this._resolveEntities(c))}t=r}}},{key:"onResolveEntity",value:function(e){return"&".concat(e,";")}},{key:"onPi",value:function(e,t){}},{key:"onComment",value:function(e){}},{key:"onCdata",value:function(e){}},{key:"onDoctype",value:function(e){}},{key:"onText",value:function(e){}},{key:"onBeginElement",value:function(e,t,r){}},{key:"onEndElement",value:function(e){}},{key:"onError",value:function(e){}}]),e}(),A=function(){function e(t,r){l(this,e),this.nodeName=t,this.nodeValue=r,Object.defineProperty(this,"parentNode",{value:null,writable:!0})}return h(e,[{key:"hasChildNodes",value:function(){return this.childNodes&&this.childNodes.length>0}},{key:"firstChild",get:function(){return this.childNodes&&this.childNodes[0]}},{key:"nextSibling",get:function(){var e=this.parentNode.childNodes
if(e){var t=e.indexOf(this)
if(-1!==t)return e[t+1]}}},{key:"textContent",get:function(){return this.childNodes?this.childNodes.map((function(e){return e.textContent})).join(""):this.nodeValue||""}}]),e}(),S=function(e){function t(){var e
return l(this,t),(e=a(this,s(t).call(this)))._currentFragment=null,e._stack=null,e._errorCode=f,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),h(t,[{key:"parseFromString",value:function(e){if(this._currentFragment=[],this._stack=[],this._errorCode=f,this.parseXml(e),this._errorCode===f){var t=i(this._currentFragment,1)[0]
if(t)return{documentElement:t}}}},{key:"onResolveEntity",value:function(e){switch(e){case"apos":return"'"}return o(s(t.prototype),"onResolveEntity",this).call(this,e)}},{key:"onText",value:function(e){if(!function(e){for(var t=0,r=e.length;t<r;t++)if(!b(e,t))return!1
return!0}(e)){var t=new A("#text",e)
this._currentFragment.push(t)}}},{key:"onCdata",value:function(e){var t=new A("#text",e)
this._currentFragment.push(t)}},{key:"onBeginElement",value:function(e,t,r){var n=new A(e)
n.childNodes=[],this._currentFragment.push(n),r||(this._stack.push(this._currentFragment),this._currentFragment=n.childNodes)}},{key:"onEndElement",value:function(e){this._currentFragment=this._stack.pop()||[]
var t=this._currentFragment[this._currentFragment.length-1]
if(t)for(var r=0,n=t.childNodes.length;r<n;r++)t.childNodes[r].parentNode=t}},{key:"onError",value:function(e){this._errorCode=e}}]),t}(_)
t.SimpleXMLParser=S},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0
var n,i=(n=r(185))&&n.__esModule?n:{default:n},a=r(1)
function o(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function s(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function s(e){o(a,n,i,s,u,"next",e)}function u(e){o(a,n,i,s,u,"throw",e)}s(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var h=function(){function e(t,r){var n=this
u(this,e),(0,a.assert)(r),this._queuedChunks=[],this._progressiveDone=t.progressiveDone||!1
var i=t.initialData
if(i&&i.length>0){var o=new Uint8Array(i).buffer
this._queuedChunks.push(o)}this._pdfDataRangeTransport=r,this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._contentLength=t.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener((function(e,t){n._onReceiveData({begin:e,chunk:t})})),this._pdfDataRangeTransport.addProgressListener((function(e,t){n._onProgress({loaded:e,total:t})})),this._pdfDataRangeTransport.addProgressiveReadListener((function(e){n._onReceiveData({chunk:e})})),this._pdfDataRangeTransport.addProgressiveDoneListener((function(){n._onProgressiveDone()})),this._pdfDataRangeTransport.transportReady()}return c(e,[{key:"_onReceiveData",value:function(e){var t=new Uint8Array(e.chunk).buffer
if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t)
else{var r=this._rangeReaders.some((function(r){return r._begin===e.begin&&(r._enqueue(t),!0)}));(0,a.assert)(r)}}},{key:"_onProgress",value:function(e){if(void 0===e.total){var t=this._rangeReaders[0]
t&&t.onProgress&&t.onProgress({loaded:e.loaded})}else{var r=this._fullRequestReader
r&&r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}},{key:"_onProgressiveDone",value:function(){this._fullRequestReader&&this._fullRequestReader.progressiveDone(),this._progressiveDone=!0}},{key:"_removeRangeReader",value:function(e){var t=this._rangeReaders.indexOf(e)
t>=0&&this._rangeReaders.splice(t,1)}},{key:"getFullReader",value:function(){(0,a.assert)(!this._fullRequestReader)
var e=this._queuedChunks
return this._queuedChunks=null,new f(this,e,this._progressiveDone)}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new d(this,e,t)
return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeReaders.slice(0).forEach((function(t){t.cancel(e)})),this._pdfDataRangeTransport.abort()}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}()
t.PDFDataTransportStream=h
var f=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
u(this,e),this._stream=t,this._done=n||!1,this._filename=null,this._queuedChunks=r||[],this._loaded=0
var i=!0,a=!1,o=void 0
try{for(var s,l=this._queuedChunks[Symbol.iterator]();!(i=(s=l.next()).done);i=!0){var c=s.value
this._loaded+=c.byteLength}}catch(h){a=!0,o=h}finally{try{i||null==l.return||l.return()}finally{if(a)throw o}}this._requests=[],this._headersReady=Promise.resolve(),t._fullRequestReader=this,this.onProgress=null}var t
return c(e,[{key:"_enqueue",value:function(e){if(!this._done){if(this._requests.length>0)this._requests.shift().resolve({value:e,done:!1})
else this._queuedChunks.push(e)
this._loaded+=e.byteLength}}},{key:"read",value:(t=s(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this._queuedChunks.length>0)){e.next=3
break}return t=this._queuedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 3:if(!this._done){e.next=5
break}return e.abrupt("return",{value:void 0,done:!0})
case 5:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[]}},{key:"progressiveDone",value:function(){this._done||(this._done=!0)}},{key:"headersReady",get:function(){return this._headersReady}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._stream._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._stream._isStreamingSupported}},{key:"contentLength",get:function(){return this._stream._contentLength}}]),e}(),d=function(){function e(t,r,n){u(this,e),this._stream=t,this._begin=r,this._end=n,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}var t
return c(e,[{key:"_enqueue",value:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e
else this._requests.shift().resolve({value:e,done:!1}),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[]
this._done=!0,this._stream._removeRangeReader(this)}}},{key:"read",value:(t=s(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._queuedChunk){e.next=4
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 4:if(!this._done){e.next=6
break}return e.abrupt("return",{value:void 0,done:!0})
case 6:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._stream._removeRangeReader(this)}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLContext=void 0
var n=r(1)
function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var r=t.enable,n=void 0!==r&&r;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._enabled=!0===n}var t,r,a
return t=e,(r=[{key:"composeSMask",value:function(e){var t=e.layer,r=e.mask,n=e.properties
return o.composeSMask(t,r,n)}},{key:"drawFigures",value:function(e){var t=e.width,r=e.height,n=e.backgroundColor,i=e.figures,a=e.context
return o.drawFigures(t,r,n,i,a)}},{key:"clear",value:function(){o.cleanup()}},{key:"isEnabled",get:function(){var e=this._enabled
return e&&(e=o.tryInitGL()),(0,n.shadow)(this,"isEnabled",e)}}])&&i(t.prototype,r),a&&i(t,a),e}()
t.WebGLContext=a
var o=function(){function e(e,t,r){var n=e.createShader(r)
if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var i=e.getShaderInfoLog(n)
throw new Error("Error during shader compilation: "+i)}return n}function t(t,r){return e(t,r,t.VERTEX_SHADER)}function r(t,r){return e(t,r,t.FRAGMENT_SHADER)}function n(e,t){for(var r=e.createProgram(),n=0,i=t.length;n<i;++n)e.attachShader(r,t[n])
if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){var a=e.getProgramInfoLog(r)
throw new Error("Error during program linking: "+a)}return r}function i(e,t,r){e.activeTexture(r)
var n=e.createTexture()
return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n}var a,o
function s(){a||(o=document.createElement("canvas"),a=o.getContext("webgl",{premultipliedalpha:!1}))}var u=null
var l=null
return{tryInitGL:function(){try{return s(),!!a}catch(e){}return!1},composeSMask:function(e,l,c){var h=e.width,f=e.height
u||function(){var e,i
s(),e=o,o=null,i=a,a=null
var l=n(i,[t(i,"  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             "),r(i,"  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ")])
i.useProgram(l)
var c={}
c.gl=i,c.canvas=e,c.resolutionLocation=i.getUniformLocation(l,"u_resolution"),c.positionLocation=i.getAttribLocation(l,"a_position"),c.backdropLocation=i.getUniformLocation(l,"u_backdrop"),c.subtypeLocation=i.getUniformLocation(l,"u_subtype")
var h=i.getAttribLocation(l,"a_texCoord"),f=i.getUniformLocation(l,"u_image"),d=i.getUniformLocation(l,"u_mask"),p=i.createBuffer()
i.bindBuffer(i.ARRAY_BUFFER,p),i.bufferData(i.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(h),i.vertexAttribPointer(h,2,i.FLOAT,!1,0,0),i.uniform1i(f,0),i.uniform1i(d,1),u=c}()
var d=u,p=d.canvas,v=d.gl
p.width=h,p.height=f,v.viewport(0,0,v.drawingBufferWidth,v.drawingBufferHeight),v.uniform2f(d.resolutionLocation,h,f),c.backdrop?v.uniform4f(d.resolutionLocation,c.backdrop[0],c.backdrop[1],c.backdrop[2],1):v.uniform4f(d.resolutionLocation,0,0,0,0),v.uniform1i(d.subtypeLocation,"Luminosity"===c.subtype?1:0)
var g=i(v,e,v.TEXTURE0),y=i(v,l,v.TEXTURE1),m=v.createBuffer()
return v.bindBuffer(v.ARRAY_BUFFER,m),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,0,h,0,0,f,0,f,h,0,h,f]),v.STATIC_DRAW),v.enableVertexAttribArray(d.positionLocation),v.vertexAttribPointer(d.positionLocation,2,v.FLOAT,!1,0,0),v.clearColor(0,0,0,0),v.enable(v.BLEND),v.blendFunc(v.ONE,v.ONE_MINUS_SRC_ALPHA),v.clear(v.COLOR_BUFFER_BIT),v.drawArrays(v.TRIANGLES,0,6),v.flush(),v.deleteTexture(g),v.deleteTexture(y),v.deleteBuffer(m),p},drawFigures:function(e,i,u,c,h){l||function(){var e,i
s(),e=o,o=null,i=a,a=null
var u=n(i,[t(i,"  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             "),r(i,"  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ")])
i.useProgram(u)
var c={}
c.gl=i,c.canvas=e,c.resolutionLocation=i.getUniformLocation(u,"u_resolution"),c.scaleLocation=i.getUniformLocation(u,"u_scale"),c.offsetLocation=i.getUniformLocation(u,"u_offset"),c.positionLocation=i.getAttribLocation(u,"a_position"),c.colorLocation=i.getAttribLocation(u,"a_color"),l=c}()
var f=l,d=f.canvas,p=f.gl
d.width=e,d.height=i,p.viewport(0,0,p.drawingBufferWidth,p.drawingBufferHeight),p.uniform2f(f.resolutionLocation,e,i)
var v,g,y,m=0
for(v=0,g=c.length;v<g;v++)switch(c[v].type){case"lattice":m+=((y=c[v].coords.length/c[v].verticesPerRow|0)-1)*(c[v].verticesPerRow-1)*6
break
case"triangles":m+=c[v].coords.length}var b=new Float32Array(2*m),_=new Uint8Array(3*m),A=h.coords,S=h.colors,w=0,k=0
for(v=0,g=c.length;v<g;v++){var x=c[v],C=x.coords,R=x.colors
switch(x.type){case"lattice":var P=x.verticesPerRow
y=C.length/P|0
for(var T=1;T<y;T++)for(var E=T*P+1,O=1;O<P;O++,E++){b[w]=A[C[E-P-1]],b[w+1]=A[C[E-P-1]+1],b[w+2]=A[C[E-P]],b[w+3]=A[C[E-P]+1],b[w+4]=A[C[E-1]],b[w+5]=A[C[E-1]+1],_[k]=S[R[E-P-1]],_[k+1]=S[R[E-P-1]+1],_[k+2]=S[R[E-P-1]+2],_[k+3]=S[R[E-P]],_[k+4]=S[R[E-P]+1],_[k+5]=S[R[E-P]+2],_[k+6]=S[R[E-1]],_[k+7]=S[R[E-1]+1],_[k+8]=S[R[E-1]+2],b[w+6]=b[w+2],b[w+7]=b[w+3],b[w+8]=b[w+4],b[w+9]=b[w+5],b[w+10]=A[C[E]],b[w+11]=A[C[E]+1],_[k+9]=_[k+3],_[k+10]=_[k+4],_[k+11]=_[k+5],_[k+12]=_[k+6],_[k+13]=_[k+7],_[k+14]=_[k+8],_[k+15]=S[R[E]],_[k+16]=S[R[E]+1],_[k+17]=S[R[E]+2]
w+=12,k+=18}break
case"triangles":for(var L=0,F=C.length;L<F;L++)b[w]=A[C[L]],b[w+1]=A[C[L]+1],_[k]=S[R[L]],_[k+1]=S[R[L]+1],_[k+2]=S[R[L]+2],w+=2,k+=3}}u?p.clearColor(u[0]/255,u[1]/255,u[2]/255,1):p.clearColor(0,0,0,0),p.clear(p.COLOR_BUFFER_BIT)
var I=p.createBuffer()
p.bindBuffer(p.ARRAY_BUFFER,I),p.bufferData(p.ARRAY_BUFFER,b,p.STATIC_DRAW),p.enableVertexAttribArray(f.positionLocation),p.vertexAttribPointer(f.positionLocation,2,p.FLOAT,!1,0,0)
var M=p.createBuffer()
return p.bindBuffer(p.ARRAY_BUFFER,M),p.bufferData(p.ARRAY_BUFFER,_,p.STATIC_DRAW),p.enableVertexAttribArray(f.colorLocation),p.vertexAttribPointer(f.colorLocation,3,p.UNSIGNED_BYTE,!1,0,0),p.uniform2f(f.scaleLocation,h.scaleX,h.scaleY),p.uniform2f(f.offsetLocation,h.offsetX,h.offsetY),p.drawArrays(p.TRIANGLES,0,m),p.flush(),p.deleteBuffer(I),p.deleteBuffer(M),d},cleanup:function(){u&&u.canvas&&(u.canvas.width=0,u.canvas.height=0),l&&l.canvas&&(l.canvas.width=0,l.canvas.height=0),u=null,l=null}}}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.renderTextLayer=void 0
var n=r(1),i=function(){var e=/\S/
function t(t,r,i){var a,o=document.createElement("span"),s={angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1}
if(t._textDivs.push(o),a=r.str,!e.test(a))return s.isWhitespace=!0,void t._textDivProperties.set(o,s)
var u=n.Util.transform(t._viewport.transform,r.transform),l=Math.atan2(u[1],u[0]),c=i[r.fontName]
c.vertical&&(l+=Math.PI/2)
var h,f,d=Math.sqrt(u[2]*u[2]+u[3]*u[3]),p=d
if(c.ascent?p=c.ascent*p:c.descent&&(p=(1+c.descent)*p),0===l?(h=u[4],f=u[5]-p):(h=u[4]+p*Math.sin(l),f=u[5]-p*Math.cos(l)),o.style.left="".concat(h,"px"),o.style.top="".concat(f,"px"),o.style.fontSize="".concat(d,"px"),o.style.fontFamily=c.fontFamily,o.textContent=r.str,t._fontInspectorEnabled&&(o.dataset.fontName=r.fontName),0!==l&&(s.angle=l*(180/Math.PI)),r.str.length>1&&(c.vertical?s.canvasWidth=r.height*t._viewport.scale:s.canvasWidth=r.width*t._viewport.scale),t._textDivProperties.set(o,s),t._textContentStream&&t._layoutText(o),t._enhanceTextSelection){var v=1,g=0
0!==l&&(v=Math.cos(l),g=Math.sin(l))
var y,m,b=(c.vertical?r.height:r.width)*t._viewport.scale,_=d
0!==l?(y=[v,g,-g,v,h,f],m=n.Util.getAxialAlignedBoundingBox([0,0,b,_],y)):m=[h,f,h+b,f+_],t._bounds.push({left:m[0],top:m[1],right:m[2],bottom:m[3],div:o,size:[b,_],m:y})}}function r(e){if(!e._canceled){var t=e._textDivs,r=e._capability,n=t.length
if(n>1e5)return e._renderingDone=!0,void r.resolve()
if(!e._textContentStream)for(var i=0;i<n;i++)e._layoutText(t[i])
e._renderingDone=!0,r.resolve()}}function i(e){for(var t=e._bounds,r=e._viewport,i=function(e,t,r){var n=r.map((function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}}))
a(e,n)
var i=new Array(r.length)
return n.forEach((function(e){var t=e.index
i[t]={left:e.x1New,top:0,right:e.x2New,bottom:0}})),r.map((function(t,r){var a=i[r],o=n[r]
o.x1=t.top,o.y1=e-a.right,o.x2=t.bottom,o.y2=e-a.left,o.index=r,o.x1New=void 0,o.x2New=void 0})),a(t,n),n.forEach((function(e){var t=e.index
i[t].top=e.x1New,i[t].bottom=e.x2New})),i}(r.width,r.height,t),o=0;o<i.length;o++){var s=t[o].div,u=e._textDivProperties.get(s)
if(0!==u.angle){var l=i[o],c=t[o],h=c.m,f=h[0],d=h[1],p=[[0,0],[0,c.size[1]],[c.size[0],0],c.size],v=new Float64Array(64)
p.forEach((function(e,t){var r=n.Util.applyTransform(e,h)
v[t+0]=f&&(l.left-r[0])/f,v[t+4]=d&&(l.top-r[1])/d,v[t+8]=f&&(l.right-r[0])/f,v[t+12]=d&&(l.bottom-r[1])/d,v[t+16]=d&&(l.left-r[0])/-d,v[t+20]=f&&(l.top-r[1])/f,v[t+24]=d&&(l.right-r[0])/-d,v[t+28]=f&&(l.bottom-r[1])/f,v[t+32]=f&&(l.left-r[0])/-f,v[t+36]=d&&(l.top-r[1])/-d,v[t+40]=f&&(l.right-r[0])/-f,v[t+44]=d&&(l.bottom-r[1])/-d,v[t+48]=d&&(l.left-r[0])/d,v[t+52]=f&&(l.top-r[1])/-f,v[t+56]=d&&(l.right-r[0])/d,v[t+60]=f&&(l.bottom-r[1])/-f}))
var g=function(e,t,r){for(var n=0,i=0;i<r;i++){var a=e[t++]
a>0&&(n=n?Math.min(a,n):a)}return n},y=1+Math.min(Math.abs(f),Math.abs(d))
u.paddingLeft=g(v,32,16)/y,u.paddingTop=g(v,48,16)/y,u.paddingRight=g(v,0,16)/y,u.paddingBottom=g(v,16,16)/y,e._textDivProperties.set(s,u)}else u.paddingLeft=t[o].left-i[o].left,u.paddingTop=t[o].top-i[o].top,u.paddingRight=i[o].right-t[o].right,u.paddingBottom=i[o].bottom-t[o].bottom,e._textDivProperties.set(s,u)}}function a(e,t){t.sort((function(e,t){return e.x1-t.x1||e.index-t.index}))
var r=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}]
t.forEach((function(e){for(var t=0;t<r.length&&r[t].end<=e.y1;)t++
for(var n,i,a=r.length-1;a>=0&&r[a].start>=e.y2;)a--
var o,s,u=-1/0
for(o=t;o<=a;o++){var l;(l=(i=(n=r[o]).boundary).x2>e.x1?i.index>e.index?i.x1New:e.x1:void 0===i.x2New?(i.x2+e.x1)/2:i.x2New)>u&&(u=l)}for(e.x1New=u,o=t;o<=a;o++)void 0===(i=(n=r[o]).boundary).x2New?i.x2>e.x1?i.index>e.index&&(i.x2New=i.x2):i.x2New=u:i.x2New>u&&(i.x2New=Math.max(u,i.x2))
var c=[],h=null
for(o=t;o<=a;o++){var f=(i=(n=r[o]).boundary).x2>e.x2?i:e
h===f?c[c.length-1].end=n.end:(c.push({start:n.start,end:n.end,boundary:f}),h=f)}for(r[t].start<e.y1&&(c[0].start=e.y1,c.unshift({start:r[t].start,end:e.y1,boundary:r[t].boundary})),e.y2<r[a].end&&(c[c.length-1].end=e.y2,c.push({start:e.y2,end:r[a].end,boundary:r[a].boundary})),o=t;o<=a;o++)if(void 0===(i=(n=r[o]).boundary).x2New){var d=!1
for(s=t-1;!d&&s>=0&&r[s].start>=i.y1;s--)d=r[s].boundary===i
for(s=a+1;!d&&s<r.length&&r[s].end<=i.y2;s++)d=r[s].boundary===i
for(s=0;!d&&s<c.length;s++)d=c[s].boundary===i
d||(i.x2New=u)}Array.prototype.splice.apply(r,[t,a-t+1].concat(c))})),r.forEach((function(t){var r=t.boundary
void 0===r.x2New&&(r.x2New=Math.max(e,r.x2))}))}function o(e){var t=this,r=e.textContent,i=e.textContentStream,a=e.container,o=e.viewport,s=e.textDivs,u=e.textContentItemsStr,l=e.enhanceTextSelection
this._textContent=r,this._textContentStream=i,this._container=a,this._viewport=o,this._textDivs=s||[],this._textContentItemsStr=u||[],this._enhanceTextSelection=!!l,this._fontInspectorEnabled=!(!globalThis.FontInspector||!globalThis.FontInspector.enabled),this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,n.createPromiseCapability)(),this._renderTimer=null,this._bounds=[],this._capability.promise.finally((function(){t._layoutTextCtx&&(t._layoutTextCtx.canvas.width=0,t._layoutTextCtx.canvas.height=0,t._layoutTextCtx=null)})).catch((function(){}))}return o.prototype={get promise(){return this._capability.promise},cancel:function(){this._canceled=!0,this._reader&&(this._reader.cancel(new n.AbortException("TextLayer task cancelled.")),this._reader=null),null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject(new Error("TextLayer task cancelled."))},_processItems:function(e,r){for(var n=0,i=e.length;n<i;n++)this._textContentItemsStr.push(e[n].str),t(this,e[n],r)},_layoutText:function(e){var t=this._textDivProperties.get(e)
if(!t.isWhitespace){var r=""
if(0!==t.canvasWidth){var n=e.style,i=n.fontSize,a=n.fontFamily
i===this._layoutTextLastFontSize&&a===this._layoutTextLastFontFamily||(this._layoutTextCtx.font="".concat(i," ").concat(a),this._layoutTextLastFontSize=i,this._layoutTextLastFontFamily=a)
var o=this._layoutTextCtx.measureText(e.textContent).width
o>0&&(t.scale=t.canvasWidth/o,r="scaleX(".concat(t.scale,")"))}0!==t.angle&&(r="rotate(".concat(t.angle,"deg) ").concat(r)),r.length>0&&(this._enhanceTextSelection&&(t.originalTransform=r),e.style.transform=r),this._textDivProperties.set(e,t),this._container.appendChild(e)}},_render:function(e){var t=this,i=(0,n.createPromiseCapability)(),a=Object.create(null),o=document.createElement("canvas")
if(o.mozOpaque=!0,this._layoutTextCtx=o.getContext("2d",{alpha:!1}),this._textContent){var s=this._textContent.items,u=this._textContent.styles
this._processItems(s,u),i.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.')
this._reader=this._textContentStream.getReader(),function e(){t._reader.read().then((function(r){var n=r.value
r.done?i.resolve():(Object.assign(a,n.styles),t._processItems(n.items,a),e())}),i.reject)}()}i.promise.then((function(){a=null,e?t._renderTimer=setTimeout((function(){r(t),t._renderTimer=null}),e):r(t)}),this._capability.reject)},expandTextDivs:function(e){if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(i(this),this._bounds=null)
for(var t=[],r=[],n=0,a=this._textDivs.length;n<a;n++){var o=this._textDivs[n],s=this._textDivProperties.get(o)
if(!s.isWhitespace)if(e){t.length=0,r.length=0,s.originalTransform&&t.push(s.originalTransform),s.paddingTop>0?(r.push("".concat(s.paddingTop,"px")),t.push("translateY(".concat(-s.paddingTop,"px)"))):r.push(0),s.paddingRight>0?r.push("".concat(s.paddingRight/s.scale,"px")):r.push(0),s.paddingBottom>0?r.push("".concat(s.paddingBottom,"px")):r.push(0),s.paddingLeft>0?(r.push("".concat(s.paddingLeft/s.scale,"px")),t.push("translateX(".concat(-s.paddingLeft/s.scale,"px)"))):r.push(0)
var u=r.join(" ")
"0 0 0 0"!==u&&(o.style.padding=u),t.length&&(o.style.transform=t.join(" "))}else o.style.padding=null,o.style.transform=s.originalTransform}}}},function(e){var t=new o({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection})
return t._render(e.timeout),t}}()
t.renderTextLayer=i},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0
var n=r(188),i=r(1)
function a(e,t,r){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t)
if(n){var i=Object.getOwnPropertyDescriptor(n,t)
return i.get?i.get.call(r):i.value}})(e,t,r||e)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var v=function(){function e(){f(this,e)}return p(e,null,[{key:"create",value:function(e){switch(e.data.annotationType){case i.AnnotationType.LINK:return new y(e)
case i.AnnotationType.TEXT:return new m(e)
case i.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new _(e)
case"Btn":return e.data.radioButton?new S(e):e.data.checkBox?new A(e):new w(e)
case"Ch":return new k(e)}return new b(e)
case i.AnnotationType.POPUP:return new x(e)
case i.AnnotationType.FREETEXT:return new R(e)
case i.AnnotationType.LINE:return new P(e)
case i.AnnotationType.SQUARE:return new T(e)
case i.AnnotationType.CIRCLE:return new E(e)
case i.AnnotationType.POLYLINE:return new O(e)
case i.AnnotationType.CARET:return new F(e)
case i.AnnotationType.INK:return new I(e)
case i.AnnotationType.POLYGON:return new L(e)
case i.AnnotationType.HIGHLIGHT:return new M(e)
case i.AnnotationType.UNDERLINE:return new j(e)
case i.AnnotationType.SQUIGGLY:return new N(e)
case i.AnnotationType.STRIKEOUT:return new D(e)
case i.AnnotationType.STAMP:return new q(e)
case i.AnnotationType.FILEATTACHMENT:return new U(e)
default:return new g(e)}}}]),e}(),g=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
f(this,e),this.isRenderable=r,this.data=t.data,this.layer=t.layer,this.page=t.page,this.viewport=t.viewport,this.linkService=t.linkService,this.downloadManager=t.downloadManager,this.imageResourcesPath=t.imageResourcesPath,this.renderInteractiveForms=t.renderInteractiveForms,this.svgFactory=t.svgFactory,r&&(this.container=this._createContainer(n))}return p(e,[{key:"_createContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.data,r=this.page,n=this.viewport,a=document.createElement("section"),o=t.rect[2]-t.rect[0],s=t.rect[3]-t.rect[1]
a.setAttribute("data-annotation-id",t.id)
var u=i.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]])
if(a.style.transform="matrix(".concat(n.transform.join(","),")"),a.style.transformOrigin="-".concat(u[0],"px -").concat(u[1],"px"),!e&&t.borderStyle.width>0){a.style.borderWidth="".concat(t.borderStyle.width,"px"),t.borderStyle.style!==i.AnnotationBorderStyleType.UNDERLINE&&(o-=2*t.borderStyle.width,s-=2*t.borderStyle.width)
var l=t.borderStyle.horizontalCornerRadius,c=t.borderStyle.verticalCornerRadius
if(l>0||c>0){var h="".concat(l,"px / ").concat(c,"px")
a.style.borderRadius=h}switch(t.borderStyle.style){case i.AnnotationBorderStyleType.SOLID:a.style.borderStyle="solid"
break
case i.AnnotationBorderStyleType.DASHED:a.style.borderStyle="dashed"
break
case i.AnnotationBorderStyleType.BEVELED:(0,i.warn)("Unimplemented border style: beveled")
break
case i.AnnotationBorderStyleType.INSET:(0,i.warn)("Unimplemented border style: inset")
break
case i.AnnotationBorderStyleType.UNDERLINE:a.style.borderBottomStyle="solid"}t.color?a.style.borderColor=i.Util.makeCssRgb(0|t.color[0],0|t.color[1],0|t.color[2]):a.style.borderWidth=0}return a.style.left="".concat(u[0],"px"),a.style.top="".concat(u[1],"px"),a.style.width="".concat(o,"px"),a.style.height="".concat(s,"px"),a}},{key:"_createPopup",value:function(e,t,r){t||((t=document.createElement("div")).style.height=e.style.height,t.style.width=e.style.width,e.appendChild(t))
var n=new C({container:e,trigger:t,color:r.color,title:r.title,modificationDate:r.modificationDate,contents:r.contents,hideWrapper:!0}).render()
n.style.left=e.style.width,e.appendChild(n)}},{key:"render",value:function(){(0,i.unreachable)("Abstract method `AnnotationElement.render` called")}}]),e}(),y=function(e){function t(e){f(this,t)
var r=!!(e.data.url||e.data.dest||e.data.action)
return s(this,l(t).call(this,e,r))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="linkAnnotation"
var e=this.data,t=this.linkService,r=document.createElement("a")
return e.url?(0,n.addLinkAttributes)(r,{url:e.url,target:e.newWindow?n.LinkTarget.BLANK:t.externalLinkTarget,rel:t.externalLinkRel,enabled:t.externalLinkEnabled}):e.action?this._bindNamedAction(r,e.action):this._bindLink(r,e.dest),this.container.appendChild(r),this.container}},{key:"_bindLink",value:function(e,t){var r=this
e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.navigateTo(t),!1},t&&(e.className="internalLink")}},{key:"_bindNamedAction",value:function(e,t){var r=this
e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}}]),t}(g),m=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="textAnnotation"
var e=document.createElement("img")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}}]),t}(g),b=function(e){function t(){return f(this,t),s(this,l(t).apply(this,arguments))}return c(t,e),p(t,[{key:"render",value:function(){return this.container}}]),t}(g),_=function(e){function t(e){f(this,t)
var r=e.renderInteractiveForms||!e.data.hasAppearance&&!!e.data.fieldValue
return s(this,l(t).call(this,e,r))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="textWidgetAnnotation"
var e=null
if(this.renderInteractiveForms){if(this.data.multiLine?(e=document.createElement("textarea")).textContent=this.data.fieldValue:((e=document.createElement("input")).type="text",e.setAttribute("value",this.data.fieldValue)),e.disabled=this.data.readOnly,null!==this.data.maxLen&&(e.maxLength=this.data.maxLen),this.data.comb){var t=(this.data.rect[2]-this.data.rect[0])/this.data.maxLen
e.classList.add("comb"),e.style.letterSpacing="calc(".concat(t,"px - 1ch)")}}else{(e=document.createElement("div")).textContent=this.data.fieldValue,e.style.verticalAlign="middle",e.style.display="table-cell"
var r=null
this.data.fontRefName&&this.page.commonObjs.has(this.data.fontRefName)&&(r=this.page.commonObjs.get(this.data.fontRefName)),this._setTextStyle(e,r)}return null!==this.data.textAlignment&&(e.style.textAlign=["left","center","right"][this.data.textAlignment]),this.container.appendChild(e),this.container}},{key:"_setTextStyle",value:function(e,t){var r=e.style
if(r.fontSize="".concat(this.data.fontSize,"px"),r.direction=this.data.fontDirection<0?"rtl":"ltr",t){r.fontWeight=t.black?t.bold?"900":"bold":t.bold?"bold":"normal",r.fontStyle=t.italic?"italic":"normal"
var n=t.loadedName?'"'.concat(t.loadedName,'", '):"",i=t.fallbackName||"Helvetica, sans-serif"
r.fontFamily=n+i}}}]),t}(b),A=function(e){function t(e){return f(this,t),s(this,l(t).call(this,e,e.renderInteractiveForms))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation checkBox"
var e=document.createElement("input")
return e.disabled=this.data.readOnly,e.type="checkbox",this.data.fieldValue&&"Off"!==this.data.fieldValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}]),t}(b),S=function(e){function t(e){return f(this,t),s(this,l(t).call(this,e,e.renderInteractiveForms))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation radioButton"
var e=document.createElement("input")
return e.disabled=this.data.readOnly,e.type="radio",e.name=this.data.fieldName,this.data.fieldValue===this.data.buttonValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}]),t}(b),w=function(e){function t(){return f(this,t),s(this,l(t).apply(this,arguments))}return c(t,e),p(t,[{key:"render",value:function(){var e=a(l(t.prototype),"render",this).call(this)
return e.className="buttonWidgetAnnotation pushButton",e}}]),t}(y),k=function(e){function t(e){return f(this,t),s(this,l(t).call(this,e,e.renderInteractiveForms))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="choiceWidgetAnnotation"
var e=document.createElement("select")
e.disabled=this.data.readOnly,this.data.combo||(e.size=this.data.options.length,this.data.multiSelect&&(e.multiple=!0))
var t=!0,r=!1,n=void 0
try{for(var i,a=this.data.options[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=document.createElement("option")
s.textContent=o.displayValue,s.value=o.exportValue,this.data.fieldValue.includes(o.displayValue)&&s.setAttribute("selected",!0),e.appendChild(s)}}catch(u){r=!0,n=u}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}return this.container.appendChild(e),this.container}}]),t}(b),x=function(e){function t(e){f(this,t)
var r=!(!e.data.title&&!e.data.contents)
return s(this,l(t).call(this,e,r))}return c(t,e),p(t,[{key:"render",value:function(){if(this.container.className="popupAnnotation",["Line","Square","Circle","PolyLine","Polygon","Ink"].includes(this.data.parentType))return this.container
var e='[data-annotation-id="'.concat(this.data.parentId,'"]'),t=this.layer.querySelector(e)
if(!t)return this.container
var r=new C({container:this.container,trigger:t,color:this.data.color,title:this.data.title,modificationDate:this.data.modificationDate,contents:this.data.contents}),n=parseFloat(t.style.left),i=parseFloat(t.style.width)
return this.container.style.transformOrigin="-".concat(n+i,"px -").concat(t.style.top),this.container.style.left="".concat(n+i,"px"),this.container.appendChild(r.render()),this.container}}]),t}(g),C=function(){function e(t){f(this,e),this.container=t.container,this.trigger=t.trigger,this.color=t.color,this.title=t.title,this.modificationDate=t.modificationDate,this.contents=t.contents,this.hideWrapper=t.hideWrapper||!1,this.pinned=!1}return p(e,[{key:"render",value:function(){var e=document.createElement("div")
e.className="popupWrapper",this.hideElement=this.hideWrapper?e:this.container,this.hideElement.setAttribute("hidden",!0)
var t=document.createElement("div")
t.className="popup"
var r=this.color
if(r){var a=.7*(255-r[0])+r[0],o=.7*(255-r[1])+r[1],s=.7*(255-r[2])+r[2]
t.style.backgroundColor=i.Util.makeCssRgb(0|a,0|o,0|s)}var u=document.createElement("h1")
u.textContent=this.title,t.appendChild(u)
var l=n.PDFDateString.toDateObject(this.modificationDate)
if(l){var c=document.createElement("span")
c.textContent="{{date}}, {{time}}",c.dataset.l10nId="annotation_date_string",c.dataset.l10nArgs=JSON.stringify({date:l.toLocaleDateString(),time:l.toLocaleTimeString()}),t.appendChild(c)}var h=this._formatContents(this.contents)
return t.appendChild(h),this.trigger.addEventListener("click",this._toggle.bind(this)),this.trigger.addEventListener("mouseover",this._show.bind(this,!1)),this.trigger.addEventListener("mouseout",this._hide.bind(this,!1)),t.addEventListener("click",this._hide.bind(this,!0)),e.appendChild(t),e}},{key:"_formatContents",value:function(e){for(var t=document.createElement("p"),r=e.split(/(?:\r\n?|\n)/),n=0,i=r.length;n<i;++n){var a=r[n]
t.appendChild(document.createTextNode(a)),n<i-1&&t.appendChild(document.createElement("br"))}return t}},{key:"_toggle",value:function(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
e&&(this.pinned=!0),this.hideElement.hasAttribute("hidden")&&(this.hideElement.removeAttribute("hidden"),this.container.style.zIndex+=1)}},{key:"_hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
e&&(this.pinned=!1),this.hideElement.hasAttribute("hidden")||this.pinned||(this.hideElement.setAttribute("hidden",!0),this.container.style.zIndex-=1)}}]),e}(),R=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){return this.container.className="freeTextAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),P=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="lineAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=this.svgFactory.createElement("svg:line")
return i.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),i.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),i.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),i.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),i.setAttribute("stroke-width",e.borderStyle.width||1),i.setAttribute("stroke","transparent"),n.appendChild(i),this.container.append(n),this._createPopup(this.container,i,e),this.container}}]),t}(g),T=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="squareAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:rect")
return a.setAttribute("x",i/2),a.setAttribute("y",i/2),a.setAttribute("width",t-i),a.setAttribute("height",r-i),a.setAttribute("stroke-width",i||1),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),t}(g),E=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="circleAnnotation"
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:ellipse")
return a.setAttribute("cx",t/2),a.setAttribute("cy",r/2),a.setAttribute("rx",t/2-i/2),a.setAttribute("ry",r/2-i/2),a.setAttribute("stroke-width",i||1),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),t}(g),O=function(e){function t(e){var r
f(this,t)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return(r=s(this,l(t).call(this,e,n,!0))).containerClassName="polylineAnnotation",r.svgElementName="svg:polyline",r}return c(t,e),p(t,[{key:"render",value:function(){this.container.className=this.containerClassName
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=[],a=!0,o=!1,s=void 0
try{for(var u,l=e.vertices[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var c=u.value,h=c.x-e.rect[0],f=e.rect[3]-c.y
i.push(h+","+f)}}catch(p){o=!0,s=p}finally{try{a||null==l.return||l.return()}finally{if(o)throw s}}i=i.join(" ")
var d=this.svgFactory.createElement(this.svgElementName)
return d.setAttribute("points",i),d.setAttribute("stroke-width",e.borderStyle.width||1),d.setAttribute("stroke","transparent"),d.setAttribute("fill","none"),n.appendChild(d),this.container.append(n),this._createPopup(this.container,d,e),this.container}}]),t}(g),L=function(e){function t(e){var r
return f(this,t),(r=s(this,l(t).call(this,e))).containerClassName="polygonAnnotation",r.svgElementName="svg:polygon",r}return c(t,e),t}(O),F=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){return this.container.className="caretAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),I=function(e){function t(e){var r
f(this,t)
var n=!!(e.data.hasPopup||e.data.title||e.data.contents)
return(r=s(this,l(t).call(this,e,n,!0))).containerClassName="inkAnnotation",r.svgElementName="svg:polyline",r}return c(t,e),p(t,[{key:"render",value:function(){this.container.className=this.containerClassName
var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=!0,a=!1,o=void 0
try{for(var s,u=e.inkLists[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=s.value,c=[],h=!0,f=!1,d=void 0
try{for(var p,v=l[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var g=p.value,y=g.x-e.rect[0],m=e.rect[3]-g.y
c.push("".concat(y,",").concat(m))}}catch(_){f=!0,d=_}finally{try{h||null==v.return||v.return()}finally{if(f)throw d}}c=c.join(" ")
var b=this.svgFactory.createElement(this.svgElementName)
b.setAttribute("points",c),b.setAttribute("stroke-width",e.borderStyle.width||1),b.setAttribute("stroke","transparent"),b.setAttribute("fill","none"),this._createPopup(this.container,b,e),n.appendChild(b)}}catch(_){a=!0,o=_}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return this.container.append(n),this.container}}]),t}(g),M=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){return this.container.className="highlightAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),j=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){return this.container.className="underlineAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),N=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){return this.container.className="squigglyAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),D=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){return this.container.className="strikeoutAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),q=function(e){function t(e){f(this,t)
var r=!!(e.data.hasPopup||e.data.title||e.data.contents)
return s(this,l(t).call(this,e,r,!0))}return c(t,e),p(t,[{key:"render",value:function(){return this.container.className="stampAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),U=function(e){function t(e){var r
f(this,t)
var a=(r=s(this,l(t).call(this,e,!0))).data.file,o=a.filename,c=a.content
return r.filename=(0,n.getFilenameFromUrl)(o),r.content=c,r.linkService.eventBus&&r.linkService.eventBus.dispatch("fileattachmentannotation",{source:u(r),id:(0,i.stringToPDFString)(o),filename:o,content:c}),r}return c(t,e),p(t,[{key:"render",value:function(){this.container.className="fileAttachmentAnnotation"
var e=document.createElement("div")
return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.addEventListener("dblclick",this._download.bind(this)),this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}},{key:"_download",value:function(){this.downloadManager?this.downloadManager.downloadData(this.content,this.filename,""):(0,i.warn)("Download cannot be started due to unavailable download manager")}}]),t}(g),W=function(){function e(){f(this,e)}return p(e,null,[{key:"render",value:function(e){var t=!0,r=!1,i=void 0
try{for(var a,o=e.annotations[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value
if(s){var u=v.create({data:s,layer:e.div,page:e.page,viewport:e.viewport,linkService:e.linkService,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||"",renderInteractiveForms:e.renderInteractiveForms||!1,svgFactory:new n.DOMSVGFactory})
u.isRenderable&&e.div.appendChild(u.render())}}}catch(l){r=!0,i=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}},{key:"update",value:function(e){var t=!0,r=!1,n=void 0
try{for(var i,a=e.annotations[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=e.div.querySelector('[data-annotation-id="'.concat(o.id,'"]'))
s&&(s.style.transform="matrix(".concat(e.viewport.transform.join(","),")"))}}catch(u){r=!0,n=u}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}e.div.removeAttribute("hidden")}}]),e}()
t.AnnotationLayer=W},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0
var n=r(1),i=r(188),a=r(48)
function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t]
return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return
var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var h=function(){throw new Error("Not implemented: SVGGraphics")}
t.SVGGraphics=h
var f=function(e){if(Number.isInteger(e))return e.toString()
var t=e.toFixed(10),r=t.length-1
if("0"!==t[r])return t
do{r--}while("0"===t[r])
return t.substring(0,"."===t[r]?r:r+1)},d=function(e){if(0===e[4]&&0===e[5]){if(0===e[1]&&0===e[2])return 1===e[0]&&1===e[3]?"":"scale(".concat(f(e[0])," ").concat(f(e[3]),")")
if(e[0]===e[3]&&e[1]===-e[2]){var t=180*Math.acos(e[0])/Math.PI
return"rotate(".concat(f(t),")")}}else if(1===e[0]&&0===e[1]&&0===e[2]&&1===e[3])return"translate(".concat(f(e[4])," ").concat(f(e[5]),")")
return"matrix(".concat(f(e[0])," ").concat(f(e[1])," ").concat(f(e[2])," ").concat(f(e[3])," ").concat(f(e[4])," ")+"".concat(f(e[5]),")")},p={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},v="http://www.w3.org/1999/xlink",g=["butt","round","square"],y=["miter","round","bevel"],m=function(){for(var e=new Uint8Array([137,80,78,71,13,10,26,10]),t=new Int32Array(256),r=0;r<256;r++){for(var i=r,o=0;o<8;o++)i=1&i?3988292384^i>>1&2147483647:i>>1&2147483647
t[r]=i}function s(e,r,n,i){var a=i,o=r.length
n[a]=o>>24&255,n[a+1]=o>>16&255,n[a+2]=o>>8&255,n[a+3]=255&o,n[a+=4]=255&e.charCodeAt(0),n[a+1]=255&e.charCodeAt(1),n[a+2]=255&e.charCodeAt(2),n[a+3]=255&e.charCodeAt(3),a+=4,n.set(r,a)
var s=function(e,r,n){for(var i=-1,a=r;a<n;a++){var o=255&(i^e[a])
i=i>>>8^t[o]}return-1^i}(n,i+4,a+=r.length)
n[a]=s>>24&255,n[a+1]=s>>16&255,n[a+2]=s>>8&255,n[a+3]=255&s}function u(e){var t=e.length,r=Math.ceil(t/65535),n=new Uint8Array(2+t+5*r+4),i=0
n[i++]=120,n[i++]=156
for(var a=0;t>65535;)n[i++]=0,n[i++]=255,n[i++]=255,n[i++]=0,n[i++]=0,n.set(e.subarray(a,a+65535),i),i+=65535,a+=65535,t-=65535
n[i++]=1,n[i++]=255&t,n[i++]=t>>8&255,n[i++]=255&~t,n[i++]=(65535&~t)>>8&255,n.set(e.subarray(a),i),i+=e.length-a
var o=function(e,t,r){for(var n=1,i=0,a=t;a<r;++a)i=(i+(n=(n+(255&e[a]))%65521))%65521
return i<<16|n}(e,0,e.length)
return n[i++]=o>>24&255,n[i++]=o>>16&255,n[i++]=o>>8&255,n[i++]=255&o,n}function l(t,r,i,o){var l,c,h,f=t.width,d=t.height,p=t.data
switch(r){case n.ImageKind.GRAYSCALE_1BPP:c=0,l=1,h=f+7>>3
break
case n.ImageKind.RGB_24BPP:c=2,l=8,h=3*f
break
case n.ImageKind.RGBA_32BPP:c=6,l=8,h=4*f
break
default:throw new Error("invalid format")}for(var v=new Uint8Array((1+h)*d),g=0,y=0,m=0;m<d;++m)v[g++]=0,v.set(p.subarray(y,y+h),g),y+=h,g+=h
if(r===n.ImageKind.GRAYSCALE_1BPP&&o){g=0
for(var b=0;b<d;b++){g++
for(var _=0;_<h;_++)v[g++]^=255}}var A=new Uint8Array([f>>24&255,f>>16&255,f>>8&255,255&f,d>>24&255,d>>16&255,d>>8&255,255&d,l,c,0,0,0]),S=function(e){if(!a.isNodeJS)return u(e)
try{var t
t=parseInt(process.versions.node)>=8?e:new Buffer(e)
var r=require("zlib").deflateSync(t,{level:9})
return r instanceof Uint8Array?r:new Uint8Array(r)}catch(i){(0,n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+i)}return u(e)}(v),w=e.length+36+A.length+S.length,k=new Uint8Array(w),x=0
return k.set(e,x),s("IHDR",A,k,x+=e.length),s("IDATA",S,k,x+=12+A.length),x+=12+S.length,s("IEND",new Uint8Array(0),k,x),(0,n.createObjectURL)(k,"image/png",i)}return function(e,t,r){return l(e,void 0===e.kind?n.ImageKind.GRAYSCALE_1BPP:e.kind,t,r)}}(),b=function(){function e(){u(this,e),this.fontSizeScale=1,this.fontWeight=p.fontWeight,this.fontSize=0,this.textMatrix=n.IDENTITY_MATRIX,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.textRenderingMode=n.TextRenderingMode.FILL,this.textMatrixScale=1,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=p.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null
this.maskId=""}return c(e,[{key:"clone",value:function(){return Object.create(this)}},{key:"setCurrentPoint",value:function(e,t){this.x=e,this.y=t}}]),e}(),_=0,A=0,S=0
t.SVGGraphics=h=function(){function e(t,r,a){for(var o in u(this,e),this.svgFactory=new i.DOMSVGFactory,this.current=new b,this.transformMatrix=n.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=t,this.objs=r,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!a,this._operatorIdMapping=[],n.OPS)this._operatorIdMapping[n.OPS[o]]=o}return c(e,[{key:"save",value:function(){this.transformStack.push(this.transformMatrix)
var e=this.current
this.extraStack.push(e),this.current=e.clone()}},{key:"restore",value:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null}},{key:"group",value:function(e){this.save(),this.executeOpTree(e),this.restore()}},{key:"loadDependencies",value:function(e){for(var t=this,r=e.fnArray,i=e.argsArray,a=0,o=r.length;a<o;a++)if(r[a]===n.OPS.dependency){var s=!0,u=!1,l=void 0
try{for(var c,h=function(){var e=c.value,r=e.startsWith("g_")?t.commonObjs:t.objs,n=new Promise((function(t){r.get(e,t)}))
t.current.dependencies.push(n)},f=i[a][Symbol.iterator]();!(s=(c=f.next()).done);s=!0)h()}catch(d){u=!0,l=d}finally{try{s||null==f.return||f.return()}finally{if(u)throw l}}}return Promise.all(this.current.dependencies)}},{key:"transform",value:function(e,t,r,i,a,o){var s=[e,t,r,i,a,o]
this.transformMatrix=n.Util.transform(this.transformMatrix,s),this.tgrp=null}},{key:"getSVG",value:function(e,t){var r=this
this.viewport=t
var i=this._initialize(t)
return this.loadDependencies(e).then((function(){return r.transformMatrix=n.IDENTITY_MATRIX,r.executeOpTree(r.convertOpList(e)),i}))}},{key:"convertOpList",value:function(e){for(var t=this._operatorIdMapping,r=e.argsArray,n=e.fnArray,i=[],a=0,o=n.length;a<o;a++){var s=n[a]
i.push({fnId:s,fn:t[s],args:r[a]})}return function(e){var t=[],r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value
"save"!==u.fn?"restore"===u.fn?t=r.pop():t.push(u):(t.push({fnId:92,fn:"group",items:[]}),r.push(t),t=t[t.length-1].items)}}catch(l){i=!0,a=l}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return t}(i)}},{key:"executeOpTree",value:function(e){var t=!0,r=!1,i=void 0
try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value,u=s.fn,l=s.fnId,c=s.args
switch(0|l){case n.OPS.beginText:this.beginText()
break
case n.OPS.dependency:break
case n.OPS.setLeading:this.setLeading(c)
break
case n.OPS.setLeadingMoveText:this.setLeadingMoveText(c[0],c[1])
break
case n.OPS.setFont:this.setFont(c)
break
case n.OPS.showText:case n.OPS.showSpacedText:this.showText(c[0])
break
case n.OPS.endText:this.endText()
break
case n.OPS.moveText:this.moveText(c[0],c[1])
break
case n.OPS.setCharSpacing:this.setCharSpacing(c[0])
break
case n.OPS.setWordSpacing:this.setWordSpacing(c[0])
break
case n.OPS.setHScale:this.setHScale(c[0])
break
case n.OPS.setTextMatrix:this.setTextMatrix(c[0],c[1],c[2],c[3],c[4],c[5])
break
case n.OPS.setTextRise:this.setTextRise(c[0])
break
case n.OPS.setTextRenderingMode:this.setTextRenderingMode(c[0])
break
case n.OPS.setLineWidth:this.setLineWidth(c[0])
break
case n.OPS.setLineJoin:this.setLineJoin(c[0])
break
case n.OPS.setLineCap:this.setLineCap(c[0])
break
case n.OPS.setMiterLimit:this.setMiterLimit(c[0])
break
case n.OPS.setFillRGBColor:this.setFillRGBColor(c[0],c[1],c[2])
break
case n.OPS.setStrokeRGBColor:this.setStrokeRGBColor(c[0],c[1],c[2])
break
case n.OPS.setStrokeColorN:this.setStrokeColorN(c)
break
case n.OPS.setFillColorN:this.setFillColorN(c)
break
case n.OPS.shadingFill:this.shadingFill(c[0])
break
case n.OPS.setDash:this.setDash(c[0],c[1])
break
case n.OPS.setRenderingIntent:this.setRenderingIntent(c[0])
break
case n.OPS.setFlatness:this.setFlatness(c[0])
break
case n.OPS.setGState:this.setGState(c[0])
break
case n.OPS.fill:this.fill()
break
case n.OPS.eoFill:this.eoFill()
break
case n.OPS.stroke:this.stroke()
break
case n.OPS.fillStroke:this.fillStroke()
break
case n.OPS.eoFillStroke:this.eoFillStroke()
break
case n.OPS.clip:this.clip("nonzero")
break
case n.OPS.eoClip:this.clip("evenodd")
break
case n.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case n.OPS.paintJpegXObject:this.paintJpegXObject(c[0],c[1],c[2])
break
case n.OPS.paintImageXObject:this.paintImageXObject(c[0])
break
case n.OPS.paintInlineImageXObject:this.paintInlineImageXObject(c[0])
break
case n.OPS.paintImageMaskXObject:this.paintImageMaskXObject(c[0])
break
case n.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(c[0],c[1])
break
case n.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case n.OPS.closePath:this.closePath()
break
case n.OPS.closeStroke:this.closeStroke()
break
case n.OPS.closeFillStroke:this.closeFillStroke()
break
case n.OPS.closeEOFillStroke:this.closeEOFillStroke()
break
case n.OPS.nextLine:this.nextLine()
break
case n.OPS.transform:this.transform(c[0],c[1],c[2],c[3],c[4],c[5])
break
case n.OPS.constructPath:this.constructPath(c[0],c[1])
break
case n.OPS.endPath:this.endPath()
break
case 92:this.group(s.items)
break
default:(0,n.warn)("Unimplemented operator ".concat(u))}}}catch(h){r=!0,i=h}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}},{key:"setWordSpacing",value:function(e){this.current.wordSpacing=e}},{key:"setCharSpacing",value:function(e){this.current.charSpacing=e}},{key:"nextLine",value:function(){this.moveText(0,this.current.leading)}},{key:"setTextMatrix",value:function(e,t,r,n,i,a){var o=this.current
o.textMatrix=o.lineMatrix=[e,t,r,n,i,a],o.textMatrixScale=Math.sqrt(e*e+t*t),o.x=o.lineX=0,o.y=o.lineY=0,o.xcoords=[],o.tspan=this.svgFactory.createElement("svg:tspan"),o.tspan.setAttributeNS(null,"font-family",o.fontFamily),o.tspan.setAttributeNS(null,"font-size","".concat(f(o.fontSize),"px")),o.tspan.setAttributeNS(null,"y",f(-o.y)),o.txtElement=this.svgFactory.createElement("svg:text"),o.txtElement.appendChild(o.tspan)}},{key:"beginText",value:function(){var e=this.current
e.x=e.lineX=0,e.y=e.lineY=0,e.textMatrix=n.IDENTITY_MATRIX,e.lineMatrix=n.IDENTITY_MATRIX,e.textMatrixScale=1,e.tspan=this.svgFactory.createElement("svg:tspan"),e.txtElement=this.svgFactory.createElement("svg:text"),e.txtgrp=this.svgFactory.createElement("svg:g"),e.xcoords=[]}},{key:"moveText",value:function(e,t){var r=this.current
r.x=r.lineX+=e,r.y=r.lineY+=t,r.xcoords=[],r.tspan=this.svgFactory.createElement("svg:tspan"),r.tspan.setAttributeNS(null,"font-family",r.fontFamily),r.tspan.setAttributeNS(null,"font-size","".concat(f(r.fontSize),"px")),r.tspan.setAttributeNS(null,"y",f(-r.y))}},{key:"showText",value:function(e){var t=this.current,r=t.font,i=t.fontSize
if(0!==i){var a=t.charSpacing,o=t.wordSpacing,s=t.fontDirection,u=t.textHScale*s,l=r.vertical,c=i*t.fontMatrix[0],h=0,v=!0,g=!1,y=void 0
try{for(var m,b=e[Symbol.iterator]();!(v=(m=b.next()).done);v=!0){var _=m.value
if(null!==_)if((0,n.isNum)(_))h+=-_*i*.001
else{var A=_.width,S=_.fontChar,w=A*c+((_.isSpace?o:0)+a)*s
_.isInFont||r.missingFile?(t.xcoords.push(t.x+h*u),t.tspan.textContent+=S,h+=w):h+=w}else h+=s*o}}catch(R){g=!0,y=R}finally{try{v||null==b.return||b.return()}finally{if(g)throw y}}l?t.y-=h*u:t.x+=h*u,t.tspan.setAttributeNS(null,"x",t.xcoords.map(f).join(" ")),t.tspan.setAttributeNS(null,"y",f(-t.y)),t.tspan.setAttributeNS(null,"font-family",t.fontFamily),t.tspan.setAttributeNS(null,"font-size","".concat(f(t.fontSize),"px")),t.fontStyle!==p.fontStyle&&t.tspan.setAttributeNS(null,"font-style",t.fontStyle),t.fontWeight!==p.fontWeight&&t.tspan.setAttributeNS(null,"font-weight",t.fontWeight)
var k=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK
if(k===n.TextRenderingMode.FILL||k===n.TextRenderingMode.FILL_STROKE?(t.fillColor!==p.fillColor&&t.tspan.setAttributeNS(null,"fill",t.fillColor),t.fillAlpha<1&&t.tspan.setAttributeNS(null,"fill-opacity",t.fillAlpha)):t.textRenderingMode===n.TextRenderingMode.ADD_TO_PATH?t.tspan.setAttributeNS(null,"fill","transparent"):t.tspan.setAttributeNS(null,"fill","none"),k===n.TextRenderingMode.STROKE||k===n.TextRenderingMode.FILL_STROKE){var x=1/(t.textMatrixScale||1)
this._setStrokeAttributes(t.tspan,x)}var C=t.textMatrix
0!==t.textRise&&((C=C.slice())[5]+=t.textRise),t.txtElement.setAttributeNS(null,"transform","".concat(d(C)," scale(1, -1)")),t.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.txtElement.appendChild(t.tspan),t.txtgrp.appendChild(t.txtElement),this._ensureTransformGroup().appendChild(t.txtElement)}}},{key:"setLeadingMoveText",value:function(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"addFontStyle",value:function(e){this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle))
var t=(0,n.createObjectURL)(e.data,e.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'.concat(e.loadedName,'";')+" src: url(".concat(t,"); }\n")}},{key:"setFont",value:function(e){var t=this.current,r=this.commonObjs.get(e[0]),i=e[1]
t.font=r,this.embedFonts&&r.data&&!this.embeddedFonts[r.loadedName]&&(this.addFontStyle(r),this.embeddedFonts[r.loadedName]=r),t.fontMatrix=r.fontMatrix?r.fontMatrix:n.FONT_IDENTITY_MATRIX
var a=r.black?r.bold?"bolder":"bold":r.bold?"bold":"normal",o=r.italic?"italic":"normal"
i<0?(i=-i,t.fontDirection=-1):t.fontDirection=1,t.fontSize=i,t.fontFamily=r.loadedName,t.fontWeight=a,t.fontStyle=o,t.tspan=this.svgFactory.createElement("svg:tspan"),t.tspan.setAttributeNS(null,"y",f(-t.y)),t.xcoords=[]}},{key:"endText",value:function(){var e=this.current
e.textRenderingMode&n.TextRenderingMode.ADD_TO_PATH_FLAG&&e.txtElement&&e.txtElement.hasChildNodes()&&(e.element=e.txtElement,this.clip("nonzero"),this.endPath())}},{key:"setLineWidth",value:function(e){e>0&&(this.current.lineWidth=e)}},{key:"setLineCap",value:function(e){this.current.lineCap=g[e]}},{key:"setLineJoin",value:function(e){this.current.lineJoin=y[e]}},{key:"setMiterLimit",value:function(e){this.current.miterLimit=e}},{key:"setStrokeAlpha",value:function(e){this.current.strokeAlpha=e}},{key:"setStrokeRGBColor",value:function(e,t,r){this.current.strokeColor=n.Util.makeCssRgb(e,t,r)}},{key:"setFillAlpha",value:function(e){this.current.fillAlpha=e}},{key:"setFillRGBColor",value:function(e,t,r){this.current.fillColor=n.Util.makeCssRgb(e,t,r),this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[]}},{key:"setStrokeColorN",value:function(e){this.current.strokeColor=this._makeColorN_Pattern(e)}},{key:"setFillColorN",value:function(e){this.current.fillColor=this._makeColorN_Pattern(e)}},{key:"shadingFill",value:function(e){var t=this.viewport.width,r=this.viewport.height,i=n.Util.inverseTransform(this.transformMatrix),a=n.Util.applyTransform([0,0],i),o=n.Util.applyTransform([0,r],i),s=n.Util.applyTransform([t,0],i),u=n.Util.applyTransform([t,r],i),l=Math.min(a[0],o[0],s[0],u[0]),c=Math.min(a[1],o[1],s[1],u[1]),h=Math.max(a[0],o[0],s[0],u[0]),f=Math.max(a[1],o[1],s[1],u[1]),d=this.svgFactory.createElement("svg:rect")
d.setAttributeNS(null,"x",l),d.setAttributeNS(null,"y",c),d.setAttributeNS(null,"width",h-l),d.setAttributeNS(null,"height",f-c),d.setAttributeNS(null,"fill",this._makeShadingPattern(e)),this._ensureTransformGroup().appendChild(d)}},{key:"_makeColorN_Pattern",value:function(e){return"TilingPattern"===e[0]?this._makeTilingPattern(e):this._makeShadingPattern(e)}},{key:"_makeTilingPattern",value:function(e){var t=e[1],r=e[2],i=e[3]||n.IDENTITY_MATRIX,a=s(e[4],4),u=a[0],l=a[1],c=a[2],h=a[3],f=e[5],d=e[6],p=e[7],v="shading".concat(S++),g=s(n.Util.applyTransform([u,l],i),2),y=g[0],m=g[1],b=s(n.Util.applyTransform([c,h],i),2),_=b[0],A=b[1],w=s(n.Util.singularValueDecompose2dScale(i),2),k=f*w[0],x=d*w[1],C=this.svgFactory.createElement("svg:pattern")
C.setAttributeNS(null,"id",v),C.setAttributeNS(null,"patternUnits","userSpaceOnUse"),C.setAttributeNS(null,"width",k),C.setAttributeNS(null,"height",x),C.setAttributeNS(null,"x","".concat(y)),C.setAttributeNS(null,"y","".concat(m))
var R=this.svg,P=this.transformMatrix,T=this.current.fillColor,E=this.current.strokeColor,O=this.svgFactory.create(_-y,A-m)
if(this.svg=O,this.transformMatrix=i,2===p){var L=n.Util.makeCssRgb.apply(n.Util,o(t))
this.current.fillColor=L,this.current.strokeColor=L}return this.executeOpTree(this.convertOpList(r)),this.svg=R,this.transformMatrix=P,this.current.fillColor=T,this.current.strokeColor=E,C.appendChild(O.childNodes[0]),this.defs.appendChild(C),"url(#".concat(v,")")}},{key:"_makeShadingPattern",value:function(e){switch(e[0]){case"RadialAxial":var t,r="shading".concat(S++),i=e[2]
switch(e[1]){case"axial":var a=e[3],o=e[4];(t=this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"x1",a[0]),t.setAttributeNS(null,"y1",a[1]),t.setAttributeNS(null,"x2",o[0]),t.setAttributeNS(null,"y2",o[1])
break
case"radial":var s=e[3],u=e[4],l=e[5],c=e[6];(t=this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"cx",u[0]),t.setAttributeNS(null,"cy",u[1]),t.setAttributeNS(null,"r",c),t.setAttributeNS(null,"fx",s[0]),t.setAttributeNS(null,"fy",s[1]),t.setAttributeNS(null,"fr",l)
break
default:throw new Error("Unknown RadialAxial type: ".concat(e[1]))}var h=!0,f=!1,d=void 0
try{for(var p,v=i[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var g=p.value,y=this.svgFactory.createElement("svg:stop")
y.setAttributeNS(null,"offset",g[0]),y.setAttributeNS(null,"stop-color",g[1]),t.appendChild(y)}}catch(m){f=!0,d=m}finally{try{h||null==v.return||v.return()}finally{if(f)throw d}}return this.defs.appendChild(t),"url(#".concat(r,")")
case"Mesh":return(0,n.warn)("Unimplemented pattern Mesh"),null
case"Dummy":return"hotpink"
default:throw new Error("Unknown IR type: ".concat(e[0]))}}},{key:"setDash",value:function(e,t){this.current.dashArray=e,this.current.dashPhase=t}},{key:"constructPath",value:function(e,t){var r=this.current,i=r.x,a=r.y,o=[],s=0,u=!0,l=!1,c=void 0
try{for(var h,d=e[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){switch(0|h.value){case n.OPS.rectangle:i=t[s++],a=t[s++]
var p=t[s++],v=t[s++],g=i+p,y=a+v
o.push("M",f(i),f(a),"L",f(g),f(a),"L",f(g),f(y),"L",f(i),f(y),"Z")
break
case n.OPS.moveTo:i=t[s++],a=t[s++],o.push("M",f(i),f(a))
break
case n.OPS.lineTo:i=t[s++],a=t[s++],o.push("L",f(i),f(a))
break
case n.OPS.curveTo:i=t[s+4],a=t[s+5],o.push("C",f(t[s]),f(t[s+1]),f(t[s+2]),f(t[s+3]),f(i),f(a)),s+=6
break
case n.OPS.curveTo2:i=t[s+2],a=t[s+3],o.push("C",f(i),f(a),f(t[s]),f(t[s+1]),f(t[s+2]),f(t[s+3])),s+=4
break
case n.OPS.curveTo3:i=t[s+2],a=t[s+3],o.push("C",f(t[s]),f(t[s+1]),f(i),f(a),f(i),f(a)),s+=4
break
case n.OPS.closePath:o.push("Z")}}}catch(m){l=!0,c=m}finally{try{u||null==d.return||d.return()}finally{if(l)throw c}}o=o.join(" "),r.path&&e.length>0&&e[0]!==n.OPS.rectangle&&e[0]!==n.OPS.moveTo?o=r.path.getAttributeNS(null,"d")+o:(r.path=this.svgFactory.createElement("svg:path"),this._ensureTransformGroup().appendChild(r.path)),r.path.setAttributeNS(null,"d",o),r.path.setAttributeNS(null,"fill","none"),r.element=r.path,r.setCurrentPoint(i,a)}},{key:"endPath",value:function(){var e=this.current
if(e.path=null,this.pendingClip)if(e.element){var t="clippath".concat(_++),r=this.svgFactory.createElement("svg:clipPath")
r.setAttributeNS(null,"id",t),r.setAttributeNS(null,"transform",d(this.transformMatrix))
var n=e.element.cloneNode(!0)
"evenodd"===this.pendingClip?n.setAttributeNS(null,"clip-rule","evenodd"):n.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,r.appendChild(n),this.defs.appendChild(r),e.activeClipUrl&&(e.clipGroup=null,this.extraStack.forEach((function(e){e.clipGroup=null})),r.setAttributeNS(null,"clip-path",e.activeClipUrl)),e.activeClipUrl="url(#".concat(t,")"),this.tgrp=null}else this.pendingClip=null}},{key:"clip",value:function(e){this.pendingClip=e}},{key:"closePath",value:function(){var e=this.current
if(e.path){var t="".concat(e.path.getAttributeNS(null,"d"),"Z")
e.path.setAttributeNS(null,"d",t)}}},{key:"setLeading",value:function(e){this.current.leading=-e}},{key:"setTextRise",value:function(e){this.current.textRise=e}},{key:"setTextRenderingMode",value:function(e){this.current.textRenderingMode=e}},{key:"setHScale",value:function(e){this.current.textHScale=e/100}},{key:"setRenderingIntent",value:function(e){}},{key:"setFlatness",value:function(e){}},{key:"setGState",value:function(e){var t=!0,r=!1,i=void 0
try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var u=s(a.value,2),l=u[0],c=u[1]
switch(l){case"LW":this.setLineWidth(c)
break
case"LC":this.setLineCap(c)
break
case"LJ":this.setLineJoin(c)
break
case"ML":this.setMiterLimit(c)
break
case"D":this.setDash(c[0],c[1])
break
case"RI":this.setRenderingIntent(c)
break
case"FL":this.setFlatness(c)
break
case"Font":this.setFont(c)
break
case"CA":this.setStrokeAlpha(c)
break
case"ca":this.setFillAlpha(c)
break
default:(0,n.warn)("Unimplemented graphic state operator ".concat(l))}}}catch(h){r=!0,i=h}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}},{key:"fill",value:function(){var e=this.current
e.element&&(e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha),this.endPath())}},{key:"stroke",value:function(){var e=this.current
e.element&&(this._setStrokeAttributes(e.element),e.element.setAttributeNS(null,"fill","none"),this.endPath())}},{key:"_setStrokeAttributes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.current,n=r.dashArray
1!==t&&n.length>0&&(n=n.map((function(e){return t*e}))),e.setAttributeNS(null,"stroke",r.strokeColor),e.setAttributeNS(null,"stroke-opacity",r.strokeAlpha),e.setAttributeNS(null,"stroke-miterlimit",f(r.miterLimit)),e.setAttributeNS(null,"stroke-linecap",r.lineCap),e.setAttributeNS(null,"stroke-linejoin",r.lineJoin),e.setAttributeNS(null,"stroke-width",f(t*r.lineWidth)+"px"),e.setAttributeNS(null,"stroke-dasharray",n.map(f).join(" ")),e.setAttributeNS(null,"stroke-dashoffset",f(t*r.dashPhase)+"px")}},{key:"eoFill",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()}},{key:"fillStroke",value:function(){this.stroke(),this.fill()}},{key:"eoFillStroke",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()}},{key:"closeStroke",value:function(){this.closePath(),this.stroke()}},{key:"closeFillStroke",value:function(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function(){this.closePath(),this.eoFillStroke()}},{key:"paintSolidColorImageMask",value:function(){var e=this.svgFactory.createElement("svg:rect")
e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",this.current.fillColor),this._ensureTransformGroup().appendChild(e)}},{key:"paintJpegXObject",value:function(e,t,r){var n=this.objs.get(e),i=this.svgFactory.createElement("svg:image")
i.setAttributeNS(v,"xlink:href",n.src),i.setAttributeNS(null,"width",f(t)),i.setAttributeNS(null,"height",f(r)),i.setAttributeNS(null,"x","0"),i.setAttributeNS(null,"y",f(-r)),i.setAttributeNS(null,"transform","scale(".concat(f(1/t)," ").concat(f(-1/r),")")),this._ensureTransformGroup().appendChild(i)}},{key:"paintImageXObject",value:function(e){var t=this.objs.get(e)
t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image with object ID ".concat(e," is not ready yet"))}},{key:"paintInlineImageXObject",value:function(e,t){var r=e.width,n=e.height,i=m(e,this.forceDataSchema,!!t),a=this.svgFactory.createElement("svg:rect")
a.setAttributeNS(null,"x","0"),a.setAttributeNS(null,"y","0"),a.setAttributeNS(null,"width",f(r)),a.setAttributeNS(null,"height",f(n)),this.current.element=a,this.clip("nonzero")
var o=this.svgFactory.createElement("svg:image")
o.setAttributeNS(v,"xlink:href",i),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",f(-n)),o.setAttributeNS(null,"width",f(r)+"px"),o.setAttributeNS(null,"height",f(n)+"px"),o.setAttributeNS(null,"transform","scale(".concat(f(1/r)," ").concat(f(-1/n),")")),t?t.appendChild(o):this._ensureTransformGroup().appendChild(o)}},{key:"paintImageMaskXObject",value:function(e){var t=this.current,r=e.width,n=e.height,i=t.fillColor
t.maskId="mask".concat(A++)
var a=this.svgFactory.createElement("svg:mask")
a.setAttributeNS(null,"id",t.maskId)
var o=this.svgFactory.createElement("svg:rect")
o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",f(r)),o.setAttributeNS(null,"height",f(n)),o.setAttributeNS(null,"fill",i),o.setAttributeNS(null,"mask","url(#".concat(t.maskId,")")),this.defs.appendChild(a),this._ensureTransformGroup().appendChild(o),this.paintInlineImageXObject(e,a)}},{key:"paintFormXObjectBegin",value:function(e,t){if(Array.isArray(e)&&6===e.length&&this.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t){var r=t[2]-t[0],n=t[3]-t[1],i=this.svgFactory.createElement("svg:rect")
i.setAttributeNS(null,"x",t[0]),i.setAttributeNS(null,"y",t[1]),i.setAttributeNS(null,"width",f(r)),i.setAttributeNS(null,"height",f(n)),this.current.element=i,this.clip("nonzero"),this.endPath()}}},{key:"paintFormXObjectEnd",value:function(){}},{key:"_initialize",value:function(e){var t=this.svgFactory.create(e.width,e.height),r=this.svgFactory.createElement("svg:defs")
t.appendChild(r),this.defs=r
var n=this.svgFactory.createElement("svg:g")
return n.setAttributeNS(null,"transform",d(e.transform)),t.appendChild(n),this.svg=n,t}},{key:"_ensureClipGroup",value:function(){if(!this.current.clipGroup){var e=this.svgFactory.createElement("svg:g")
e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(e),this.current.clipGroup=e}return this.current.clipGroup}},{key:"_ensureTransformGroup",value:function(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",d(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}}]),e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0
var n,i=(n=r(185))&&n.__esModule?n:{default:n},a=r(1),o=r(203)
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function d(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){f(a,n,i,o,s,"next",e)}function s(e){f(a,n,i,o,s,"throw",e)}o(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var y=require("fs"),m=require("http"),b=require("https"),_=require("url"),A=/^file:\/\/\/[a-zA-Z]:\//
var S=function(){function e(t){var r,n
p(this,e),this.source=t,this.url=(r=t.url,"file:"===(n=_.parse(r)).protocol||n.host?n:/^[a-z]:[/\\]/i.test(r)?_.parse("file:///".concat(r)):(n.host||(n.protocol="file:"),n)),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol,this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return g(e,[{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader),this._fullRequestReader=this.isFsUrl?new P(this):new C(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=this.isFsUrl?new T(this,e,t):new R(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}()
t.PDFNodeStream=S
var w=function(){function e(t){p(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null
var r=t.source
this._contentLength=r.length,this._loaded=0,this._filename=null,this._disableRange=r.disableRange||!1,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!r.disableStream,this._isRangeSupported=!r.disableRange,this._readableStream=null,this._readCapability=(0,a.createPromiseCapability)(),this._headersCapability=(0,a.createPromiseCapability)()}var t
return g(e,[{key:"read",value:(t=d(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,a.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new a.AbortException("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),k=function(){function e(t){p(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,a.createPromiseCapability)()
var r=t.source
this._isStreamingSupported=!r.disableStream}var t
return g(e,[{key:"read",value:(t=d(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:if(!this._done){e.next=4
break}return e.abrupt("return",{value:void 0,done:!0})
case 4:if(!this._storedError){e.next=6
break}throw this._storedError
case 6:if(null!==(t=this._readableStream.read())){e.next=10
break}return this._readCapability=(0,a.createPromiseCapability)(),e.abrupt("return",this.read())
case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1})
case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this
this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}()
function x(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}var C=function(e){function t(e){var r
p(this,t)
var n=function(t){if(404===t.statusCode){var n=new a.MissingPDFException('Missing PDF "'.concat(r._url,'".'))
return r._storedError=n,void r._headersCapability.reject(n)}r._headersCapability.resolve(),r._setReadableStream(t)
var i=function(e){return r._readableStream.headers[e.toLowerCase()]},s=(0,o.validateRangeRequestCapabilities)({getResponseHeader:i,isHttp:e.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),u=s.allowRangeRequests,l=s.suggestedLength
r._isRangeSupported=u,r._contentLength=l||r._contentLength,r._filename=(0,o.extractFilenameFromHeader)(i)}
return(r=u(this,l(t).call(this,e)))._request=null,"http:"===r._url.protocol?r._request=m.request(x(r._url,e.httpHeaders),n):r._request=b.request(x(r._url,e.httpHeaders),n),r._request.on("error",(function(e){r._storedError=e,r._headersCapability.reject(e)})),r._request.end(),r}return c(t,e),t}(w),R=function(e){function t(e,r,n){var i
for(var o in p(this,t),(i=u(this,l(t).call(this,e)))._httpHeaders={},e.httpHeaders){var s=e.httpHeaders[o]
void 0!==s&&(i._httpHeaders[o]=s)}i._httpHeaders.Range="bytes=".concat(r,"-").concat(n-1)
var c=function(e){if(404!==e.statusCode)i._setReadableStream(e)
else{var t=new a.MissingPDFException('Missing PDF "'.concat(i._url,'".'))
i._storedError=t}}
return i._request=null,"http:"===i._url.protocol?i._request=m.request(x(i._url,i._httpHeaders),c):i._request=b.request(x(i._url,i._httpHeaders),c),i._request.on("error",(function(e){i._storedError=e})),i._request.end(),i}return c(t,e),t}(k),P=function(e){function t(e){var r
p(this,t),r=u(this,l(t).call(this,e))
var n=decodeURIComponent(r._url.path)
return A.test(r._url.href)&&(n=n.replace(/^\//,"")),y.lstat(n,(function(e,t){if(e)return"ENOENT"===e.code&&(e=new a.MissingPDFException('Missing PDF "'.concat(n,'".'))),r._storedError=e,void r._headersCapability.reject(e)
r._contentLength=t.size,r._setReadableStream(y.createReadStream(n)),r._headersCapability.resolve()})),r}return c(t,e),t}(w),T=function(e){function t(e,r,n){var i
p(this,t),i=u(this,l(t).call(this,e))
var a=decodeURIComponent(i._url.path)
return A.test(i._url.href)&&(a=a.replace(/^\//,"")),i._setReadableStream(y.createReadStream(a,{start:r,end:n-1})),i}return c(t,e),t}(k)},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.createResponseStatusError=function(e,t){if(404===e||0===e&&/^file:/.test(t))return new n.MissingPDFException('Missing PDF "'+t+'".')
return new n.UnexpectedResponseException("Unexpected server response ("+e+') while retrieving PDF "'+t+'".',e)},t.extractFilenameFromHeader=function(e){var t=e("Content-Disposition")
if(t){var r=(0,i.getFilenameFromContentDispositionHeader)(t)
if(r.includes("%"))try{r=decodeURIComponent(r)}catch(n){}if(/\.pdf$/i.test(r))return r}return null},t.validateRangeRequestCapabilities=function(e){var t=e.getResponseHeader,r=e.isHttp,i=e.rangeChunkSize,a=e.disableRange;(0,n.assert)(i>0,"Range chunk size must be larger than zero")
var o={allowRangeRequests:!1,suggestedLength:void 0},s=parseInt(t("Content-Length"),10)
if(!Number.isInteger(s))return o
if(o.suggestedLength=s,s<=2*i)return o
if(a||!r)return o
if("bytes"!==t("Accept-Ranges"))return o
if("identity"!==(t("Content-Encoding")||"identity"))return o
return o.allowRangeRequests=!0,o},t.validateResponseStatus=function(e){return 200===e||206===e}
var n=r(1),i=r(204)},function(e,t,r){"use strict"
function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return
var r=[],n=!0,i=!1,a=void 0
try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.getFilenameFromContentDispositionHeader=function(e){var t=!0,r=o("filename\\*","i").exec(e)
if(r){var i=l(r=r[1])
return u(i=h(i=c(i=unescape(i))))}if(r=function(e){var t,r=[],i=o("filename\\*((?!0\\d)\\d+)(\\*?)","ig")
for(;null!==(t=i.exec(e));){var a=n(t,4),s=a[1],u=a[2],h=a[3]
if((s=parseInt(s,10))in r){if(0===s)break}else r[s]=[u,h]}for(var f=[],d=0;d<r.length&&d in r;++d){var p=n(r[d],2),v=p[0],g=p[1]
g=l(g),v&&(g=unescape(g),0===d&&(g=c(g))),f.push(g)}return f.join("")}(e)){return u(h(r))}if(r=o("filename","i").exec(e)){var a=l(r=r[1])
return u(a=h(a))}function o(e,t){return new RegExp("(?:^|;)\\s*"+e+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)}function s(e,r){if(e){if(!/^[\x00-\xFF]+$/.test(r))return r
try{var n=new TextDecoder(e,{fatal:!0}),i=Array.from(r,(function(e){return 255&e.charCodeAt(0)}))
r=n.decode(new Uint8Array(i)),t=!1}catch(a){if(/^utf-?8$/i.test(e))try{r=decodeURIComponent(escape(r)),t=!1}catch(o){}}}return r}function u(e){return t&&/[\x80-\xff]/.test(e)&&(e=s("utf-8",e),t&&(e=s("iso-8859-1",e))),e}function l(e){if(e.startsWith('"')){for(var t=e.slice(1).split('\\"'),r=0;r<t.length;++r){var n=t[r].indexOf('"');-1!==n&&(t[r]=t[r].slice(0,n),t.length=r+1),t[r]=t[r].replace(/\\(.)/g,"$1")}e=t.join('"')}return e}function c(e){var t=e.indexOf("'")
return-1===t?e:s(e.slice(0,t),e.slice(t+1).replace(/^[^']*'/,""))}function h(e){return!e.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(e)?e:e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,(function(e,t,r,n){if("q"===r||"Q"===r)return s(t,n=(n=n.replace(/_/g," ")).replace(/=([0-9a-fA-F]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))
try{n=atob(n)}catch(i){}return s(t,n)}))}return""}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNetworkStream=void 0
var n,i=(n=r(185))&&n.__esModule?n:{default:n},a=r(1),o=r(203)
function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function u(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}var f=function(){function e(t,r){l(this,e),this.url=t,r=r||{},this.isHttp=/^https?:/i.test(t),this.httpHeaders=this.isHttp&&r.httpHeaders||{},this.withCredentials=r.withCredentials||!1,this.getXhr=r.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null)}return h(e,[{key:"requestRange",value:function(e,t,r){var n={begin:e,end:t}
for(var i in r)n[i]=r[i]
return this.request(n)}},{key:"requestFull",value:function(e){return this.request(e)}},{key:"request",value:function(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t}
for(var i in t.open("GET",this.url),t.withCredentials=this.withCredentials,this.httpHeaders){var a=this.httpHeaders[i]
void 0!==a&&t.setRequestHeader(i,a)}return this.isHttp&&"begin"in e&&"end"in e?(t.setRequestHeader("Range","bytes=".concat(e.begin,"-").concat(e.end-1)),n.expectedStatus=206):n.expectedStatus=200,t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r}},{key:"onProgress",value:function(e,t){var r=this.pendingRequests[e]
r&&r.onProgress&&r.onProgress(t)}},{key:"onStateChange",value:function(e,t){var r=this.pendingRequests[e]
if(r){var n=r.xhr
if(n.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===n.readyState&&e in this.pendingRequests)if(delete this.pendingRequests[e],0===n.status&&this.isHttp)r.onError&&r.onError(n.status)
else{var i=n.status||200
if(200===i&&206===r.expectedStatus||i===r.expectedStatus){var o=function(e){var t=e.response
return"string"!=typeof t?t:(0,a.stringToBytes)(t).buffer}(n)
if(206===i){var s=n.getResponseHeader("Content-Range"),u=/bytes (\d+)-(\d+)\/(\d+)/.exec(s)
r.onDone({begin:parseInt(u[1],10),chunk:o})}else o?r.onDone({begin:0,chunk:o}):r.onError&&r.onError(n.status)}else r.onError&&r.onError(n.status)}}}},{key:"hasPendingRequests",value:function(){for(var e in this.pendingRequests)return!0
return!1}},{key:"getRequestXhr",value:function(e){return this.pendingRequests[e].xhr}},{key:"isPendingRequest",value:function(e){return e in this.pendingRequests}},{key:"abortAllRequests",value:function(){for(var e in this.pendingRequests)this.abortRequest(0|e)}},{key:"abortRequest",value:function(e){var t=this.pendingRequests[e].xhr
delete this.pendingRequests[e],t.abort()}}]),e}(),d=function(){function e(t){l(this,e),this._source=t,this._manager=new f(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}return h(e,[{key:"_onRangeRequestReaderClosed",value:function(e){var t=this._rangeRequestReaders.indexOf(e)
t>=0&&this._rangeRequestReaders.splice(t,1)}},{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader),this._fullRequestReader=new p(this._manager,this._source),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){var r=new v(this._manager,e,t)
return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}}]),e}()
t.PDFNetworkStream=d
var p=function(){function e(t,r){l(this,e),this._manager=t
var n={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)}
this._url=r.url,this._fullRequestId=t.requestFull(n),this._headersReceivedCapability=(0,a.createPromiseCapability)(),this._disableRange=r.disableRange||!1,this._contentLength=r.length,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null}var t
return h(e,[{key:"_onHeadersReceived",value:function(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=function(e){return t.getResponseHeader(e)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:r,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),i=n.allowRangeRequests,a=n.suggestedLength
i&&(this._isRangeSupported=!0),this._contentLength=a||this._contentLength,this._filename=(0,o.extractFilenameFromHeader)(r),this._isRangeSupported&&this._manager.abortRequest(e),this._headersReceivedCapability.resolve()}},{key:"_onDone",value:function(e){e&&(this._requests.length>0?this._requests.shift().resolve({value:e.chunk,done:!1}):this._cachedChunks.push(e.chunk))
this._done=!0,this._cachedChunks.length>0||(this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[])}},{key:"_onError",value:function(e){var t=this._url,r=(0,o.createResponseStatusError)(e,t)
this._storedError=r,this._headersReceivedCapability.reject(r),this._requests.forEach((function(e){e.reject(r)})),this._requests=[],this._cachedChunks=[]}},{key:"_onProgress",value:function(e){this.onProgress&&this.onProgress({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})}},{key:"read",value:(t=u(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._storedError){e.next=2
break}throw this._storedError
case 2:if(!(this._cachedChunks.length>0)){e.next=5
break}return t=this._cachedChunks.shift(),e.abrupt("return",{value:t,done:!1})
case 5:if(!this._done){e.next=7
break}return e.abrupt("return",{value:void 0,done:!0})
case 7:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._headersReceivedCapability.reject(e),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"contentLength",get:function(){return this._contentLength}},{key:"headersReady",get:function(){return this._headersReceivedCapability.promise}}]),e}(),v=function(){function e(t,r,n){l(this,e),this._manager=t
var i={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)}
this._requestId=t.requestRange(r,n,i),this._requests=[],this._queuedChunk=null,this._done=!1,this.onProgress=null,this.onClosed=null}var t
return h(e,[{key:"_close",value:function(){this.onClosed&&this.onClosed(this)}},{key:"_onDone",value:function(e){var t=e.chunk
this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t
this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._close()}},{key:"_onProgress",value:function(e){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:e.loaded})}},{key:"read",value:(t=u(i.default.mark((function e(){var t,r
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this._queuedChunk){e.next=4
break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1})
case 4:if(!this._done){e.next=6
break}return e.abrupt("return",{value:void 0,done:!0})
case 6:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise)
case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFetchStream=void 0
var n,i=(n=r(185))&&n.__esModule?n:{default:n},a=r(1),o=r(203)
function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function u(e){return function(){var t=this,r=arguments
return new Promise((function(n,i){var a=e.apply(t,r)
function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function f(e,t,r){return{method:"GET",headers:e,signal:r&&r.signal,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}var d=function(){function e(t){l(this,e),this.source=t,this.isHttp=/^https?:/i.test(t.url),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return h(e,[{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader),this._fullRequestReader=new p(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null
var r=new v(this,e,t)
return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}()
t.PDFFetchStream=d
var p=function(){function e(t){var r=this
l(this,e),this._stream=t,this._reader=null,this._loaded=0,this._filename=null
var n=t.source
for(var i in this._withCredentials=n.withCredentials||!1,this._contentLength=n.length,this._headersCapability=(0,a.createPromiseCapability)(),this._disableRange=n.disableRange||!1,this._rangeChunkSize=n.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._isStreamingSupported=!n.disableStream,this._isRangeSupported=!n.disableRange,this._headers=new Headers,this._stream.httpHeaders){var s=this._stream.httpHeaders[i]
void 0!==s&&this._headers.append(i,s)}var u=n.url
fetch(u,f(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,u)
r._reader=e.body.getReader(),r._headersCapability.resolve()
var t=function(t){return e.headers.get(t)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:t,isHttp:r._stream.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),i=n.allowRangeRequests,s=n.suggestedLength
r._isRangeSupported=i,r._contentLength=s||r._contentLength,r._filename=(0,o.extractFilenameFromHeader)(t),!r._isStreamingSupported&&r._isRangeSupported&&r.cancel(new a.AbortException("Streaming is disabled."))})).catch(this._headersCapability.reject),this.onProgress=null}var t
return h(e,[{key:"read",value:(t=u(i.default.mark((function e(){var t,r,n,a
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._headersCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),a=new Uint8Array(r).buffer,e.abrupt("return",{value:a,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),v=function(){function e(t,r,n){var i=this
l(this,e),this._stream=t,this._reader=null,this._loaded=0
var s=t.source
for(var u in this._withCredentials=s.withCredentials||!1,this._readCapability=(0,a.createPromiseCapability)(),this._isStreamingSupported=!s.disableStream,"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._headers=new Headers,this._stream.httpHeaders){var c=this._stream.httpHeaders[u]
void 0!==c&&this._headers.append(u,c)}this._headers.append("Range","bytes=".concat(r,"-").concat(n-1))
var h=s.url
fetch(h,f(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,h)
i._readCapability.resolve(),i._reader=e.body.getReader()})),this.onProgress=null}var t
return h(e,[{key:"read",value:(t=u(i.default.mark((function e(){var t,r,n,a
return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise
case 2:return e.next=4,this._reader.read()
case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9
break}return e.abrupt("return",{value:r,done:n})
case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded}),a=new Uint8Array(r).buffer,e.abrupt("return",{value:a,done:!1})
case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}()}])}))
