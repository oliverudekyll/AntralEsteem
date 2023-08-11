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
            "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-1.jpg",
            "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-2.jpg",
            "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-3.jpg",
            "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-4.jpg",
            "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-5.jpg",
            "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-6.jpg",
            "/Images/Content/Pimenurgad/StenEltermaa-Pimenurgad-7.jpg",
        ],
        title: "Dark Corners",
        caption: "Kanal Gallery, 2022",
        captionEmphasis: "UV-print on car windows, car parts",
        text: 
`When it comes to garages, one immediately notices the absence of windows. A car and a garage complete each other. The car has windows that offer a 360-degree panoramic view. The views from the car windows are both static and moving. The car is mobile, and through its windows, one can always see something new. Unexpected scenes and spectacles continuously unfold before your eyes.
        
From this seed grew the idea to use a garage-gallery to exhibit views from both moving and stationary cars. The exhibition can also be viewed as an act of spatial compensation, for what is a garage without a car, and what is a car without windows? The garage remains incomplete until it has a car and the views that extend from it.

The car is a fortress that is used to comfortably and safely observe from a distance. Looking out of the car windows is also a cinematic activity, as the movement of the car becomes a sequence of images. The views from the car windows invite contemplation on time and existence, serving as a therapeutic form for enduring pain and suffering that heal with time and movement. While the world around me moves and changes, I remain still inside the car, observing without interference.`
    }
  ];

  var worksContainer = document.getElementById("works-container");

for (var i = 0; i < worksPaths.length; i++) {

  for (var j = 0; j < worksPaths[i].images.length; j++) {
    var img = document.createElement("img");
    img.className = "work";
    img.src = worksPaths[i].images[j];
    var worksDiv = document.createElement("div");
    worksDiv.className = "project";

    worksDiv.appendChild(img);
    worksContainer.appendChild(worksDiv);
  }
};

var infoContainer = document.getElementById("info-container");

for (var i = 0; i < worksPaths.length; i++) {
  var title = document.createElement("h1");
  title.textContent = worksPaths[i].title;

  var captionEmphasis = document.createElement("i");
  captionEmphasis.textContent = worksPaths[i].captionEmphasis;
  captionEmphasis.className = "caption";

  var caption = document.createElement("b");
  caption.textContent = worksPaths[i].caption;
  caption.className = "caption";

  var text = document.createElement("div");
  text.textContent = worksPaths[i].text;
  text.className = "body";

  var lineBreak1 = document.createElement("br");
  var lineBreak2 = document.createElement("br");
  var lineBreak3 = document.createElement("br");

  var padding = document.createElement("div");
  padding.className = "padding";

  infoContainer.appendChild(title);
  infoContainer.appendChild(caption);
  infoContainer.appendChild(lineBreak1);
  infoContainer.appendChild(captionEmphasis);
  infoContainer.appendChild(lineBreak2);
  infoContainer.appendChild(lineBreak3);
  infoContainer.appendChild(text);
  infoContainer.appendChild(padding)
}

var exhibitionText = document.getElementById("exhibition-text");

exhibitionText.addEventListener("click", function () {
  exhibitionText.classList.toggle("active");
  infoContainer.classList.toggle("active");
});
