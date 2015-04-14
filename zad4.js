function getMax(arr) {
    if (!arr.length) {
        return undefined;
    }

    var l = arr.length,
        type = typeof(arr[0]),
        max = arr[0];


    for (var i = 0; i < l; i++) {
        if (typeof(arr[i]) !== type) {
            return undefined;
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([3,4,5,5,1,1,1,4]));