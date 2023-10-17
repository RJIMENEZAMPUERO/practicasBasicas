
class Auto {
  constructor(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
  }
  informacion = () => {
    return(`${this.color} jejejejeje`)
  }
}

const newAuto = new Auto(3, 'rosadito', 'corolla', 2023, 5);
const newAuto2 = new Auto(4, 'verde', 'corolla', 2023, 4);
console.log(newAuto.informacion());
console.log(newAuto.color);