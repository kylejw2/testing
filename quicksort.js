const quickSort = (arr) => {
    if (arr.length <= 1) {return arr;}
    const left = [];
    const right = [];
    const pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    if (left.length > 0 && right.length > 0) {
        return [...quickSort(left), pivot, ...quickSort(right)];
    } else if (left.length > 0) {
        return [...quickSort(left), pivot];
    } else {
        return [pivot, ...quickSort(right)];
    }
}

module.exports = quickSort;