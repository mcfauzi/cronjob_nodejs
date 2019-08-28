// import cron from "node-cron";
// import processData from "./process";
const cron = require("node-cron");
const {
    processData
} = require("./process");

var crontab = "* * * * *";

cron.schedule(crontab, () => {
    //cron job every midnight day at 00:01
    console.log(`---STARTING CRON JOB EVERY 15 MINUTES---`);
    processData();
});