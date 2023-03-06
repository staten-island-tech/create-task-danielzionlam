function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getImage() {
  var poo = "/img/" + randomNum(1, 21) + ".jpg";
  console.log(poo);
  var pee = document.getElementById("imageid");
  pee.src = poo;
}
