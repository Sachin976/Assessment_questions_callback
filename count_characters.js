const text = "pneumonoultramicroscopicsilicovolcanoconiosis";

//character counting function
const count_char = (string,callback) =>{
    let count = {};
    for(let i = 0; i < len(string) ;i++){
        let variable = string[i];
        if(count[variable]){
            count[variable]++;
        }else{
            count[variable] = 1;
        }
    }
    callback(count);
}

//length fucntion
const len = (string) =>{
    let l = 0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}

count_char(text,(data) =>{
    console.log(data);
})