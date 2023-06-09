const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  // replace email-login with user-login if needed
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log({ email, password });
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
