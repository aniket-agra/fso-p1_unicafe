import { useState } from 'react'

function Button({text, clickHandler}) {
    return (
        <>
            <button onClick={clickHandler}>{text}</button>
        </>
    )
}

function StatisticLine({text, value}) {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

function Statistics({good, neutral, bad}) {
    let total = good + neutral + bad;
    let average = total === 0 ? 0 : (good - bad) / total;
    let positives = total === 0 ? 0 : good / total * 100;
    if (total === 0) {
        return (
            <>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>
        )
    } 
    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text = "good" value = {good} />
                    <StatisticLine text = "neutral" value = {neutral} />
                    <StatisticLine text = "bad" value = {bad} />
                    <StatisticLine text = "total" value = {total} />
                    <StatisticLine text = "average" value = {average} />
                    <StatisticLine text = "positives" value = {positives + '%'} />
                </tbody>
            </table>
        </>
    )
}

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseGood = function (e) {
        setGood(good + 1);
    }

    const increaseNeutral = function (e) {
        setNeutral(neutral + 1);
    }

    const increaseBad = function (e) {
        setBad(bad + 1);
    }

    return (
        <>
            <h1>give feedback</h1>
            <Button text = "good" clickHandler={increaseGood} />
            <Button text = "neutral" clickHandler={increaseNeutral} />
            <Button text = "bad" clickHandler={increaseBad} />
            <Statistics good = {good} neutral = {neutral} bad = {bad} />
        </>
    )

}

export default App
