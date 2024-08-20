/* text_iife.js */
// 텍스트 작성과 삭제 즉시 실행 함수
// (function () {
//   const spanEl = document.querySelector("main h2 span");
//   const txtArr = [
//     "CHOI IN WOO.",
//     "A Web Publisher.",
//     "A Front-End Developer.",
//     "A Web UI Designer.",
//     "A UX Designer.",
//     "A Back-End Developer.",
//   ];
//   let index = 0;
//   let currentTxt = txtArr[index].split("");
//   function writeTxt() {
//     spanEl.textContent += currentTxt.shift();
//     if (currentTxt.length !== 0) {
//       setTimeout(writeTxt, Math.floor(Math.random() * 100));
//     } else {
//       currentTxt = spanEl.textContent.split("");
//       setTimeout(deleteTxt, 3000);
//     }
//   }
//   function deleteTxt() {
//     currentTxt.pop();
//     spanEl.textContent = currentTxt.join("");
//     if (currentTxt.length !== 0) {
//       setTimeout(deleteTxt, Math.floor(Math.random() * 100));
//     } else {
//       index = (index + 1) % txtArr.length;
//       currentTxt = txtArr[index].split("");
//       writeTxt();
//     }
//   }
//   writeTxt();
// })();
/* end text_iife.js */

// Home 텍스트 타이핑 효과
const content = "Hello, I’m Choi In Woo!";
const text = document.querySelector("#main h1");
let textIdx = 0;

function typing() {
  let txt = content[textIdx++];

  text.innerHTML += txt;

  if (textIdx > content.length) {
    text.textContent = "";
    textIdx = 0;
  }
}

setInterval(typing, 200);

/* scroll_request.js */
/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener("scroll", function () {
  requestAnimationFrame(scrollCheck);
});
function scrollCheck() {
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if (browerScrollY > 547) {
    headerEl.classList.add("active");
  } else {
    headerEl.classList.remove("active");
  }
}
/* end scroll_request.js */

/* move.js */
/* 애니메이션 스크롤 이동 */
const animationMove = function (selector) {
  // ① selector 매개변로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // ② 현재 브라우저의 스크롤 정보(y 값)
  const browserScrollY = window.pageYOffset;
  // ③ 이동할 대상의 위치(y 값)
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // ④ 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: "smooth" });
};
// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) {
  scollMoveEl[i].addEventListener("click", function (e) {
    const target = this.dataset.target;
    animationMove(target);
  });
}
/* End move.js */

window.onload = function () {
  // bt = document.getElementById("i1");
  // bt.addEventListener("click", changeImage);

  // var cnt = 1;
  // function changeImage() {
  //   cnt++;
  //   if (cnt % 2 == 1) {
  //     document.getElementById("i1").src = "./images/health.jpg";
  //   } else {
  //     document.getElementById("i1").src = "./images/healthy1.png";
  //   }
  // }

  pic1 = document.querySelector("#i1");
  //이벤트를 주고 싶은대로 줄 수 있음("이벤트", 호출할 함수)
  pic1.addEventListener("mouseover", changePic1);
  pic1.addEventListener("mouseout", originPic1);

  pic2 = document.querySelector("#i2");
  pic2.addEventListener("mouseover", changePic2);
  pic2.addEventListener("mouseout", originPic2);

  pic3 = document.querySelector("#i3");
  pic3.addEventListener("mouseover", changePic3);
  pic3.addEventListener("mouseout", originPic3);

  pic4 = document.querySelector("#i4");
  pic4.addEventListener("mouseover", changePic4);
  pic4.addEventListener("mouseout", originPic4);
};

function changePic1() {
  this.src = "images/healthy1.png";
}

function originPic1() {
  this.src = "images/healthy2.png";
}

function changePic2() {
  this.src = "images/intelligent1.png";
}

function originPic2() {
  this.src = "images/intelligent2.png";
}

function changePic3() {
  this.src = "images/warm1.png";
}

function originPic3() {
  this.src = "images/warm2.png";
}

function changePic4() {
  this.src = "images/willing1.png";
}

function originPic4() {
  this.src = "images/willing2.png";
}

document.addEventListener("DOMContentLoaded", function () {
  const imoImage1 = document.getElementById("i1");
  const pImage1 = document.getElementById("p1");
  const text1 = document.getElementById("t1");
  const text2 = document.getElementById("t2");
  const container1 = document.getElementById("do-inner1");

  imoImage1.addEventListener("click", function () {
    imoImage1.style.display = "none";
    text1.style.display = "none";
    text2.style.display = "none";
    pImage1.style.display = "block";
    container1.style.justifyContent = "center";
    container1.style.alignItems = "center";
  });

  pImage1.addEventListener("click", function () {
    imoImage1.style.display = "block";
    text1.style.display = "block";
    text2.style.display = "block";
    pImage1.style.display = "none";
    container1.style.justifyContent = "center";
    container1.style.alignItems = "center";
  });

  const imoImage2 = document.getElementById("i2");
  const pImage2 = document.getElementById("p2");
  const text3 = document.getElementById("t3");
  const text4 = document.getElementById("t4");
  const container2 = document.getElementById("do-inner2");

  imoImage2.addEventListener("click", function () {
    imoImage2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
    pImage2.style.display = "block";
    container2.style.justifyContent = "center";
    container2.style.alignItems = "center";
  });

  pImage2.addEventListener("click", function () {
    imoImage2.style.display = "block";
    text3.style.display = "block";
    text4.style.display = "block";
    pImage2.style.display = "none";
    container2.style.justifyContent = "center";
    container2.style.alignItems = "center";
  });

  const imoImage3 = document.getElementById("i3");
  const pImage3 = document.getElementById("p3");
  const text5 = document.getElementById("t5");
  const text6 = document.getElementById("t6");
  const container3 = document.getElementById("do-inner3");

  imoImage3.addEventListener("click", function () {
    imoImage3.style.display = "none";
    text5.style.display = "none";
    text6.style.display = "none";
    pImage3.style.display = "block";
    container3.style.justifyContent = "center";
    container3.style.alignItems = "center";
  });

  pImage3.addEventListener("click", function () {
    imoImage3.style.display = "block";
    text5.style.display = "block";
    text6.style.display = "block";
    pImage3.style.display = "none";
    container3.style.justifyContent = "center";
    container3.style.alignItems = "center";
  });

  const imoImage4 = document.getElementById("i4");
  const pImage4 = document.getElementById("p4");
  const text7 = document.getElementById("t7");
  const text8 = document.getElementById("t8");
  const container4 = document.getElementById("do-inner4");

  imoImage4.addEventListener("click", function () {
    imoImage4.style.display = "none";
    text7.style.display = "none";
    text8.style.display = "none";
    pImage4.style.display = "block";
    container4.style.justifyContent = "center";
    container4.style.alignItems = "center";
  });

  pImage4.addEventListener("click", function () {
    imoImage4.style.display = "block";
    text7.style.display = "block";
    text8.style.display = "block";
    pImage4.style.display = "none";
    container4.style.justifyContent = "center";
    container4.style.alignItems = "center";
  });
});
