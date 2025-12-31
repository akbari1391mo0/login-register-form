// ==============================
// Select elements from DOM
// ==============================
const panelBtn = document.querySelectorAll(".panel-btn"); // All panel toggle buttons
const container = document.querySelector(".container"); // Main container
const loginBtn = document.querySelector(".login-btn"); // Login panel button
const registerBtn = document.querySelector(".register-btn"); // Register panel button
const loginForm = document.querySelector(".login-form"); // Login form
const registerForm = document.querySelector(".register-form"); // Register form
const eyebuttons = document.querySelectorAll(".eye-btn"); // Eye toggle buttons for password visibility
const navigateLinks = document.querySelectorAll(".navigate-link"); // Links inside forms for switching
const alertTexts = document.querySelectorAll(".alert-text"); // All alert messages

// ==============================
// Login Elements
// ==============================
const loginEmailInput = document.getElementById("login-email-input"); // Login email input
const loginEmailAlert = document.getElementById("login-email-alert"); // Login email alert
const loginPasswordInput = document.getElementById("login-password-input"); // Login password input
const loginPasswordAlert = document.getElementById("login-password-alert"); // Login password alert

// ==============================
// Register Elements
// ==============================
const registerEmailInput = document.querySelector("#register-email-input"); // Register email input
const registerEmailAlert = document.querySelector("#register-email-alert"); // Register email alert
const registerConfirmPasswordInput = document.querySelector(
  "#register-confirm-password-input"
); // Confirm password input
const registerConfirmPasswordAlert = document.querySelector(
  "#register-confirm-password-alert"
); // Confirm password alert
const registerPasswordInput = document.querySelector(
  "#register-password-input"
); // Register password input
const registerPasswordAlert = document.querySelector(
  "#register-password-alert"
); // Register password alert
const formTitle = document.querySelector(".form-title"); // Form title text

// ==============================
// Toggle container active state when panel button clicked
// ==============================
panelBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    container.classList.toggle("active"); // Toggle active class on main container
  });
});

// ==============================
// Switch to Login form
// ==============================
loginBtn.addEventListener("click", () => {
  registerBtn.classList.remove("active"); // Remove active from register
  loginBtn.classList.add("active"); // Add active to login
  loginForm.classList.add("active"); // Show login form
  registerForm.classList.remove("active"); // Hide register form
  formTitle.textContent = "Sign In"; // Update form title
});

// ==============================
// Switch to Register form
// ==============================
registerBtn.addEventListener("click", () => {
  loginBtn.classList.remove("active"); // Remove active from login
  registerBtn.classList.add("active"); // Add active to register
  loginForm.classList.remove("active"); // Hide login form
  registerForm.classList.add("active"); // Show register form
  formTitle.textContent = "Sign Up"; // Update form title
});

// ==============================
// Toggle password visibility
// ==============================
eyebuttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const input = btn.previousElementSibling; // Get input before eye button
    if (input.type === "password") {
      input.type = "text"; // Show password
      e.target.firstElementChild.classList.replace("fa-lock", "fa-lock-open"); // Change icon
    } else {
      input.type = "password"; // Hide password
      e.target.firstElementChild.classList.replace("fa-lock-open", "fa-lock"); // Change icon back
    }
  });
});

// ==============================
// Navigate links inside forms
// ==============================
navigateLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    const dataLink = e.target.dataset.link; // Check which link was clicked
    if (dataLink === "register") {
      registerBtn.click(); // Switch to register form
    } else if (dataLink === "login") {
      loginBtn.click(); // Switch to login form
    }
  });
});

// ==============================
// Validate login form before submitting
// ==============================
loginForm.addEventListener("submit", (e) => {
  if (!validateLoginForm()) {
    e.preventDefault(); // Prevent submission if invalid
  }
});

// ==============================
// Login Email Validation on input
// ==============================
loginEmailInput.addEventListener("input", (e) => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!e.target.value.match(emailFormat)) {
    e.target.classList.add("wrong-input"); // Add red border for invalid
    loginEmailAlert.textContent = "Enter valid email baby!  😱"; // Show alert
  } else {
    e.target.classList.remove("wrong-input"); // Remove red border
    loginEmailAlert.textContent = ""; // Clear alert
  }
});

// ==============================
// Login Password Validation on input
// ==============================
loginPasswordInput.addEventListener("input", (e) => {
  if (e.target.value.length < 6) {
    e.target.classList.add("wrong-input"); // Add red border for short password
    loginPasswordAlert.textContent = "Enter more than 6 character! 😱"; // Show alert
  } else {
    e.target.classList.remove("wrong-input"); // Remove red border
    loginPasswordAlert.textContent = ""; // Clear alert
  }
});

// ==============================
// Login Form Validation Function
// ==============================
const validateLoginForm = () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!loginEmailInput.value.match(emailFormat)) {
    loginEmailInput.classList.add("wrong-input");
    loginEmailAlert.textContent = "Enter valid email baby!  😱";
    return false;
  }
  if (loginPasswordInput.value.length < 6) {
    loginPasswordInput.classList.add("wrong-input");
    loginPasswordAlert.textContent = "Enter more than 6 character! 😱";
    return false;
  }
  return true; // Form is valid
};

// ==============================
// Validate register form before submitting
// ==============================
registerForm.addEventListener("submit", (e) => {
  if (!validateRegisterForm()) {
    e.preventDefault(); // Prevent submission if invalid
  }
});

// ==============================
// Register Email Validation on input
// ==============================
registerEmailInput.addEventListener("input", () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.textContent = "Enter valid email baby!  😱";
  } else {
    registerEmailInput.classList.remove("wrong-input");
    registerEmailAlert.textContent = "";
  }
});

// ==============================
// Register Password Validation on input
// ==============================
registerPasswordInput.addEventListener("input", () => {
  if (registerPasswordInput.value.length < 6) {
    registerPasswordInput.classList.add("wrong-input");
    registerPasswordAlert.textContent = "Enter more than 6 character! 😱";
  } else {
    registerPasswordInput.classList.remove("wrong-input");
    registerPasswordAlert.textContent = "";
  }
});

// ==============================
// Register Confirm Password Validation on input
// ==============================
registerConfirmPasswordInput.addEventListener("input", () => {
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent =
      "Enter more than 6 character! 😱";
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent = "Passwords doesn't Match🎃🤦‍♂️";
  } else {
    registerConfirmPasswordInput.classList.remove("wrong-input");
    registerConfirmPasswordAlert.textContent = "";
  }
});

// ==============================
// Register Form Validation Function
// ==============================
const validateRegisterForm = () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Validate email
  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.textContent = "Enter valid email baby!  😱";
    return false;
  }

  // Validate password length
  if (registerPasswordInput.value.length < 6) {
    registerPasswordInput.classList.add("wrong-input");
    registerPasswordAlert.textContent = "Enter more than 6 character! 😱";
    return false;
  }

  // Validate confirm password length
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent =
      "Enter more than 6 character! 😱";
    return false;
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.textContent = "Passwords doesn't Match🎃🤦‍♂️";
    return false;
  }

  return true; // Form is valid
};
