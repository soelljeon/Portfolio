$(document).ready(function () {
  $(".tab-a").mouseover(function () {
    $(".f_dec").removeClass("tab-active");
    $(".f_dec[data-id='" + $(this).attr("data-id") + "']").addClass(
      "tab-active"
    );
    $(".tab-a").removeClass("active-a");
    $(this).parent().find(".tab-a").addClass("active-a");
  });
});
//
// let $body = document.documentElement;
// let $cursor = document.querySelector(".cursor");
// $body.addEventListener("mousemove", function (e) {
//   let x = e.pageX - 10;
//   let y = e.pageY - 10;
//   $cursor.style.cssText = `left:${x}px; top:${y}px`;
// });
// const $elm = document.querySelectorAll(".over");
// $elm.forEach(function (item) {
//   item.addEventListener("mouseover", function () {
//     $cursor.classList.add("style1");
//   });
//   item.addEventListener("mouseleave", function () {
//     $cursor.classList.remove("style1");
//   });
// });
