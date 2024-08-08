function loadScoresGSheet() {
  let sheetUrl = "https://docs.google.com/spreadsheets/d/1IBrHZ5zt5EP9TILd-YTCbHVipz6A8dnXheZsF_VcmVc/edit#gid=0";
  $('#rank').sheetrock({
      url: sheetUrl,
      query: `SELECT A, B WHERE B >= 20 order by B desc limit 5`,
      labels: ["\u0000", ""],
      callback: () => {},
  });
};

$(document).ready(loadScoresGSheet);

let prizeTitle = document.getElementById("prizes-title");
let prize = document.getElementById("prizes");
const navbar_ = document.getElementById("my-nav");

window.addEventListener("scroll", function() {
  let value = window.scrollY;
  let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  let tenPercentHeight = totalHeight * 0.1;

  console.log(value);

  if (prizeTitle && value < 3153) {
      prizeTitle.style.fontSize = value * 0.008 + "vw";
  }

  if (navbar_) {
    if (value > 812) {
        navbar_.style.backgroundColor = "rgb(16, 16, 27)";
    } else {
        navbar_.style.backgroundColor = "transparent";
    }

    if (value > tenPercentHeight) {
        navbar_.style.opacity = 100;
    } else {
        navbar_.style.opacity = 0;
    }
  }
});