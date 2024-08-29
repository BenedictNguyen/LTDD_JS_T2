const calcTip = (bills) => {
    if (bills >= 50 && bills <= 300) {
        return bills * 0.15;
    } else {
        return bills * 0.20;
    }
}

// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
console.log('TIPS: ', tips);
console.log('TOTAL: ', totals);

// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
const averageTotal = calcAverage(totals);

// 4.3. Call the function with the 'totals' array
console.log('Average Total:', averageTotal.toFixed(2));