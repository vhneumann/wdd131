const DAYS = 6;
const LIMIT = 30;
let studentReport = [11,42,33,64,29,37,44];
let studentCount = studentReport.length;

// Write a for loop that will iterate through the studentReport array
// and print to the console the current array value if it is below 30.
// Length of array: studentReport.length
for (let i = 0; i < studentCount; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// Repeat the previous programming snippet by using a while loop.
let count = 0;
while (count < studentCount) {
    if (studentReport[count] < LIMIT) {
        console.log(studentReport[count]);
        }
    count++;
}




// Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function(report) {
    if (report < LIMIT) {
        console.log(report);
    }
});



// Repeat the previous programming snippet by using a for...in loop.
for (const i in studentReport) {
  	if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}



// Use any type of loop to dynamically produce the day names (Monday,
// Tuesday, Wednesday, etc.) for the next DAYS days starting today.
// let currentDay = today();
// const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
// const diaActual = dias[new Date().getDay()];
//
// This one works but when (currentDate + DAYS) > 14 the count 'folds'
// and the resulting printout chops. 
const DAYS = 3;
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDate = new Date().getDay();
let topDate;
if ((currentDate + DAYS) < 7) {
	topDate = currentDate + DAYS;
} else {
	topDate = 7;
}
let futureDate;
if ((currentDate + DAYS) < 7) {
	futureDate = 0;
} else {
	futureDate = (currentDate + DAYS) % 7;
}
for (i = currentDate; i < topDate; i++) {
    console.log(weekDays[i]);
}
for (i = 0; i < futureDate; i++) {
    console.log(weekDays[i]);
}



