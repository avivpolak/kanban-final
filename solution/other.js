export function stringToKabab(str) {
    //Parameters:string with spaces
    //returns:kabab structued string("-" insted of space)

    let kabab = ''

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            kabab += str[i]
        } else {
            kabab += '-'
        }
    }

    return kabab
}

export function kababToString(kabab) {
    //Parameters:kabab structued string("-" insted of space)
    //returns:string with spaces

    let str = ''

    for (let i = 0; i < kabab.length; i++) {
        if (kabab[i] !== '-') {
            str += kabab[i]
        } else {
            str += ' '
        }
    }
    return str
}
