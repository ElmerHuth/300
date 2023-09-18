function search(str, searchword){
    return str.includes(searchword), str.startsWith(searchword);
}

console.log(search('Hello World', 'Hell'));