//Punto 1 
let fraseSnakecase = "me_gustan_mucho_las_patatas";
let palabras = fraseSnakecase.split('_');

for (let i = 1; i < palabras.length; i++) {
    let palabraCambio = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    palabras.splice(i, 1, palabraCambio);
}

console.log(palabras.toString().replaceAll(',', ''));


