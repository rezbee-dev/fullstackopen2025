# Fullstackopen Notes


## JavaScript Notes

Update object by copying & merging new and existing fields (immutable)
- Done via "spread" operator
- Also overrides existing properties
    ```js
    // Example
    const obj1 = { foo: "bar", x: 42 };
    const obj2 = { foo: "baz", y: 13 };

    // Creates new copy of object w/ updated fields
    const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
    ```

Updating array, mutation vs non-mutation
    ![img](misc\array-immutable.png)


```js
// ----------------------------------
// Adding item to array
// A) push (mutable)
artists.push({id: nextId++, name: name})
// B) spread operator
updatedArtists = [...artists, {id: nextId++, name: name}]
// C) concat
updatedArtists = artists.contact({id: nextId++, name: name})

// ----------------------------------
// Removing item from array
// filter (immutable)
updatedArtists = artists.filter(a => a.id !== artistToRemove.id)

// ----------------------------------
// Replacing item(s) in array
// A) direct replacement (mutable)
let counters = [0,0,0]
counters[position] = counter[position] + 1
// B) .map()
let updatedCounters = counters.map((c, p) => {
    if (p == position)
        return c + 1
    else
        return c
})
```

Destructuring arrays

```js
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1 2 is printed
console.log(rest)          // [3, 4, 5] is printed
```

Destructuring objects
- Ex: `const { name, age } = props`

Updating object properties
- Can use dot notation or brackets, ex: `object1['secret number'] = 12341`

## React Notes

Create react app: 
- `npm create vite@latest . -- --template react`


## Svelte Notes

Create svelte app: 
- `npx sv create`