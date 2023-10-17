const viajar = ( destino ) => {
  return destino ? 'brazil' : 'argentina'
}


const pais = viajar( false );

console.log(pais);