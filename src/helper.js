// Obtiene la diferencia de anios
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Calcula el total a pagar segun la marca del vehiculo

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;

    case "americano":
      incremento = 1.15;

      break;

    case "asiatico":
      incremento = 1.05;

      break;

    default:
      break;
  }

  return incremento;
}

// Calcula el tipo de seguro
// ? :  > ternarios
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

// Muestra la Primer Letra MAyuscula
// chartAt() El método de charat devuelve el carácter en el índice definido
// toUpperCase() convierte la cadena de string a mayuscula:
// slice () devuelve los elementos seleccionados en una matriz,
// como un nuevo objeto de matriz.
// Muestra la primer letra mayuscula
export function primerMayuscula( texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
