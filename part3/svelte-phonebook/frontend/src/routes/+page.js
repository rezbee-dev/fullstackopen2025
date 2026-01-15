import { error } from '@sveltejs/kit'

const baseURL = "http://localhost:3001/persons"

export async function load({fetch}) {
    try {
        const res = await fetch(baseURL)

        // load() must return object, available to page via `data` in `$prop()`
        return {
            persons: await res.json()
        }
    } catch (err) {
        console.error("Error: ", err.message)
        error(500, "Unable to fetch data")
    }
}