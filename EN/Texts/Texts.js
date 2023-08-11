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
      id: "glass-struggle",
      title: "Glass Struggle",
      caption: "Manifest and photographic essay",
      text: `“Glass Struggle” is a continuous artistic search that deals with glass as a paradox: brittle on one hand, tough and extremely resistant on the other. For example, high security facilities are made of glass&nbsp;– and even the pope rides in a car reinforced with bulletproof glass. Innovative glass manufacturing technologies have brought along significant changes in production processes, in the quality of materials, and in their availability.
      
      Glass can also be viewed as a symbol of democracy&nbsp;– as an open, transparent, and equal dialogue between the people and the state. But similarly it can refer to totalitarianism&nbsp;– to the divide between social strata and to the possibility of an incipient or already actualized corporate nightmare. Are any of us not transparent yet? Are there any that do not see their own (distorted) reflection from a screen, from a window?
      <br><br>
      To hide itself from public interest, the state apparatus uses a reflective-transparent camouflage. In architecture, this provides glass and windows with either an inclusive (transparent) or exclusive (reflective) meaning, creating either an open or an enclosed space. The pain points of “Glass Struggle” congregate around the binaries of the viewer/viewed and the observer/observed.
      
      Glass has two different ontological statuses: material and virtual. Glass is liminal by nature. It can be viewed as a barrier between social groups. In the context of governmental, ruling, and/or financial institutions, the virtuality of the window manifests as a self-portrait that depicts the environment there and reenacts it as a play; this happens in both directions&nbsp;– depending on which side the observer stands and whether the surface is transparent or not. Or both.
      
      One instrument of the powers that be is surveillance. During turbulent times, this also illustrates the vulnerability of power itself. Surveillance capitalism is growing fast, wooing people with promises of luxury in order to commodify them through their personal data. Data trafficking is a new hybrid form of human trafficking. The only apparent revolution we can imagine today is a privacy-based confrontation. This encompasses both daily life as well as a wider mentality and attitude. Data-peddling corporations that cosmically tower over us have to be made accountable for both the reliability of their content and the truthfulness of their tax reports&nbsp;– e.g. by way of compensations.
      
      In cooperation with playwright and poet Maria Lee, the “Glass Struggle” satellite www.struggle.glass is available for viewing both on the web as well as in-person, as part of one of the sculptures (“S.D.O. or the Satellite with a Deviated Orbit”). The graphic designer and conceptualizer of the web version is Maria Muuk, assisted by Patrick Zavadskis. The designer of the exhibition is Arvi Anderson.`
    },
    {
      id: "transparency-register",
      title: "Transparency Register",
      caption: "Essay and photography"
    },
    {
      id: "hybrid≠avant-grade",
      title: "Hybrid ≠ avant-garde",
      caption: '"Art criticism of "NU Performance Festival"'
    },
    {
      id: "from-the-peripheries",
      title: "From the Peripheries",
      caption: "Texts on windows"
    },
    {
      id: "on-the-role-of-mental-images-in-reasoning",
      title: "On The Role of Mental Images in Reasoning",
      caption: "Degree work"
    }
  ];

  var articleContainer = document.getElementById("article-container");
  var textContainer = document.getElementById("text-container");

  for (i = 0; i < textsPaths.length; i++) {
    var textLink = document.createElement("a");
    textLink.className = "text-article";
    textLink.id = textsPaths[i].id;

    var h1 = document.createElement("h1");
    h1.textContent = textsPaths[i].title;

    var p = document.createElement("p");
    p.textContent = textsPaths[i].caption;
    p.className = "caption";

    var paddingDiv = document.createElement("div");
    paddingDiv.className = "padding";

    textLink.appendChild(h1);
    textLink.appendChild(p);
    articleContainer.appendChild(textLink);
  };

  articleContainer.addEventListener("click", function(event) {
    var clickedElement = event.target;

    if (clickedElement.classList.contains("text-article")) {
        var clickedId = clickedElement.id;

        var selectedTextObject = textsPaths.find(function(obj) {
            return obj.id === clickedId;
        });

        if (selectedTextObject) {
            textContainer.textContent = "";
            textContainer.textContent = selectedTextObject.text;
        } else {
            console.log("Text object with id", clickedId, "not found");
        }
    }
});