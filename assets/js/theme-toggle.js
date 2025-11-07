document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
        toggleButton.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    }

    toggleButton.addEventListener("click", function () {
        let theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️";
        }
    });
});
