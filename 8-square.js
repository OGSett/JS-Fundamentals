if(process.argv[2] || process.argv[3]) {
    let x = parseInt(process.argv[2])
    let y = parseInt(process.argv[3])

    if (isNaN(x) && isNaN(y)) {
        console.log('Missing size')
    } else {
        for (let i = 0; i < x; i++) {
            let test = ''
            if (!y) {
                y = x
            } 
            for (let k = 0; k < y; k++) {
                test += 'x'
            }
            console.log(test)
        } 
    }
} else {
    console.log('Missing size')
}