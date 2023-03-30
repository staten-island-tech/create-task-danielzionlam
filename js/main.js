let history = [];

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getImage() {
  const randomNumber = randomNum(1, 21);
  var poo = "/img/" + randomNumber + ".jpg";
  console.log(poo);
  var pee = document.getElementById("imageid");
  pee.src = poo;
  history.push(randomNumber);
  console.log(history);
  document.getElementById("history").innerText += ` ${randomNumber}`;
}
