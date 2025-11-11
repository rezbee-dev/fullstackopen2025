# Part 2: Communicating with Server

## Part 2A: Rendering collections & Using modules

### 2.1 - Course Information - Step 6

<details><summary>Create "Course component" and refactor App.jsx to use it</summary>

- `Course` component should consist of `Header` and `Content` components
- Ex:
    ![img](https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/5a190/8e.png)
- `App.jsx` code should look like:

    ```js
    const App = () => {
        const course = {
            id: 1,
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                }
            ]
        }

        return <Course course={course} />
    }

    export default App
    ```
</details>

### 2.2 - Course Information - Step 7 & 8

<details><summary>Display the sum of exercises of the course</summary>

- Be sure to calculate the sum of exercises using array method reduce
- Ex:
    ![img](https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/5a190/9e.png)
</details>

### 2.3 - Course Information - Step 9

<details><summary>Refactor App.jsx to include and display arbitrary number courses</summary>

- Ex:
  ![img](https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/5a190/10e.png)
- Course data, code:

    ```js
    const App = () => {
        const courses = [
            {
                name: 'Half Stack application development',
                id: 1,
                parts: [
                    {
                        name: 'Fundamentals of React',
                        exercises: 10,
                        id: 1
                    },
                    {
                        name: 'Using props to pass data',
                        exercises: 7,
                        id: 2
                    },
                    {
                        name: 'State of a component',
                        exercises: 14,
                        id: 3
                    },
                    {
                        name: 'Redux',
                        exercises: 11,
                        id: 4
                    }
                ]
            }, 
            {
                name: 'Node.js',
                id: 2,
                parts: [
                    {
                        name: 'Routing',
                        exercises: 3,
                        id: 1
                    },
                    {
                        name: 'Middlewares',
                        exercises: 7,
                        id: 2
                    }
                ]
            }
        ]

        return (
            <div>
            // ...
            </div>
        )
    }
    ```
</details>

## Part 2B: Forms

### 2.6 - Phonebook - Step 1

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

### 2.7 - Phonebook - Step 2

<details><summary>Modify phonebook to show error message if user adds name that already exists</summary>

- Ex:
    ![img](https://fullstackopen.com/static/d5be58590c1460090cb1c87adf201886/5a190/11e.png)
</details>

### 2.8 - Phonebook - Step 3

<details><summary>Modify phonebook to allow users to add phone numbers along with names</summary>

- Ex:
  ![img](https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/5a190/12e.png)
</details>

### 2.9 - Phonebook - Step 4
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

### 2.10 - Phonebook - Step 5

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

## 2C: Fetching data from server

### 2.11 - Phonebook - Step 6

<details><summary>Modify app to load data from json-server</summary>

- Run `npm install axios`
- Run `npm install json-server --save-dev`
- Add to the `"scripts"` section in `package.json`: `"server": "json-server -p 3001 db.json"`
- Create `db.json` in project root where `package.json` is located:

    ```json
    {
        "persons":[
            { 
                "name": "Arto Hellas", 
                "number": "040-123456",
                "id": "1"
            },
            { 
                "name": "Ada Lovelace", 
                "number": "39-44-5323523",
                "id": "2"
            },
            { 
                "name": "Dan Abramov", 
                "number": "12-43-234345",
                "id": "3"
            },
            { 
                "name": "Mary Poppendieck", 
                "number": "39-23-6423122",
                "id": "4"
            }
        ]
    }
    ```
- Modify `App.jsx` to fetch data from `json-server`, using effect hook
- App should display the phonebook entries from `db.json`
</details>

## 2D - Posting data to server

### 2.12 & 2.13 - Phonebook - Step 7 & 8

<details><summary>Modify app so new entries saved to `db.json`</summary>

- Create "service" module for read & create HTTP operations with `db.json`, ex:

    ```js
    import axios from 'axios'
    const baseUrl = 'http://localhost:3001/notes'

    // Note, example uses "thenables" and not "async/await" syntax
    const getAll = () => {
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
    }

    const create = newObject => {
        const request = axios.post(baseUrl, newObject)
        return request.then(response => response.data)
    }

    const update = (id, newObject) => {
        const request = axios.put(`${baseUrl}/${id}`, newObject)
        return request.then(response => response.data)
    }

    export default { getAll, create, update }
    ```
</details>

### 2.14 - Phonebook - Step 9

<details><summary>Add functionality to allow users to delete entries from phonebook</summary>

- Add delete button next to phonebook entries
- Require users to confirm deletion before deleting the entry
- Ex:
    ![img](https://fullstackopen.com/static/591ebc9e0e2dc651c0d2877efd763a59/5a190/24e.png)
</details>

### 2.15 - Phonebook - Step 10

<details><summary>Add functionality to allow users to update phone numbers</summary>

- Modify the code so that if number is added for an existing user, the new number will replace the old number
- Require app to prompt user to confirm the phone number update, ex:
  ![img](https://fullstackopen.com/static/7353398520426bd823cf92202767653f/5a190/16e.png)
</details>

## 2E - CSS

### 2.16 - Phonebook - Step 11

<details><summary>Modify code to display message when user adds phone number successfully</summary>

- Create `Notification` component, ex:

    ```js
    const Notification = ({ message }) => {
        if (message === null) {
            return null
        }

        return (
            <div className="error">
                {message}
            </div>
        )
    }

    export default Notification
    ```

- Ex:
    ![img](https://fullstackopen.com/static/da9af454f06489ca6e7453150beda738/5a190/27e.png)
</details>

### 2.17 - Phonebook - Step 12

<details><summary>Display error message when user tries to change an entry that is no longer present</summary>

- Ex:
    ![img](https://fullstackopen.com/static/dfc66f03514b3f013cf19ba1339ba34f/5a190/28e.png)

- Handle `404` error from updating deleted entry so that `uncaught (in promise)...` error is not shown in console

</details>

### 2.18 - Countries - Step 1

<details><summary>Create app that allows user to display countries based on name</summary>

- Use `https://studies.cs.helsinki.fi/restcountries/` to retrieve country data
- Allow user to enter in country name, and display all countries matching the query
- If there are more than 10 countries matching the query, display "Too many matches" message, and do not display any results
- If there are ten or fewer but more than in the result, then display the country names
- If there is only one result matching the queury, then display the country information (capital, size, languages, flag)
- Ex:
    ![img](https://fullstackopen.com/static/803f67f920205fa07c8a4fba1bee3f6c/5a190/19b1.png)
    ![img](https://fullstackopen.com/static/747155703f07b7380f832315bdf74203/5a190/19b2.png)
    ![img](https://fullstackopen.com/static/1a6a879d9fc09281966cd23fea476557/5a190/19c3.png)
</details>

### 2.19 - Countries - Step 2

<details><summary>Add button next to countries in results that displays their info</summary>

- Ex:
    ![img](https://fullstackopen.com/static/16082d868d0fd6c92226f9bb6c18a40a/5a190/19b4.png)
</details>

### 2.20 - Countries - Step 3

<details><summary>Use external API service to display country weather data</summary>

- Can use https://openweathermap.org/
- Save API-KEY securely using `VITE_` prefix
- Ex:
    ![img](https://fullstackopen.com/static/dd60431bb19bb4e148ae621e3dedcceb/5a190/19x.png)
</details>