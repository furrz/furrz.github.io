var sources = [ document.querySelector("#c1"),
                document.querySelector("#c2"),
                document.querySelector("#c3") ];
var scramble = document.querySelector("#scramble");

var hexValue = function (hn) {
  var sp = [
    hn.substring(1, 3),
    hn.substring(3, 5),
    hn.substring(5, 8)
  ];
  var n = 0;
  sp.forEach(function (ns) {
    n += parseInt(ns, 16);
  });
  return Math.floor(n / sp.length);
};

var display = function (choice, source) {
  sources[source].style.backgroundColor = choice.hex;
  sources[source].querySelector(".colourname").innerHTML = choice.name;
  sources[source].querySelector(".colourhex").innerHTML = choice.hex;
  sources[source].style.color = hexValue(choice.hex) > 127 ? "#222" : "#fff";
};

var displayAll = function (choices) {
  var i = 0;
  choices.forEach(function (choice) {
    display(choice, sources[i++]);
  });
};

var randomize = function (source) {
  display(colours[Math.floor(Math.random() * colours.length)], source);
};

var randomizeAll = function () {
  for (var i = 0; i < sources.length; i++) {
    randomize(i);
  }
};

scramble.onclick = randomizeAll;
sources[0].onclick = function () { randomize(0); };
sources[1].onclick = function () { randomize(1); };
sources[2].onclick = function () { randomize(2); };

randomizeAll();
