var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

/*function mentores(mentor) {
    return mentor.toUpperCase();
}*/

function mentores(mentor) {
    const nombreEnMayuscula = mentor.toUpperCase();
    return nombreEnMayuscula;
}

console.log(mentores(mentor1))


function saludosAGritos(mentor){
    return "HELLO" + " " + mentores(mentor1)
}

console.log(saludosAGritos(mentor1));