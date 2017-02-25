# ⚛ reswitcher
Performance switch case for redux reducers

Switch cases are slow, or that's what they said.

They also say, it doesn't fit in the functional paradigsm. 

It's also not Immutable.

It uses `break`, which is anti-functional.

...bla, bla, bla...

This is a super fast and lightweight (3 lines of code) recomposition of switch statement for functional code, which makes this statement easy and fast to read.

### Usage 

Install it as dependency:

`npm i reswitcher --save`

or 

`yarn add reswitcher`

And now...! Feel free to use it as your reducer.

```
import reswitcher from 'reswitcher';

const counter (state = 0, action) =>
  reswitcher({
    'RESET': 0,
    'INCREMENT': () => state + 1,
    'DECREMENT': () => state -1
  })(state)(action.type)
```
