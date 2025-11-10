# Part 1 Exercises

## 1A: Intro to React

### 1.1 - Course Information - Step 1

<details><summary>Setup Course Information app</summary>

- `main.jsx` starter code:

    ```js
    import ReactDOM from 'react-dom/client'

    import App from './App'

    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
    ```

- `App.jsx` starter code:

    ```js
    const App = () => {
        const course = 'Half Stack application development'
        const part1 = 'Fundamentals of React'
        const exercises1 = 10
        const part2 = 'Using props to pass data'
        const exercises2 = 7
        const part3 = 'State of a component'
        const exercises3 = 14

        return (
                <div>
                    <h1>{course}</h1>
                    <p>{part1} {exercises1}</p>
                    <p>{part2} {exercises2}</p>
                    <p>{part3} {exercises3}</p>
                    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
                </div>
        )
    }

    export default App
    ```
</details>

<details><summary>Refactor "App.jsx" into 3 components</summary>

- `App.jsx` should look like this:
    ```js
    const App = () => {
        // const-definitions

        return (
            <div>
                <Header course={course} />
                <Content ... />
                <Total ... />
            </div>
        )
    }
    ```
</details>

### 1.2 - Course Information - Step 2

<details><summary>Refactor "Content" component to consist of "Part" components</summary>

- Each `Part` component should display the name and number of exercises of one part
- `Content` component will consist of `Part` components
- See example below:

    ```js
    const Content = ... {
        return (
            <div>
                <Part .../>
                <Part .../>
                <Part .../>
            </div>
        )
    }
    ```
</details>

## 1B: JavaScript

### 1.3 - Course Information - Step 3

<details><summary>Refactor App.jsx to use objects for its data</summary>

- Code:

    ```js
    const App = () => {
        const course = 'Half Stack application development'
        const part1 = {
            name: 'Fundamentals of React',
            exercises: 10
        }
        const part2 = {
            name: 'Using props to pass data',
            exercises: 7
        }
        const part3 = {
            name: 'State of a component',
            exercises: 14
        }

        return (
            <div>
            ...
            </div>
        )
    }
    ```
</details>

### 1.4 - Course Information - Step 4

<details><summary>Refactor App.jsx to move the data into an array</summary>

- Ex: 
    ```js
    const App = () => {
        const course = 'Half Stack application development'
        const parts = [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]

        return (
            <div>
            ...
            </div>
        )
    }
    ```

- Modify the components in App.jsx to accept the array of objects, ex:
    ```js
    const App = () => {
        // const definitions

        return (
            <div>
                <Header course={course} />
                <Content parts={parts} />
                <Total parts={parts} />
            </div>
        )
    }
    ```
</details>

### 1.5 - Course Information - Step 5

<details><summary>Refactor the data in App.jsx to be in one object, labelled "Course"</summary>

- Ex:

    ```js
    const App = () => {
        const course = {
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7
                },
                {
                    name: 'State of a component',
                    exercises: 14
                }
            ]
        }

        return (
            <div>
            ...
            </div>
        )
    }
    ```
</details>

## 1D: Complex state & Debugging

### 1.6 - Unicafe - Step 1

<details><summary>Setup Unicafe app</summary>

- Starter code:

    ```js
    import { useState } from 'react'

    const App = () => {
        // save clicks of each button to its own state
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)

        return (
            <div>
                code here
            </div>
        )
    }

    export default App
    ```

- Ex:
    ![img](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

</details>

### 1.7 - Unicafe - Step 2

<details><summary>Refactor App.jsx to show average score and positive percentage</summary>

- Ex:
    ![img](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)
</details>

### 1.8 - Unicafe - Step 3

<details><summary>Refactor App.jsx to extract statistics display into it's own component</summary>

- `App.jsx` ex:

    ```js
    // a proper place to define a component
    const Statistics = (props) => {
        // ...
    }

    const App = () => {
        const [good, setGood] = useState(0)
        const [neutral, setNeutral] = useState(0)
        const [bad, setBad] = useState(0)

        // do not define a component within another component
        const Statistics = (props) => {
            // ...
        }

        return (
            // ...
        )
    }
    ```
</details>

### 1.9 - Unicafe - Step 4

<details><summary>Modify the app to display statistics only when feedback is gathered</summary>

- Ex:
    ![img](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)
</details>

### 1.10 - Unicafe - Step 5

<details><summary>Refactor the code to use two components for feedback button and for displaying a single statistic</summary>

- Note: application data should remain in `App.jsx`
- `Statistics.jsx` component should consist of `StatisticLine` components, ex:

    ```js
    const Statistics = (props) => {
        /// ...
        return(
            <div>
                <StatisticLine text="good" value ={...} />
                <StatisticLine text="neutral" value ={...} />
                <StatisticLine text="bad" value ={...} />
                // ...
            </div>
        )
    }
    ```
</details>

### 1.11 - Unicafe - Step 6

<details><summary>Refactor app to display the statistics in an HTML table</summary>

- Ex:
    ![img](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)
</details>

### 1.12 - Anecdotes - Step 1

<details><summary>Create app that displays anecdotes</summary>

- Starter code, `App.jsx`:

    ```js
    import { useState } from 'react'

    const App = () => {
        const anecdotes = [
            'If it hurts, do it more often.',
            'Adding manpower to a late software project makes it later!',
            'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
            'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            'Premature optimization is the root of all evil.',
            'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
            'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
            'The only way to go fast, is to go well.'
        ]
        
        const [selected, setSelected] = useState(0)

        return (
            <div>
                {anecdotes[selected]}
            </div>
        )
    }

    export default App
    ```

- Ex:
    ![img](https://fullstackopen.com/static/8577fa00fc4d946e2322de9b2707c89c/5a190/18a.png)
</details>

### 1.13 - Anecdotes - Step 2

<details><summary>Modify the app to allow voting for the displayed anecdote & display its votes</summary>

- Ex:
    ![img](https://fullstackopen.com/static/06f95cb43a18bd6429174200a8d17cff/5a190/19a.png)
</details>

### 1.14 - Anecdotes - Step 3

<details><summary>Modify the app to display the anecdote w/ the most votes</summary>

- Ex:
  ![img](https://fullstackopen.com/static/3e8638efbbbbcabac7bb79466ab3a5f6/5a190/20a.png)
</details>