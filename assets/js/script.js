// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Handle saving text in the textarea to local storage

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })
   // Load saved text from local storage
   $("#hour9 .description").val(localStorage.getItem("hour9"));
   $("#hour10 .description").val(localStorage.getItem("hour10"));
   $("#hour11 .description").val(localStorage.getItem("hour11"));
   $("#hour12 .description").val(localStorage.getItem("hour12"));
   $("#hour13 .description").val(localStorage.getItem("hour13"));
   $("#hour14 .description").val(localStorage.getItem("hour14"));
   $("#hour15 .description").val(localStorage.getItem("hour15"));
   $("#hour16 .description").val(localStorage.getItem("hour16"));
   $("#hour17 .description").val(localStorage.getItem("hour17"));

  function timeTracker() {
    //let currentTime = 12; Test variable to change time slot change color without waiting for a hour to pass 
    let currentTime = dayjs().format('MMM, D YYYY, h:mm:ss a');

    $(".time-block").each(function () {
      let timeBlock = parseInt($(this).attr("id").split("hour")[1]);
// If current time is > time block change row color to past color in css file
      if (currentTime > timeBlock) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
 // If current time is = time block change row color to present color in css file
      else if ( currentTime === timeBlock) {
        $(this).addClass("present")
        $(this).removeClass("past")
        $(this).removeClass("future")
      }
// If current time is < time block change row color to future color in css file
      else {
        $(this).addClass("future")
        $(this).removeClass("past")
        $(this).removeClass("present");
      }
    })
    // Call clock funtion to keep time updated
    clock();
  }

  // Function to keep current time and date updated on screen
    function clock() {
      let todayTime = dayjs().format('MMM, D YYYY, h:mm:ss a');
      $('#currentDay').text(todayTime);
    }
    // Set an interval of 1 second to recall timeTracker function every second
    setInterval(function(){timeTracker();},1000);
});
