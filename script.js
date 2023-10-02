const words = new URLSearchParams(window.location.search);
let userName = words.get("user");
document.getElementById("welcome").innerHTML = `Hello and welcome, ${userName}`





