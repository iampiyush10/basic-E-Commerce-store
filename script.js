let userInput = document.querySelector("#searchbox");
let cards = document.querySelectorAll(".card");
let btn = document.querySelector(".btn");
let services = [
  "Laundry",
  "Dry Clean",
  "uphoistery",
  "Steam Ironing",
  "Home Cleaning",
  "Product Store",
];
console.log(cards);

// Searching for the service
btn.addEventListener("click", function () {
  const input = userInput.value;
  services.forEach((el, i) => {
    if (el.toLowerCase() == input.toLowerCase()) {
      console.log(true);
      console.log(i);
    } else {
      cards[i].style.display = "none";
    }
  });
});

// For Redirecting on the same page when user clicks on the card
cards.forEach((e) => {
  console.log(e);
  e.addEventListener("click", function () {
    location.reload();
  });
});
