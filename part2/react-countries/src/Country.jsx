const Country = ({data}) => {
    return (
      <div>
        <h1>{data.name.common}</h1>
        <p>Capital {data.capital}</p>
        <p>Area {data.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.keys(data.languages).map(k => <li>{data.languages[k]}</li>)}
        </ul>
        <img src={data.flags.png} alt={data.flags.alt} />
      </div>
    )
}

export default Country