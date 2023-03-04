import { Button } from "bootstrap"
import { load } from "../storage/index.mjs"

const profileNav = document.querySelector("#profileNav")

export function setRequireLoginListener(){
    if (load("token") === null) {
        profileNav.innerText = "log in"
        profileNav.setAttribute ("href", "/profile/login")
    } else {
        profileNav.innerText = "Profile"
        profileNav.setAttribute ("href", "/profile")
    }
}
