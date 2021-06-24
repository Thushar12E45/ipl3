// Matches played per year
function matchesPlayed(matches) {
  if (matches === undefined) {
    throw new Error('Received data is undefined ');
  } else if (matches === null) {
    throw new Error('Received data is  null');
  } else {
    const matchesPlayedObj = {};
    for (const match of matches) {
      const { season } = match;

      if (!season) {
        throw new Error('Required data is not present');
      }

      if (matchesPlayedObj[season]) {
        matchesPlayedObj[season] += 1;
      } else {
        matchesPlayedObj[season] = 1;
      }
    }
    return matchesPlayedObj;
  }
}

module.exports = matchesPlayed;
