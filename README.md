# Smart Calculator Input

## Features
1. Keyboard input for power-users and accessibility.
2. Common buttons for mobile users.
3. Fully customisable button layout. Ability to write buttons from scratch as needed.

## Demo
https://georgiosdev.com/Calculator

## Usage
```npm i smart-react-calculator```

```javascript
import React from 'react';
import { ReactCalculator, Calculate } from 'smart-react-calculator';

export const MyComponent = () => {
    return (
        <article id='Calculator'>
            <h1>Calculator</h1>

            <ReactCalculator
            />
        </article>
    );
};
```
