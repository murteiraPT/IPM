
function goToTranslator() {
    window.location.href = "translator.html";
}

function goToMap() {
    window.location.href = "map.html";
}

function goToUber() {
    window.location.href = "cars.html";
}

function goToHeli() {
    window.location.href = "heli.html";
}

function goToTuk() {
    window.location.href = "tuk.html";
}

function goToHorse1() {
    window.location.href = "horse.html";
}

function goToMusic() {
    window.location.href = "music.html";
}

function goToMainMenu() {
    window.location.href = "teste.html";
}

function helpPopUp() {
  var popup = document.getElementById("helpPopUp");
  popup.classList.toggle("show");
}

function messagePopUp() {
  var popupM = document.getElementById("messagePopUp");
  popupM.classList.toggle("showM");
}


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML =  ((("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2)));
  document.getElementById("heartbeat").innerHTML = Math.floor((Math.random() * 15) + 65);
}
