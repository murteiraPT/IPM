
function hideTalk() {
  var x = document.getElementById("BDPT");
  var y = document.getElementById("BDEN");
  var z = document.getElementById("BDFR");
  var w = document.getElementById("BDES");

  var a = document.getElementById("CEPT");
  var b = document.getElementById("CEEN");
  var c = document.getElementById("CEFR");
  var d = document.getElementById("CEES");



  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  w.style.display = "none";
  d.style.display = "none";


  hideTalk1();
}

function hideTalk1() {
  var x = document.getElementById("talkingPT");
  var y = document.getElementById("talkingEN");
  var z = document.getElementById("talkingFR");
  var w = document.getElementById("talkingES");

  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "none";
  w.style.display = "none";

}
function talkingTest() {
  var ddl = document.getElementById("l1");
  var l1 = ddl.options[ddl.selectedIndex].value;
  if(l1 == "portuguese"){
    portuguese();}
  else if(l1 == "english"){
    english();}
  else if(l1 == "french"){
    french();}
  else if(l1 == "spanish"){
    spanish();
  }
}
function switchIMG(){
    document.getElementById("voicebutton").src = "icons/waves1.gif";
}

function switchGif(){
  document.getElementById("voicebutton").src = "icons/voicebutton.png";

}

function portuguese() {
  var x = document.getElementById("talkingPT");
  x.style.display = "block";
}

function english() {
  var x = document.getElementById("talkingEN");
  x.style.display = "block";
}

function french() {
  var x = document.getElementById("talkingFR");
  x.style.display = "block";
}
function spanish() {
  var x = document.getElementById("talkingES");
  x.style.display = "block";
}

function BDportuguese() {
  var x = document.getElementById("BDPT");
  x.style.display = "block";
}

function BDenglish() {
  var x = document.getElementById("BDEN");
  x.style.display = "block";
}

function BDfrench() {
  var x = document.getElementById("BDFR");
  x.style.display = "block";
}

function BDspanish() {
  var x = document.getElementById("BDES");
  x.style.display = "block";
}

function CEportuguese() {
  var x = document.getElementById("CEPT");
  x.style.display = "block";
}

function CEenglish() {
  var x = document.getElementById("CEEN");
  x.style.display = "block";
}

function CEfrench() {
  var x = document.getElementById("CEFR");
  x.style.display = "block";
}

function CEspanish() {
  var x = document.getElementById("CEES");
  x.style.display = "block";
}

function translateBD() {
  var ddl2 = document.getElementById("l2");
  var l2 = ddl2.options[ddl2.selectedIndex].value;
  if(l2 == "portuguese"){
    BDportuguese();}
  else if(l2 == "english"){
    BDenglish();}
  else if(l2 == "french"){
    BDfrench();}
  else if(l2 == "spanish"){
    BDspanish();}

}
function translateCE() {
  var ddl2 = document.getElementById("l2");
  var l2 = ddl2.options[ddl2.selectedIndex].value;
  if(l2 == "portuguese"){
    CEportuguese();}
  else if(l2 == "english"){
    CEenglish();}
  else if(l2 == "french"){
    CEfrench();}
  else if(l2 == "spanish"){
    CEspanish();}
}
