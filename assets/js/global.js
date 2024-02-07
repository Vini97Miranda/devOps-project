const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

const token = 2;

if (token == 1) {
    addCSS(".teacher { display: block; }");
    addCSS(".topnav.responsive a.teacher { display: block; }");
}
else if (token == 2) {
    addCSS(".developer { display: block; }");
    addCSS(".topnav.responsive a.developer { display: block; }");
}
else {
    addCSS(".developer { display: none; }")
}

console.log(token);

function hamburger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}