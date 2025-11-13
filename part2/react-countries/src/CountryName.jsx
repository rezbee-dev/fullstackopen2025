import { useState } from "react"
import Country from "./Country"

const CountryName = ({country}) => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="countries">
                <p>{country.name.common}</p>
                <button onClick={() => setShow(!show)}>{show ? "Hide":"Show"}</button>
            </div>
            {show ? <Country data={country} /> : null}
        </>
    )
}

export default CountryName