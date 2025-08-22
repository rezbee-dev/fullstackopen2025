const Total = (props) => 
    <>
        <p><strong>Number of exercises {props.parts.map(v => v.exercises).reduce((sum, curr) => sum+curr)}</strong></p>
    </>

export default Total