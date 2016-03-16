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
    document.getElementsByClassName("associations")[0].lastElementChild.style.display = "block";
  } else {
    document.getElementsByClassName("associations")[0].lastElementChild.style.display = "none";
  }
  return false;
}

// When a Delete button is clicked, hide the row to which it belongs, but mark the hidden _destroy field in that row as truthy.
function deleteRow(number) {
  document.getElementsByClassName("association container")[number].style.display = "none";
  document.getElementsByName("course[grade_thresholds_attributes][" + number + "][_destroy]")[0].value = 1

  return false;
}

// Back on the course detail page, you'll notice that clicking on the various nav buttons in the blue box will cause the page to snap to that section.
// Implement smooth scrolling instead. You'll have to look it up on Google, and I expect that you'll copy and paste a solution into your code.
// It's okay if you don't understand it all; welcome to the vast world of JavaScript.


/**
    by Nemes Ioan Sorin - not an jQuery big fan
    therefore this script is for those who love the old clean coding style
    @id = the id of the element who need to bring  into view

    Note : this demo scrolls about 12.700 pixels from Link1 to Link3
*/
(function()
{
      window.setTimeout = window.setTimeout; //
})();

      var smoothScr = {
      iterr : 30, // set timeout miliseconds ..decreased with 1ms for each iteration
        tm : null, //timeout local variable
      stopShow: function()
      {
        clearTimeout(this.tm); // stopp the timeout
        this.iterr = 30; // reset milisec iterator to original value
      },
      getRealTop : function (el) // helper function instead of jQuery
      {
        var elm = el;
        var realTop = 0;
        do
        {
          realTop += elm.offsetTop;
          elm = elm.offsetParent;
        }
        while(elm);
        return realTop;
      },
      getPageScroll : function()  // helper function instead of jQuery
      {
        var pgYoff = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        return pgYoff;
      },
      anim : function (id) // the main func
      {
        this.stopShow(); // for click on another button or link
        var eOff, pOff, tOff, scrVal, pos, dir, step;

        eOff = document.getElementById(id).offsetTop; // element offsetTop

        tOff =  this.getRealTop(document.getElementById(id).parentNode); // terminus point

        pOff = this.getPageScroll(); // page offsetTop

        if (pOff === null || isNaN(pOff) || pOff === 'undefined') pOff = 0;

        scrVal = eOff - pOff; // actual scroll value;

        if (scrVal > tOff)
        {
          pos = (eOff - tOff - pOff);
          dir = 1;
        }
        if (scrVal < tOff)
        {
          pos = (pOff + tOff) - eOff;
          dir = -1;
        }
        if(scrVal !== tOff)
        {
          step = ~~((pos / 4) +1) * dir;

          if(this.iterr > 1) this.iterr -= 1;
          else this.itter = 0; // decrease the timeout timer value but not below 0
          window.scrollBy(0, step);
          this.tm = window.setTimeout(function()
          {
             smoothScr.anim(id);
          }, this.iterr);
        }
        if(scrVal === tOff)
        {
          this.stopShow(); // reset function values
          return;
        }
    }
 }
