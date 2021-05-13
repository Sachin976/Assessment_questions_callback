const number_to_check = 5;
const arr = [1,2,5,0,3,4,6,2,1,5];

//function to find out the pairs that sum up the given number
const pairs= (arr,number,callback)=>{
    for(let i = 0; i< len(arr); i++){
        for(let j = i+1; j<= len(arr); j++){
            if(arr[i] + arr[j] === number_to_check){
                callback(arr[i],arr[j]);
            }
        }
    }  
}

//length function
const len = (arr) =>{
    let l = 0;
    while(arr[l] !== undefined){
        l++;
    }
    return l;
}

pairs(arr,number_to_check,(pair1,pair2)=>{
    console.log(pair1,pair2);
})