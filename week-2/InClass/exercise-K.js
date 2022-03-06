const estudiantes = ["Pedrito", "María", "Justin", "Pablito", "Marcelita",];

for (let i = 0; i < estudiantes.length; i++) {
    const message = "Es el estudiante: " + estudiantes[i];
    const indEst = "index nro.: " + i;
    console.log(indEst, message)
}