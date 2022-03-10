let array =['a','b','d','e','f','g','h','i','x','z'];
let target = 'z';
let result = binarySearch(array, target)  
function binarySearch(array, target)
{    
   let length = 0;
   let result = array.length - 1;
   let mid="";
   while (result >= length) {
        mid = length + Math.floor((result - length) / 2);
  
       if (array[mid] == target)
           return mid;
  
       if (array[mid] > target)
           result = mid - 1;
       
       else 
           length = mid + 1;
   }
  
   return -1;
}

if  (result == -1) {
    document.write("ERROR not found!!!");
}
 else{document.write ("Binary search of the target element is " +  result);
}