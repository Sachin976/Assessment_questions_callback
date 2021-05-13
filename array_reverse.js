const arr1 = [1,2,3,4,5,6,7];

//reverse function
const reverse = (arr,callback) =>{
    let end = len(arr) - 1;
    let rev_arr = [];
    let i = 0;
    while(i<len(arr)){
        rev_arr[i] = arr1[end];
        end--;
        i++;
    }
    callback(rev_arr);
} 

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

reverse(arr1,(data)=>{
    console.log(data);
})