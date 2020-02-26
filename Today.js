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
    var button = document.html.body.getElementById("dateButton");
    var create = document.createElement("p");
    var find = document.html.body.getElementById("todayIs");
    find.appendChild(create);
    find.p.textContent = day[weekday];
}
button.addEventListener("click", () => {
    dayOfWeek(document.html.body.getElementById("dateBox").value);
})
