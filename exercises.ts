export function greeter(name: string):string {
    return `Olá ${name}`
}

export function personAge(name: string, age: number): string {
    return `${name}, tem ${age} anos!!!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangulo(base: number, altura: number): number {
    return (base * altura) / 2;
}

export function quadrado(lado: number): number {
    return (lado ** 2);
}

export function retangulo(base: number, altura: number): number {
    return (base * altura);
}