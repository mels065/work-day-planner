const timeblocks = [
    { time: "9pm", text: "Go to work" },
    { time: "12pm", text: "Eat Krabby Patty" },
    { time: "3pm", text: "Set to Wumbo" }
];

function createTimeblock(time, text, index) {
    const timeblockEl = $(`
        <li class="timeblock list-group-item">
            <div class="timeblock-time">${time}</div>
        </li>
    `);
    const timeblockInput = $(`
        <input name="timeblock" class="timeblock-text" value="${text}" />
    `);
    const timeblockSaveBtn = $(`
        <button class="btn btn-primary">
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
