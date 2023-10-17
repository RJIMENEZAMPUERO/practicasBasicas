// let deportes = {
//   conBalon : ['Football', 'Basketball', 'Rugby'],
//   sinBalon: ['Boxeo', 'Surf', 'Trekking']
// };

// let persona = {
//   name: 'lucas',
//   edad: 26,
//   estudios: {
//     esProgramador: true
//   }
// }

// console.log(persona.hasOwnProperty('edad'));
// console.log(Object.keys(persona));

// for (const key in persona) {
//   console.log(`Esta es la propiedad: ${key}`)
//   console.log(persona[key])
// }


let mascota = {
  animal: 'Perro',
  raza: 'Ovejero Alemán',
  amistoso: true,
  dueña: 'Maria lopez',
  saludar: function(){
    console.log('hola ' + this.dueña)
  }
}

mascota.saludar()