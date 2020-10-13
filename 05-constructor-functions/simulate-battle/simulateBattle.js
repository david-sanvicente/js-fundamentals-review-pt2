/* eslint-disable no-unused-vars, no-throw-literal*/
function Pokemon(name, health, attackBonus){
    this.name = name;
    this.health = health;
    this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () { return this.attackBonus + 2}
Pokemon.prototype.isDefeated = function () {
    if(this.health <= 0){return true}
        return false;
}

function simulateBattle(pok1, pok2, faster){
    // console.log(`pok1: ${pok1.name}, pok2: ${pok2.name}, first: ${faster}`)
    let first = {};
    let second = {};

    if(faster == pok1.name){
        first = pok1;
        second = pok2;
    } else {
        first = pok2;
        second = pok1;
    }

    let fight = true;

    while(first.isDefeated() == second.isDefeated()){
        if(fight){
            second.health -= first.biteAttack();
            fight = false;
        } else {
            first.health -= second.biteAttack()
            fight = true;
        }
    }

    if(first.isDefeated()){
        // console.log(`${second.name} wins!`)
        return `${second.name} Wins!`
    } else {
        // console.log(`${first.name} wins`)
        return `${first.name} Wins!`
    }   
}