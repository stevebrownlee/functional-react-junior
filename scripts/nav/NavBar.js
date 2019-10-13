const navElement = document.querySelector("#navbar")

const NavBarComponent = () => {
    return {
        render: () => {
            console.log(`****   NavBarComponent render()   ****`)

            navElement.innerHTML = `
                <nav class="navbar__nav">
                    <div class="navbar__navItem">
                        <button id="dashboardViewBtn" class="fakeLink">Dashboard</button>
                    </div>
                    <div class="navbar__navItem">
                        <button id="animalViewBtn" class="fakeLink">Animals</button>
                    </div>
                    <div class="navbar__navItem">
                        <button id="locationViewBtn" class="fakeLink">Locations</button>
                    </div>
                    <div class="navbar__navItem">
                        <button id="veterinarianViewBtn" class="fakeLink">Veterinarians</button>
                    </div>
                </nav>
            `
        }
    }
}

export default NavBarComponent
