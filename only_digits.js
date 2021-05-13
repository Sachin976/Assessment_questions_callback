const string_1 = "hello@1234";
const string_2 = "12346481379";

//function to check whether a string only have digits
const check_only_digits = (string,callback) =>{
    for(let i = 0; i < len(string); i++){
        let temp = string[i];
        if(!"1234567890".includes(temp)){
            console.log("String contains characters");
            return;
        }   
    }
    callback("String only contains digits");
}

//length function
const len = (string) =>{
    let l=0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}



check_only_digits(string_1,(data)=>{
    console.log(data);
})
check_only_digits(string_2,(data)=>{
    console.log(data);
})