const palindromes = function (s) {
    s = s.toLowerCase().replace(/[^a-z]/g, "");
    return s.split("").reverse().join("") === s;
};

// Do not edit below this line
module.exports = palindromes;
