let findTheOldest = function (people) {
    let now = new Date().getFullYear();
    
    console.log("")

    for (let person of people) {
        if (person.yearOfDeath == undefined) {
            person.age = now - person.yearOfBirth; //Age if alive
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth; //Age if dead
        }
        console.log(person.name + ": " + person.age + " years old.");
    }
    console.log("");

    let ages = people.map((people) => people.age);
    
    people.sort((a, b) => a.age < b.age ? 1 : -1);
    console.table(people);
    console.log(people[0].name + " is the oldest.");
    console.log("----------")
    return people[0];
};

module.exports = findTheOldest
