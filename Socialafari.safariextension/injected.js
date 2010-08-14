safari.self.addEventListener("message", function (event) {
  if (event.name == "eval" && event.message[0] == window.location.href) {
    eval(event.message[1]);
  }
}, false);
