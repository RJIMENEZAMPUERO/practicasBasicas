class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`hola ${this.nombre}`)
  }
}

class Programador extends Persona {
  constructor(nombre, edad, añosExperiencia){
    super(nombre, edad);
    this.añosExperiencia = añosExperiencia;
  }

  codear() {
    console.log(`soy ${this.nombre} Codeo desde hace ${this.añosExperiencia}`);
  }
}

let programador = new Programador('jose',13,3);
programador.codear();
programador.saludar();