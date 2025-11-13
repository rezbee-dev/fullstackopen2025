export async function load({ fetch }) {
    const res = await fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
    const countries = await res.json()

    return { countries }
}