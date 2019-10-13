export let locations = []

const setLocations = locationArray => {
    locations = locationArray.splice(0)
}

export const getLocations = () => {
    console.log("****   LocationProvider getLocations()   ****")

    // Load database state into application state
    return fetch("http://localhost:8000/locations")
        .then(response => response.json())
        .then(setLocations)
}
