const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const modeText = document.getElementById("modeText");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Dark Mode";
    } else {
        modeText.innerText = "Light Mode";
    }
});

