document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;

    $("#creat").click(() => {
        console.log("new element added");
        $("#list").append(`
            <li id='${counter}' class="new-item">
                <button class="done button">done</button>
                <input type="text" placeholder='what to do'>
            </li>
        `);
        counter++;
    });

    $("#delete").click(() => {
        console.log(`element no ${counter} was deleted`);
        $(`#${--counter}`).remove();
    });

    $("#clear").click(() => {
        console.log(`clear all elements`);
        $("li").remove();
        counter = 0;
    });

    // Event delegation for the "done" button
    $("#list").on("click", ".done", function() {
        let id = $(this).parent().attr("id");
        console.log(`element no ${id} was marked as done`);
        $(this).parent().addClass("removing").delay(500).queue(function(next) {
            $(this).remove();
            next();
        });
    });
    
    // Toggle dark mode
    $("#toggle-mode").click(() => {
        $("body").toggleClass("dark-mode");
    });
});
