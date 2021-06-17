// Calculate the no. of matches won per team per year
function matchesWinPerTeam(matches) {
  try {
    if (matches === undefined) {
      throw new Error('Received data is undefined ');
    } else if (matches === '') {
      throw new Error('Received data is  null');
    } else {
      const matchesWonPerTeam = {};
      let count = 0;
      for (const match of matches) {
        const { season } = match;
        const { winner } = match;

        if (!season || winner === undefined) throw new Error('Required  data is not present ');

        if (matchesWonPerTeam[season]) {
          if (matchesWonPerTeam[season][winner]) {
            matchesWonPerTeam[season][winner] += 1;
          } else {
            matchesWonPerTeam[season][winner] = 1;
          }
          count += 1;
          matchesWonPerTeam[season].totalMatches = count;
        } else {
          matchesWonPerTeam[season] = {};
          matchesWonPerTeam[season].totalMatches = 1;
          count = 1;
          matchesWonPerTeam[season][winner] = 1;
        }
      }

      return matchesWonPerTeam;
    }
  } catch (err) {
    console.log(err.message);
    throw new Error('Unsupported Data');
  }
}

module.exports = matchesWinPerTeam;
