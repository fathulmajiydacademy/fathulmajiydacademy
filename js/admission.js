document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const agreement = document.getElementById("agreement");
    if (!agreement.checked) {
      alert("Please agree to the rules and regulations before submitting.");
      return;
    }

    alert("Registration submitted successfully!");
    this.reset();
  });
