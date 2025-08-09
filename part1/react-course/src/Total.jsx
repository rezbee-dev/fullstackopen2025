const Total = (props) => 
    <>
        <p>Number of exercises {props.parts.map(v => v.exercises).reduce((sum, curr) => sum+curr)}</p>
    </>

export default Total