function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var p;
  if (h < 12) {
    p = "A.M.";
  } else {
    h = h - 12;
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
