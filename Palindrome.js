const s = "hello";
const s1 = 'naman';

//Palindrome function
const palin = (s,callback) =>{
    let arr=[];
    for(let i = len(s); i>=0;i--){
        arr.push(s[i]);
    }
    arr.shift();
    let rev_s = arr.join("");
    if(rev_s === s){
        callback("Given string is palindrome");
    }else{
        callback("Given string is not a palindrome");
    }
}

//length function
const len = (s) =>{
    let l = 0;
    while(s[l] !== undefined){
        l++;
    }
    return l;
}


palin(s,(data)=>{
    console.log(data);
})
palin(s1,(data)=>{
    console.log(data);
})

