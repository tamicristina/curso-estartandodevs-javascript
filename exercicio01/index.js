function idade(anos, meses, dias) {
  const anosEmDias = anos * 365;
  const mesesEmDias = meses * 30;
  const totalDias = anosEmDias + mesesEmDias + dias;

  return totalDias;
}

console.log("A idade total é de: " + idade(28, 1, 15) + " dias");
