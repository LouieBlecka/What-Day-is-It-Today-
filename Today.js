var button = document.body.getElementById("dateButton");
button.addEventListener("click", () => {
    dayOfWeek();
});
function dayOfWeek(today) {
    today = document.body.getElementById("dateBox").value;
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
    var answer = day[weekday];
    var find = document.body.getElementById("todayIs");
    document.find.appendChild(answer);
}
