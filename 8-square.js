if(process.argv[2] && process.argv[3]) {
    let x = process.argv[2]
    let y = process.argv[3]
    for (let i = 0; i < x; i++) {
        let test = ''
        for (let k = 0; k < y; k++) {
            test += 'x'
        }
        console.log(test)
    } 
} else {
    console.log('Missing number of occurrences')
}