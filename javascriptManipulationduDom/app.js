//..........................Toggle..........................
let toggle1 = document.getElementById("toggle1");
let navtop = document.getElementById("navHeader");

toggle1.addEventListener("click", function () {
  if (navtop.style.display == "grid") {
    navtop.style.display = "none";
  } else {
    navtop.style.display = "grid";
  }
});

//..........................On/Off/Menu1..........................!
// variable qui permet de recupérer l'id qui situe dans le lien dans menu1
let Menu1 = document.getElementById("one");
// variable qui permet de recupérer la div qui contient la div (le block) menu
let blockMenu1 = document.getElementById("menu1");

let Menu2 = document.getElementById("two");
let blockMenu2 = document.getElementById("menu2");

let Menu3 = document.getElementById("three");
let blockMenu3 = document.getElementById("menu3");

let Menu4 = document.getElementById("four");
let blockMenu4 = document.getElementById("menu4");

let Menu5 = document.getElementById("five");
let blockMenu5 = document.getElementById("menu5");

Menu1.addEventListener("click", function () {
  if (blockMenu1.style.display == "block") {
    blockMenu1.style.display = "none";
  } else {
    blockMenu1.style.display = "block";
  }
});

//..........................On/Off/Menu2..........................
Menu2.addEventListener("click", function () {
  if (blockMenu2.style.display == "block") {
    blockMenu2.style.display = "none";
  } else {
    blockMenu2.style.display = "block";
  }
});

//..........................On/Off/Menu3..........................
Menu3.addEventListener("click", function () {
  if (blockMenu3.style.display == "block") {
    blockMenu3.style.display = "none";
  } else {
    blockMenu3.style.display = "block";
  }
});

//..........................On/Off/Menu4..........................

Menu4.addEventListener("click", function () {
  if (blockMenu4.style.display == "block") {
    blockMenu4.style.display = "none";
  } else {
    blockMenu4.style.display = "block";
  }
});

//..........................On/Off/Menu5..........................

Menu5.addEventListener("click", function () {
  if (blockMenu5.style.display == "block") {
    blockMenu5.style.display = "none";
  } else {
    blockMenu5.style.display = "block";
  }
});

//..........................ContainerMenu1..........................
//recupération du dom    
let images = document.getElementById("l1");
//     //initialisation tableau vide    
    let links = [];
//     //boucle pour envoyer les liens dans le tableau    
    for (let i = 1; i <= 9; i++){
      links.push(document.getElementById("l" + i));
    }
//     //boucle pour appliquer la fonction d'écoute à tous les liens    
    for (let i = 0; i < 9; i++){
        links[i].addEventListener("mouseover", mouseOver);
        links[i].addEventListener("mouseout", mouseOut);
    }
//     //fonction d'apparition et de changement d'image au survol    
    function mouseOver() {
//         //apparition de l'image        
        images.style.visibility = "visible";
//         //vérification du link survolé et changement de src de l'image        
        switch(this.id) {
            case "l1":
                images.src = "./ressource/facebook.png"               
                 break;
            case "l2":
                images.src= ""                
                break;
            case "l3":
                images.src = ""                
                break;
            case "l4":
                images.src = ""                
                break;
            case "l5":
                images.src = ""                
                break;
            case "l6":
                images.src = ""                
                break;
            case "l7":
                images.src = ""                
                break;
            case "l8":
                images.src = ""                
                break;
            default:
                images.src = ""        
          }
    };
//     //fonction de disparition après survol     
  function mouseOut() {images.style.visibility = "hidden";};
// // faire une function  qui permet de faire l'évenement mouseover
images.addEventListener('mouseover', function () {
  
});


//..........................ContainerMenu2..........................

//..........................ContainerMenu3..........................
function colortext(){
  let paragrap = document.getElementById("parag1");
  let styleSelect = document.getElementById("styleSelect").value
  
  if(styleSelect == "text2" ) {
    paragrap.style.color = 'red';
  } else if(styleSelect == "text3"){
    paragrap.style.color = 'blue';

  }else{
    paragrap.style.color = 'black';
  }
};
colortext();

//..........................ContainerMenu4..........................
