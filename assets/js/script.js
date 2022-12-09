// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

var currentDay = $('#currentDay')[0];
currentDay.textContent =  dayjs().format('dddd, MMMM DD YYYY');

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
  location: $("#hour-13")[0],
  btn: $("#save"),
  num: "13"

};

var fourteen = {
  location: $("#hour-14")[0],
  btn: $("#save"),
  num: "14"

};

var fifteen = {
  location: $("#hour-15")[0],
  btn: $("#save"),
  num: "15"

};
var timeEl = [nine, ten,eleven, twelve, thirteen, fourteen, fifteen];

var dateFormat = dayjs().format('DD/MM/YYYY ');
var now = dayjs().format('DD/MM/YYYY HH');

for (i = 0; i < timeEl.length; i++) {
  dateFormatNow = dateFormat + timeEl[i].num;
  if (dayjs(now).isBefore(dateFormat)) {
    timeEl[i].location.setAttribute('class', "row time-block future ");
  };
  if (!dayjs(now).isBefore(dateFormat)) {
    timeEl[i].location.setAttribute('class', "row time-block  past");
  }
  if (dayjs(now).isBefore(dateFormat)) {
    timeEl[i].location.setAttribute('class', "row time-block present ");
  };

  nine.btn.addEventlistener("click", function () { saveInput(nine.location, 0) })
  ten.btn.addEventlistener("click", function () { saveInput(ten.location, 1) })
  eleven.btn.addEventlistener("click", function () { saveInput(eleven.location, 2)})
  twelve.btn.addEventlistener("click", function () { saveInput(twelve.location, 3)})
  thirteen.btn.addEventlistener("click", function () { saveInput(thirteen.location, 4)})
  fourteen.btn.addEventlistener("click", function () { saveInput(fourteen.location, 5)})
  fifteen.btn.addEventlistener("click", function () { saveInput(fifteen.location, 6)})






}







