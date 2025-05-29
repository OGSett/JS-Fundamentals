function fact(n) {

    if (n <= 0 ) {
        return 1
    }
    return n *= fact(n - 1)
}

if (process.argv[2]) {
    let number = parseInt(process.argv[2])
    if(!isNaN(number)) {
        console.log(fact(number))
    }
}