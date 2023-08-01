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
      caption: "Manifest and photographic essay"
    },
    {
      title: "Transparency Register",
      caption: "Essay and photography"
    },
    {
      title: "Hybrid ≠ avant-garde",
      caption: '"Art criticism of "NU Performance Festival"'
    },
    {
      title: "From the Peripheries",
      caption: "Texts on windows"
    },
    {
      title: "On The Role of Mental Images in Reasoning",
      caption: "Degree work"
    }
  ];

  var textsContainer = document.getElementById("texts-container");

  for (i = 0; i < textsPaths.length; i++) {
    var textLink = document.createElement("a");
    textLink.className = "text-article";

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
        caption: "Kanal Gallery, 2023"
    },
    {
        images: [
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-1.jpg",
            "https://oliverudekyll.github.io/AntralEsteem/Images/Content/VaenukoneEelnoust/StenEltermaa-VaenukoneEelnoust-2.jpg"
        ],
        title: "On the Hate Speech Draft Legislation",
        caption: "Streets of Tallinn, 2021"
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





// WORKS BUTTON
document.addEventListener("DOMContentLoaded", function(){
    var worksButton = document.getElementById("works");
    var worksContainer = document.getElementById("works-container");

    worksButton.addEventListener("click", function(){
        worksButton.classList.toggle("active");
        worksContainer.classList.toggle("active");
    })
});

// TEXTS BUTTON
document.addEventListener("DOMContentLoaded", function(){
  var textsButton = document.getElementById("texts");
  var textsContainer = document.getElementById("texts-container"); 

  textsButton.addEventListener("click", function(){
      textsButton.classList.toggle("active");
       textsContainer.classList.toggle("active");
  })
});

// CV BUTTON
document.addEventListener("DOMContentLoaded", function(){
  var cvButton = document.getElementById("cv");
   var cvContainer = document.getElementById("cv-container");

  cvButton.addEventListener("click", function(){
      cvButton.classList.toggle("active");
       cvContainer.classList.toggle("active");
  })
}
);
  