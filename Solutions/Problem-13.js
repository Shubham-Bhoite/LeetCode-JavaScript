/* 13.Chunk Array:

 Given an array arr and a chunk size size, return a chunked array.
A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size. 
*/

var chunk = function(arr, size) {
    const res=[];
    let subarr = [];
    for (let i=0; i<arr.length; i++){
        subarr.push(arr[i]);
        if(subarr.length == size){
            res.push(subarr);
            subarr = [];
        }
    }
    if(subarr.length){
        res.push(subarr);
    }
    return res;
};