// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("rescript/lib/js/belt_Array.js");

function schemaToReactElement(schemaElement) {
  return schemaElement.component;
}

function createElement(schema, uiMap, actionsMap) {
  console.log(uiMap);
  console.log(actionsMap);
  return Belt_Array.map(schema, schemaToReactElement);
}

exports.schemaToReactElement = schemaToReactElement;
exports.createElement = createElement;
/* No side effect */
