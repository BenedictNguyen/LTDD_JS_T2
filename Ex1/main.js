const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avrDolphin1 = calcAverage(44, 23, 71);
const avrKoalas1 = calcAverage(65, 54, 49);

const avrDolphin2 = calcAverage(85, 54, 41);
const avrKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avrDolphin, avrKoalas) => {
    if (avrDolphin >= 2 * avrKoalas) {
        console.log(`Dolphins win (${avrDolphin.toFixed(2)} vs. ${avrKoalas.toFixed(2)})`);
    } else if (avrKoalas >= 2 * avrDolphin) {
        console.log(`Koalas win (${avrKoalas.toFixed(2)} vs. ${avrDolphin.toFixed(2)})`);
    } else {
        console.log("No team wins!");
    }
}

checkWinner(avrDolphin1, avrKoalas1);
checkWinner(avrDolphin2, avrKoalas2);