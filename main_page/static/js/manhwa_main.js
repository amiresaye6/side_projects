document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("[data-search]");
    const userCards = document.querySelectorAll("[data-user-template]");
    const counter = document.getElementById("COUNT");
    const completed = document.getElementById("completed");
    const ongoing = document.getElementById("ongoing");

    const newAddBtn = document.getElementById("new_add");
    const newName = document.getElementById("new_name");
    const newCount = document.getElementById("new_count");
    const newCond = document.getElementById("new_cond");

    function updateFilters() {
        const isCompletedChecked = completed.checked;
        const isOngoingChecked = ongoing.checked;
        let count = 0;

        userCards.forEach(user => {
            const isCompleted = user.classList.contains("completed-true");
            const isOngoing = user.classList.contains("completed-false");
            let isVisible = false;

            if ((isCompletedChecked && isCompleted) || (isOngoingChecked && isOngoing)) {
                isVisible = true;
            }
            if (!isCompletedChecked && !isOngoingChecked) {
                isVisible = true;
            }

            if (isVisible) {
                user.classList.remove("hide");
                count += 1;
            } else {
                user.classList.add("hide");
            }
        });
        counter.textContent = count;
    }

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

    completed.addEventListener("change", updateFilters);
    ongoing.addEventListener("change", updateFilters);

    newAddBtn.addEventListener("click", () => {
        const name = newName.value.trim();
        const count = newCount.value.trim();
        const condition = newCond.value.trim().toLowerCase();

        if (name && count && (condition === "ongoing" || condition === "complete")) {
            const newEntry = {
                name: name,
                chapters_read: parseInt(count),
                completed: condition === "complete"
            };

            fetch("/add_entry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEntry)
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    location.reload();
                } else {
                    console.error("Error adding entry:", data.message);
                }
            })
            .catch(error => console.error("Error:", error));
        } else {
            alert("Please fill in all fields correctly.");
        }
    });

    userCards.forEach(card => {
        const deleteBtn = card.querySelector(".delete");
        const modifyBtn = card.querySelector(".modify");

        deleteBtn.addEventListener("click", () => {
            const name = card.querySelector(".name").textContent.trim();

            fetch("/delete_entry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    location.reload();
                } else {
                    console.error("Error deleting entry:", data.message);
                }
            })
            .catch(error => console.error("Error:", error));
        });

        modifyBtn.addEventListener("click", () => {
            const name = card.querySelector(".name").textContent.trim();
            const newChaptersRead = prompt("Enter new chapters read:");
            const newCondition = prompt("Enter new condition (ongoing/complete):").toLowerCase();

            if (newChaptersRead && (newCondition === "ongoing" || newCondition === "complete")) {
                const modifiedEntry = {
                    name: name,
                    chapters_read: parseInt(newChaptersRead),
                    completed: newCondition === "complete"
                };

                fetch("/modify_entry", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(modifiedEntry)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === "success") {
                        location.reload();
                    } else {
                        console.error("Error modifying entry:", data.message);
                    }
                })
                .catch(error => console.error("Error:", error));
            } else {
                alert("Please provide valid inputs.");
            }
        });
    });
});
