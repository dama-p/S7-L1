class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static comparingAge(mainUser, otherUser) {
    if (mainUser.age > otherUser.age) {
      return mainUser.firstName + " è più grande di " + otherUser.firstName;
    } else if (mainUser.age === otherUser.age) {
      return mainUser.firstName + "ha la stessa eta di " + otherUser.firstName;
    } else {
      return mainUser.firstName + "è più giovane di " + otherUser.firstName;
    }
  }
}

const mainUser = new User("Damaride", "Putignano", 30, "Puglia");
const otherUser = new User("Matteo", "Rossi", 27, "Lazio");

console.log(User.comparingAge(mainUser, otherUser));



// ESERICIZIO 2

const formNode = document.querySelector("form");
let petNameInput = document.getElementById("petName");
let ownerNameInput = document.getElementById("ownerName");
let speciesInput = document.getElementById("species");
let breedInput = document.getElementById("breed");

const animals = [];


class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;

    }

    sameOwner(anotherPet) {
        return this.ownerName === anotherPet.owner.ownerName;
    }

}


formNode.onsubmit = function (e) {
    e.preventDefault();

    const newPet = new Pet(petNameInput.value, ownerNameInput.value, speciesInput.value, breedInput.value);

    animals.push(newPet);

    console.log(animals);

    formNode.reset();





    console.log("form inviato")
}


