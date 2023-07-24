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





  var worksPaths = [
    {
        images: [
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
        ],
        title: "Pimenurgad",
        caption: "Kanal galerii, 2023"
    },
    {
        images: [
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
            "../Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
        ],
        title: "Pimenurgad",
        caption: "Kanal galerii, 2023"
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
}

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
}

document.addEventListener("DOMContentLoaded", function(){
    var worksButton = document.getElementById("works");
    var worksContainer = document.getElementById("works-container");

    worksButton.addEventListener("click", function(){
        worksButton.classList.toggle("active");
        worksContainer.classList.toggle("active");
    })
})

  