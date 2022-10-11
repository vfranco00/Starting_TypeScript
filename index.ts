import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3,4,5,6,7,12])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangulo(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangulo(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangulo(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.quadrado(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.quadrado(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.quadrado(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.retangulo(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.retangulo(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.retangulo(100, 200)}cm²`);

