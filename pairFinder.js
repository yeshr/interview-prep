/**
 * Created by yeshg on 3/27/2016.
 */
/*
 You have an array of random ints, and you need to find the
 first pair of ints that sums a third int, passed as a parameter.
 Implement that code in Object-Oriented JavaScript.
 Alternatively use plain old JavaScript.
 */

// solution should return: [12, 16]
// altSolution = findPair(input, desiredSum);
class PairFinder {
    constructor(input = []) {
        this.input = input;
    }

    findPair(sum) {
        let input = this.userInput();
        return this.checkSum(input, sum);
    }

    checkSum(arr, sum) {
        while(arr.length) {
            let pivotInt = arr.shift(),
                len = arr.length;

            for(let i=0; i<len; i++) {
                if ((arr[i] + pivotInt) === sum) {
                    return {1:pivotInt, 2: arr[i]};
                }
            }
        }

    }

    userInput() {
        return this.input.slice();
    }
}

var input = [3, 5, 7, 9, 4, 8, 5, 12, 4, 9, 16, 5],
    desiredSum = 28,
    solution = new PairFinder(input).findPair(desiredSum);

console.log(solution);