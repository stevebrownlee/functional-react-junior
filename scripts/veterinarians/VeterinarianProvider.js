/*
    VeterinarianProvider component that maintain the application state for
    veterinarian data.
*/
let veterinarians = []

const setVeterinarians = veterinariansArray => {
    veterinarians = veterinariansArray.splice(0)
}

export const useVeterinarians = () =>
    veterinarians.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))


export const getVeterinarians = () => {
    console.log("****   VeterinarianProvider getVeterinarians()   ****")

    // Load database state into application state
    return fetch("http://localhost:8000/veterinarians")
        .then(response => response.json())
        .then(setVeterinarians)
}

export const deleteVeterinarian = id => {
    console.log("****   VeterinarianProvider deleteVeterinarian()   ****")

    return fetch(`http://localhost:8000/veterinarians/${id}`, {
        method: "DELETE"
    })
}

