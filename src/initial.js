import Icon from "./images/logo.jpg";
import Sushi from "./images/sushi.jpg";
import Menu from "./menu";
import Contact from "./contact";

function header() {
  const fullHeader = document.createElement("div");
  fullHeader.classList.add("full-header");
  const element = document.createElement("div");
  element.classList.add("nav");

  const logo = new Image();
  logo.src = Icon;
  logo.classList.add("logo-img");

  let home = document.createElement("button");
  home.innerHTML = "Home";
  home.classList.add("active-btn");
  home.classList.add("home-header");
  home.classList.add("nav-btn");
  home.onclick = function () {
    setActiveBtn(this);
    document.querySelector("#content").innerHTML = "";
    content();
  };

  let menu = document.createElement("button");
  menu.innerHTML = "Menu";
  menu.classList.add("menu-header");
  menu.classList.add("nav-btn");
  menu.onclick = function () {
    setActiveBtn(this);
    Menu();
  };

  let contact = document.createElement("button");
  contact.innerHTML = "Contact";
  contact.classList.add("contact-header");
  contact.classList.add("nav-btn");
  contact.onclick = function () {
    setActiveBtn(this);
    Contact();
  };

  fullHeader.appendChild(logo);
  element.appendChild(home);
  element.appendChild(menu);
  element.appendChild(contact);

  fullHeader.appendChild(element);

  return fullHeader;
}

function setActiveBtn(button) {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((element) => {
    element.classList.remove("active-btn");
  });

  button.classList.add("active-btn");
}

function content() {
  const content = document.querySelector("#content");

  const home = document.createElement("div");
  home.classList.add("home");

  const sushi = new Image();
  sushi.src = Sushi;
  sushi.classList.add("sushi");

  let homeText = document.createElement("div");
  homeText.classList.add("hometext");
  homeText.innerHTML += "Sushi restaurant";

  home.appendChild(homeText);
  home.appendChild(sushi);

  content.appendChild(home);

  return content;
}

function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  let est = document.createElement("div");
  est.classList.add("footer-text");
  est.innerHTML = "Established 1987";

  let qual = document.createElement("div");
  qual.classList.add("footer-text");
  qual.innerHTML = "Quality Guaranteed";

  footer.appendChild(est);
  footer.appendChild(qual);
  return footer;
}

function initial() {
  const body = document.body;

  body.appendChild(header());
  body.appendChild(content());
  body.appendChild(footer());
}

export default initial;
