/* 
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite

*/

// if pode ser usado sozinho
// sempre que utilizo a palavra else preciso de um if
// posso ter varios else if na checagem
// só posso ter um else na checagem
// podemos utilizar condições sem else if, utilizando apenas if e else

const hour = 50;

if (hour >= 0 && hour <= 11) {
  console.log("Bom dia");
} else if (hour >= 12 && hour <= 17) {
  console.log("Boa tarde");
} else if (hour >= 18 && hour <= 23) {
  console.log("Boa noite");
} else {
  console.log("Olá");
}
