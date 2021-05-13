const string = "The quick brown fox jumps over the lazy dog";

//function to reverse the words of a given string
const reverse_words =(string,callback)=>{
    let arr = string.split(" ");
    let reverse_arr = [];
    let length = len(arr);
    let end = length -1;
    let i = 0;
    while(i < length){
        reverse_arr[i] = arr[end];
        end--;
        i++;
    }
callback(reverse_arr.join(" "));
}

//length function
const len = (arr) =>{
    let l =0;
    while(arr[l] !== undefined){
        l++
    }
    return l;
}

reverse_words(string,(data)=>{
    console.log(data);
})

