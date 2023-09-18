function join(array1, array2){
    return [...array1, ...array2];
}

let arr1 = [1, 2];
let arr2 = [3, 4];

console.log(join(arr1, arr2));