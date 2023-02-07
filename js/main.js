function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.opacity === "1") {
      x.style.opacity = "0";
      x.style.zIndex = "-1";
      x.style.scale = "95%"
    } else {
      x.style.opacity = "1";
      x.style.zIndex = "100";
      x.style.scale = "100%"
    }
  }
  document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
};


// When the user scrolls down 20px from the top of the document, show the button
// Kéo 20px từ trên đầu xuống => hiển thị nút back to top
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
  } else {
    document.getElementById("movetop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
// Khi click vào nut back to top => lên đầu trang
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
