/*
    LocationList component which iterates the `locations` state
    collection and renders individual Location components.
*/
import LocationComponent from "./Location.js"
import { useLocations } from "./LocationProvider.js"

// Reference to the DOM element into which the HTML components will be rendered
const dashboard = document.querySelector("#dashboard")


const LocationListComponent = () => {
    const locations = useLocations()

    return {
        render () {
            console.group(
                "%c Rendering Location Components",
                "color:#4d4b04; background-color:#ebe76c"
            )
            console.log("****   LocationListComponent render()   ****")

            dashboard.innerHTML += `
                <article id="locations" class="dashboard__item dashboard__item--locations">
                    <header class="listTitle">
                        <h2>Locations</h2>
                    </header>
                    ${
                        locations
                            .map(location => LocationComponent().render(location))
                            .join("")
                    }
                </article>
            `

            console.groupEnd()
        }
    }
}

export default LocationListComponent
