const baseURL = "http://localhost:3001/persons"

export async function load({fetch}) {
    const res = await fetch(baseURL)

    // load() must return object, available to page via `data` in `$prop()`
    return {
        persons: await res.json()
    }
}