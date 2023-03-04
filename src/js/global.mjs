import * as global from "./handlers/index.mjs"

export function globalFunctions() {
    global.setupSearch()
    global.setRequireLoginListener()

}