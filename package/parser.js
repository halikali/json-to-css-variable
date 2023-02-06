"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
function _classPrivateMethodInitSpec(obj, privateSet) {
  _checkPrivateRedeclaration(obj, privateSet);
  privateSet.add(obj);
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
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
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError(
      "attempted to " + action + " private field on non-instance"
    );
  }
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
var _keycount = /*#__PURE__*/ new WeakMap();
var _properties = /*#__PURE__*/ new WeakMap();
var _parseToJson = /*#__PURE__*/ new WeakSet();
var _countKeys = /*#__PURE__*/ new WeakSet();
var _setProperties = /*#__PURE__*/ new WeakMap();
var _resetValues = /*#__PURE__*/ new WeakMap();
class Parser {
  constructor() {
    _classPrivateMethodInitSpec(this, _countKeys);
    _classPrivateMethodInitSpec(this, _parseToJson);
    _classPrivateFieldInitSpec(this, _keycount, {
      writable: true,
      value: void 0,
    });
    _classPrivateFieldInitSpec(this, _properties, {
      writable: true,
      value: void 0,
    });
    _classPrivateFieldInitSpec(this, _setProperties, {
      writable: true,
      value: () => {
        let content = _classPrivateFieldGet(this, _properties).map(
          (property) => {
            return `--${property.key}:${property.value};`;
          }
        );
        let style = document.querySelector("style");
        if (!style) {
          style = document.createElement("style");
          document.head.appendChild(style);
        }
        style.innerHTML = `:root {${content.join("")}}`;
      },
    });
    _classPrivateFieldInitSpec(this, _resetValues, {
      writable: true,
      value: () => {
        _classPrivateFieldSet(this, _keycount, 0);
        _classPrivateFieldSet(this, _properties, []);
      },
    });
    _classPrivateFieldSet(this, _keycount, 0);
    _classPrivateFieldSet(this, _properties, []);
  }
  attacheToJson(jsonFile) {
    _classPrivateFieldSet(
      this,
      _keycount,
      _classPrivateMethodGet(this, _countKeys, _countKeys2).call(this, jsonFile)
    );
    _classPrivateMethodGet(this, _parseToJson, _parseToJson2).call(
      this,
      jsonFile
    );
    _classPrivateFieldGet(this, _resetValues).call(this);
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
      _classPrivateFieldGet(this, _properties).push({
        key: newinitialKey,
        value: obj[key],
      });
      if (
        _classPrivateFieldGet(this, _properties).length ===
        _classPrivateFieldGet(this, _keycount)
      ) {
        _classPrivateFieldGet(this, _setProperties).call(this);
      }
    }
  }
}
function _countKeys2(obj) {
  let count = 0;
  parseForCount(obj);
  function parseForCount(obj, initialKey = "") {
    for (const key in obj) {
      const newinitialKey = initialKey ? `${initialKey}-${key}` : key;
      if (typeof obj[key] === "object") {
        parseForCount(obj[key], newinitialKey);
      } else {
        count++;
      }
    }
  }
  return count;
}
