'use strict';

var info = document.createElement("p");
info.innerHTML = "gucci gang";

const content = document.getElementById("content");
content != null ? content.appendChild(info) : false;

var count = 0;
var waypoint = new Waypoint({
    element: document.getElementById('point'),
    handler: function(direction) {
        if (direction == 'down' && count % 3 == 0){
            alert("waypoint works");
        }
        count += 1;
    }
  });