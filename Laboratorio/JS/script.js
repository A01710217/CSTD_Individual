function generarTabla() {
    document.write('<p class="hero__ejercicio__title">Ejercicio 1</p>');
    let numero = parseInt(prompt('Ingrese un número a calcular sus cuadrados y cubos:'));
    document.write('<table class="hero__ejercicio", border="5">');
    document.write('<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>');
    for (let i = 1; i <= numero; i++) {
        let cuadrado = i * i;
        let cubo = i * i * i;
        document.write('<tr><td>' + i + '</td><td>' + cuadrado + '</td><td>' + cubo + '</td></tr>');
    }
    document.write('</table>');
}

generarTabla();

function sumar() {
    document.write('<p class="hero__ejercicio__title">Ejercicio 2</p>');
    //Generar dos números aleatorios entre 1 y 100
    let num1 = Math.floor(Math.random() * 100) + 1;
    let num2 = Math.floor(Math.random() * 100) + 1;

    //Calcular la suma de los dos números
    let suma = num1 + num2;

    //Solicitar al usuario que ingrese el resultado de la suma
    let tiempoInicio = new Date().getTime();
    let respuesta = parseInt(prompt('¿Cuánto es ' + num1 + ' + ' + num2 + '?'));
    let tiempoFin = new Date().getTime();
    let tiempoTotal = tiempoFin - tiempoInicio;

    //Verificar si la respuesta es correcta
    let mensaje = '';
    if (respuesta === suma) {
        mensaje = '¡Correcto!';
    } else {
        mensaje = 'Incorrecto. La respuesta correcta es ' + suma;
    }

    //Mostrar el resultado y el tiempo que tardó el usuario en responder
    document.write('<p class="hero__ejercicio">' + mensaje + '</p>');
    document.write('<p class="hero__ejercicio">Tiempo de respuesta: ' + tiempoTotal / 1000 + ' segundos</p>');
}

sumar();

function contarNumeros() {
    document.write('<p class="hero__ejercicio__title">Ejercicio 3</p>');
    let index = parseInt(prompt('Ingrese el tamaño de los arreglos: '));
    //Generar un arreglo con n números aleatorios
    let arreglo = [];
    for (let i = 0; i < index; i++) {
        arreglo.push(Math.floor(Math.random() * 201) - 100); //Números aleatorios entre -100 y 100
    }

    let negativos = 0;
    let ceros = 0;
    let mayoresCero = 0;

    //Iterar sobre el arreglo para contar los números negativos, los 0's y los números mayores a 0
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos = negativos + 1;
        } else if (arreglo[i] === 0) {
            ceros = ceros + 1;
        } else {
            mayoresCero = mayoresCero + 1;
        }
    }

    //Mostrar los resultados
    document.write('<p class="hero__ejercicio">Números negativos: ' + negativos + '</p>');
    document.write('<p class="hero__ejercicio">Números iguales a 0: ' + ceros + '</p>');
    document.write('<p class="hero__ejercicio">Números mayores a 0: ' + mayoresCero + '</p>');
}

contarNumeros();

function calcularPromedio() {
    document.write('<p class="hero__ejercicio__title">Ejercicio 4</p>');
    let index_matriz = parseInt(prompt('Ingrese la cantidad de arreglos a generar: '));
    let index_arr = parseInt(prompt('Ingrese el tamaño de los arreglos generados: '));

    //Generar una matriz con n números aleatorios
    let matriz = [];

    for (let i = 0; i < index_matriz; i++) {
        //Generar un arreglo y limpiar arreglo
        let arreglo = [];
        for (let i = 0; i < index_arr; i++) {
            arreglo.push(Math.floor(Math.random() * 100) + 1); //Números aleatorios del 0 al 100
        }
        matriz.push(arreglo);
    }

    let suma = 0;
    //Iterar sobre la matriz para sumar todos los números
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            suma = suma + matriz[i][j];
        }
        //Calcular el promedio
        let promedio = suma / index_arr;

        //Mostrar el resultado
        document.write('<p class="hero__ejercicio">Promedio arreglo ' + i+1 + ' de la matriz: ' + promedio + '</p>');
    }
}

calcularPromedio();

function inverso() {
    document.write('<p class="hero__ejercicio__title">Ejercicio 5</p>');
    let numero = parseInt(prompt('Ingrese un número a invertir: '));
    let numeroInverso = 0;
    let numeroOriginal = numero;

    //Calcular el número inverso
    while (numero > 0) {
        let digito = numero % 10;
        numeroInverso = numeroInverso * 10 + digito;
        numero = Math.floor(numero / 10);
    }

    //Mostrar el resultado
    document.write('<p class="hero__ejercicio">El número ' + numeroOriginal + ' invertido es ' + numeroInverso + '</p>');
}

inverso();

class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }

    calcularArea() {
        return this.base * this.altura;
    }
}
document.write('<p class="hero__ejercicio__title">Ejercicio 6</p>');
base = parseInt(prompt('Ingrese la base del rectángulo: '));
altura = parseInt(prompt('Ingrese la altura del rectángulo: '));
let rectangulo = new Rectangulo(base, altura); //Creación de un objeto de la clase Rectángulo
//Aceder a los métodos de la clase
let perimetro = rectangulo.calcularPerimetro();
let area = rectangulo.calcularArea();

document.write('<p class="hero__ejercicio">El perímetro del rectángulo es ' + perimetro + ' y su área es ' + area + '</p>');