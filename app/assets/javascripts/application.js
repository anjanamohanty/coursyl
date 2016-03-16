// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


// When the user clicks on the save button, disable the button so that it cannot be accidentally double-clicked.
function debounce() {
  $(event.target).prop("disabled", true);
  $(event.target).closest("form").submit();
}

function bindSubmitButton() {
  $("input[type=submit]").on("click", debounce);
}

$(bindSubmitButton);

// Hide the last empty row of the grading scale section when the page loads.
// When the "Add Grade Threshold" button is clicked, show the last row. You do not need to make it show an additional row if the user clicks again.
function displayRow(boolean) {
  if (boolean) {
    $(".associations").children().last().css("display", "block")
  } else {
    $(".associations").children().last().css("display", "none")
  }

  return false;
}


function bindAddGradeButton() {
  $(".new-association").on("click", function() {
    displayRow(true);
  });
}

$(bindAddGradeButton);

function hideRow() {
  displayRow(false);
}

$(hideRow);

// When a Delete button is clicked, hide the row to which it belongs, but mark the hidden _destroy field in that row as truthy.
function deleteRow() {
  $(event.target).closest(".association").css("display", "none");
  $(event.target).siblings("input[type=checkbox]").prop("checked", true);

  return false;
}

function bindDeleteButton() {
  $(".delete-association").on("click", deleteRow);
}

$(bindDeleteButton);

// Back on the course detail page, you'll notice that clicking on the various nav buttons in the blue box will cause the page to snap to that section.
// Implement smooth scrolling instead. You'll have to look it up on Google, and I expect that you'll copy and paste a solution into your code.
// It's okay if you don't understand it all; welcome to the vast world of JavaScript.


function launchModal() {
  $(event.target).parent().siblings(".modal").modal('show');
}

function bindUpdateDateButton() {
  $(".change-date").on("click", launchModal);
}

$(bindUpdateDateButton);
