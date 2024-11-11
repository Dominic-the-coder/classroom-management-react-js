    import React from "react";
import ReactDOM from "react-dom/client";
// import your own custom css file
import "./style.css";
import { Header } from "./components/header";
import Hero from "./components/hero";
import Content from "./components/content";
import { Footer } from "./components/footer";

// React Method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Header />
    <Hero />
    <Content />
    <Footer />
  </div>
);

// pure JS

// how to add "hello world" to the DOM

// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.innerText = "Hello World";

// // add a button
// const button = document.createElement("button");
// button.innerText = "Click Me!";

// root.append(heading);
// root.append(button);