// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left")
    const shuttle = document.getElementById("rocket");
    const position = 0;
    

takeOff.addEventListener("click", function (event) {
    if (window.confirm("Confirm that the shuttle is ready for takeoff.")){
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = "10,000";
    }
});
landing.addEventListener("click", function (event){
    if (window.confirm("The shuttle is landing. Landing gear engaged.")){
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    }
});
missionAbort.addEventListener("click", function (event){
    if (window.confirm("Confirm that you want to abort the mission.")){
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    }
});

up.addEventListener("click", function (event){
    shiftUp += 10;
    shuttle.style.position = "relative";
    shuttle.style.up = (shiftUp) + "px";
    e.preventDefault(); 

});
down.addEventListener("click", function (event){
    shiftDown += 10;
    shuttle.style.position = "relative",
    shuttle.style.down = (shiftDown) + "px";
    e.preventDefault();
});

}
window.addEventListener("load", init);