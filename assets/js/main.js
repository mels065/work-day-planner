// Create an array that contains each hour in a workday
const hours = [
    { display: "9am",  value: 8 },
    { display: "10am", value: 9 },
    { display: "11am", value: 10 },
    { display: "12pm", value: 11 },
    { display: "1pm", value: 12 },
    { display: "2pm", value: 13 },
    { display: "3pm", value: 14 },
    { display: "4pm", value: 15 },
    { display: "5pm", value: 16 }
];

// Get the timeblocks from the local storage
let timeblocks = JSON.parse(localStorage.getItem("timeblocks"));
// If the timeblocks do not exist, generate a new one with empty event descriptions
if (timeblocks === null) {
    timeblocks = [];
    for (let i = 0; i < hours.length; i++) {
        timeblocks.push("");
    }
}

// Append all the timeblocks
for (let i = 0; i < hours.length; i++) {
    $("#timeblocks").append(createTimeblock(hours[i], timeblocks[i], i));
}

displayTimeblocks(timeblocks);
setInterval(() => {
    displayTimeblocks(timeblocks);
}, 1000 * 60 * 5)
