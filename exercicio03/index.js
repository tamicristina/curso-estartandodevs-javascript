function calculoValor(quantidade) {
  if (quantidade < 12) {
    const menosDeUmaDuzia = quantidade * 1.3;
    return menosDeUmaDuzia;
  } else {
    const igualMaiorUmaDuzia = quantidade * 1;
    return igualMaiorUmaDuzia;
  }
}
console.log(`O custo total da compra é de R$`, calculoValor(13).toFixed(2));
