function findMin(arr, n)
{
 
    if (n == 1)
        return arr[0];
         
    return Math.min(arr[n - 1],
        findMinRec(arr, n - 1));
}
function findMax(arr, n)
{
 
    if (n == 1)
        return arr[0];
         
    return Math.max(arr[n - 1],
        findMinRec(arr, n - 1));
}
let arr = [ 1, 4, 45, 6, -50, 10, 2 ];
let n = arr.length;
document.write(findMinRec(arr, n))
document.write(findMaxRec(arr, n))