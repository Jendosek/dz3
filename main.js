//Task1
function toPower(n, exp) {
    if (exp === 0) return 1
    return n * toPower(n, exp - 1);

}
let number = prompt('Введіть число:')
let exponent = prompt('Введіть степінь:');
alert(toPower(number, exponent));

//Task2
function isDevide(n1, n2) {
    if (n2 === 0) return n1;
    return isDevide(n2, n1 % n2);
}
let num1 = prompt('Введіть перше число:');
let num2 = prompt('Введіть друге число:');
alert(`Найбільший спільний дільник: ${isDevide(num1, num2)}`);  

//Task3
function maxNumber(num) {
    if (num < 10) return num;
    return Math.max(num % 10, maxNumber(Math.floor(num / 10)));
}
let numberForMax = prompt('Введіть число для пошуку найбільшої цифри:');
alert(`Найбільша цифра в числі: ${maxNumber(numberForMax)}`);

//Task4
function isSimple(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
let numberForSimple = prompt('Введіть число для перевірки на простоту:');
if (isSimple(numberForSimple)) {
    alert(`${numberForSimple} є простим числом.`);
}
else {
    alert(`${numberForSimple} не є простим числом.`);
}

//Task5
function isNum(n, divisor = 2, arr = []) {
    if (n < 2) return arr;

    if (n % divisor === 0) {
        arr.push(divisor);
        return isNum(n / divisor, divisor, arr);
    }

    if (divisor > n / 2) { 
        arr.push(n);
        return arr;
    }

    return isNum(n, divisor + 1, arr);
}

let number5 = prompt('Введіть число для розкладення на множники:');
let factors = isNum(number5);
alert(`Множники числа ${number5}: ${factors.join('*')}`);

//Task6
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let fibIndex = prompt('Введіть індекс числа Фібоначчі:');
alert(`Число Фібоначчі з індексом ${fibIndex}: ${fibonacci(fibIndex)}`);