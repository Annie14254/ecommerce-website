const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-signup").value;
  const emailEl = document.querySelector("#email-signup").value;
  const passwordEl = document.querySelector("#password-signup").value;

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: usernameEl,
      email: emailEl,
      password: passwordEl,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(usernameEl, emailEl, passwordEl);

  if (response.ok) {
    document.location.replace("/");
    console.log("success");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
