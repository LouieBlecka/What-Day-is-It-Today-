var button = document.body.getElementById("dateButton");
button.addEventListener("click", () => {
    dayOfWeek();
});
function dayOfWeek(today) {
    var date = new Date(document.body.getElementById("dateBox").value);
    var weekday = date.getDay();
    var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];
    var answer = day[weekday];
    var create = document.createElement("p");
    var find = document.body.getElementById("todayIs");
    document.body.find.p.appendChild(answer);
    document.find.appendChild(create);
}
