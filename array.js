var cities = ["Dhaka", "Gazipur", "Mymensingh", "Khulna"];
console.log(cities);

cities.push("Barishal", "Dinajpur");
console.log(cities)

cities.pop();
console.log(cities);

cities.shift();
console.log(cities);

cities.unshift("Noakhali");
console.log(cities);

// cities.splice(3, 2, "Mawna");
// console.log(cities);

                                    // Note:
// (if I use index number then splice will delete values starting from the next index number.)

cities.splice(cities.indexOf("Mymensingh"), 2, "Mawna");
console.log(cities);


                                    // Note:
// (if I use indexOf then splice will delete values starting from the indexOf index number.)

console.log(cities.length);

for (let i = 0; i < cities.length; i++) {
   console.log(cities[i]);    
};




// Multidimention array
 var persons = [
    ["Joy", 23, "Tapir Bari"],
    ["Mukta", 22, "Sailat"],
    ["Jui", 6, "Satir Bazar"]
 ];

 console.log(persons);

 for (let i = 0; i < persons.length; i++) {
    for (let j = 0; j < persons[i].length; j++) {
        console.log(persons[i][j]);
    };
};
