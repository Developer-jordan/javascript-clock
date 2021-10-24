function refreshTime() {
  let date = new Date(); //date object
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let datNight = "";

  //am and dayNight

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h -= 12;
    dayNight = "PM";
  } else {
    dayNight = "AM";
  }
  // add zero place holder infront off single digits
  if (h < 10) {
    h = "0" + h;
  } else {
    h = h;
  }

  if (m < 10) {
    m = "0" + m;
  } else {
    m = m;
  }
  if (s < 10) {
    s = "0" + s;
  } else {
    s = s;
  }

  let time = `${h}:${m}:${s} ${dayNight} `;

  document.getElementById("clock-nums").innerHTML = time;

  setTimeout(refreshTime, 1000);
}

refreshTime();
