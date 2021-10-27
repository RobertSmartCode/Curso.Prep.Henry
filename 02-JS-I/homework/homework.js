// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Smart";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  let Palabra = `${str}`;
  return Palabra;
}
let Mensaje = devolverString('String');


function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let plus = x + y;
  return plus;
  
}
let S = suma(2,3);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let plus = x - y;
  return plus;
  
}
let R = resta(6,3);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  let plus = x * y;
  return plus;
  
}
let M = multiplica(6,3);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let plus = x / y;
  return plus;
  
}
let D = divide(6,3);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x===y){
      I = true;
  }else{
      I =false;
  }
  return I;
}
let Iguales = sonIguales(5,5);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  let A = str1.length
  let B = str2.length
  if(A===B){
    I = true;
}else{
    I =false;
}
return I;
}
let MismaLongitud = tienenMismaLongitud("perro", "carro");


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num<90){
    I = true;
}else{
    I =false;
}
return I;
}
let QueNoventa = menosQueNoventa(91);


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){
    I = true;
}else{
    I =false;
}
return I;
}
let QueCincuenta = mayorQueCincuenta(91);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let nM = x % y ;
  return nM
  
}
let resto = obtenerResto(20, 3);


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  let nM = num % 2 ;
  if(nM===0){
      nM= true;
  }else{
      nM= false;
  }
  return nM
  
}
let par = esPar(21);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  let nM = num % 2 ;
  if(nM===0){
      nM= false;
  }else{
      nM= true;
  }
  return nM
  
}
let impar = esImpar(22);
console.log(impar);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let A =Math.pow(num, 2);
    return A
  }
  let EAC = elevarAlCuadrado(12); 
  

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let A =Math.pow(num, 3);
    return A
  }
  let EACC = elevarAlCubo(3); 

  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    let A =Math.pow(num, exponent);
    return A
  }
  let EL = elevar(2,8); 

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  let A =Math.round(num);
  return A
}
let RN = redondearNumero(2.49999); 

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let A =Math.ceil(num);
  return A
}
let RNA = redondearHaciaArriba(2.49999); 

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let A = Math.random();
  return A;
  
}
let nRan = numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  let A = numero;
  if(numero===0){
      A = false;
  }else if (numero>0){
     A= "Es positivo";
  }else {
     A = "Es negativo";
  } 
  return A;
}
let NEP= esPositivo(12);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let Palabra = `${str}!`;
  return Palabra;
}
let aSE = agregarSimboloExclamacion('String');

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let Palabra = `${nombre} ${apellido}`;
  return Palabra;
}
let cN = combinarNombres('Robert', 'Smart');

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let Palabra = `Hola ${nombre}!`;
  return Palabra;
}
let oS = obtenerSaludo('Robert');

  

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let Calculo = alto*ancho;
  return Calculo;
}
let oAR = obtenerAreaRectangulo(10,5);

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let Calculo = 4*lado;
  return Calculo;
}
let rP = retornarPerimetro(5);

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let Calculo = (base*altura) / 2;
  return Calculo;
}
let aT = areaDelTriangulo(6,10);
console.log(aT);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

  let Calculo = euro * 1.2;
  return Calculo;
}
let dEA = deEuroAdolar(120);
console.log(dEA);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
  if(letra.length>1) {return "Dato incorrecto"}
  else if(letra==="a"|| letra==="e"|| letra==="i"|| letra==="o"|| letra==="u"){
    return "Es vocal";
  }return "Dato incorrecto";
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
