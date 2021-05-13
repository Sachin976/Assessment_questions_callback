
const arr = [1,2,3,2,4,1,0,0,4,3,1,4,3,4,1,3,5];

//remove duplicates
const remove_duplicates =(arr,callback)=>{
    let new_arr = [];
    sort(arr);
    new_arr.push(arr[0]);
    for(let k =1; k <len(arr); k++){
        if(arr[k] === arr[k-1]){
            continue;
        }else{
            new_arr.push(arr[k]);
        }
    }
    callback(new_arr);
}


//length function
const len =(arr) => {
    let l = 0
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

//sort function
const sort = (arr) =>{
    for(let i = 0; i < len(arr); i++){
        for(let j = i+1; j <= len(arr); j++){
            if(arr[j] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }

        }
    }
    return arr;
}

remove_duplicates(arr,(data)=>{
    console.log(data);
})


