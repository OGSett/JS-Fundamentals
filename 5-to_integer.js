if (process.argv[2]) {
    if (isNaN(process.argv[2])) {
        console.log('Not a number')
    } else {
        console.log('My number:',parseInt(process.argv[2]))
    }
} else {
    console.log('Not a number')
}