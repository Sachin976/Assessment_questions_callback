const arr = [1,2,3,3,4,5,4,6,7,7,8,9];

//function to find out the duplicate number in an array
const duplicate_num = (arr,callback) =>{
    for(let i = 0; i < len(arr); i++){
        for(let j = i+1; j <= len(arr); j++){
            if(arr[i] == arr[j]){
                callback(`array has a duplicate number of: ${arr[i]}`);
            }
        }
    }
}

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}


duplicate_num(arr,(data)=>{
    console.log(data);
})