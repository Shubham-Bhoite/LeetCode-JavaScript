/* 26. Join Two Arrays by ID: 

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 
joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.
If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.
If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
*/

var join = function(arr1, arr2) {
    let map = new Map();
    [...arr1, ...arr2].forEach(obj => map.set(obj.id, { ...map.get(obj.id), ...obj }));
    return [...map.values()].sort((a, b) => a.id - b.id);
};