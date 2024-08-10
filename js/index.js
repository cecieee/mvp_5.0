function loadScoresGSheet() {
  let sheetUrl =
    "https://docs.google.com/spreadsheets/d/1IBrHZ5zt5EP9TILd-YTCbHVipz6A8dnXheZsF_VcmVc/edit#gid=0";
  $("#rank").sheetrock({
    url: sheetUrl,
    query: `SELECT A, B WHERE B >= 20 order by B desc limit 5`,
    labels: ["\u0000", ""],
    callback: () => {},
  });
}

$(document).ready(loadScoresGSheet);

let prizeTitle = document.getElementById("prizes-title");
let prize = document.getElementById("prizes");
const navbar_ = document.getElementById("my-nav");
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  let threshold = totalHeight * 0.2;
  let scrollPercentage = (value / totalHeight) * 100;

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
    if (window.location.pathname != "/tasks.html" && window.location.pathname != "/contact") {
      if (value < threshold) {
        navbar_.style.opacity = 0;
      } else {
        navbar_.style.opacity = 100;
      }
    }
  }

  if (progressBar) {
    progressBar.style.width = scrollPercentage + "%";
  }
});