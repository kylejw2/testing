const quickSort = require('./quicksort')

test('Returns an empty array when an empty array is passed', () => {
    expect(quickSort([])).toEqual([])
})
test('Returns the same array when a single-element array is passed', () => {
    expect(quickSort([1])).toEqual([1])
})
test('Correctly sorts an array of length 2', () => {
    expect(quickSort([4, 1])).toEqual([1, 4])
})
test('Correctly sorts an array with two large numbers', () => {
    expect(quickSort([101020320, 398124])).toEqual([398124, 101020320])
})
test('Correctly sorts long arrays', () => {
    expect(quickSort([1, 3, 2, 123, 2, 12, 54, 1, 6, 2, 6, 7, 9, 3])).toEqual([1, 1, 2, 2, 2, 3, 3, 6, 6, 7, 9, 12, 54, 123])
})