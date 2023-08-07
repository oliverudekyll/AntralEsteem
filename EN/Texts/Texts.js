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