function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.opacity === "1") {
      x.style.opacity = "0";
      x.style.zIndex = "-1";
      x.style.scale = "95%"
    } else {
      x.style.opacity = "1";
      x.style.zIndex = "2";
      x.style.scale = "100%"
    }
  }
  document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
};