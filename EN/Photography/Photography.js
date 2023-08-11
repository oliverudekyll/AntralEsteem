/* document.addEventListener("DOMContentLoaded", function () {
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
}); */





var imgPaths = [
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Klaasvastupanu/1.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Klaasvastupanu/2.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Klaasvastupanu/3.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Klaasvastupanu/4.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Klaasvastupanu/5.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
  "https://oliverudekyll.github.io/AntralEsteem/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
]

var worksContainer = document.getElementById("works-container");

for (var i = 0; i < imgPaths.length; i++) {
  var img = document.createElement("img");
  img.src = imgPaths[i];
  img.className = "works";

  var imgDiv = document.createElement("div");
  imgDiv.className = "article"

  var padding = document.createElement("div");
  padding.className = "padding";

  imgDiv.appendChild(img);
  worksContainer.appendChild(imgDiv);
}

worksContainer.appendChild(padding);

var images = document.querySelectorAll(".works")

images.forEach (image => {
  image.addEventListener("click", function() {
    
      
    var background = document.createElement("div");
    background.className = "quick-view-overlay"
    var nuImg = document.createElement("img");
    nuImg.className = "quick-view-image"
    nuImg.src = image.src

    background.remove();

  
    document.body.appendChild(background);
    background.appendChild(nuImg);

    background.addEventListener("click", function() {
    background.remove();
   })
  })
})