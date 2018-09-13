function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var p;
  if (h == 0) {
    h = 12;
    p = " A.M.";
  } else if (h < 11 && h > 0) {
    h = h;
    p = " A.M.";
  } else if (h >= 11) {
    if (h == 12) {
      h = 12;
    }
    else {
    h = h - 12;
    }
    p = " P.M.";
  }
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s + p;
  var t = setTimeout(time, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i;}
  return i;
}

time();

function magic() {
  var d = new Date();
  if ((d.getHours()) > 0) {
    document.getElementById('changing_text').innerHTML = "blas";
  }
}

magic();
