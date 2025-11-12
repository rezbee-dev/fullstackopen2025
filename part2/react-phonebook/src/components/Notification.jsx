const Notification = ({ message, error, setMessage }) => {
    
    setTimeout(()=> setMessage(null), 10000)

    if(message === null) 
        return null

    return (
        <div className={`notification ${error ? "notification-error":"notification-success"}`}>
            {message}
        </div>
    )
}

export default Notification