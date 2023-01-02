const $img_con = document.querySelector(".img_con");
const $btn_list = document.querySelectorAll(".list_con>a");
const $img_list = document.querySelectorAll(".img_con>div");

let $body = document.documentElement;
let $cursor = document.querySelector(".cursor");
$body.addEventListener("mousemove", function (e) {
  let x = e.pageX - 10;
  let y = e.pageY - 10;
  $cursor.style.cssText = `left:${x}px; top:${y}px`;
});
const $elm = document.querySelectorAll(".over");
$elm.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    $cursor.classList.add("style1");
  });
  item.addEventListener("mouseleave", function () {
    $cursor.classList.remove("style1");
  });
});

$btn_list.forEach((list, id) => {
  list.addEventListener("mouseover", function () {
    $cursor.classList.add("style2");
    let name = list.getAttribute("class");
    if (name == "btn1") {
      $img_con.style.cssText = `transform: translate(0,0); `;
    } else if (name == "btn2") {
      $img_con.style.cssText = `transform: translate(-15%, 12%); `;
    } else if (name == "btn3") {
      $img_con.style.cssText = `transform: translate(-30%, 24%); `;
    } else if (name == "btn4") {
      $img_con.style.cssText = `transform: translate(-45%, 36%); `;
    } else if (name == "btn5") {
      $img_con.style.cssText = `transform: translate(15%, -12%); `;
    }
    $img_list.forEach((img) => {
      img.style.cssText = `opacity: 0.5; filter: blur(5px);`;
    });
    $img_list[id].style.cssText = `opacity: 1; filter: blur(0px); `;
  });

  list.addEventListener("mouseout", function () {
    $cursor.classList.remove("style2");
    $img_list.forEach((img) => {
      img.style.cssText = `opacity: 1; filter: blur(0);`;
    });
  });
});
