# Part 1: Intro To React

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