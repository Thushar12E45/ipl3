const fetchData = require('./util/fetchData.js');

const matchesPlayed = require('./tasks/matchesPlayed.js');
const matchesWinPerTeam = require('./tasks/matchesWinPerTeam.js');
const extraRuns = require('./tasks/extraRuns.js');
const economicalBowlers = require('./tasks/economicalBowlers.js');

const writeData = require('./util/writeData.js');

const logger = require('./util/winstonLogger.js');
const {
  MATCHES_FILE_PATH,
  DELIVERIES_FILE_PATH,
  WRITE_PATH_MATCHES_PLAYED,
  WRITE_PATH_MATCHES_WON_PER_TEAM,
  WRITE_PATH_EXTRA_RUNS,
  WRITE_PATH_ECONOMICAL_BOWLERS,
} = require('./util/constants.js');

async function start() {
  let matchesData;
  let deliveriesData;

  try {
    matchesData = await fetchData(MATCHES_FILE_PATH);
    deliveriesData = await fetchData(DELIVERIES_FILE_PATH);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    logger.error(err.stack);
  }

  try {
    const matchesPlayedResult = matchesPlayed(matchesData);
    writeData(WRITE_PATH_MATCHES_PLAYED, matchesPlayedResult);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    logger.error(err.stack);
  }

  try {
    const matchesWinPerTeamResult = matchesWinPerTeam(matchesData);
    writeData(WRITE_PATH_MATCHES_WON_PER_TEAM, matchesWinPerTeamResult);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    logger.error(err.stack);
  }

  try {
    const extraRunsResult = extraRuns(matchesData, deliveriesData);
    writeData(WRITE_PATH_EXTRA_RUNS, extraRunsResult);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    logger.error(err.stack);
  }

  try {
    const economicalBowlersResult = economicalBowlers(matchesData, deliveriesData);
    writeData(WRITE_PATH_ECONOMICAL_BOWLERS, economicalBowlersResult);
  } catch (err) {
    console.log(`ERROR: ${err.message}`);
    logger.error(err.stack);
  }
}
start();
