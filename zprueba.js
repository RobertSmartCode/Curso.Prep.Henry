
function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //Tu código:
  
    var resultado = numeros.reduce(function(acumulador,elemento){
      return acumulador + elemento ;
    }, 0)
    cb(resultado);
   
  }

 //var numeros = [1,2,3,4,5,6];
  var numeros = ["Soy", "alumno", "de", "Henry"];
  var resultado = numeros.reduce(function(acumulador,elemento){
    return acumulador +" "+ elemento ;
  },);

  console.log(resultado);

  var arr = [1,2,3,4,5]

  arr.forEach(function(elemento){
    console.log(elemento);
  })