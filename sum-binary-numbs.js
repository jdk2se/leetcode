console.log((BigInt("0b"+'101') + BigInt("0b"+'11')).toString(2));

const addBinary = (a, b) => {
    let i = a.length-1
    let j = b.length-1
    let total = ''
    let reminder = 0
    while (i >= 0 || j >= 0) {
        const aa = parseInt(a[i]) || 0
        const bb = parseInt(b[j]) || 0
        const sum = aa + bb + reminder
        const digit = sum % 2
        total = digit + total
        reminder = sum > 1 ? 1 : 0
        i--
        j--
    }
    total = (reminder ? "1" : "") + total
    return total
};