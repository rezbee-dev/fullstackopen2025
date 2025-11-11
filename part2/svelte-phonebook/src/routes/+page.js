export async function load({fetch}) {
    const res = await fetch('http://localhost:3001/persons')

    // load() must return object, available to page via `data` in `$prop()`
    return {
        persons: await res.json()
    }
}