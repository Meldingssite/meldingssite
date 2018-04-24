var latestTimeStamp;    //  Latest timestamp pulled from DB, used to check if DB has been updated

function checkDB()
{
    console.log("Checking Database");
}

//  Check Database every 0.5 seconds
window.setInterval(checkDB, 500);

