function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    
    if (count === 0) {
        return null;
    } else {
        return sum / count;
    }
}

let result = averageOfNumbers([1, 'hello', 3, true, 5, null, 7]);
console.log(result);