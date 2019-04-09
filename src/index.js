'use strict';

var info = document.createElement("p");
info.innerHTML = "gucci gang";

const content = document.getElementById("content");
content != null ? content.appendChild(info) : false;

// var $document = $(document);

// $document.ready(function(){
//     alert("welcome to my website b*tch.")
// });

var waypoint = new Waypoint({
    element: document.getElementById('point'),
    handler: function(direction) {
        if (direction == 'down'){
            alert("waypoint works")
        }
    }
  })