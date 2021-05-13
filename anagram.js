const string_1 = "hello";
const string_2 = "listen";
const string_3 = "silent";

//function to check strings are anagram or not
const anagram = (text1,text2,callback) =>{
    let c = 0;
    if(len(text1) !== len(text2)){
        callback("Not anagram");
    }else{
        for(let i = 0; i< len(text1);i++){
            for(let j = 0; j< len(text2);j++){
                if(text1[i] == text2[j]){
                    c+=1;
                    break;
                }
            }
        }
        if(c === len(text1)){
            callback("Anagram");
        }
    }
}

//length function
const len = (string) =>{
    let l=0;
    while(string[l] !== undefined){
        l++;
    }
    return l;
}

anagram(string_1,string_2,(data)=>{
    console.log(data);
})
anagram(string_2,string_3,(data) =>{
    console.log(data);
} )