document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");
    const fileLabel = document.querySelector(".file-label");

    fileInput.addEventListener("change", function() {
        if (fileInput.files.length > 0) {
            fileLabel.textContent = fileInput.files[0].name;
        } else {
            fileLabel.textContent = "Choose file";
        }
    });
});
