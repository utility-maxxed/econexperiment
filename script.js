document.getElementById("experimentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const decision = document.getElementById("decision").value;
  alert("Thanks! You chose: " + decision);
  // Optional: send to Google Sheets
});
