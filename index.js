import cron from "node-cron";
import processData from "./process";

cron.schedule("* * * * *", () => {
    console.log(`logs every minute`);
    processData();
});