"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./exercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 4, 5, 6, 7, 12])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangulo(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangulo(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangulo(100, 200)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.quadrado(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.quadrado(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.quadrado(100)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.retangulo(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.retangulo(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.retangulo(100, 200)}cm²`);
