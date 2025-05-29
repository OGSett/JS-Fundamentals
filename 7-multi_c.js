if(process.argv[2]) {
    let multiplier = process.argv[2]
    for (let i = 0; i < multiplier; i++) {
        console.log('C is fun')
    } 
} else {
    console.log('Missing number of occurrences')
}