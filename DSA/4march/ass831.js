var sortColors = function(nums) {
    
    let start=0
    let end =nums.length-1;

    for(let i=0;i<end;i++){
        if(nums[i]===0){
            [nums[i],nums[start]]=[nums[start],nums[i]]
            start++;
        }

        if(nums[i]===2){
            [nums[i],nums[end]]=[nums[end],nums[i]]
            end--
            i--
        }
    }
    console.log(nums)
};
sortColors([2,0,2,1,1,0])