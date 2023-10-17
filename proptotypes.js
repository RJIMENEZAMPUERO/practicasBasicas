Array.prototype.mayores = function () {
  let arregloModificado = [];
  for (let i = 0; i < this.length; i++) {
    if(this[i] > 3) {
      arregloModificado.push(false);
    }else{
      arregloModificado.push(this[i]);
    }
  }
  return arregloModificado;
}

let arreglo = [1,2,3,4,5];

console.log(arreglo.mayores())

class LatinoAmerica {
  constructor() {
    this.paises = [];
  }
}

LatinoAmerica.prototype.ingresar = function(pais) {
  this.paises.push(pais);
  return this.paises
}


const newPais = new LatinoAmerica();
console.log(newPais.ingresar('colombia'));
console.log(newPais.ingresar('argentina'));

console.log(newPais)


