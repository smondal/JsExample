var animal = {
	species: 'dog',
	weight : 23,
	sound: 'woof'
}

// var species = animal.species
// var weight = animal.weight
var { species, weight } = animal
console.log("The" + species + 'says' + weight)


//How to run this file
// babel example.js | node --harmony_destructuring