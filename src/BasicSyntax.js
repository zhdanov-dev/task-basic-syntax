export function romanToInteger(str) {
    let result = 0;
    let array = str.split('');
    let curr = 0;
    let pred = 0;
    let predRes = 0;
    for (let i = 0; i < str.length; i++) {
        curr = char(array[i]);
        if (curr > pred) result -= 2 * predRes;
        if (curr !== pred) predRes = 0;
        predRes += curr;
        result += curr;
        pred = curr;
    }

    function char(char) {
        switch (char) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return -1;
        }
    }

    return result;
}
