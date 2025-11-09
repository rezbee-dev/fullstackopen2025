# Part 2B: Forms

## 2.6: Phonebook Step 1

<details><summary>Setup `phonebook` app</summary>

  - Starter code:
    ```js
    import { useState } from 'react'

    const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
    const [newName, setNewName] = useState('')

    return (
            <div>
                <h2>Phonebook</h2>
                <form>
                    <div>
                        name: <input />
                    </div>
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
                <h2>Numbers</h2>
                ...
            </div>
        )
    }

    export default App
    ```
</details>

<details><summary>Implement adding new names & displaying all names</summary>

  - See example:
  ![img](https://fullstackopen.com/static/501199c4a6d7a5702a7bdf31998d5a1d/5a190/10e.png)
</details>

## 2.7: Phonebook Step 2

<details><summary>Modify phonebook to show error message if user adds name that already exists</summary>

- Ex:
    ![img](https://fullstackopen.com/static/d5be58590c1460090cb1c87adf201886/5a190/11e.png)
</details>

## 2.8: Phonebook Step 3

<details><summary>Modify phonebook to allow users to add phone numbers along with names</summary>

- Ex:
  ![img](https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/5a190/12e.png)
</details>

## 2.9: Phonebook Step 4
<details><summary>Add search field to filter displayed phone numbers by name</summary>

- Dummy data

    ```js
    const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    // ...
    }
    ```

- Ex:

    ![img](https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/5a190/13e.png)

</details>

## 2.10: Phonebook Step 5

<details><summary>Refactor your code to extract the parts into separate components (Atleast 3)</summary>

- Example code:

    ```js
    const App = () => {
    // ...

    return (
        <div>
        <h2>Phonebook</h2>

        <Filter ... />

        <h3>Add a new</h3>

        <PersonForm 
            ...
        />

        <h3>Numbers</h3>

        <Persons ... />
        </div>
    )
    }
    ```
</details>