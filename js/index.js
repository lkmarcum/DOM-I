const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const newFirstLink = document.createElement("a");
const newLastLink = document.createElement("a");
newLastLink.textContent = "I'm last!";

const navLinks = document.querySelector("nav");
navLinks.appendChild(newLastLink);
navLinks.prepend(newFirstLink);

const links = Array.from(document.querySelectorAll("header nav a"));
links[0].textContent = "Services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";
links[6].textContent = "I'm second to last!";

links.forEach(function(element) {
  element.style.color = "green";
});

const h1 = document.querySelector("h1");
h1.textContent = "DOM";
h1.insertAdjacentHTML("beforeend", "<br>Is<br>Awesome");

const button = document.querySelector("button");
button.textContent = "Get Started";

const snippet = document.getElementById("cta-img");
snippet.src = "img/header-img.png";

const topContent = Array.from(
  document.querySelectorAll(".top-content .text-content h4")
);
topContent[0].textContent = "Features";
topContent[1].textContent = "About";

const topPara = Array.from(
  document.querySelectorAll(".top-content .text-content p")
);
topPara[0].textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topPara[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const midImg = document.getElementById("middle-img");
midImg.src = "img/mid-page-accent.jpg";

const botContent = Array.from(
  document.querySelectorAll(".bottom-content .text-content h4")
);
botContent[0].textContent = "Services";
botContent[1].textContent = "Product";
botContent[2].textContent = "Vision";

const botPara = Array.from(
  document.querySelectorAll(".bottom-content .text-content p")
);
botPara[0].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
botPara[1].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
botPara[2].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const contact = document.querySelector(".contact h4");
contact.textContent = "Contact";

const contactInfo = Array.from(document.querySelectorAll(".contact p"));
contactInfo[0].textContent = "123 Way 456 Street";
contactInfo[0].insertAdjacentHTML("beforeend", "<br>Somewhere, USA");
contactInfo[1].textContent = "1 (888) 888-8888";
contactInfo[2].textContent = "sales@greatidea.io";

const copyright = document.querySelector("footer p");
copyright.textContent = "Copyright Great Idea! 2018";

const darkTheme = document.createElement("button");
darkTheme.textContent = "Dark Theme";
const footer = document.querySelector("footer");
footer.appendChild(darkTheme);

darkTheme.style.cssText =
  "background: white; padding: 10px; margin: 10px; font-size: 1rem; border: 1px solid black; border-radius: 5px";
darkTheme.onclick = function() {
  const body = document.querySelector("body");
  body.style.background = "#3d3d29";
  body.style.color = "white";
  links.forEach(function(element) {
    element.style.color = "white";
    button.style.cssText =
      "background: #3d3d29; color: white; border: 1px solid white";
    darkTheme.style.cssText =
      "background: #3d3d29; color: white; border: 1px solid white; padding: 10px; margin: 10px; font-size: 1rem; border-radius: 5px";
    const main = document.querySelector(".main-content");
    main.style.cssText =
      "border-top: 2px solid white; border-bottom: 2px solid white";
    logo.style.cssText =
      "background: white; padding-left: 5px; padding-right: 5px; padding-top: 2px; padding-bottom: 2px; border-radius: 5px";
  });
};
