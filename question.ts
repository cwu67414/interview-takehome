
/* Compare two times if the second time is earlier */
export const compareTwoTimesCheckTheSecondTimeIsEarlier = (
    time1: string,
    time2: string): boolean => {
    const result = new Date(time1).getTime() < new Date(time2).getTime();
    console.log(`Running compareTwoTimesCheckTheSecondTimeIsEarlier,\ntime-1: ${time1}, time-2: ${time2}`, result);
    return result;
}

/* Example of Question */
//Please generate a 6 digit random number string
export const generateSixDigitRandomNumberString = (): string => {
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  return `${randomNumber}`;
}

const main = (async () => {
    /* Compare two times if the second time is earlier */
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:00', '2020-01-01 00:00:01');
    compareTwoTimesCheckTheSecondTimeIsEarlier('2020-01-01 00:00:01', '2020-01-01 00:00:00');

})();


/* Write a function that takes in an array of numbers and returns the largest number in the array.*/
export const findLargestNumberInArray = (array: number[]): number => {
  let largestNumber: number = array[0];
  for (let i: number = 1; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
};

/*Write a function that takes in an array of numbers and returns the sum of all of the odd numbers in the array.*/
export const sumOfOddNumbersInArray = (array: number[]): number => {
  let sum: number = 0;
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        sum += array[i];
    }
  }
  return sum;
}

/*Given an array of strings, return the longest one in the array.*/
export const longestStringInArray = (array: string[]): string => {
  let longestString: string = '';
  for (let i: number = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
};

/* Given an input of string(Assume that the input string only contains letters, no numbers or special characters),write a function that returns the number of vowels in the string. */
export const countVowelsInString = (string: string): number => {
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  let count: number = 0;
  for (let i: number = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
};

/* Write a function that reverse the input string. For example: “Animal” to “laminA”. */
export const reverseString = (string: string): string => {
  let reversedString: string = '';
  for (let i: number = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};

/* Given two integers, write a function that takes returns the smallest common divisor of these two numbers.*/
export const smallestCommonDivisor = (number1: number, number2: number): number => {
    const smallerNumber: number = Math.min(number1, number2);
    for (let i: number = 2; i <= smallerNumber; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            return i;
        }
    }
    return 1;
}

/*Given a word, return if this word is palindromes. For example, ‘level’, ‘civic’, ‘kayak’ are palindromes because they reads the same way forwards and backwards.*/
export const isPalindrome = (string: string): boolean => {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
};

/*Given an array of numbers, return a new array with all the even numbers doubled.*/
export const doubleEvenNumbersInArray = (array: number[]): number[] => {
  const doubledArray = array.map((number) => {
    if (number % 2 === 0) {
      return number * 2;
    } else {
      return number;
    }
  });
  return doubledArray;
};

/*Given two arrays of numbers, write a function that returns a new array containing all the numbers that are common to both arrays in ascending order.*/
export const commonNumbersInTwoArrays = (array1: number[], array2: number[]): number[] => {
  const commonNumbers: number[] = [];
  for (const number of array1) {
    if (array2.includes(number) && !commonNumbers.includes(number)) {
      commonNumbers.push(number);
    }
  }
  return commonNumbers.sort((a, b) => a - b);
};

/*Given a string, write a function that returns the most common letter in the string.*/
export const mostCommonLetterInString = (string: string): string => {
  const dict: Record<string, number> = {};
  // iterate over each character and count the frequency of each character
  for (let i = 0; i < string.length; i++) {
    const s = string[i];
    if (dict[s]) {
      dict[s]++;
    } else {
      dict[s] = 1;
    }
  }
  // find the character with the highest frequency
  let mostCommonChar = '';
  let highestCount = 0;
  for (const s in dict) {
    if (dict[s] > highestCount) {
      mostCommonChar = s;
      highestCount = dict[s];
    }
  }
  return mostCommonChar;
}

