"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/suspend-react";
exports.ids = ["vendor-chunks/suspend-react"];
exports.modules = {

/***/ "(ssr)/./node_modules/suspend-react/index.js":
/*!*********************************************!*\
  !*** ./node_modules/suspend-react/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clear: () => (/* binding */ clear),\n/* harmony export */   peek: () => (/* binding */ peek),\n/* harmony export */   preload: () => (/* binding */ preload),\n/* harmony export */   suspend: () => (/* binding */ suspend)\n/* harmony export */ });\nconst isPromise = promise => typeof promise === 'object' && typeof promise.then === 'function';\n\nconst globalCache = [];\n\nfunction shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {\n  if (arrA === arrB) return true;\n  if (!arrA || !arrB) return false;\n  const len = arrA.length;\n  if (arrB.length !== len) return false;\n\n  for (let i = 0; i < len; i++) if (!equal(arrA[i], arrB[i])) return false;\n\n  return true;\n}\n\nfunction query(fn, keys = null, preload = false, config = {}) {\n  // If no keys were given, the function is the key\n  if (keys === null) keys = [fn];\n\n  for (const entry of globalCache) {\n    // Find a match\n    if (shallowEqualArrays(keys, entry.keys, entry.equal)) {\n      // If we're pre-loading and the element is present, just return\n      if (preload) return undefined; // If an error occurred, throw\n\n      if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return\n\n      if (Object.prototype.hasOwnProperty.call(entry, 'response')) {\n        if (config.lifespan && config.lifespan > 0) {\n          if (entry.timeout) clearTimeout(entry.timeout);\n          entry.timeout = setTimeout(entry.remove, config.lifespan);\n        }\n\n        return entry.response;\n      } // If the promise is still unresolved, throw\n\n\n      if (!preload) throw entry.promise;\n    }\n  } // The request is new or has changed.\n\n\n  const entry = {\n    keys,\n    equal: config.equal,\n    remove: () => {\n      const index = globalCache.indexOf(entry);\n      if (index !== -1) globalCache.splice(index, 1);\n    },\n    promise: // Execute the promise\n    (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value\n    ).then(response => {\n      entry.response = response; // Remove the entry in time if a lifespan was given\n\n      if (config.lifespan && config.lifespan > 0) {\n        entry.timeout = setTimeout(entry.remove, config.lifespan);\n      }\n    }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound\n    .catch(error => entry.error = error)\n  }; // Register the entry\n\n  globalCache.push(entry); // And throw the promise, this yields control back to React\n\n  if (!preload) throw entry.promise;\n  return undefined;\n}\n\nconst suspend = (fn, keys, config) => query(fn, keys, false, config);\n\nconst preload = (fn, keys, config) => void query(fn, keys, true, config);\n\nconst peek = keys => {\n  var _globalCache$find;\n\n  return (_globalCache$find = globalCache.find(entry => shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;\n};\n\nconst clear = keys => {\n  if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);else {\n    const entry = globalCache.find(entry => shallowEqualArrays(keys, entry.keys, entry.equal));\n    if (entry) entry.remove();\n  }\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3VzcGVuZC1yZWFjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUzs7QUFFM0I7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckMsbUZBQW1GOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FBRUwsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBOztBQUV5QyIsInNvdXJjZXMiOlsid2VicGFjazovL25hc2EtaGFja2F0aG9uLTIwMjQvLi9ub2RlX21vZHVsZXMvc3VzcGVuZC1yZWFjdC9pbmRleC5qcz9iZWIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlzUHJvbWlzZSA9IHByb21pc2UgPT4gdHlwZW9mIHByb21pc2UgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbic7XG5cbmNvbnN0IGdsb2JhbENhY2hlID0gW107XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbEFycmF5cyhhcnJBLCBhcnJCLCBlcXVhbCA9IChhLCBiKSA9PiBhID09PSBiKSB7XG4gIGlmIChhcnJBID09PSBhcnJCKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKCFhcnJBIHx8ICFhcnJCKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGxlbiA9IGFyckEubGVuZ3RoO1xuICBpZiAoYXJyQi5sZW5ndGggIT09IGxlbikgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIGlmICghZXF1YWwoYXJyQVtpXSwgYXJyQltpXSkpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcXVlcnkoZm4sIGtleXMgPSBudWxsLCBwcmVsb2FkID0gZmFsc2UsIGNvbmZpZyA9IHt9KSB7XG4gIC8vIElmIG5vIGtleXMgd2VyZSBnaXZlbiwgdGhlIGZ1bmN0aW9uIGlzIHRoZSBrZXlcbiAgaWYgKGtleXMgPT09IG51bGwpIGtleXMgPSBbZm5dO1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZ2xvYmFsQ2FjaGUpIHtcbiAgICAvLyBGaW5kIGEgbWF0Y2hcbiAgICBpZiAoc2hhbGxvd0VxdWFsQXJyYXlzKGtleXMsIGVudHJ5LmtleXMsIGVudHJ5LmVxdWFsKSkge1xuICAgICAgLy8gSWYgd2UncmUgcHJlLWxvYWRpbmcgYW5kIHRoZSBlbGVtZW50IGlzIHByZXNlbnQsIGp1c3QgcmV0dXJuXG4gICAgICBpZiAocHJlbG9hZCkgcmV0dXJuIHVuZGVmaW5lZDsgLy8gSWYgYW4gZXJyb3Igb2NjdXJyZWQsIHRocm93XG5cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZW50cnksICdlcnJvcicpKSB0aHJvdyBlbnRyeS5lcnJvcjsgLy8gSWYgYSByZXNwb25zZSB3YXMgc3VjY2Vzc2Z1bCwgcmV0dXJuXG5cbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZW50cnksICdyZXNwb25zZScpKSB7XG4gICAgICAgIGlmIChjb25maWcubGlmZXNwYW4gJiYgY29uZmlnLmxpZmVzcGFuID4gMCkge1xuICAgICAgICAgIGlmIChlbnRyeS50aW1lb3V0KSBjbGVhclRpbWVvdXQoZW50cnkudGltZW91dCk7XG4gICAgICAgICAgZW50cnkudGltZW91dCA9IHNldFRpbWVvdXQoZW50cnkucmVtb3ZlLCBjb25maWcubGlmZXNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVudHJ5LnJlc3BvbnNlO1xuICAgICAgfSAvLyBJZiB0aGUgcHJvbWlzZSBpcyBzdGlsbCB1bnJlc29sdmVkLCB0aHJvd1xuXG5cbiAgICAgIGlmICghcHJlbG9hZCkgdGhyb3cgZW50cnkucHJvbWlzZTtcbiAgICB9XG4gIH0gLy8gVGhlIHJlcXVlc3QgaXMgbmV3IG9yIGhhcyBjaGFuZ2VkLlxuXG5cbiAgY29uc3QgZW50cnkgPSB7XG4gICAga2V5cyxcbiAgICBlcXVhbDogY29uZmlnLmVxdWFsLFxuICAgIHJlbW92ZTogKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBnbG9iYWxDYWNoZS5pbmRleE9mKGVudHJ5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIGdsb2JhbENhY2hlLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSxcbiAgICBwcm9taXNlOiAvLyBFeGVjdXRlIHRoZSBwcm9taXNlXG4gICAgKGlzUHJvbWlzZShmbikgPyBmbiA6IGZuKC4uLmtleXMpIC8vIFdoZW4gaXQgcmVzb2x2ZXMsIHN0b3JlIGl0cyB2YWx1ZVxuICAgICkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBlbnRyeS5yZXNwb25zZSA9IHJlc3BvbnNlOyAvLyBSZW1vdmUgdGhlIGVudHJ5IGluIHRpbWUgaWYgYSBsaWZlc3BhbiB3YXMgZ2l2ZW5cblxuICAgICAgaWYgKGNvbmZpZy5saWZlc3BhbiAmJiBjb25maWcubGlmZXNwYW4gPiAwKSB7XG4gICAgICAgIGVudHJ5LnRpbWVvdXQgPSBzZXRUaW1lb3V0KGVudHJ5LnJlbW92ZSwgY29uZmlnLmxpZmVzcGFuKTtcbiAgICAgIH1cbiAgICB9KSAvLyBTdG9yZSBjYXVnaHQgZXJyb3JzLCB0aGV5IHdpbGwgYmUgdGhyb3duIGluIHRoZSByZW5kZXItcGhhc2UgdG8gYnViYmxlIGludG8gYW4gZXJyb3ItYm91bmRcbiAgICAuY2F0Y2goZXJyb3IgPT4gZW50cnkuZXJyb3IgPSBlcnJvcilcbiAgfTsgLy8gUmVnaXN0ZXIgdGhlIGVudHJ5XG5cbiAgZ2xvYmFsQ2FjaGUucHVzaChlbnRyeSk7IC8vIEFuZCB0aHJvdyB0aGUgcHJvbWlzZSwgdGhpcyB5aWVsZHMgY29udHJvbCBiYWNrIHRvIFJlYWN0XG5cbiAgaWYgKCFwcmVsb2FkKSB0aHJvdyBlbnRyeS5wcm9taXNlO1xuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBzdXNwZW5kID0gKGZuLCBrZXlzLCBjb25maWcpID0+IHF1ZXJ5KGZuLCBrZXlzLCBmYWxzZSwgY29uZmlnKTtcblxuY29uc3QgcHJlbG9hZCA9IChmbiwga2V5cywgY29uZmlnKSA9PiB2b2lkIHF1ZXJ5KGZuLCBrZXlzLCB0cnVlLCBjb25maWcpO1xuXG5jb25zdCBwZWVrID0ga2V5cyA9PiB7XG4gIHZhciBfZ2xvYmFsQ2FjaGUkZmluZDtcblxuICByZXR1cm4gKF9nbG9iYWxDYWNoZSRmaW5kID0gZ2xvYmFsQ2FjaGUuZmluZChlbnRyeSA9PiBzaGFsbG93RXF1YWxBcnJheXMoa2V5cywgZW50cnkua2V5cywgZW50cnkuZXF1YWwpKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9nbG9iYWxDYWNoZSRmaW5kLnJlc3BvbnNlO1xufTtcblxuY29uc3QgY2xlYXIgPSBrZXlzID0+IHtcbiAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCB8fCBrZXlzLmxlbmd0aCA9PT0gMCkgZ2xvYmFsQ2FjaGUuc3BsaWNlKDAsIGdsb2JhbENhY2hlLmxlbmd0aCk7ZWxzZSB7XG4gICAgY29uc3QgZW50cnkgPSBnbG9iYWxDYWNoZS5maW5kKGVudHJ5ID0+IHNoYWxsb3dFcXVhbEFycmF5cyhrZXlzLCBlbnRyeS5rZXlzLCBlbnRyeS5lcXVhbCkpO1xuICAgIGlmIChlbnRyeSkgZW50cnkucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IGNsZWFyLCBwZWVrLCBwcmVsb2FkLCBzdXNwZW5kIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/suspend-react/index.js\n");

/***/ })

};
;