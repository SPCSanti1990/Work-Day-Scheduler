// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // Handle saving text in the textarea to local storage

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })
   // Load saved text from local storage
   $("#hour9 .description").val(localStorage.getItem("nineAM"));
   $("#hour10 .description").val(localStorage.getItem("tenAM"));
   $("#hour11 .description").val(localStorage.getItem("elevenAM"));
   $("#hour12 .description").val(localStorage.getItem("twelvePM"));
   $("#hour13 .description").val(localStorage.getItem("onePM"));
   $("#hour14 .description").val(localStorage.getItem("twoPM"));
   $("#hour15 .description").val(localStorage.getItem("threePM"));
   $("#hour16 .description").val(localStorage.getItem("fourPM"));
   $("#hour17 .description").val(localStorage.getItem("fivePM"));
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // If current time is > time block change row color to past color in css file
  // If current time is = time block change row color to present color in css file
  // If current time is < time block change row color to future color in css file
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Handle saving text in the textarea to local storage
 

  // Load saved text from local storage

  //
  // Function to keep current time and date updated on screen
    function clock() {
      let todayTime = dayjs().format('MMM, D YYYY, h:mm:ss');
      $('#currentDay').text(todayTime);
    }
    setInterval(function(){clock();},1000);
});
