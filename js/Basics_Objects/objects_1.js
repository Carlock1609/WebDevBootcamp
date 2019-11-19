// calling object, dot notation, bracket notation
var person = {
    name: "Cindy",
    age: 32,
    city: "portland",
};
console.log(person.age);
var str = "name"
console.log(person[str])
person.age += 1
console.log(person.age)

// empty object
var person = {}
person.name = "Travis"
person.age = 32
person.city = "portland"
console.log(person)

// ARRAYS able to access with index value
var dogs = ["Rusty", "Lucky", "Bubba"];
console.log(dogs);
console.log(dogs[1]);
dogs.push("loser")
console.log(dogs)

// Able to access with key
var dog = {
    name: "Bubba",
    breed: "Lab",
}
console.log(dog.name)
dog.age = 6;
console.log(dog)

// object in array
var posts = [
    {
        title: "Cats are bad",
        author: "Colt",
        comments: ["Bad", "Awesome"]
    },
    {
        title: "Cats are actually awesome",
        author: "Cat Luvr",
        comments: ["<3", "Go to hell i hate you"]
    },
]

