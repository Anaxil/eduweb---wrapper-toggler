function Toggler(selector) {
    this._element = document.querySelector(selector);
}

Toggler.prototype.getElem = function() {
    return this._element;
}

Toggler.prototype.show = function() {
    this._element.style.display = "block";
}

Toggler.prototype.hide = function() {
    this._element.style.display = "none";
}


var elem = new Toggler("#section");
var button = document.querySelector("#button");

console.log(elem.getElem());

button.addEventListener("click", function() {

    if(elem.getElem().style.display == "none") {
        elem.show();
        button.innerHTML="Ukryj";
    } else {
        elem.hide();
        button.innerHTML="Pokaż";
    }

}, false);