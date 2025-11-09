# Part 1: Intro To React

## 1A: Intro to React

### 1.1: Course Information Step 1

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

### 1.2: Course Information Step 2

<details><summary>Refactor "Content" component into "Part" components</summary>

- Each `Part` component should display the name and number of exercises of one part
- `Content` component will consist of `Part` components

</details>

<details><summary></summary>
</details>
