const StatsLine = ({ label, stat }) => {
    return (
        <tr>
            <td>{label}</td>
            <td>{stat}</td>
        </tr>
    )
}

export default StatsLine