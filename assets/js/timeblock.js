// Function for creating an individual timeblock
function createTimeblock(time, text, index) {
    // Define timeblock
    const timeblockEl = $(`
        <div class="row time-block">
            <div class="col-1 hour">${time.display}</div>
        </div>
    `);
    // Create textarea for entering event description
    const timeblockInput = $(`
        <textarea name="time-block" class="col-9 description">${text}</textarea>
    `);

    // Get the current hour
    const currentHour = moment().hour();
    // If the hour in the timeblock is less than the current hour, add the class `past`
    if (time.value < currentHour) timeblockInput.addClass("past");
    // Else if the hour in the timeblock is equal, add the class `present`
    else if (time.value === currentHour) timeblockInput.addClass("present");
    // Otherwise, add the class `future`
    else timeblockInput.addClass("future");

    // Create the save button
    const timeblockSaveBtn = $(`
        <button class="col-1 saveBtn">
            <i class="fas fa-save"></i>
        </button>
    `);
    // Add a click event listener that will save this timeblock to
    // the local storage
    timeblockSaveBtn.click(function () {
        timeblocks[index] = timeblockInput.val();
        localStorage.setItem("timeblocks", JSON.stringify(timeblocks));
    });

    // Append the child elements to the timeblock
    timeblockEl.append(timeblockInput);
    timeblockEl.append(timeblockSaveBtn);

    return timeblockEl;
}
