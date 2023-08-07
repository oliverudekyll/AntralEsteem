document.addEventListener("DOMContentLoaded", function () {
    var contact = document.getElementById("contact");
  
    var contactAlternates = [
      "Contact",
      "Ask",
      "Hire",
      "Buy",
      "Connect",
      "Chat",
      "Purchase",
      "Inquire",
      "Email",
      "Employ",
      "Invest",
      "Message",
    ];
  
    var i = 0;
  
    function changeText() {
      contact.textContent = contactAlternates[i];
      i = (i + 1) % contactAlternates.length;
    }
  
    changeText();
  
    setInterval(changeText, 1000);
  });





  var textsPaths = [
    {
      title: "Glass Struggle",
      caption: "Manifest and photographic essay",
      link: "https://oliverudekyll.github.io/AntralEsteem/EN/Texts/Texts.html"
    },
    {
      title: "Transparency Register",
      caption: "Essay and photography",
      link: ""
    },
    {
      title: "Hybrid ≠ avant-garde",
      caption: '"Art criticism of "NU Performance Festival"',
      link: ""
    },
    {
      title: "From the Peripheries",
      caption: "Texts on windows",
      link: ""
    },
    {
      title: "On The Role of Mental Images in Reasoning",
      caption: "Degree work",
      link: ""
    }
  ];

  var textsContainer = document.getElementById("texts-container");

  for (i = 0; i < textsPaths.length; i++) {
    var textLink = document.createElement("a");
    textLink.className = "text-article";
    textLink.href = textsPaths[i].link;

    var h1 = document.createElement("h1");
    h1.textContent = textsPaths[i].title;

    var p = document.createElement("p");
    p.textContent = textsPaths[i].caption;
    p.className = "caption";

    var paddingDiv = document.createElement("div");
    paddingDiv.className = "padding";

    textLink.appendChild(h1);
    textLink.appendChild(p);
    textsContainer.appendChild(textLink);
  };





  var worksPaths = [
    {
        images: [
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
        ],
        title: "Dark Corners",
        caption: "Kanal Gallery, 2023",
        href: "https://oliverudekyll.github.io/AntralEsteem/EN/Works/Pimenurgad/Pimenurgad.html"
    },
    {
        images: [
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-1.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-2.jpg"
        ],
        title: "On the Hate Speech Draft Legislation",
        caption: "Streets of Tallinn, 2021",
        href: "/EN/Works/VaenukoneEelnoust/VaenukoneEelnoust.html"
    }
  ];

  var worksContainer = document.getElementById("works-container");



function changeImage(index) {
  var currentImageIndex = 0;
  return function () {
    var img = this;
    img.src = worksPaths[index].images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % worksPaths[index].images.length;
}
};

for (var i = 0; i < worksPaths.length; i++) {
  var a = document.createElement("a");
  a.className = "work";
  a.href = worksPaths[i].href;
  var b = document.createElement("b");
  b.textContent = worksPaths[i].caption;
  a.textContent = worksPaths[i].title;
  var img = document.createElement("img");
  img.className = "work";
  img.src = worksPaths[i].images[0];
  var worksDiv = document.createElement("div");
  worksDiv.className = "project";

  worksDiv.appendChild(img);
  a.appendChild(b);
  worksDiv.appendChild(a);
  worksContainer.appendChild(worksDiv);

  img.addEventListener("click", changeImage(i));
};





var worksButton = document.getElementById("works");
var worksContainer = document.getElementById("works-container");
var textsButton = document.getElementById("texts");
var textsContainer = document.getElementById("texts-container");
var cvButton = document.getElementById("cv");
var cvContainer = document.getElementById("cv-container");

if (window.location.hash === "#works") {
    worksButton.classList.add("active");
    worksContainer.classList.add("active");
}

if (window.location.hash === "#texts") {
    textsButton.classList.add("active");
    textsContainer.classList.add("active");
}

if (window.location.hash === "#cv") {
    cvButton.classList.add("active");
    cvContainer.classList.add("active");
}

// WORKS BUTTON
worksButton.addEventListener("click", function () {
    worksButton.classList.toggle("active");
    worksContainer.classList.toggle("active");

    // Update URL hash fragment when the button is toggled
    if (worksButton.classList.contains("active")) {
        window.location.hash = "works";
    } else {
        window.location.hash = "";
    }
});

// TEXTS BUTTON
textsButton.addEventListener("click", function () {
    textsButton.classList.toggle("active");
    textsContainer.classList.toggle("active");

    // Update URL hash fragment when the button is toggled
    if (textsButton.classList.contains("active")) {
        window.location.hash = "texts";
    } else {
        window.location.hash = "";
    }
});

// CV BUTTON
cvButton.addEventListener("click", function () {
    cvButton.classList.toggle("active");
    cvContainer.classList.toggle("active");

    // Update URL hash fragment when the button is toggled
    if (cvButton.classList.contains("active")) {
        window.location.hash = "cv";
    } else {
        window.location.hash = "";
    }
});

/* var allElements = document.getElementsByTagName("a")

function changeText(event) {
  const originalText = event.target.textContent;
  event.target.setAttribute('data-original-text', originalText);  event.target.textContent = `Do you accept cookies? Do you accept cookies? Do you accept cookies? Do you accept cookies?`;
}

function revertText(event) {
  const originalText = event.target.getAttribute('data-original-text');;
}

for (let i = 0; i < allElements.length; i++) {
  const element = allElements[i];
  element.addEventListener('mouseover', changeText);
  element.addEventListener('mouseout', revertText);
}
   */
