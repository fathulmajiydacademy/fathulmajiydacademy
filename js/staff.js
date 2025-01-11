// Add hover interaction for staff cards
const staffCards = document.querySelectorAll(".staff-card");

staffCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.backgroundColor = "#f4f4f9";
  });

  card.addEventListener("mouseout", () => {
    card.style.backgroundColor = "#ffffff";
  });
});

console.log("Staff page loaded successfully.");
