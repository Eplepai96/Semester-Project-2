import { logout } from "../api/auth/logout.mjs"

export function setLogoutListener() {
    const logoutButton = document.querySelector("#signOutButton")
    
    logoutButton.addEventListener("click", (event) => {
        event.preventDefault () 
        logout()
    })
}
