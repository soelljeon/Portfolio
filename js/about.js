$(document).ready(function () {
  $(window).scroll(function () {
    $("img_list>img").each(function (i) {
      const bottom_of_element =
        $(this).offset().top + $(this).outerHeight() / 3;
      const bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: "1" }, 700);
      }
    });
  });
});
