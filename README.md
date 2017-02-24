# ⚛ reswitcher
Performance switch case for redux reducers

Switch cases are slow, or that's what they said.

### Usage 

Install it as dependency:

`npm i reswitcher --save`

or 

`yarn add reswitcher`

And now...! Feel free to use it as yuor reducer.

```
import reswitcher from 'reswitcher';

const counter (state = 0, action) =>
  reswitcher({
    'RESET': 0,
    'INCREMENT': () => state + 1,
    'DECREMENT': () => state -1
  })(state)(action.type)
```
