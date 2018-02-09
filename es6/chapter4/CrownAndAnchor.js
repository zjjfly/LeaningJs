/**
 * Created by zjjfly on 16/9/14.
 */
'use strict';
let funds = 50;
let round = 0;
while (funds > 1 && funds < 100) {
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds}p`);
    const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
    let totalBet = rand(1, funds);
    if (new Date().getDay()==3){
        totalBet=1;
    } else if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        let remain = totalBet;
        do {
            let bet = rand(1, remain);
            let face = randFace();
            bets[face] += bet;
            remain -= bet;
        } while (remain > 0);
    }
    console.log('\tbet:' + Object.keys(bets).map(face=>`${face}: ${bets[face]} pence`).join(',') + `total: ${totalBet} pence`);
    funds = funds - totalBet;
    const hand = roll();
    console.log(`\thand: ${hand.join(',')}`);
    let winnings = 0;
    hand.filter(face=>bets[face] > 0).forEach(face=>winnings += bets[face]);//使用es6的箭头函数简化下面的for循环
    // for (var i = 0; i < hand.length; i++) {
    //     var face = hand[i];
    //     if (bets[face] > 0) {
    //         winnings += bets[face];
    //     }
    // }
    funds += winnings;
    round++;
    console.log('\twinnings:' + winnings);
}
console.log(`\tending funds: ${funds}`);

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
    return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond'][rand(0, 5)];
}

function roll() {
    let hand = [];
    for (var roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    return hand;
}