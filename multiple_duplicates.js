const arr = [1,2,3,4,5,4,5,3,2,1,5,3,4,6,1,5,3,7,8,9];

//function to find multiple duplicates in an array
const multiple_duplicates = (arr,callback)=>{
    let duplicate = {};
    for(let i = 0; i < len(arr); i++){
        let c = 0;
        for(let j = i+1; j <=len(arr); j++){
            if (arr[i] == arr[j]){
                c++;
            }
        }
        let text = "duplicates_of_" + arr[i];
        if(c >= 1){
            if(duplicate[text]){
                continue;
            }else{
                duplicate[text] = c;
            }
    
        }
    
    }
    callback(duplicate);
}

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

multiple_duplicates(arr,(data)=>{
    console.log(data);
})