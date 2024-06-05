document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("[data-search]");
    const userCards = document.querySelectorAll("[data-user-template]");
    const counter = document.getElementById("COUNT");
    const compleated = document.getElementById("compleated");
    const ongoing = document.getElementById("ongoing");

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
        let count = 0;
        userCards.forEach(user => {
            const name = user.querySelector(".name").textContent.toLowerCase();
            const chapters = user.querySelector(".chapters_read").textContent;
            const isVisible = name.includes(value) || parseInt(chapters) >= parseInt(value);
            if (isVisible) {
                count += 1;
            }
            user.classList.toggle("hide", !isVisible);
        });
        counter.textContent = count;
    });

    compleated.addEventListener("change", () => {
        const isChecked = compleated.checked;
        let count = 0;
        console.log("HI")
        userCards.forEach(user => {
            const isCompleated = user.classList.contains("completed-true");
            if (isChecked && isCompleated) {
                user.classList.remove("hide");
                count += 1
            } else if (!isChecked && isCompleated) {
                user.classList.add("hide");
            }
        });
        counter.textContent = count;
    });

    ongoing.addEventListener("change", () => {
        const isChecked = ongoing.checked;
        let count = 0;
        userCards.forEach(user => {
            const isOngoing = user.classList.contains("completed-false");
            if (isChecked && isOngoing) {
                user.classList.remove("hide");
                count += 1
            } else if (!isChecked && isOngoing) {
                user.classList.add("hide");
            }
        });
        counter.textContent = count;
    });
});
