function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getImage() {
  var url = "/img/" + randomNum(1, 21) + ".jpg";
  console.log(url);
  var img = document.getElementById("imageid");
  img.src = url;
}
