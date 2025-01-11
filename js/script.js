/ Add hover interaction for the header
const header = document.querySelector("header");

header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "#222";
});

header.addEventListener("mouseout", () => {
    header.style.backgroundColor = "#35424a";
});

// Add hover interaction for history section
const historySection = document.querySelector("#history");

historySection.addEventListener("mouseover", () => {
    historySection.style.backgroundColor = "#f9f9f9";
    historySection.style.transition = "background-color 0.3s ease";
});

historySection.addEventListener("mouseout", () => {
    historySection.style.backgroundColor = "transparent";
});