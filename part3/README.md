# Part 3: NodeJS & Express

## 3A: Node.js & Express

### Phonebook

**Step 1: Create Express app**

- Implement endpoint `/api/persons` that returns hardcoded list of the following data:
    <details><summary>phonebook data</summary>

    ```json
    [
        { 
        "id": "1",
        "name": "Arto Hellas", 
        "number": "040-123456"
        },
        { 
        "id": "2",
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
        },
        { 
        "id": "3",
        "name": "Dan Abramov", 
        "number": "12-43-234345"
        },
        { 
        "id": "4",
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
        }
    ]
    ```
    </details>
- Implement `npm start` command that runs app
- Implement `npm run dev` command that runs app with hot reloading

**Step 2: `/info` GET route**

- Create `/info` route that displays:
  - a) number of phonebook entries
  - b) current time
    <details><summary>Example output</summary>

    ![img](https://fullstackopen.com/static/26383e4e706a7f89c140690121be2ea1/5a190/23x.png)

    </details>

**Step 3: `/api/persons/{id}` GET route**

- Create `/api/persons/{id}` route that returns phonebook entry with `{id}` id
- Return `404` error status code, if phonebook entry `{id}` is not found

**Step 4: `/api/persons/{id}` DELETE route**

- Create `/api/persons/{id}` route that deletes phonebook entry with `{id}` with id

**Step 5 & 6: `/api/persons` POST route**
- Create `/api/persons` route that adds new phonebook entry
- Ensure unique ID is generated for each entry
- Implement error handling (return status code & msg) for:
  - name or number missing
  - name already existing in phonebook

**Step 7 & 8: add `morgan` middleware**
- Configure the middleware to display data sent in HTTP POST requests
    <details><summary>Example output:</summary>

    ![img](https://fullstackopen.com/static/4ed4b48465d48df517158501c0be187e/5a190/24.png)
    </details>
- Note:
  - [creating new tokens](https://github.com/expressjs/morgan#creating-new-tokens)
  - [converting JSON to string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

## 3B: Deploying

### Phonebook

**Step 9: Replace json-server with Express backend in phonebook app**
- Build express app to serve phonebook data
- Modify react app to request data from the express app

**Step 10&11: Deploy application**
- Deploy the app so that the backend serves minified, production build of the frontend
- Ensure frontend still works locally, in development mode

**Misc: custom instructions**
- Backend
  - Load existing `db.json` to populate current (temporary) in-memory, array database, on app startup
- Frontend
  - Modify `vite.config.js` to include proxy config for `localhost:3000/api/persons`
- Use some solution to automate compiling frontend for production and moving it to backendgit st

## 3C: MongoDB

## 3D: Validation & Linting

<details><summary></summary>
</details>