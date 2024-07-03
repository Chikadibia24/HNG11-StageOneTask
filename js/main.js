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

  // Calls upDateTime function once when the page is fully loaded and then every second thereafter.
  function setAndUpDateTime() {
    const time = new Date();
    const currentTime = time.toLocaleTimeString();
    document.getElementById("span-time").innerHTML = currentTime;
  }
  setInterval(setAndUpDateTime, 1000); // Calls upDateTime every second

  // Toggles the side menu on click of the open button
  function openSideMenu() {
    document.getElementById("sideMenu-container").style.width = `250px`;
  }
  document.getElementById("sideMenu-open-button").onclick = openSideMenu;

  // Toggles the side menu off on click of the close button
  function closeSideMenu() {
    document.getElementById("sideMenu-container").style.width = `0`;
  }
  document.getElementById("sideMenu-close-button").onclick = closeSideMenu;

  // Scrolls to the top of the page when the arrow is clicked in the footer
  function scrollToTop() {
    //  document.body.scrollTop = `1px`;
    document.documentElement.scrollTop = `1px`;
  }
  document.getElementById("footer-arrow-up").onclick = scrollToTop;
});
