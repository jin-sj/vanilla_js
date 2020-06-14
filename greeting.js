const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_KEY = "currentUser",
  SHOWING_CN = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  paintGreeting(currentValue);
}

function saveName(text) {
  localStorage.setItem(USER_KEY, text);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_KEY);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
