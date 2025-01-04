# React useEffect Hook Incorrect State Update
This repository demonstrates a common error in React's `useEffect` hook where the state update function uses the previous state value, resulting in unexpected behavior.  The `bug.js` file showcases the incorrect implementation. The correct implementation is provided in `bugSolution.js`.

## Problem
The issue lies in using the previous value of `count` within the `setCount` function inside the `useEffect` hook. This leads to `count` always being 1 instead of incrementing correctly.