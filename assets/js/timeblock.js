const timeblocks = [
    { time: "9pm", text: "Go to work" },
    { time: "12pm", text: "Eat Krabby Patty" },
    { time: "3pm", text: "Set to Wumbo" }
];

function createTimeblock(time, text, index) {
    const timeblockEl = $(`
        <div class="row time-block">
            <div class="col-1 hour">${time}</div>
        </div>
    `);
    const timeblockInput = $(`
        <textarea name="time-block" class="col-9 description">${text}</textarea>
    `);
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

timeblocks.forEach(({ time, text }, index) => {
    $("#timeblocks").append(
        createTimeblock(time, text, index)
    );
})
