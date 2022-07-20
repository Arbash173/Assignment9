// |||||||||||||||||||||||||||||||||||||||||||| DATE METHODS (Ch # 31 - 34) |||||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var rightNow = new Date();
// document.write(rightNow);

// ***************************************** Question # 02 *****************************************

// var monthNames = ["January", "February", "March,", "April", "May", "June", "July","August","September","October","November","December"];
// var month = new Date().getMonth();
// document.write("Current month: " + monthNames[month]);

// ***************************************** Question # 03 *****************************************

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date().getDay();
// document.write("Today is " + dayNames[day]);

// ***************************************** Question # 04 *****************************************

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date().getDay();
// var nameOfToday = dayNames[day];
// if(nameOfToday === "Sat" || nameOfToday === "Sun"){
//     alert("It's Fun day");
// }else{
//     alert("Today is " + nameOfToday + "day");
// }

// ***************************************** Question # 05 *****************************************

// var date = new Date().getDate();
// if(date < 16){
//     alert("First fifteen days of the month.")
// }else{
//     alert("Last days of the month.")
// }

// ***************************************** Question # 06 *****************************************

// var d = new Date();
// var millsSince = d.getTime();
// var min = millsSince / 60;
// document.write("Current Date: " + d + "<br/>Elapsed milliseconds since January 1, 1970: " + millsSince + "<br/>Elapsed minutes since January 1, 1970: " + min);

// ***************************************** Question # 07 *****************************************

// var time = new Date().getHours();
// if(time < 12){
//   alert("It's AM")
// }else{
//   alert("It's PM")
// }

// ***************************************** Question # 08 *****************************************

// var d = new Date("December 31, 2022");
// document.write("Later date: " + d);

// ***************************************** Question # 09 *****************************************

// var firstRamadan = new Date().getTime() - new Date("April 2, 2022").getTime();
// document.write(Math.floor(firstRamadan/(1000 * 3600 * 24)) + " days have passed since 1st Ramadan, 2022.");

// ***************************************** Question # 10 *****************************************

// var firstRamadan = new Date().getTime() - new Date("January 1, 2022").getTime();
// document.write("On reference date " + new Date() + " " + Math.floor(firstRamadan/1000) + " seconds had passed since beginning of 2022.");

// ***************************************** Question # 11 *****************************************

// var dT = new Date().getTime() - 1000 * 3600;
// var time = new Date(dT); 
// document.write("Current date: " + new Date() + "<br />1 hour ago, it was " + time);

// ***************************************** Question # 12 *****************************************

// var d = new Date();
// var pastYear = d.getFullYear() - 100;
// d.setFullYear(pastYear);
// document.write("Current date: " + new Date() + "<br />100 years back, it was " + d);

// ***************************************** Question # 13 *****************************************

// var user = +prompt("Enter your age: ");
// var by = new Date().getFullYear() - user;
// document.write("Your age is " + user + "<br/>Your birth year is " + by);

// ***************************************** Question # 14 *****************************************

// var monthNames = ["January", "February", "March,", "April", "May", "June", "July","August","September","October","November","December"];
// var name = prompt("Enter your name: ");
// var month = new Date().getMonth();
// var units = (Math.random()*1000).toFixed(0);
// var charges = 16;
// var late = 350;
// var netAmnt = units * charges;

// document.write("<h1>K-Electric Bill</h1><br/><br/>");
// document.write("Customer Name: <b>" + name + "</b> <br/>Month: <b>" + monthNames[month] + "</b> <br/>Number of units: <b>" + units + "</b> <br/>Charges per unit: <b>" + charges + "</b> <br/><br/>Net Amount Payable (within Due Date): <b>" + netAmnt + "</b> <br/>Late payment surcharge:  <b>" + late + "</b> <br/>Gross Amount Payable (after Due Date): <b>" + (netAmnt + late) + "</b>");