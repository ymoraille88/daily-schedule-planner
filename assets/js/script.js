// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var currentDay = $("currentDay");
currentDay.textContent =  dayjs('2022-12-8').format(YYYY/MM/DD);

var nine = {
  location: $("#hour-9")[0],
  btn: $("#save"),
  num: "9"

};

var ten = {
  location: $("#hour-10")[0],
  btn: $("#save"),
  num: "10"

};

var eleven = {
  location: $("#hour-11")[0],
  btn: $("#save"),
  num: "11"

};

var twelve = {
  location: $("#hour-12")[0],
  btn: $("#save"),
  num: "12"

};

var thirteen = {
  location: $("#hour-1")[0],
  btn: $("#save"),
  num: "1"

};

var fourteen = {
  location: $("#hour-2")[0],
  btn: $("#save"),
  num: "2"

};

var fifteen = {
  location: $("#hour-3")[0],
  btn: $("#save"),
  num: "3"

};
var timeEl = [nine, ten,eleven, twelve, one, two, three];

var dateFormat = dayjs('2022-12-8').format(YYYY/MM/DD);
var now = dayjs('2022-12-8').format(YYYY/MM/DD);

for (i = 0; i < timeEl.length; i++) {
  dateFormatNow = dateFormat + timeEl[i].num;
  if (dayjs(now).isBefore(dateFormat)) {
    timeEl[i].location.setAttribute('class', "row time-block past");
  };
  if (!dayjs(now).isBefore(dateFormat)) {
    timeEl[i].location.setAttribute('class', "row time-block present");
  }
  if (dayjs(now).isBefore(dateFormat)) {
    timezEl[i].location.setAttribute('class', "row time-block future");
  };
console.log(dateFormat)
  nine.btn.addEventlistener("click", function () { saveInput(nine.location, 0) })
  ten.btn.addEventlistener("click", function () { saveInput(ten.location, 1) })
  eleven.btn.addEventlistener("click", function () { saveInput(nine.location, 2) })
  twelve.btn.addEventlistener("click", function () { saveInput(nine.location, 3) })
  one.btn.addEventlistener("click", function () { saveInput(nine.location, 4) })
  two.btn.addEventlistener("click", function () { saveInput(nine.location, 5) })
  three.btn.addEventlistener("click", function () { saveInput(nine.location, 6) })






}








// the code isn'.cht run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

