const text = "hello_world_how_are_you";

//function to find out the duplicate characters in a string
const duplicate_char = (string,callback)=>{
    let duplicate = {};
    const arr = string.split("");
    for(let i = 0; i < len(arr); i++){
        let c = 0;
        for(let j = i+1; j <=len(arr); j++){
            if(arr[i] === "_"){
                continue;
            }else if (arr[i] == arr[j]){
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

duplicate_char(text,(data)=>{
    console.log(data);
})