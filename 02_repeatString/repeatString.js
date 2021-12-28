const repeatString = function (str, timesToRepeat) {
    let res = '';

    if (timesToRepeat < 0)
        return "ERROR";

    for (let i = 0; i < timesToRepeat; i++)
        res += str;

    return res;
};

// Do not edit below this line
module.exports = repeatString;
