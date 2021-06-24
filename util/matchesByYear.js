function matchesByYear(matches, year) {
  matches.forEach((match) => {
    if (!Object.keys(match).includes('season') || !Object.keys(match).includes('id')) {
      throw new Error('Required data is not present');
    }
  });
  const matchId = matches
    .filter((match) => parseInt(match.season) === year)
    .reduce((array, matchData) => {
      array.push(matchData.id);
      return array;
    }, []);
  return matchId;
}

module.exports = matchesByYear;
