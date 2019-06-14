import cron from "node-cron";
import processData from "./process";

cron.schedule("01 00 * * *", () => {
    //cron job every midnight day at 00:01
    console.log(`---STARTING CRON JOB EVERY DAY AT 00:01---`);
    processData();
});