function quickSort(arr) {
    if (arr.length < 2) return arr
    let arrLeft = []
    let arrRight = []
    let center = []
    let centerNumber = arr[Math.floor((arr.length - 1)/2)]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < centerNumber) {
            arrLeft.push(arr[i])
        } else if (arr[i] > centerNumber) {
            arrRight.push(arr[i])
        } else {
            center.push(arr[i])
        }
    }
    return quickSort(arrLeft).concat(center,quickSort(arrRight))
}
console.log(quickSort( [3, 1, 4, 6, 5, 7, 2]))