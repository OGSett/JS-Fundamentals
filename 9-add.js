function add(a, b) {
    if(isNaN(a) || isNaN(b)) {
        console.log('NaN')
    } else {
        console.log(a + b)
    }
    
}

if (process.argv[2] && process.argv[3]) {
    let a = parseInt(process.argv[2])
    let b = parseInt(process.argv[3])
    add(a,b)
} else {
    console.log('NaN')
}