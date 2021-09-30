/* 
&& -> false && true -> false "o valor mesmo"
|| ->  true && false -> vai retornar 'o valor verdadeiro'
FALSY
*false
0
'' "" ``
null // undefined
NaN
*/
/* 
function sayHello() {
  return "Hello";
}

const willExecute = "Baiane";
console.log(willExecute && sayHello());
 */

/* console.log(0 || false || null || "Matheus" || true);
 */
/* 
const userColor = "red";
const defaultColor = userColor || "black";

console.log(defaultColor);
 */

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || "Matheus" || c || d || e);
