function showAndHidePas() {
  let showPas = document.getElementById("validationCustomPas");
  if (showPas.getAttribute("type") == "password") {
    showPas.setAttribute("type", "text");
  } else {
    showPas.setAttribute("type", "password");
  }
}
