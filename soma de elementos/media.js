function calcularMedia(arr) {
    const soma = arr.reduce((total, num) => total + num, 0);
    return soma / arr.length;
}
console.log(calcularMedia([20, 30]));
