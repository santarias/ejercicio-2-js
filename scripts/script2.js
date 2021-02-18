let fraseCamel = "peroDondeSePongaUnArroz";

palabras = fraseCamel.split((/(?=[A-Z])/));

for (let i = 1; i < palabras.length; i++) {
  let palabraCambio = palabras[i].charAt(0).toLowerCase() + palabras[i].slice(1);
  palabras.splice(i, 1, palabraCambio);
}

console.log(palabras.toString().replaceAll(',', '_'));
