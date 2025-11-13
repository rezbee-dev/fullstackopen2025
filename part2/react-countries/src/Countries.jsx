import Country from "./Country"
import CountryName from "./CountryName"

const Countries = ({ countries }) => {

    return (
        <div>
            {countries.map((c, i) => <CountryName key={i} country={c} />)}
        </div>
        
    )
}

export default Countries