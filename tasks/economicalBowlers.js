// Top 10 Economical bowlers of the year 2015
const matchesByYear = require('../util/matchesByYear.js');

function economicalBowlers(matches, deliveries, year = 2015) {
  try {
    if (matches === undefined || deliveries === undefined) {
      throw new Error('Received data is undefined');
    } else if (matches === '' || deliveries === '') {
      throw new Error('Received data is  null');
    } else {
      const matchId = matchesByYear(matches, year);
      const economicalBowlersData = {};
      const totalOvers = {};

      for (const delivery of deliveries) {
        if (matchId.includes(delivery.match_id)) {
          // No. of runs
          const { bowler } = delivery;
          const wideRuns = delivery.wide_runs;
          const batsmanRuns = delivery.batsman_runs;
          const noBallRuns = delivery.noball_runs;

          if (!bowler) throw new Error('Data insufficient');
          if (economicalBowlersData[bowler]) {
            economicalBowlersData[bowler] += parseInt(wideRuns) + parseInt(batsmanRuns) + parseInt(noBallRuns);
          } else {
            economicalBowlersData[bowler] = parseInt(wideRuns) + parseInt(batsmanRuns) + parseInt(noBallRuns);
          }

          // No. of overs
          if (delivery.ball === '2') {
            if (totalOvers[bowler]) {
              totalOvers[bowler] += 1;
            } else {
              totalOvers[bowler] = 1;
            }
          }
        }
      }
      let runsArr = Object.entries(economicalBowlersData);
      const oversArr = Object.entries(totalOvers);

      for (let i = 0; i < runsArr.length - 1; i += 1) {
        runsArr[i][1] = parseFloat((runsArr[i][1] / oversArr[i][1]).toFixed(2));
      }

      runsArr.sort(function (a, b) {
        return a[1] - b[1];
      });
      runsArr = Object.fromEntries(runsArr.slice(0, 10));

      return runsArr;
    }
  } catch (err) {
    console.log(err.message);
    throw new Error('Unsupported data');
  }
}

module.exports = economicalBowlers;
