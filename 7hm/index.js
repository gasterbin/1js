function pow(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new TypeError('Обидва аргументи повинні бути числами');
    }
    if (exponent < 0) {
        throw new RangeError('Експонента повинна бути невід\'ємним числом');
    }
    if (exponent === 0) {
        return 1;
    }
    return base * pow(base, exponent - 1);
}


try {
    const base = 2;
    const exponent = 1;
    const result = pow(base, exponent);
    console.log('Результат :>>', result);
} catch (error) {
    if (error instanceof TypeError) {
        console.error('Помилка типу:', error.message);
    } else if (error instanceof RangeError) {
        console.error('Помилка діапазону:', error.message);
    } else {
        console.error('Невідома помилка:', error.message);
    }
}

