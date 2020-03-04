/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: [BABEL] C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\server\\\\index.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \\\"development\\\", \\\"test\\\", and \\\"production\\\". Instead, received: undefined. (While processing: \\\"C:\\\\\\\\Users\\\\\\\\VOLKAN\\\\\\\\Desktop\\\\\\\\clevel\\\\\\\\node_modules\\\\\\\\babel-preset-react-app\\\\\\\\index.js\\\")\\n    at module.exports (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\babel-preset-react-app\\\\create.js:58:11)\\n    at module.exports (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\babel-preset-react-app\\\\index.js:19:10)\\n    at C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:199:14\\n    at Generator.next (<anonymous>)\\n    at Function.<anonymous> (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\gensync-utils\\\\async.js:26:3)\\n    at Generator.next (<anonymous>)\\n    at step (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at evaluateAsync (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:284:5)\\n    at Function.errback (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:108:7)\\n    at errback (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\gensync-utils\\\\async.js:70:18)\\n    at async (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:183:31)\\n    at onFirstPause (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:209:13)\\n    at Generator.next (<anonymous>)\\n    at cachedFunction (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\caching.js:68:46)\\n    at cachedFunction.next (<anonymous>)\\n    at loadPresetDescriptor (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:292:44)\\n    at loadPresetDescriptor.next (<anonymous>)\\n    at recurseDescriptors (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:107:30)\\n    at recurseDescriptors.next (<anonymous>)\\n    at loadFullConfig (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:142:6)\\n    at loadFullConfig.next (<anonymous>)\\n    at Function.transform (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:25:45)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:262:25)\\n    at C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:216:11)\\n    at C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:184:28\\n    at C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\gensync-utils\\\\async.js:72:7\\n    at C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:108:33\\n    at step (C:\\\\Users\\\\VOLKAN\\\\Desktop\\\\clevel\\\\node_modules\\\\gensync\\\\index.js:280:14)\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

/******/ });