window.addEventListener("DOMContentLoaded", () => {
  //We use an array of the names of days of the week to return the name of our DAY
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  let day = days[date.getDay()];
  document.getElementById("span-day").innerHTML = day;

  function setAndUpDateTime() {
    const time = new Date();
    const currentTime = time.toLocaleTimeString();
    document.getElementById("span-time").innerHTML = currentTime;
  }
  setInterval(setAndUpDateTime, 1000); // Calls upDateTime every second
  

})
