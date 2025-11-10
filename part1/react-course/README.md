# Part 1: Intro To React

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
