const sumAll = function (start, end) {
    let sum = 0;
    let low = Math.min(start, end), high = Math.max(start, end);

    if (![...arguments].every(elem => elem >= 0 && typeof elem == 'number'))
        return 'ERROR';

    for (let i = low; i <= high; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
