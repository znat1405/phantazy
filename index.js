(function(module, exports, __webpack_require__) {
"use strict";
var merge = __webpack_require__(11);
var RollbarJSON = {};
function setupJSON(polyfillJSON) {
if (isFunction(RollbarJSON.stringify) && isFunction(RollbarJSON.parse)) {
return;
}
if (isDefined(JSON)) {
// If polyfill is provided, prefer it over existing non-native shims.
if(polyfillJSON) {
if (isNativeFunction(JSON.stringify)) {
RollbarJSON.stringify = JSON.stringify;
}
if (isNativeFunction(JSON.parse)) {
RollbarJSON.parse = JSON.parse;
}
} else { // else accept any interface that is present.
if (isFunction(JSON.stringify)) {
RollbarJSON.stringify = JSON.stringify;
}
if (isFunction(JSON.parse)) {
RollbarJSON.parse = JSON.parse;
}
}
}
if (!isFunction(RollbarJSON.stringify) || !isFunction(RollbarJSON.parse)) {
polyfillJSON && polyfillJSON(RollbarJSON);
}
}
