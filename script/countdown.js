//start counting
const start = new Date("Jun 10, 2020 00:00:00").getTime();

//update every 1 second
const x = setInterval(function () {
  //get today
  let now = new Date().getTime();
  //distance between now and start
  let distance = start - now;

  //time calculation for days, hours, minutes and second
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // output the result in html
  document.getElementById("countdown").innerHTML =
    days + "d" + hours + "h" + minutes + "m" + seconds + "s";

  //if countdown over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "End";
  }
}, 1000);
