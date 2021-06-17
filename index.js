const fetchData = require('./util/fetchData.js');

// Importing tasks functons
const matchesPlayed = require('./tasks/matchesPlayed.js');
const matchesWinPerTeam = require('./tasks/matchesWinPerTeam.js');
const extraRuns = require('./tasks/extraRuns.js');
const economicalBowlers = require('./tasks/economicalBowlers.js');

const writeData = require('./util/writeData.js');

const {
  matchesFilePath,
  deliveriesFilePath,
  writePathMatchesPlayed,
  writePathMatchesWinPerTeam,
  writePathExtraRuns,
  writePathEconomicalBowlers,
} = require('./util/constants.js');

async function start() {
  const matchesData = await fetchData(matchesFilePath);
  const deliveriesData = await fetchData(deliveriesFilePath);

  const matchesPlayedResult = matchesPlayed(matchesData);
  writeData(writePathMatchesPlayed, matchesPlayedResult);

  const matchesWinPerTeamResult = matchesWinPerTeam(matchesData);
  writeData(writePathMatchesWinPerTeam, matchesWinPerTeamResult);

  const extraRunsResult = extraRuns(matchesData, deliveriesData);
  writeData(writePathExtraRuns, extraRunsResult);

  const economicalBowlersResult = economicalBowlers(matchesData, deliveriesData);
  writeData(writePathEconomicalBowlers, economicalBowlersResult);
}
start();
