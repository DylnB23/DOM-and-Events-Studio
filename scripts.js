// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");

takeOff.addEventListener("click", function (event) {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        shuttleHeight = "10,000"
    }
});
}
window.addEventListener("load", init);