function incrementBreak() {
    let breakLength = document.getElementById("break-length");
    if (parseFloat(breakLength.innerText) < 60) {
    breakLength.innerText = parseFloat(breakLength.innerText) + 1
}
}


function decrementBreak() {
    let breakLength = document.getElementById("break-length");
    if (parseFloat(breakLength.innerText) > 0) {
                breakLength.innerText = parseFloat(breakLength.innerText) - 1
}
}

function incrementSession() {
    let sessionLength = document.getElementById("session-length");
    if (parseFloat(sessionLength.innerText) < 60) {
    let incrementedSessionValue = parseFloat(sessionLength.innerText) + 1;
    sessionLength.innerText = incrementedSessionValue;
    document.getElementById("minutes").innerText = incrementedSessionValue;

}
}

function decrementSession() {
    let sessionLength = document.getElementById("session-length");
    if (parseFloat(sessionLength.innerText) > 1) {
    let decrementedSessionValue = parseFloat(sessionLength.innerText) - 1;
    sessionLength.innerText = decrementedSessionValue;
    document.getElementById("minutes").innerText = decrementedSessionValue;

}
}

function toggleOnOff() {
    console.log("toggle on off clicked")
}

function resetClock() {
    console.log("clock should reset to default")
}