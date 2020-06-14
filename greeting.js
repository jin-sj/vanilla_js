const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_KEY = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_KEY);
  if (currentUser === null) {
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
