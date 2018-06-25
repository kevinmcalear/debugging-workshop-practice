function handleSubmit(e) {
  e.preventDefault();
  inputString = e.target[0].value
  identicon = new Identicon(inputString);
  updateDOM(identicon)
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
