const truth = true;

// let tem escopo de bloco {... bloco}
// var tem escopo de função

let name = "Nau"; // criando
var name2 = "Nau";

if (truth) {
  let name = "Queen"; // criando
  console.log(name, name2);

  if (truth) {
    let name = "Bau";
    console.log("OK");
  }
}
