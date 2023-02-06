"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
  }
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError(
      "attempted to " + action + " private field on non-instance"
    );
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
  if (!privateSet.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return fn;
}
var _parseToJson = /*#__PURE__*/ new WeakSet();
var _setProperty = /*#__PURE__*/ new WeakMap();
class Parser {
  constructor() {
    _classPrivateMethodInitSpec(this, _parseToJson);
    _classPrivateFieldInitSpec(this, _setProperty, {
      writable: true,
      value: (key, value) => {
        document.documentElement.style.setProperty(`--${key}`, value);
      },
    });
  }
  attacheToJson(jsonFile) {
    _classPrivateMethodGet(this, _parseToJson, _parseToJson2).call(
      this,
      jsonFile
    );
  }
}
exports.default = Parser;
function _parseToJson2(obj = {}, initialKey = "") {
  for (const key in obj) {
    const newinitialKey = initialKey ? `${initialKey}-${key}` : key;
    if (typeof obj[key] === "object") {
      _classPrivateMethodGet(this, _parseToJson, _parseToJson2).call(
        this,
        obj[key],
        newinitialKey
      );
    } else {
      _classPrivateFieldGet(this, _setProperty).call(
        this,
        newinitialKey,
        obj[key]
      );
    }
  }
}
