const filterButtons = document.querySelectorAll(".filter button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
const active = document.querySelector(".active");
// Define the filterCards function
const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

// Iterate over each filterable cards
filterableCards.forEach(card => {
    // Hide the card initially
    card.classList.add("hide");
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
        card.classList.remove("hide")
    } 
 });
 }

// Add click event listener to each filter buttons
filterButtons.forEach(button => button.addEventListener("click", filterCards));