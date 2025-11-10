# Part 1: Intro to React

## 1D: Complex state & debugging

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