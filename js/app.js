const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  focus = document.getElementById("focus"),
  name = document.getElementById("name");

//show time fn
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();

  //set am or pm
  const ampm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;
  //output tym
  time.innerHTML = `${hour}<span>:</span>${addZeros(
    minute
  )}<span>:</span>${addZeros(second)}`;

  setTimeout(showTime, 1000);
}
//Add Zeros
function addZeros(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//setBackground
function setBackgrdAndGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('../image/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //afternoon
    document.body.style.backgroundImage = "url('../image/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //evening
    document.body.style.backgroundImage = "url('../image/night.jpg')";
    greeting.textContent = "Good Eveing";
    document.body.style.color = "white";
  }
}

//run
showTime();
setBackgrdAndGreet();
