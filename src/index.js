import "./reset.css";
import "./index.css";
import { Test } from "./test";

let t = new Test("test");
let contentElement = document.getElementById("content");
contentElement.textContent = t.hello();
