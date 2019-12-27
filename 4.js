const min = 357253;
const max = 892942;

let validNumbers = [];
const noStringNumbers = [];

function isValidNumber(number, exactPairsOnly) {
    const digits = number.toString().split('');
    let hasDuplicates = false;
    for (let j = 1; j < digits.length; j++) {
        const currentDigit = digits[j];
        const previousDigit = digits[j-1];
        if (previousDigit > currentDigit) {
            return false;
        }
        if (previousDigit === currentDigit) {
            if (exactPairsOnly) {
                if (currentDigit !== digits[j+1]) {
                    hasDuplicates = true;
                }
                while (j < digits.length && digits[j+1] === currentDigit) {
                    j++;
                }
            } else {
                hasDuplicates = true;
            }
        }
    }
    return hasDuplicates;
}

for (let i = min; i < max; i++) {
    if (isValidNumber(i)) {
        validNumbers.push(i);
        if (isValidNumber(i, true)) {
            noStringNumbers.push(i);
        }
    }
}


console.log(isValidNumber(112233) === true);
console.log(isValidNumber(123444) === false);
console.log(isValidNumber(111122) === true);
console.log(isValidNumber(445557) === true);


console.log(validNumbers.length);
console.log(noStringNumbers.length);
console.log(validNumbers.filter(n => !noStringNumbers.includes(n)));

