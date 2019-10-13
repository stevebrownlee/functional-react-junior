/*
    Main component responsible for initializing the application
    state and rendering components for initial view to present
    to users.
*/
import NavBarComponent from "./nav/NavBar.js"
import AnimalListComponent from "./animals/AnimalList.js"
import LocationListComponent from "./locations/LocationList.js"
import ApplicationViewController from "./nav/ApplicationViewController.js"
import { getAnimals } from "./animals/AnimalProvider.js"
import { getLocations } from "./locations/LocationProvider.js"
import { getVeterinarians } from "./veterinarians/VeterinarianProvider.js"


console.log("****   Main module instructions for initial view   ****")

// Render the navigation bar, which does not depend on any application state
NavBarComponent().render()

// Initialize the event listeners that control which view is visible
ApplicationViewController.init()


console.group(
    "%c Loading Initial Application State",
    "color:#164667; background-color:#b2d2e8"
    )

/*
    Pull database state needed for initial view
    into application state.
*/
getAnimals()
    .then(getLocations)
    .then(getVeterinarians)
    .then(console.groupEnd)

    /*
        Now that the application state has transitioned
        that new state needs to be rendered as HTML
        to the user.
    */
   .then(LocationListComponent().render)
    .then(AnimalListComponent().render)
