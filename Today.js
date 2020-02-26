function dayOfWeek(today) {
    var date = new Date(today);
    var weekday = date.getDay();
    var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
    var button = document.body.getElementById("dateButton");
    var create = document.createElement("p");
    var find = document.body.getElementById("todayIs");
    find.appendChild(create);
    find.children.textContent = "day[weekday]";
}
button.addEventListener("click", () => {
    dayOfWeek(document.body.getElementById("dateBox").value);
})
