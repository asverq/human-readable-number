module.exports = function toReadable(number) {
    let result = "";
    const stringNum = number.toString();
    const arrOnes = [
        "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const arrTens = [
        "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    if (number === 0) {
        result = "zero";
        return result;
    }

    if (stringNum.length === 1 || (stringNum.length === 2 && number < 20)) {
        result = `${arrOnes[number - 1]}`;
        return result;
    }

    if (stringNum.length === 2 && number >= 20) {
        result = `${arrTens[stringNum[0] - 2]} ${stringNum[1] !== "0" ? arrOnes[stringNum[1] - 1] : ""}`;
        return stringNum[1] === "0" ? result.substring(0, result.length - 1) : result;
    }

    if (stringNum.length === 3) {
        result = `${arrOnes[stringNum[0] - 1]} hundred`;

        if (stringNum[1] === '0' && stringNum[2] === '0') return result;

        if (stringNum[1] === "1" || stringNum[1] === "0") {
            result = `${result} ${arrOnes[stringNum[1] + stringNum[2] - 1]}`;
            return result;
        }        

        result = `${result} ${arrTens[stringNum[1] - 2]} ${stringNum[2] !== "0" ? arrOnes[stringNum[2] - 1] : ""}`;

        return stringNum[2] === '0' ? result.substring(0, result.length - 1) : result;
    }

};
