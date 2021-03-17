let state = {
    target: null
}
document.querySelector("#rectangle").addEventListener("mousedown", event => {
    if (event.target && event.target.classList.contains("square") && event.target.getAttribute("value") == "on") {
        event.target.style.cursor = "none";
        state.target = event.target;
        state.offsetX = event.offsetX;
        state.offsetY = event.offsetY;
    }
});
document.querySelector("#rectangle").addEventListener("mouseup", () => {
    state.target = null;
});
document.querySelector("#rectangle").addEventListener("mousemove", e => {
    if (state.target) {
        state.target.style.left = (e.pageX - state.offsetX) + "px";
        state.target.style.top = (e.pageY - state.offsetY) + "px";
    }
});
document.querySelector("#rectangle").addEventListener("dblclick", event => {
    if (event.target && event.target.classList.contains("square")) {
        if (event.target.getAttribute("value") == "on")
            event.target.setAttribute("value", "off");
        else
            event.target.setAttribute("value", "on"); 
    }
}); 