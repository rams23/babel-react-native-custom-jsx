import { cavyCreateElement } from "cavy";
import React from 'react';
export function App() {
  return cavyCreateElement("div", {
    key: "5"
  }, cavyCreateElement("div", {
    key: "3"
  }), cavyCreateElement("div", null, "Test"));
}