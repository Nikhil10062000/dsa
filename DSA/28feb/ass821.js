 let arr = [2,7,11,15];
let target = 9
let twoSumsSorted=(arr,target)=>{

    let low=0;
    let high=arr.length-1

    while(arr[low]+arr[high]!=target){

        if(arr[low]+arr[high]>target){
            high--
        }else{
            low++
        }

    }
    return [low+1,high+1];
}
