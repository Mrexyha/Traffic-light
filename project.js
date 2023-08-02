document.getElementById('stop').onclick = illuminateRed;
document.getElementById('wait').onclick = illuminateYellow;
document.getElementById('go').onclick = illuminateGreen;


function illuminateRed() {
  clearLights();
  document.getElementById('red').style.backgroundColor = "red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('yellow').style.backgroundColor = "yellow";
}
function illuminateGreen() {
  clearLights();
  document.getElementById('green').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('red').style.backgroundColor = "#eee";
  document.getElementById('green').style.backgroundColor = "#eee";
  document.getElementById('yellow').style.backgroundColor = "#eee";
}
