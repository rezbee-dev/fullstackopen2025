const Filter = ({search, setSearch}) => {
    return (
        <label>Filter: <input value={search} onChange={e => setSearch(e.target.value)} /></label>
    )
}

export default Filter