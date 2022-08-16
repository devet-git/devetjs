# Introduction
This library provided some popular JS function that useful for solve common problem

# Installing
```
npm i devetjs
```

# Using
```js
import {Array, Number} from "devetjs"
```

***

## Array's methods
`Array.mix(<array>):` Mix an array
```js
let arr = [1,2,3,4,5];
Array.mix(arr);
// now, the "arr" array is not [1,2,3,4,5], it has changed to [2,4,1,5,3] may be.
```

`Array.findMinMax(<array>):`: find min/max element in an array of number
```js
let arr = [1,2,4,-1,8];
cosole.log(Array.findMinMax(arr)); //output (array): [-1, 8]
```
***
***

## Number's methods

`Number.random(<start number>, <end number>):` generate a number in range from 'start' to 'end'
```js
console.log(Number.random()); //output: a random number
```