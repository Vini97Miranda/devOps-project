const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

const token = 2;

if (token == 1) {
    addCSS(".teacher { display: initial; }")
}
else if (token == 2) {
    addCSS(".devlopper { display: initial; }")
}