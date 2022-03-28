const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        if (!oldest) return current;
        return getAge(oldest) < getAge(current) ? current : oldest;
    });
};

const getAge = (person) => ((person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth);

// Do not edit below this line
module.exports = findTheOldest;
