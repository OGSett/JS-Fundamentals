if(process.argv[2]) {
    let xy = parseInt(process.argv[2])

    if (isNaN(xy) || (xy <= 0)) {
        console.log('Missing size')
    } else {
        for (let i = 0; i < xy; i++) {
            let test = ''
            for (let k = 0; k < xy; k++) {
                test += 'X'
            }
            console.log(test)
        } 
    }
} else {
    console.log('Missing size')
}