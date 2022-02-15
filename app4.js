'use strict'
/**
 * Функция округляет число до десятых
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function roundToTenths(number) {
    return parseInt(number * 10) / 10;
}

/**
 * Функция складывает два числа
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function sum(a, b) {
    return a + b
}

let result1 = sum(10, 7);
alert(result1);

/**
 * Функция вычитает из числа а число b
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function diff(a, b) {
    return a - b
}

let result2 = diff(10, 7);
alert(result2);

/**
 * Функция умножает число а на число b
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */

function mult(a, b) {
    return a * b
}

let result3 = mult(10, 7);
alert(result3);

/**
 * Функция делит число а на число b
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */

function div(a, b) {
    return a / b
}

let result4 = roundToTenths(div(10, 7));
alert(result4);