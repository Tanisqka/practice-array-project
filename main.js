var planet = [
    "bear.png", "crocodile.png", "fox.png", "giraffe.png", "lion.png", "panda.png", "RHINO.png", "snake.png",
    "tiger.png","wolf.png"
];
var names = [
    "Bear", "Crocodile", "Fox", "Giraffe", "Lion", "Panda", "Rhino", "Snake", "Tiger","wolf"
];


function change() {
    document.getElementById("pic1").src = planet[i];
    document.getElementById("p1").innerHTML = names[i];

    i++

}
var i = 0;
function nextslide() {
    if (i == 11)

        i = 0;
}