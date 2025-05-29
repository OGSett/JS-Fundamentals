if (process.argv[2]) {
    if (isNaN(process.argv[2])) {
        console.log('is not a number')
    } else {
        console.log(parseInt(process.argv[2]))
    }
}