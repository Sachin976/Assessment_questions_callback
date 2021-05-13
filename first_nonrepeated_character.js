const text = "hello_there_how_are_you";

//function to check first non repeated charatcer
const first_non_rep = (string,callback)=>{
    let rep = "";
    for(let i = 0; i< len(string)-1; i++){
        let c= 0;
        for(let j = i+1; j< len(string); j++){
            if(string[i] === string[j]){
                c++;
                if(!rep.includes(string[i])){
                    rep += string[i];
                    break;
                }
            }
        }
        if(!rep.includes(string[i]) && c ===0){
            callback(`First non repeated character is: ${string[i]}`);
            break;
        }
    }
    
}
 
//length function
const len = (string) =>{
    let l = 0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}

first_non_rep(text,(data)=>{
    console.log(data);
})