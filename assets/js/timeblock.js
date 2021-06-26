function createTimeblock(time, text, index) {
    const timeblockEl = $(`
        <div class="row time-block">
            <div class="col-1 hour">${time.display}</div>
        </div>
    `);
    const timeblockInput = $(`
        <textarea name="time-block" class="col-9 description">${text}</textarea>
    `);
    const currentHour = moment().hour();
    console.log(time.value);
    if (time.value < currentHour) timeblockInput.addClass("past");
    else if (time.value === currentHour) timeblockInput.addClass("present");
    else timeblockInput.addClass("future");

    const timeblockSaveBtn = $(`
        <button class="col-1 saveBtn">
            <i class="fas fa-save"></i>
        </button>
    `);
    timeblockSaveBtn.click(function () {
        timeblocks[index] = timeblockInput.val();
        localStorage.setItem("timeblocks", JSON.stringify(timeblocks));
    });

    timeblockEl.append(timeblockInput);
    timeblockEl.append(timeblockSaveBtn);

    return timeblockEl;
}
