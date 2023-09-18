function firstLargest(numbers, searchnumber){
    let firstLargest = (number) => number > searchnumber;
    return [numbers.find(firstLargest), numbers.findIndex(firstLargest)];
}

let [value, index] = firstLargest([1, 4, 7, 10, 15], 8);
console.log(`Value: ${value} Index: ${index}`);