const arr = [1,5,2,4,52,3,21,54,86,25,78,34,29,62,8];

//function to find out the max and min number in an array
const max_min = (arr,callback)=>{
    let max = 0;
    let min = 99;
    for(let i= 0; i <= len(arr);i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i]< min){
            min = arr[i];
        }
    }
    callback(`highest number in the array is: ${max}`);
    callback(`lowest number in the array is: ${min}`);
}

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

max_min(arr,(data)=>{
    console.log(data);
})

