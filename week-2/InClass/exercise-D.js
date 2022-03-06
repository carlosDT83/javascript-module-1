function estadoDeAnimo(estado) {
    if (estado === "happy") {
        return "Good job, you're doing great!"
    }else if (estado === "sad"){
        return "Every cloud has a silver lining"
    }else if (typeof estado === "number") {
        return ' "Beep beep boop" if you pass a number'
    }else {
        "I'm sorry, I'm still learning about feelings"
    }
}

console.log(estadoDeAnimo());