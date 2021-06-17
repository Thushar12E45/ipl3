// Matches played per year
function matchesPlayed(matches) {
  try {
    if (matches === undefined) {
      throw new Error('Received data is undefined ');
    } else if (matches === '') {
      throw new Error('Received data is  null');
    } else {
      const matchesPlayedObj = {};
      for (const match of matches) {
        const { season } = match;

        if (!season ) {
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
  } catch (err) {
    console.log(err.message);
    throw new Error(' Unsupported Data');
  }
}

module.exports = matchesPlayed;
