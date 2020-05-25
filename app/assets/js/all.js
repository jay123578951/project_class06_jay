$(document).ready(() => {
  console.log('Hello Bootstrap4');
});

// 輪播
$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      768: {
          slidesPerView: 2,
      },
      1280: {
          slidesPerView: 3,
      }
    }
  })
});

// 漢堡
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// 收合
$(document).ready(function () {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});

// header 白底
$(document).ready(function() {
  $(window).scroll(function() {
  var scrollVal = $(this).scrollTop();
    if (scrollVal >= 61) {
      $("header").addClass("header-scroll");
    }else {
      $("header").removeClass("header-scroll");
    }
  });
});