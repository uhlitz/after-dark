// toggle visibility of code blocks in R Markdown output
function toggle_code() {
  var x = document.getElementsByClassName('r');
  if (x.length == 0) return;
  function toggle_vis(o) {
    var d = o.style.display;
    o.style.display = (d == 'block' || d == '') ? 'none':'block';
  }

  for (i = 0; i < x.length; i++) {
    var y = x[i];
    if (y.tagName.toLowerCase() === 'pre') toggle_vis(y);
  }
}

toggle_code();

var x = document.getElementsByClassName('r');
if (x.length != 0) document.getElementsByTagName("P")[1].insertAdjacentHTML('beforebegin', '<button type="button" onclick="toggle_code();" class="btn btn-default btn-ghost hide-code">show/hide code</button>');
