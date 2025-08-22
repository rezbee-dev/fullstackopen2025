import Part from "./Part"

const Content = ({parts}) => 
    <>
        {parts.map(p => <Part part={p.name} exercise={p.exercises} key={p.id} />)}
    </>

export default Content