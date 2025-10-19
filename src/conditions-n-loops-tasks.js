/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

function isPositive(number) {
  return number >= 0;
}

function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= c) return b;
  return c;
}

function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;

  const dx = queen.x - king.x;
  const dy = queen.y - king.y;
  if (dx === dy || dx === -dy) return true;

  return false;
}

function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;

  return a === b || b === c || a === c;
}

function convertToRomanNumerals(num) {
  let result = '';

  const tens = (num - (num % 10)) / 10;
  for (let i = 0; i < tens; i += 1) {
    result += 'X';
  }

  const ones = num % 10;
  if (ones === 9) {
    result += 'IX';
  } else if (ones >= 5) {
    result += 'V';
    for (let i = 0; i < ones - 5; i += 1) {
      result += 'I';
    }
  } else if (ones === 4) {
    result += 'IV';
  } else {
    for (let i = 0; i < ones; i += 1) {
      result += 'I';
    }
  }

  return result;
}

function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];

    if (i > 0) result += ' ';

    switch (char) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      default:
        break;
    }
  }

  return result;
}

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i += 1) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

function isContainNumber(num, digit) {
  let n = num;

  if (n < 0) n = -n;

  while (n > 0) {
    if (n % 10 === digit) return true;
    n = (n - (n % 10)) / 10;
  }

  if (num === 0 && digit === 0) return true;

  return false;
}

function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    for (let j = i + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let num = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = num;
      num += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = num;
      num += 1;
    }
    right -= 1;

    if (top <= bottom) {
      for (let i = right; i >= left; i -= 1) {
        matrix[bottom][i] = num;
        num += 1;
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i -= 1) {
        matrix[i][left] = num;
        num += 1;
      }
      left += 1;
    }
  }

  return matrix;
}

function rotateMatrix(matrix) {
  const n = matrix.length;
  const result = matrix;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = result[i][j];
      result[i][j] = result[j][i];
      result[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n / 2; j += 1) {
      const temp = result[i][j];
      result[i][j] = result[i][n - 1 - j];
      result[i][n - 1 - j] = temp;
    }
  }

  return result;
}

function sortByAsc(arr) {
  const result = arr;

  function quickSort(start, end) {
    if (start >= end) return;

    const pivot = result[end];
    let i = start - 1;

    for (let j = start; j < end; j += 1) {
      if (result[j] < pivot) {
        i += 1;
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }

    i += 1;
    const temp = result[i];
    result[i] = result[end];
    result[end] = temp;

    quickSort(start, i - 1);
    quickSort(i + 1, end);
  }

  quickSort(0, result.length - 1);
  return result;
}

function shuffleChar(str, iterations) {
  let current = str;
  const seen = {};
  let cycle = 0;

  for (let iter = 0; iter < iterations; iter += 1) {
    if (seen[current] !== undefined) {
      cycle = iter - seen[current];
      const remaining = (iterations - iter) % cycle;

      for (let i = 0; i < remaining; i += 1) {
        let even = '';
        let odd = '';

        for (let j = 0; j < current.length; j += 1) {
          if (j % 2 === 0) {
            even += current[j];
          } else {
            odd += current[j];
          }
        }
        current = even + odd;
      }

      return current;
    }

    seen[current] = iter;

    let even = '';
    let odd = '';

    for (let j = 0; j < current.length; j += 1) {
      if (j % 2 === 0) {
        even += current[j];
      } else {
        odd += current[j];
      }
    }

    current = even + odd;
  }

  return current;
}

function getNearestBigger(number) {
  const digits = [];
  let temp = number;

  while (temp > 0) {
    digits[digits.length] = temp % 10;
    temp = (temp - (temp % 10)) / 10;
  }

  for (let i = 0; i < digits.length / 2; i += 1) {
    const t = digits[i];
    digits[i] = digits[digits.length - 1 - i];
    digits[digits.length - 1 - i] = t;
  }

  let pivotIndex = -1;
  for (let i = digits.length - 2; i >= 0; i -= 1) {
    if (digits[i] < digits[i + 1]) {
      pivotIndex = i;
      break;
    }
  }

  if (pivotIndex === -1) return number;

  let swapIndex = pivotIndex + 1;
  for (let i = pivotIndex + 1; i < digits.length; i += 1) {
    if (digits[i] > digits[pivotIndex] && digits[i] < digits[swapIndex]) {
      swapIndex = i;
    }
  }

  const t = digits[pivotIndex];
  digits[pivotIndex] = digits[swapIndex];
  digits[swapIndex] = t;

  for (let i = pivotIndex + 1; i < digits.length; i += 1) {
    for (let j = i + 1; j < digits.length; j += 1) {
      if (digits[i] > digits[j]) {
        const temp2 = digits[i];
        digits[i] = digits[j];
        digits[j] = temp2;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < digits.length; i += 1) {
    result = result * 10 + digits[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
