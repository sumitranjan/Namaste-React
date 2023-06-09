import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title" }, "Heading1");

const heading2 = React.createElement("h1", { id: "title" }, "Heading2");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
