function updateDarkmode() {
    let darkmode = localStorage.getItem("darkmode") === "true";
    let root = document.querySelector(":root"); 
    if (darkmode) {
        root.style.setProperty("--text", "#000000");
        root.style.setProperty("--background", "#FFFFFF");
    }
    else {
        root.style.setProperty("--text", "#FFFFFF");
        root.style.setProperty("--background", "#000000");
    }
}

function toggleDarkmode(checkbox) {
    if (checkbox.checked) {
        localStorage.setItem("darkmode", "true");
    }
    else {
        localStorage.setItem("darkmode", "false");
    }
    updateDarkmode();
}

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("darkmode");
    checkbox.checked = localStorage.getItem("darkmode") === "true";

    updateDarkmode();
});