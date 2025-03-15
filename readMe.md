# CSV data sync (server + worker)

# Tech Stack and Libraries
- Node.js (Javascript)
- Postgres
- Sequelize (ORM)
- Express
- winsston (logging)
- csv-parser

## System requirements
- Node.js
- Postgres installed
- yarn

## Setup

1. git clone `https://github.com/hari-uc/csv-dumper.git`
2. cd csv-dumper
3. yarn install
4. copy .env.example to .env

5. run `npx sequelize db:migrate` to create tables

## Running

1. run `yarn run dev:server` to start the server
2. run `yarn run dev:worker` to start the worker


## Schema Reference
- `.png` file in the resource folder `/resource/image.png`


## Current implementation
- worker reads the `sample.csv` file at every 5 minutes and syncs the data to the database
- a rest api in server display the top n products but supports only date filter (start/end) for now
- saving error logs to the `logs/` folder with the timestamp and date

## Things not covered due to time constraints
- API and documentation (postman/swagger)
- csv stream ingestion performance(can still improve it)