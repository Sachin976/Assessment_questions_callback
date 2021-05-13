const string = "helloworld";

//function to count vowels and consonants
const Vow_cons = (string,callback)=>{
    let count = {};
    for(let i = 0; i<len(string); i++){
        if("aeiouAEIOU".includes(string[i])){
            let vowel = "Vowel";
            if(count[vowel]){
                count[vowel]++;
            }else{
                count[vowel] = 1;
            }
        }else{
            let consonants = "Consonants";
            if(count[consonants]){
                count[consonants]++;
            }else{
                count[consonants] = 1;
            }
        }
    }
    callback(count);
}

//length function
const len = (string) =>{
    let l=0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}

Vow_cons(string,(data)=>{
    console.log(data);
})
