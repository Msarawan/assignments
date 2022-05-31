
(function () {
    "use strict";
     var list = document.querySelectorAll(".timeline li");
  
    function elementDisplay(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callElement() {
      for (var i = 0; i < list.length; i++) {
        if (elementDisplay(list[i])) {
          list[i].classList.add("in-view");
        }
      }
    }
  
    window.addEventListener("load", callElement);
    window.addEventListener("resize", callElement);
    window.addEventListener("scroll", callElement);
  })();
  

  