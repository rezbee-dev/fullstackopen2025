import Button from "./Button"

const Feedback = ({ onClickGood, onClickNeutral, onClickBad }) => {
    return (
        <>
            <h2>Give Feedback</h2>
            <div>
                <Button handleClick={onClickGood} label={"good"} />
                <Button handleClick={onClickNeutral} label={"neutral"} />
                <Button handleClick={onClickBad} label={"bad"} />
            </div>
        </>
    )
}

export default Feedback