//check whether gambler win the match or not
let money = 100;
let bet = 0, win = 0, lose = 0;

while (money < 200 && lose < money) {
    let ran = Math.floor(Math.random() * 10) % 2;
    if (ran == 1) {
        money++;
        win++;
    }
    else {
        money--;
        lose++;
    }
    bet++;
}

console.log("Number of Wins " + win + "\nNumber of losses " + lose + "\nTotal Bets made " + bet);
if (money == 200) {
    console.log("Gambler Won the Match!");
}
else {
    console.log("Gambler lost the Match!");
}