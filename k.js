const linearSearch = (arr, searchValue) => {
    let pos = -1
    arr.map( (ele, ind) => {if(ele === searchValue) pos = ind})
    pos === -1 ? console.log("Value not preset") : console.log(`Index is ${pos}`)
}

linearSearch([1, 3, 6, 3, 2, 8], 2)