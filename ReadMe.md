# Quick Sort Algorithm
I wanted to expand my knowledge on working with algorithms (aka building a commonly used sorting algorithm and reviewing its BigO notation).  
Here's a simple and clear explanation of the quick sort algorithm: https://www.youtube.com/watch?v=XE4VP_8Y0BU
## My algorithm
This algorithm uses recursion, which means that the function will call itself until it reaches a limit. The limit, in this case, is when the algorithm is passed a single-element array.
```javascript
const quickSort = (arr) => {
    if (arr.length === 1) {return arr}
    const leftArr = [];
    const rightArr = [];
    const pivot = arr[arr.length - 1]; // selecting the last element for the pivot point

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot]
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}
```
## Unit testing
To make sure that my algorithm properly sorts arrays from least to greatest values, I ran a testing suite with the `jest` package. After installing `jest` I included the script `"test": "jest"` in my package.json file to test my program with the command `npm test`.  
Here's an example of a test that I ran against my algorithm.
```javascript
test('Correctly sorts long arrays', () => {
    expect(quickSort([1, 3, 2, 123, 2, 12, 54, 1, 6, 2, 6, 7, 9, 3])).toEqual([1, 1, 2, 2, 2, 3, 3, 6, 6, 7, 9, 12, 54, 123])
})
```

## BigO Notation
|   Case   |   Efficiency  |
|----------|:-------------:|
| Average |  nlog(n) |
| Best |    nlog(n)   |
| Worst | n^2 |