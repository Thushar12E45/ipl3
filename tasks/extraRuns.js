// Extra runs conceded per team in the year 2016
const matchesByYear = require('../util/matchesByYear.js');

function extraRuns(matches, deliveries, year = 2016) {
  try {
    if (matches === undefined || deliveries === undefined) {
      throw new Error('Received data is undefined');
    } else if (matches === null || deliveries === null) {
      throw new Error('Received data is  null');
    } else {
      const matchId = matchesByYear(matches, year);
      const extraRunsObj = {};

      for (const delivery of deliveries) {
        if (!delivery.match_id) throw new Error('Unsufficient data');
        if (matchId.includes(delivery.match_id)) {
          const battingTeam = delivery.batting_team;
          const deliveryExtraRuns = delivery.extra_runs;

          if (!battingTeam) throw new Error('Data Insufficient');

          if (extraRunsObj[battingTeam]) {
            extraRunsObj[battingTeam] += parseInt(deliveryExtraRuns);
          } else {
            extraRunsObj[battingTeam] = parseInt(deliveryExtraRuns);
          }
        }
      }
      return extraRunsObj;
    }
  } catch (err) {
    console.log(err.message);
    throw new Error('Unsupported data');
  }
}

module.exports = extraRuns;
