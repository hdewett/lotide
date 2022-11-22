# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @hdewett/lotide`

**Require it:**

`const _ = require('hdewett/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- assertArraysEqual(actual, expected): this function compares two arrays and console.logs whether they match or not
- assertEqual(actual, expected): function compares two values and console.logs if they are the same or not
- assertObjectsEqual(actual, expected): takes in two objects and console.logs an appropriate message to the console
- countLetters(string): function counts number of times a letter shows up in a string
- countOnly(allItems, itemsToCount): countOnly will return an object containing counts of everything that the input object listed
- eqArrays(array1, array2): function eqArrays which takes in two arrays and returns true or false, based on a perfect match
- eqObjects(object1, object2): Returns true if both objects have identical keys with identical values. Otherwise returns false.
- findKey(object, callback): function takes in an object and value, it scans the objects and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- findKeyByValue(object, value): function takes in an object and value, it scans the objects and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- head(array): returns first item in an array
- letterPositions(sentence): function will return all the indices in the string where each character is found
- map(array, callback): function takes in an array and a callback function, it applies the callback function to each item in the array and appends it to an array, returning the new array at the end. In this case, the callback function is returning the element found at index of 0 of each element of the array.
- middle(array): takes in an array and returns the middle-most elements of the given array
- tail(array): returns the "tail" of an array, everything except for the first item of the provided array
- takeUntil(array, callback): function will return a slice of the array with elements taken from the beginning until the callback/predicate returns a truthy value.
- without(source, itemsToRemove): function will remove a subset of a given array and remove unwanted elements
