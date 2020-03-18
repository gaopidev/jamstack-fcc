const saludos = [
    ' eres fabuloso.',
    ' espero sorprenderte.',
    ' toma un REST.',
    ' y él es Didi 🐶'
];

var saludo = saludos[Math.floor(Math.random() * Math.floor(saludos.length))];

document.querySelector("#vibra").append(saludo);
