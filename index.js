var maxSequence = function(arr){
    const max = Math.max(...arr)
    const maxIndex = arr.findIndex(num => num === max)
    arr.splice(maxIndex, 1)
    const secondMax = Math.max(...arr)
    return max + secondMax
}

console.log(maxSequence([1,2,3,4,4,9]))

