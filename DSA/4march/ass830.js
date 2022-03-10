function insertionSort(inputArr) {
        for (let i = 1; i < inputArr.length; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}
let result = insertionSort([5,2,3,1]);
console.log(result);