# IPL Project

## Introduction
 The goal of the project is to provide solutions to the following questions.
 1. Number of matches played per year for all the years in IPL
2. Number of matches won per team per year in IPL
3. Extra runs conceded per team in the year 2016
4. Top 10 economical bowlers in the year 2015

Download the required data from [Kaggle](https://www.kaggle.com/manasgarg/ipl)

## Install
1. Install Node

    https://nodejs.org/en/download/

2. Clone this repository

```
git clone https://github.com/mountblue/mbcjs-16-1-ipl-Thushar12E45
```
3. Install npm packages
``` 
npm install 
```
4. Run project
```
node index.js
```
5. Run test
```
npm run test
```

## Project Structure
 - ``index.js``: It is the main node JS file that fetches the required data from the ``fetchData`` function and calls the ``taskFunctions`` for the various tasks and stores the result from the functions in a file using the ``writeData`` function.

 - ``tasks``: Directory containing functions for different tasks.
 - ``test``: Directory to store various test files.

 - ``inputData``: Directory to store input data i.e. matches.csv and deliveries.csv files
 - ``outputData``: Directory to store the files written from various functions.

 - ``testData``: Directory to store different testing data.

 - ``util``: Directory to store different utilities function required in the project.

 ## Technologies Used
 - JavaScript
 - Jest
 
