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

console.log(`Área de um losango que tem o D = 32 cm e d = 18 cm ${Exercise.losango(32,18)}`);
console.log(`Área de um losango que tem o D = 200 cm e d = 50 cm ${Exercise.losango(200,50)}`);
console.log(`Área de um losango que tem o D = 75 cm e d = 25 cm ${Exercise.losango(75,25)}`);

console.log(`Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm: ${Exercise.trapézio(100, 70, 50)}`);
console.log(`Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm: ${Exercise.trapézio(75, 50, 35)}`);
console.log(`Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm: ${Exercise.trapézio(180, 120, 50)}`);

console.log(`Calcule a área de um círculo de raio igual 25cm: ${Exercise.circulo(25)}`);
console.log(`Calcule a área de um círculo de raio igual 100cm: ${Exercise.circulo(100)}`);
console.log(`Calcule a área de um círculo de raio igual 12.5cm: ${Exercise.circulo(12.5)}`);

