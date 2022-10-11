"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapézio = exports.losango = exports.retangulo = exports.quadrado = exports.triangulo = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name}, tem ${age} anos!!!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangulo(base, altura) {
    return (base * altura) / 2;
}
exports.triangulo = triangulo;
function quadrado(lado) {
    return (lado ** 2);
}
exports.quadrado = quadrado;
function retangulo(base, altura) {
    return (base * altura);
}
exports.retangulo = retangulo;
function losango(D, d) {
    return (D * d) / 2;
}
exports.losango = losango;
function trapézio(B, b, h) {
    return ((B + b) * h) / 2;
}
exports.trapézio = trapézio;
function circulo(r) {
    let PI = 3.14;
    return (PI * (r ** 2));
}
exports.circulo = circulo;
