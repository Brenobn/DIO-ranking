function rankingMatches (victories, defeats) {
  let playerLevel = victories - defeats;
  let level;

  if(playerLevel <= 10) {
    level = "Ferro"
  } else if(playerLevel >= 11) {
    level = "Bronze"
  } else if(playerLevel >= 21) {
    level = "Prata"
  } else if(playerLevel >= 51) {
    level = "Ouro"
  } else if(playerLevel >= 81) {
    level = "Diamante"
  } else if(playerLevel >= 91) {
    level = "Lendário" 
  } else {
    level = "Imortal"
  } 

  return [playerLevel, level];
}

let [playerLevel, level] = rankingMatches(50, 3);

console.log(`O herói tem um saldo de ${playerLevel} e está no level ${level}`);