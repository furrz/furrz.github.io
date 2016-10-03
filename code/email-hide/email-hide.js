// email-hide.js
// Copyright (C) 2016 nova wolf - Licensed under the MIT license.
// See http://furrz.github.com/code/email-hide for more information.
(function(){
  var process = function (str) {
    return str.replace(" (@) ", "@").replace(" (.) ", ".")
  }
  var emails = document.querySelectorAll(".email-hide")
  for (var i = 0; i < emails.length; i++) {
    emails[i].innerHTML = process(emails[i].innerHTML)
  }
  var mailtos = document.querySelectorAll(".email-hide-mailto")
  for (var j = 0; j < mailtos.length; j++) {
    mailtos[j].href = process(decodeURIComponent(mailtos[j].href))
  }
})()
