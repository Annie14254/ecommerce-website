console.log("Script is running");
function handleClick(event) {
  event.preventDefault();
  console.log("\n=\n=\nDELETE CART\n\n");
  var bookId = event.target.dataset.id;

  console.log("CART/INSERT ROUTE SENT");
  // Dummy route test
  // fetch("/user/cart/insert").then((res) =>
  //   console.log("CART/INSERT ROUTE RES:", res)
  // );

  // Perform fetch request to send bookId to the server
  fetch("/user/cart/clear", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // { body: {msg: "test"}
    body: JSON.stringify({ bookId }),
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Book added to cart successfully");
      } else {
        console.error("Error adding book to cart:", response.status);
      }
    })
    .catch(function (error) {
      console.error("Error sending cart request:", error);
    });
  document.location.reload();
}

// var bookId = document.querySelector('.bookId')
var addToCartButtons = document.querySelectorAll(".deletebtn");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
