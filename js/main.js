function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.opacity === "1") {
      x.style.opacity = "0";
      x.style.zIndex = "-1";
    } else {
      x.style.opacity = "1";
      x.style.zIndex = "2";
    }
  }