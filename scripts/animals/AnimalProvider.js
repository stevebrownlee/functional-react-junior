/*
    AnimalProvider component that maintain the application state for
    animal data.
*/
export let animals = []

const setAnimals = animalArray => {
    animals = animalArray.splice(0)
}

export const getAnimals = () => {
    console.log("****   AnimalProvider getAnimals()   ****")

    // Load database state into application state
    return fetch("http://localhost:8000/animals")
        .then(response => response.json())
        .then(setAnimals)
}

export const deleteAnimal = id => {
    console.log("****   AnimalProvider deleteAnimal()   ****")

    // Perform database state transition
    return fetch(`http://localhost:8000/animals/${id}`, {
        method: "DELETE"
    })
}

