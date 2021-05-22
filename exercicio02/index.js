const votos = [
  {
    eleitores: 8000,
    brancos: 1000,
    nulos: 2000,
    validos: 5000,
  },
];
votos.forEach((votosTotal) => {
  let votosBrancos = (votosTotal.brancos * 100) / votosTotal.eleitores;

  let votosNulos = (votosTotal.nulos * 100) / votosTotal.eleitores;

  let votosValidos = (votosTotal.validos * 100) / votosTotal.eleitores;

  console.log(`Percentual de votos Brancos: ${votosBrancos}%`);
  console.log(`Percentual de votos Nulos ${votosNulos}%`);
  console.log(`Percentual de votos Validos ${votosValidos}%`);
});
