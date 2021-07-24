module.exports = function toReadable(number) {
    let result = "";
    const stringNum = number.toString();
    const arrOnes = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const arrTens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
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
        for (let i = 2; i <= stringNum[0]; i++) {
            if (i.toString() === stringNum[0]) result = `${arrTens[i - 2]}`;
        }
        for (let i = 0; i <= stringNum[1]; i++) {
            if (i.toString() === stringNum[1] && stringNum[1] !== "0")
                result = `${result} ${arrOnes[i - 1]}`;
        }

        return result;
    }

    if (stringNum.length === 3) {
        for (let i = 1; i <= stringNum[0]; i++) {
            if (i.toString() === stringNum[0])
                result = `${arrOnes[i - 1]} hundred`;
        }

        if (stringNum[1] === "1") {
            for (let i = 10; i <= stringNum[1] + stringNum[2]; i++) {
                if (i.toString() === stringNum[1] + stringNum[2])
                    result = `${result} ${arrOnes[i - 1]}`;
            }
            return result;
        }

        for (let i = 1; i <= stringNum[1]; i++) {
            if (i.toString() === stringNum[1]) {
                result = `${result} ${arrTens[i - 2]}`;
            }
        }

        for (let i = 1; i <= stringNum[2]; i++) {
            if (i.toString() === stringNum[2])
                result = `${result} ${arrOnes[i - 1]}`;
        }

        return result;
    }
};
